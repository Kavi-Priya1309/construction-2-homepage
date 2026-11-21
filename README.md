# XTRA Construction 2 — Homepage Recreation

A pixel-focused React recreation of the XtraTheme **Construction 2** homepage
([reference](https://xtratheme.com/elementor/construction-2/)).

The project reproduces the reference layout, section order, typography, colour
palette, imagery, decorations, spacing and interactions — it is a
reference-matching build, not a redesign.

---

## Project overview

The single page contains every section of the reference homepage, in the same
order:

1. Announcement bar (phone + social links)
2. Header with logo, primary navigation (with dropdowns), search trigger and
   “Free Consultation” button, plus a compact sticky header on scroll
3. Hero slider (two slides, autoplay, arrows, dots, “Watch video” modal)
4. Features at a glance (three image cards with hover reveal)
5. About our company (image + yellow text block + check list)
6. Our construction services (asymmetric three-column grid)
7. Construction consultation call-to-action banner
8. Process of construction (navy panel, three numbered steps)
9. Our latest projects (4 × 2 project grid with hover overlay)
10. Request a free and fair quote (navy panel + yellow form)
11. Customer testimonials (swipeable slider with dots)
12. Client logos strip (overlapping yellow band)
13. Footer (navy contact block + white bottom bar) and back-to-top button

## Technology used

| Purpose | Choice |
| --- | --- |
| UI library | React 18 (JavaScript / ES6+) |
| Build tool | Vite 5 |
| Animation | Framer Motion |
| Icons | lucide-react + inline SVG |
| Styling | Plain CSS split into `global.css`, `header.css`, `sections.css`, `responsive.css` |
| Fonts | Google Fonts — Poppins (300–900) and Roboto |

No UI framework, CSS-in-JS runtime, router or state library is used — the page
is a single scroll view, so plain CSS and local component state keep the
markup close to the reference.

## Features

- **Hero slider** — 8 s autoplay with pause on hover/focus, previous/next
  controls, dot navigation, keyboard arrow support and a YouTube video modal
  (play button and “Watch video” link).
- **Navigation** — hover dropdowns with a nested submenu, keyboard focus
  support, smooth anchor scrolling, and a slide-in offcanvas menu on tablet and
  mobile.
- **Search overlay** — opens from the header, filters services, features and
  projects as you type, supports Enter to jump to the first result and Escape
  to close.
- **Sticky header** — compact bar appears after 320 px of scrolling; the
  back-to-top button appears later and scrolls up smoothly.
- **Feature cards** — background images with an animated hover overlay.
- **Project grid** — hover overlay with title and category, links to the quote
  section.
- **Testimonials** — three quotes, dot navigation, pointer/touch swipe,
  autoplay, and pause while the pointer is over the card.
- **Quote form** — front-end validation for name and email, inline error
  messages, `aria-invalid`/`aria-describedby`, and an honest confirmation card
  that states no request was sent to a server.
- **Responsive** — dedicated breakpoints at 1366, 1200, 1024, 767 and 380 px;
  no horizontal scrolling; touch-friendly controls.

## Dependencies

Runtime: `react`, `react-dom`, `framer-motion`, `lucide-react`

Development: `vite`, `@vitejs/plugin-react`

## Installation

```bash
npm install
```

## Development command

```bash
npm run dev
```

Vite serves the page at `http://localhost:5173/`.

## Production build

```bash
npm run build
npm run preview   # optional local check of the production bundle
```

The build output is written to `dist/`.

## Deployment instructions

### Vercel

1. Push the repository to GitHub.
2. In Vercel choose **Add New → Project** and import the repository.
3. Framework preset: **Vite**. Build command `npm run build`, output directory
   `dist` (detected automatically).
4. Deploy. No environment variables are required.

With the CLI: `npm i -g vercel && vercel --prod`.

### Netlify

1. **Add new site → Import an existing project**, select the repository.
2. Build command `npm run build`, publish directory `dist`.
3. Deploy. No environment variables are required.

The site is fully static, so any static host (GitHub Pages, Cloudflare Pages,
S3 + CDN) works with the same build output.

## Environment configuration

None. The application has no API keys, secrets or server-side configuration.
All content lives in `src/data/siteData.js` and all images are bundled from
`src/assets/images`.

## API documentation

Not applicable — this is a front-end-only recreation with no backend calls.
The quote form is deliberately local: it validates input in the browser and
shows a confirmation that explains nothing was transmitted. To connect a real
endpoint, replace the `setSent(true)` call in
`src/components/QuoteForm.jsx` with a `fetch` request and handle the loading and
error states.

## Project structure

```
src/
  components/        AnnouncementBar, Header, SearchOverlay, HeroSlider,
                    FeaturesSection, AboutSection, ServicesSection,
                    ConsultationBanner, ConstructionProcess, ProjectsSection,
                    QuoteForm, TestimonialsSection, ClientLogos, Footer,
                    BackToTop, SectionTitle
  data/siteData.js   Navigation, copy, projects, testimonials, client logos
  assets/images/     Original reference imagery (locally bundled)
  styles/            global.css, header.css, sections.css, responsive.css
  App.jsx
  main.jsx
```

## Assumptions

- The reference is a single homepage; navigation targets that have no separate
  page on the reference (About, Services, Blog, Pages, Contact, project cards,
  service links) scroll to the matching homepage section instead of 404ing.
- “Watch video” uses the theme’s public promo video
  (`https://www.youtube.com/watch?v=FyS_zcvmUr4`) embedded in a modal.
- Images were downloaded from the public reference site and are bundled locally
  so the build has no hotlinked dependencies.
- The quote form has no backend; the success state says so explicitly.
- Header, hero and section dimensions were measured from the live reference at
  1440 px and translated to fluid CSS with breakpoints at the widths listed
  above.

## Known limitations

- Form submissions are not sent anywhere (front-end only) — by design.
- The search overlay searches the homepage content only; there is no site-wide
  index.
- The offcanvas menu and dropdowns are visual recreations; there are no inner
  pages to navigate to.
- The hero video and social links point to the original external destinations,
  which require network access.
- Animations respect the reduced-motion preference only where CSS transitions
  are used; Framer Motion transitions are not disabled globally.
