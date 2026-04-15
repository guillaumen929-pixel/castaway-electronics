# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Commands

```bash
npm run dev        # Start dev server (defaults to :5173, auto-increments if occupied)
npm run build      # Production build → dist/
npm run preview    # Serve the dist/ build locally
npm run lint       # ESLint across all .js/.jsx files, zero warnings allowed
```

No test suite is configured.

---

## Project Identity

**Cast Away Cleanouts — Electronics & Recycling** — a South Florida e-waste recycling and certified data destruction company (sister brand to Cast Away Cleanouts Estate & Property Cleanouts). This site covers electronics services only — never add estate/junk/furniture/property cleanout content.

**Business constants — never change these:**
- Phone: `954-366-1180`
- Email: `Info@CastawayCleanouts.com`
- Address: `226 Basin Dr, Lauderdale by the Sea, FL 33308`
- In business since: `2014`

---

## Architecture

**Stack:** React 18 + Vite 5 · React Router v6 · Framer Motion · Lucide React · Tailwind CSS 3

`App.jsx` is the root — it wraps everything in `<BrowserRouter>` and renders `<Navbar>` + `<Footer>` on every route, with `<Routes>` in between. The four routes are `/`, `/about`, `/services`, `/contact`.

**Shared components** (used on multiple pages):
- `AreasServed` — pill grid of 9 service areas + CTA button; accepts optional `heading` prop. Used as the second-to-last section on every page.
- `PageBanner` — inner-page hero banner with dark overlay and `.circuit-pattern`. Accepts `title`, `subtitle`, `bgImage` props. Used on About, Services, Contact pages (the Home page has its own bespoke hero).
- `Navbar` — sticky, starts semi-transparent, scrolling past 80px adds shadow. Active link gets a teal underline via React Router's `<NavLink>`.
- `Footer` — three columns: brand/social · quick links · contact info.

**Animation pattern:** Every page uses a local `FadeUp` wrapper component (defined inline per page) that wraps `motion.div` with `whileInView` + `viewport={{ once: true }}`. This is intentionally not extracted to a shared component — keep it inline.

**Contact form** (`ContactPage.jsx`) has no backend. On submit it builds a `mailto:` URI and fires `window.location.href`. A local `submitted` state toggles a success message in place of the form.

**Stat counter** (`HomePage.jsx → StatCard`) uses `IntersectionObserver` directly (no library) to count up from 0 to the target value once the element enters the viewport. The `value` prop is a string like `"10+"` or `"100"` — the `%` vs `+` suffix is inferred from whether the string includes `+`.

---

## Styling

Tailwind is extended with brand tokens in `tailwind.config.js`:

| Token | Value | Usage |
|---|---|---|
| `navy` / `navy.deep` / `navy.card` | `#1B2A3B` / `#0D1B2A` / `#243447` | Backgrounds, nav, footer |
| `teal` / `teal.dark` | `#00B4D8` / `#0099BB` | CTAs, icons, accents, borders |
| `gray-light` | `#F4F6F8` | Alternating section backgrounds |
| `gold` | `#BF9B30` | Available but not yet used in pages |
| `font-head` | Syne | All headings via `font-family: font-head` |
| `font-body` | DM Sans | Body text |

CSS custom properties in `src/index.css` mirror these values for use outside Tailwind. The `.circuit-pattern` utility class (defined in `index.css`) renders a tiled SVG of teal circuit traces — used as a decorative background overlay at low opacity in hero/CTA sections.

**Section color pattern (alternating):** white → navy → gray-light → white → ... Pages follow this rhythm; maintain it when adding sections.

---

## Assets

| File | Status | Notes |
|---|---|---|
| `src/assets/logo.svg` | Placeholder | Replace with `logo.png`; update import in `Navbar.jsx` |
| `src/assets/hero-electronics.svg` | Placeholder | Replace with `hero-electronics.jpg`; update imports in `HomePage.jsx` and `AboutPage.jsx` |

Additional images specified in `CastAway_Electronics_Complete_Website.md` (image placement table at the bottom) are not yet placed. Vite imports assets as modules — add files to `src/assets/` and import them directly in the component that uses them.

---

## Source Documents

`MASTER_PROMPT_CastAway_Electronics.md` and `CastAway_Electronics_Complete_Website.md` in the project root contain the full design spec, all copy, and the complete image placement table. Refer to these before making content changes.
