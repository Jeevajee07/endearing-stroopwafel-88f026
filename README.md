# Lakshmi Bharathi and Co

A public-facing business website for **Lakshmi Bharathi and Co**, a restaurant and catering company based in Chennai, Tamil Nadu.

## What This Site Is

A single-page informational website — no login, no payment, fully open to all visitors. It presents the company's:

- **About** section with the brand story and key stats
- **Restaurant** section with an interactive menu, dine-in location, and contact details
- **Catering** section with service categories, office location, and booking contact
- **Social Media** links (WhatsApp, Instagram, X)
- **Contact** form and full address details
- **Footer** with all contact information

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [TanStack Start](https://tanstack.com/start) |
| Router | TanStack Router v1 (file-based) |
| Frontend | React 19 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + custom CSS |
| Language | TypeScript 5.7 (strict) |
| Deployment | Netlify |

## Running Locally

```bash
# Install dependencies
npm install

# Start development server (with Netlify local emulation)
netlify dev

# Or start Vite dev server directly
npm run dev
```

The local server runs at `http://localhost:8888` (Netlify CLI) or `http://localhost:3000` (Vite direct).

## Building for Production

```bash
npm run build
```

Output is placed in `dist/client/` and served from Netlify's CDN.

## Customising Content

All restaurant/catering data is defined inline in `src/routes/index.tsx`:

- `menuSections` — accordion menu with categories and prices
- `cateringServices` — the 6 catering service cards
- Phone numbers, addresses, and emails are inline in JSX — search for `+91 98400` to find and replace them

Fonts are loaded from Google Fonts (Playfair Display, Lato, Dancing Script) in `src/styles.css`.
