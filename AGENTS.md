# AGENTS.md — Lakshmi Bharathi and Co Website

This document describes the project architecture, conventions, and key decisions for AI agents working in future sessions.

## Project Overview

A static-style, single-page informational website for **Lakshmi Bharathi and Co**, a restaurant and catering company based in Chennai, Tamil Nadu. The site is entirely public — no auth, no payments. All content is hard-coded in source files.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + custom CSS |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
src/
  routes/
    __root.tsx        # HTML shell, head metadata (title, viewport, font preconnects)
    index.tsx         # The entire single-page site (all sections in one component)
    products/         # Legacy template routes — NOT actively used, safe to delete
  styles.css          # All CSS: Tailwind import + CSS custom properties + keyframes
public/               # Static assets (favicon, logo images)
netlify.toml          # Build config: vite build → dist/client, dev port 8888
```

## Key Architectural Decisions

### Single Route, All Sections
All content (Hero, About, Restaurant, Catering, Social, Contact, Footer) lives in `src/routes/index.tsx` as one large component. The site is a single scrollable page — in-page navigation uses `href="#section-id"` anchor links.

### All Styles in styles.css
Custom CSS variables, animation keyframes, and utility classes are in `src/styles.css`. Tailwind is imported there. Do NOT use Tailwind utility classes for animation or CSS-variable-dependent values — use CSS custom classes (e.g. `.hero-section`, `.card-warm`, `.catering-card`).

### No External Data / Backend
There is no API, database, or server function. Menu data (`menuSections`) and catering service data (`cateringServices`) are plain TypeScript arrays at the top of `index.tsx`.

### Inline SVG Icons
All icons are hand-written SVG function components at the top of `index.tsx`. No icon library is used.

## Design System

| CSS Variable | Value | Usage |
|---|---|---|
| `--crimson` | `#8B1A1A` | Primary brand, card top borders |
| `--crimson-dark` | `#5C1010` | Hero bg, footer bg, dark panels |
| `--gold` | `#C9901A` | Subtitles, ornaments |
| `--gold-light` | `#E8B84B` | Nav links, footer accent text |
| `--gold-pale` | `#F5E6C0` | Badges, map placeholder bg |
| `--cream` | `#FAF6EE` | Alternating section backgrounds |
| `--ivory` | `#FDF9F2` | Body background |

Fonts: `Playfair Display` (headings/display), `Lato` (body), `Dancing Script` (logo script).

## Sections on the Page

| Section id | Content |
|---|---|
| `#about` | Brand story, stats, promise panel |
| `#restaurant` | Interactive accordion menu + location + contact |
| `#catering` | 6 service cards + catering office location + contact |
| Social media | WhatsApp, Instagram, X links (no section id) |
| `#contact` | 3 contact blocks + enquiry form |
| Footer | Logo, nav links, both addresses, social icons |

## Updating Content

| What to change | Where |
|---|---|
| Restaurant menu | `menuSections` array in `index.tsx` |
| Catering service cards | `cateringServices` array in `index.tsx` |
| Phone/email/address | Inline JSX — search `+91 98400` or `@lbco.in` |
| Social media URLs | `href` on the 3 social icon anchor tags |
| Page title / SEO | `head()` in `__root.tsx` |
| Brand colors | CSS variables in `styles.css` `:root` block |
| Fonts | `@import url(...)` at top of `styles.css` |

## Conventions

- No emojis in UI — decorative symbols use Unicode geometric shapes (♦ ◈ ✦)
- Inline styles for one-off layout values; CSS classes for reusable patterns
- Mobile nav is a full-screen overlay toggled via `useState(mobileMenuOpen)`
- The `OrnamentDivider` and `MenuSection` are local sub-components inside `index.tsx`

## What NOT to Do

- Do not add auth or payment flows — the site is intentionally free and open
- Do not split into multiple routes — the single-page scroll design is intentional
- Do not replace animation/CSS-variable styles with Tailwind utilities
