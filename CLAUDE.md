# Untapped Revenue — New Website Build (Claude Code Instructions)

You are building a brand-new, production-quality marketing website for **Untapped Revenue**.

## Primary Goal (Non-Negotiable)
This website exists mainly to **land new clients and leads**.
Every page should drive toward one of these actions:
1) **Book a call** (booking modal)
2) **Fill out the application/form** (Jotform modal)

Secondary goals:
- Build trust (proof, results, testimonials)
- Explain services clearly
- Enable future content growth (simple blog)

---            

## Skills to Use (IMPORTANT)
Use these Claude Code skills throughout the build:
- **/frontend-design** → premium UI, layout, spacing, typography, motion, interactive polish
- **/seo** → metadata, Open Graph, sitemap/robots, schema basics, internal linking patterns, Core Web Vitals awareness

Optional (only if available in my setup; if not, follow the checklist mindset):
- **/a11y** (accessibility) → keyboard, focus states, ARIA, contrast
- **/perf** (performance) → reduce JS weight, avoid heavy 3D, optimize images

Rule:
- Before finalizing each major page, run a quick **/seo** pass and a quick **accessibility check**.

---

## Visual QA (Screenshots + Reference Matching) — REQUIRED
When building/rebuilding layouts or styles:
1) **Always use localhost** for preview and screenshots (never `file:///`).
2) If a reference screenshot/design is provided:
   - Match **layout, spacing, typography, and color** as closely as possible.
   - Do not add new sections/features unless instructed.
3) **Screenshot → compare → fix → screenshot again**:
   - Do at least **2 comparison rounds**.
   - Be specific in comparisons (e.g., “heading looks ~32px but should be ~24px”, “gap should be 24px not 16px”).
4) Check these every round:
   - spacing/padding, font size/weight/line-height, alignment, color hex, border-radius, shadows, image sizing, hover/focus states.

---

## Local Server + Puppeteer Screenshot Workflow
- Always run the site on **http://localhost:3002** before screenshots.
- If this repo uses Next.js:
  - Start dev server: `npm run dev` (or `pnpm dev`)
- If the repo contains `serve.mjs` (static preview tool), use it as instructed in that repo.

### Screenshot tool (Puppeteer)
Preferred workflow:
- Use `screenshot.mjs` in the project root (create it if missing).
- Command:
  - `node screenshot.mjs http://localhost:3002`
  - Optional label: `node screenshot.mjs http://localhost:3002 hero`
- Save screenshots into: `./temporary screenshots/`
  - Use auto-incrementing filenames like `screenshot-1.png`, `screenshot-2.png` (never overwrite).

If Puppeteer is not installed in the repo:
- Install dev dependency: `npm i -D puppeteer`
- Then run the screenshot script as above.

---

## Primary References (Scrape + Match Content / Sections)
- Current site (source of truth for sections, offers, testimonials, CTAs): https://www.untapped-revenue.com/
- Old site (secondary reference): https://app.untapped-revenue.com/v2/preview/GwO1hCmu63E6lTWNSLgM
- About page content reference: https://app.untapped-revenue.com/v2/preview/C8esDvMG5e5eeHOBULEH

---

## Content Sources (Local Files Attached)
- Services context doc: **UR_Scope Of Work (1).md**
- Additional info doc: **untapped_revenue_website_brief.docx (1).md**

IMPORTANT:
- If any referenced source is inaccessible, do NOT stall.
  - Use the current website scrape as baseline.
  - Create clean placeholder copy blocks and mark them with `// TODO: paste final copy here`.

---

## Brand Assets (Local)
- Before designing, check for a brand assets folder:
  - `public/brand/` or `brand_assets/` (if it exists)
- If a logo exists, use it (don’t use placeholders).
- If a color palette exists, use those exact values.

---

## Core Conversion Features (Non-Negotiotiable)

### 1) “Book” CTA opens INSIDE the site (Modal overlay)
- Booking widget URL: https://link.untapped-revenue.com/widget/booking/wTGfHV6q8ftOpa60t0Mg
- “Book” buttons on any page should open a modal overlay (NO new tab).
- UX: centered modal, close button, dimmed background, body scroll locked.

Implementation requirements:
- Accessible modal: focus trap, ESC close, backdrop click close, proper ARIA.
- Embed booking widget via `<iframe>` in the modal.
- Responsive: mobile should feel like full-screen modal.
- Add loading skeleton while iframe loads.

