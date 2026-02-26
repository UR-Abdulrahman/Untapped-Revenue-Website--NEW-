/**
 * Slack Interactivity Webhook — Next.js App Router POST handler
 *
 * Receives button-click payloads from Slack (Block Kit interactive messages)
 * and dispatches them to the ur-blog-automation Trigger.dev tasks.
 *
 * Set this URL in your Slack app:
 *   Slack app dashboard → Interactivity & Shortcuts → Request URL
 *   → https://<your-domain>/api/slack/interactions
 *
 * Required env vars (add to .env.local):
 *   SLACK_SIGNING_SECRET   — Slack app Basic Information → Signing Secret
 *   TRIGGER_SECRET_KEY     — Trigger.dev dashboard → API Keys
 *   SLACK_BOT_TOKEN        — for sending "max regenerations" DMs
 *   ALEC_SLACK_USER_ID     — Alec's Slack member ID
 */

import crypto from "node:crypto";
import { tasks } from "@trigger.dev/sdk/v3";

// ─── Types ────────────────────────────────────────────────────────────────────

interface SlackButtonAction {
  action_id: string;
  value: string;
  type: string;
}

interface SlackInteractionPayload {
  type: string;
  actions?: SlackButtonAction[];
  user?: { id: string; name: string };
}

/** Compact value stored in Slack button — mirrors CompactButtonValue in generateDraft.ts */
interface CompactDraftValue {
  t: string;    // idea title
  a: string;    // idea angle
  wi: string;   // whyItMatters
  rc: number;   // regenCount
  sl: string;   // slug
  mfid: string; // MDX Slack file ID
  mfurl: string;// MDX url_private_download
  ifid: string; // image Slack file ID
  ifurl: string;// image url_private_download
}

