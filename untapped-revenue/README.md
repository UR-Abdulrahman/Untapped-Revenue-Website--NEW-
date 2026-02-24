# Untapped Revenue — Website

Production marketing website for Untapped Revenue. Built with Next.js 16 (App Router), TypeScript, Tailwind CSS 4, Framer Motion, and react-three-fiber.

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
npm start
```

---

## Project Structure

```
src/
  app/                  # Next.js App Router pages
  components/
    layout/             # Header, Footer
    modals/             # BookingModal, FormModal (open as overlays)
    sections/           # Home page sections
    ui/                 # Design system primitives (Button, Card, etc.)
    blog/               # Blog-specific components
  config/
    site.ts             # ALL copy, CTAs, URLs, data — edit here
  lib/
    mdx.ts              # Blog post parsing
    utils.ts            # Helpers
content/
  blog/                 # MDX blog posts (add posts here weekly)
public/
  brand/
    logo.png            # Company logo
```

---

## Adding a Blog Post (Weekly Workflow)

### Step 1: Copy the template

```bash
cp content/blog/_template.mdx content/blog/your-post-slug.mdx
```

Use lowercase, hyphenated slugs. Examples:
- `how-to-increase-gym-retention.mdx`
- `5-reasons-your-yoga-ads-arent-converting.mdx`

### Step 2: Fill in the frontmatter

Open your new file and update:

```yaml
---
title: "Your Post Title"
date: "2026-02-21"
excerpt: "1–2 sentence description for blog list and search results."
author: "Untapped Revenue"
category: "gym-growth"
coverImage: "/images/blog/your-image.jpg"  # optional
---
```

**Categories:** `gym-growth` | `marketing` | `operations` | `retention` | `sales` | `industry`

### Step 3: Write your content (MDX)

Write your post below the frontmatter. Standard Markdown works. Use `## Heading`, `**bold**`, `- bullets`, `[links](url)`.

### Step 4: Preview locally

```bash
npm run dev
```

Visit `http://localhost:3000/blog/your-post-slug`

### Step 5: Deploy

Push to your hosting provider (Vercel recommended). The post goes live automatically.

---

## Modals

All CTAs across the site open one of two modals:

- **Book a Call** (`openBooking()`) — Opens `BookingModal` with the GoHighLevel booking iframe
- **Apply / Get Started** (`openForm()`) — Opens `FormModal` with the Jotform embed

These are controlled globally via `useModal()` from `src/components/modals/ModalContext.tsx`.

To use in any component:

```tsx
'use client'
import { useModal } from '@/components/modals/ModalContext'

export default function MyComponent() {
  const { openBooking, openForm } = useModal()
  return <button onClick={openBooking}>Book a Call</button>
}
```

---

## Updating Content

All copy, CTAs, pricing text, stats, and case studies live in one file:

**`src/config/site.ts`**

Edit this file to update:
- Navigation links
- CTA button text
- Hero stats
- Case study data
- Service tier features
- FAQs
- Booking/Jotform URLs

---

## Updating the Booking or Form URLs

In `src/config/site.ts`:

```ts
export const BOOKING_URL = 'https://link.untapped-revenue.com/widget/booking/...'
export const JOTFORM_SCRIPT_SRC = 'https://form.jotform.com/jsform/...'
```

---

## Environment Variables

No environment variables are required for the base site. If you add a CMS, analytics, or email service later, create a `.env.local` file (never commit this file).

---

## Deployment (Vercel)

1. Push the repo to GitHub
2. Import the project at [vercel.com](https://vercel.com)
3. Set the root directory to `untapped-revenue/` if deploying from the parent folder
4. Deploy — Vercel auto-detects Next.js

**Domain:** Point your custom domain at Vercel and update `SITE_URL` in `src/config/site.ts`.

---

## Design Tokens

Brand colors:

| Token | Value | Use |
|-------|-------|-----|
| Navy | `#1E3A5F` | Primary, headings, backgrounds |
| Ember | `#E8371B` | CTAs, accents, highlights |
| Dark Navy | `#142740` | Footer, final CTA section |

To restyle, update these two values in `src/app/globals.css`.

---

## TODOs After Launch

- [ ] Add real team bios in `src/app/about/page.tsx`
- [ ] Add video testimonial embed URLs in `src/app/results/page.tsx`
- [ ] Add demo video in `src/app/how-it-works/page.tsx`
- [ ] Replace Privacy Policy and Terms placeholders with legal copy
- [ ] Add OG image at `public/og-image.png` (1200×630px)
- [ ] Set up Google Analytics (add script to layout.tsx)