### 2) Global “Form” CTA opens Jotform INSIDE the site (Modal overlay)
- Jotform embed script:
  `<script type="text/javascript" src="https://form.jotform.com/jsform/252446531988064"></script>`
- Any “Get Started / Apply / Claim Session / Contact” CTA opens the Jotform in a modal overlay.
- Must not navigate away.

Implementation requirements:
- Use `next/script` to load the script safely when the modal opens.
- Avoid loading the Jotform script site-wide unless necessary (performance).

---

## Blog (KEEP IT SIMPLE FOR NOW)
We will keep blog functionality simple for launch.

Requirements:
- Working blog index: `/blog`
- Working blog post route: `/blog/[slug]`
- Posts stored as Markdown or MDX with frontmatter under: `/content/blog`
- Basic SEO metadata per post (title + description from frontmatter)

Nice-to-have (optional for now):
- tags, reading time, author, feature images

Also:
- Provide a single template file: `/content/blog/_template.mdx`
- Add a short README section explaining: “how to add a new post (copy template → rename slug → edit frontmatter → write → commit)”

---

## “Use AI to Find Best Website Format”
You must propose and implement an information architecture (IA) that fits:
- Gym owner audience
- Conversion-first flow to booking + form
- Based on scraping current site sections and common best practices

Deliver:
- Suggested sitemap + navigation
- Implement pages accordingly

Preferred starting IA (keep it lean):
- Home
- Services
- Results / Case Studies
- About
- Blog
- Book (page can trigger modal + backup embed)
- Privacy, Terms

---

## Visual / Brand Direction
- Scrape current site and infer brand guidelines: colors, typography, button style, spacing, tone.
- Recreate the brand feel but elevate it: more premium, modern spacing, better typography, smoother motion.

3D/Interactive requirement:
- Tasteful interactivity only (parallax, hover depth, subtle 3D hero).
- Avoid heavy/gimmicky 3D that hurts performance or distracts from conversion.
- Prioritize clarity + speed.

Recommended approach:
- Tailwind + Framer Motion for UI motion.
- Optional: `@react-three/fiber` + `@react-three/drei` only if lightweight and justified.
- Maintain strong Lighthouse performance.

---

## Tech Stack (Default)
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- Simple MDX/Markdown blog system
- Shared primitives + centralized design tokens for easy restyling later

---

## Project Structure Requirements
Create:
- `src/app` routes (app router)
- `src/components` (UI + sections)
- `src/components/modals` (BookingModal, FormModal)
- `src/config` (site config: nav, CTAs, links)
- `content/blog` (posts)
- `src/lib` (helpers: mdx parsing, SEO, utils)

Rules:
- All CTAs and important URLs must be in `src/config/site.ts` (single source of truth).
- Keep styling consistent (small design system: buttons, cards, containers, sections).

---

## Accessibility + Quality Bar
- Semantic HTML, keyboard navigation, visible focus states
- No CLS layout shifting
- Fully responsive
- Image optimization via `next/image`
- SEO: metadata, Open Graph, sitemap, robots (use /seo skill)

---

## Implementation Plan (Do in Order)
1) Initialize baseline layout:
   - Header/nav + footer + global container + theme styles
2) Build modal system:
   - Modal primitive + BookingModal + FormModal
   - Wire all CTAs to modals
3) Build Home page:
   - Hero (bold promise + CTA)
   - Social proof/testimonials
   - Services overview
   - Results teaser
   - FAQs
   - Final CTA
4) Build Services page:
   - Detailed service blocks from docs/current site
5) Build Results/Case Studies page:
   - Cards + metrics + testimonials
6) Build About page:
   - Use About reference + docs; fallback placeholders if blocked
7) Blog:
   - `/blog` + `/blog/[slug]` + frontmatter parsing + template post
8) Polish:
   - Motion + subtle interactivity
   - Performance + accessibility pass
   - /seo pass on all pages
9) Deployment readiness:
   - env placeholders + metadata + sitemap + robots

---

## Inputs Provided Locally
- Company logo will be added by user to the repo.
- Use the logo in header, footer, and favicon (generate if possible).

---

## Deliverables
- Fully working website with blog + modals
- Clean, consistent codebase; easy to restyle later
- README: run instructions + how to add weekly blog posts