interface PickTopicValue {
  id: string;
  title: string;
  angle: string;
  whyItMatters: string;
  sources: string[];
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function requireEnv(key: string): string {
  const val = process.env[key];
  if (!val) throw new Error(`Missing required env var: ${key}`);
  return val;
}

/**
 * Verify that the request came from Slack using HMAC-SHA256.
 * https://api.slack.com/authentication/verifying-requests-from-slack
 */
function verifySlackSignature(
  rawBody: string,
  timestamp: string,
  signature: string,
  signingSecret: string,
): boolean {
  // Reject requests older than 5 minutes (replay protection)
  const now = Math.floor(Date.now() / 1000);
  if (Math.abs(now - parseInt(timestamp, 10)) > 300) {
    console.warn("[slack/interactions] Request timestamp too old — possible replay attack");
    return false;
  }

  const sigBase = `v0:${timestamp}:${rawBody}`;
  const hmac = crypto
    .createHmac("sha256", signingSecret)
    .update(sigBase)
    .digest("hex");
  const expected = `v0=${hmac}`;

  // Timing-safe comparison to prevent timing attacks
  try {
    return crypto.timingSafeEqual(
      Buffer.from(expected, "utf8"),
      Buffer.from(signature, "utf8"),
    );
  } catch {
    // Buffer lengths differ if signature is malformed
    return false;
  }
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(request: Request): Promise<Response> {
  // ── 1. Read raw body BEFORE any parsing (required for signature verification)
  const rawBody = await request.text();

  // ── 2. Verify Slack signature
  const timestamp = request.headers.get("x-slack-request-timestamp") ?? "";
  const signature = request.headers.get("x-slack-signature") ?? "";

  let signingSecret: string;
  try {
    signingSecret = requireEnv("SLACK_SIGNING_SECRET");
  } catch {
    console.error("[slack/interactions] SLACK_SIGNING_SECRET not set");
    return new Response("Server configuration error", { status: 500 });
  }

  if (!verifySlackSignature(rawBody, timestamp, signature, signingSecret)) {
    console.warn("[slack/interactions] Signature verification failed — rejecting request");
    return new Response("Unauthorized", { status: 403 });
  }

  // ── 3. Parse x-www-form-urlencoded body → extract payload JSON
  let payload: SlackInteractionPayload;
  try {
    const params = new URLSearchParams(rawBody);
    const payloadStr = params.get("payload");
    if (!payloadStr) {
      return new Response("Bad Request: missing payload field", { status: 400 });
    }
    payload = JSON.parse(payloadStr) as SlackInteractionPayload;
  } catch {
    console.error("[slack/interactions] Failed to parse Slack payload");
    return new Response("Bad Request: invalid payload JSON", { status: 400 });
  }

  // ── 4. Dispatch to Trigger.dev tasks
  //    tasks.trigger() is a fast API enqueue call — it does NOT run the task inline.
  //    We await it so we can log errors, but the actual task runs on Trigger.dev infra.
  try {
    await dispatchAction(payload);
  } catch (err) {
    // Log but still return 200 to Slack to prevent Slack from retrying the delivery
    console.error("[slack/interactions] Failed to dispatch action:", err);
  }

  // ── 5. Respond to Slack (must be < 3 seconds)
  return new Response("", { status: 200 });
}

// ─── Action dispatcher ────────────────────────────────────────────────────────

const MAX_REGEN = 5;

async function dispatchAction(payload: SlackInteractionPayload): Promise<void> {
  const action = payload.actions?.[0];
  if (!action) {
    console.warn("[slack/interactions] No actions found in payload");
    return;
  }

  const { action_id, value } = action;
  console.log(`[slack/interactions] Dispatching action: ${action_id}`);

  switch (action_id) {
    // ── User picked a topic from the weekly DM ──────────────────────────
    case "pick_topic": {
      const idea = JSON.parse(value) as PickTopicValue;
      await tasks.trigger("generate-draft", { idea, regenCount: 0 });
      console.log(`[slack/interactions] Triggered generate-draft: "${idea.title}"`);
      break;
    }

    // ── User clicked Regenerate ─────────────────────────────────────────
    case "regen_draft": {
      const v = JSON.parse(value) as CompactDraftValue;
      const newRegenCount = v.rc + 1;

      if (newRegenCount >= MAX_REGEN) {
        await sendMaxRegenDM(v.t);
        return;
      }

      await tasks.trigger("generate-draft", {
        idea: {
          id: `regen-${newRegenCount}`,
          title: v.t,
          angle: v.a,
          whyItMatters: v.wi,
          sources: [],
        },
        regenCount: newRegenCount,
      });
      console.log(
        `[slack/interactions] Triggered regeneration ${newRegenCount}/${MAX_REGEN}: "${v.t}"`,
      );
      break;
    }

    // ── User clicked Publish ────────────────────────────────────────────
    case "publish_draft": {
      const v = JSON.parse(value) as CompactDraftValue;
      await tasks.trigger("publish-post", {
        slug: v.sl,
        mdxFileId: v.mfid,
        mdxFileUrl: v.mfurl,
        imageFileId: v.ifid,
        imageFileUrl: v.ifurl,
        regenCount: v.rc,
      });
      console.log(`[slack/interactions] Triggered publish-post: slug="${v.sl}"`);
      break;
    }

    // ── URL buttons (view_published_post) open in browser, no POST needed
    case "view_published_post": {
      break;
    }

    default: {
      console.warn(`[slack/interactions] Unknown action_id: "${action_id}" — ignoring`);
    }
  }
}

/**
 * DM Alec when the maximum regeneration cap is reached.
 * Uses the Slack Web API directly (no SDK dependency in the website repo).
 */
async function sendMaxRegenDM(topicTitle: string): Promise<void> {
  let botToken: string;
  let alecUserId: string;

  try {
    botToken = requireEnv("SLACK_BOT_TOKEN");
    alecUserId = requireEnv("ALEC_SLACK_USER_ID");
  } catch (err) {
    console.error("[slack/interactions] Cannot send max-regen DM — env vars missing:", err);
    return;
  }

  const openRes = await fetch("https://slack.com/api/conversations.open", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${botToken}`,
    },
    body: JSON.stringify({ users: alecUserId }),
  });

  const openData = (await openRes.json()) as {
    ok: boolean;
    channel?: { id: string };
    error?: string;
  };

  if (!openData.ok || !openData.channel?.id) {
    console.error(`[slack/interactions] Failed to open DM for max-regen notice: ${openData.error}`);
    return;
  }

  const msgRes = await fetch("https://slack.com/api/chat.postMessage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${botToken}`,
    },
    body: JSON.stringify({
      channel: openData.channel.id,
      text: `⛔ *Maximum regenerations (${MAX_REGEN}) reached* for:\n> "${topicTitle}"\n\nPlease publish the current draft, or wait for next week's topic ideas.`,
    }),
  });

  const msgData = (await msgRes.json()) as { ok: boolean; error?: string };
  if (!msgData.ok) {
    console.error(`[slack/interactions] Failed to send max-regen DM: ${msgData.error}`);
  } else {
    console.log("[slack/interactions] Max-regen DM sent to Alec");
  }
}
