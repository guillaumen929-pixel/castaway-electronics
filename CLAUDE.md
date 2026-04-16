# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Commands

```bash
npm run dev        # Start dev server (defaults to :5173, auto-increments if occupied)
npm run build      # Production build → dist/
npm run preview    # Serve the dist/ build locally
```

No test suite or linter is configured.

**Deployment:** Cloudflare Workers + Static Assets via `wrangler.jsonc`. Pushes to `main` auto-deploy via GitHub integration. Manual deploy: `npx wrangler deploy`.

---

## Project Identity

**Cast Away Cleanouts — Electronics & Recycling** — a South Florida e-waste recycling and certified data destruction company (sister brand to Cast Away Cleanouts Estate & Property Cleanouts). This site covers electronics services only — never add estate/junk/furniture/property cleanout content.

**Business constants — never change these:**
- Phone: `954-366-1180`
- Email: `support@castawayelectronics.com`
- Address: `226 Basin Dr, Lauderdale by the Sea, FL 33308`
- Domain: `castawayelectronicsfl.com`
- In business since: `2014`

---

## Architecture

**Stack:** React 18 + Vite 5 · React Router v6 · Framer Motion · Lucide React · Tailwind CSS 3 · Cloudflare Workers (static assets)

`App.jsx` is the root — it wraps everything in `<BrowserRouter>` and renders `<ScrollToTop>` + `<Navbar>` + `<Footer>` on every route, with `<Routes>` in between. The five routes are `/`, `/about`, `/services`, `/contact`, `/quote`.

**Shared components** (used on multiple pages):
- `ScrollToTop` — listens to `useLocation` pathname + hash; scrolls to top on route change, or scrolls to hash target element if present.
- `PageBanner` — inner-page hero banner with dark overlay, `.circuit-pattern`, breadcrumbs, and optional `eyebrow` prop. Used on About, Services, Contact, Quote pages (Home has its own bespoke hero).
- `Breadcrumbs` — renders Home > Current Page breadcrumb trail; auto-included in `PageBanner`.
- `Eyebrow` — mono-font section label component (`// Section Name` style); accepts `tone` prop (teal/gold/muted).
- `BackToTopButton` — fixed bottom-right scroll-to-top button; appears via IntersectionObserver when a trigger element enters viewport. Used on HomePage only.
- `Navbar` — fixed, 3-column grid layout (logo / centered links / actions). Mobile: hamburger + frosted-glass overlay with nav links, contact rows, and CTA buttons.
- `Footer` — three columns: brand text + social icons · quick links · contact info. Bottom bar: Powered by Scryptera + copyright.

**Animation pattern:** Every page uses a local `FadeUp` wrapper component (defined inline per page) that wraps `motion.div` with `whileInView` + `viewport={{ once: true }}`. This is intentionally not extracted to a shared component — keep it inline.

**Contact/Quote forms** have no backend. On submit they build a `mailto:` URI and fire `window.location.href`. A local `submitted` state toggles a success message in place of the form.

**Stat counter** (`HomePage.jsx → StatCard`) uses `IntersectionObserver` directly (no library) to count up from 0 to the target value once the element enters the viewport.

**Service deep-links:** Home page service cards link to `/services#<slug>` which ScrollToTop handles by scrolling to the matching `id` on the Services page.

**Contact Us nav link** points to `/contact#contact-card` to scroll directly to the contact info card.

---

## Styling

**Brand Kit v4** — all tokens derived from `castaway-brand-kit-v4.html`.

Tailwind is extended with brand tokens in `tailwind.config.js`:

| Token | Value | Usage |
|---|---|---|
| `navy` / `.deep` / `.surface` / `.raised` / `.card` | `#0D1B2A` / `#112336` / `#1A2F42` / `#243447` | Backgrounds, nav, footer, cards |
| `teal` / `.bright` / `.dark` | `#00C4B4` / `#17D4C2` / `#009E91` | CTAs, icons, accents, borders |
| `gold` / `.bright` | `#BF9B30` / `#D4AE45` | Eyebrows, trust signals, accent |
| `gray-light` | `#F4F6F8` | Alternating section backgrounds |
| `error` | `#EF4444` | Error states |
| `font-head` | Barlow Condensed (600/700/800) | All headings — extrabold uppercase |
| `font-body` | DM Sans | Body text |
| `font-mono` | IBM Plex Mono | Eyebrows, labels, badges |

Fonts loaded via Google Fonts `<link>` in `index.html`.

CSS custom properties in `src/index.css` mirror these values and add soft/border rgba variants for teal and gold. The `.circuit-pattern` utility class renders a tiled SVG of teal circuit traces at low opacity.

**Section color pattern (alternating):** white → navy → gray-light → white → ... Pages follow this rhythm; maintain it when adding sections.

---

## Assets

| File | Purpose |
|---|---|
| `src/assets/logo.png` | Horizontal logo (4:1 aspect, transparent PNG) — Navbar only |
| `src/assets/hero-circuit.webp` | Dark circuit boards with glowing teal LEDs — Home hero, About banner |
| `src/assets/flatlay-electronics.webp` | Top-down electronics flat lay — Services banner + accepted items |
| `src/assets/van.webp` | Branded company van — About "We Come To You", Contact/Quote banners |
| `public/og-image.jpg` | Social sharing preview (OG/Twitter card) — JPG of hero circuit image |
| `public/favicon.svg` | Browser favicon |

Vite imports assets as modules — add files to `src/assets/` and import them directly in the component that uses them. Files in `public/` are served as-is at the root URL.

---

## Deployment

- **Host:** Cloudflare Workers + Static Assets
- **Config:** `wrangler.jsonc` — SPA fallback via `not_found_handling: "single-page-application"`
- **Build output:** `dist/`
- **Auto-deploy:** GitHub → Cloudflare on push to `main`
