# basilan.us

The personal technology / project portfolio site for **Jon-jon Basilan**.

A premium, production-quality, fully static website built with **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**. Content is separated from components through a small, central content layer, so adding a project does not require redesigning the site.

Production site: **https://basilan.us** · Contact: **jon@basilan.us**

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router, **static export**) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 3 + a centralized design-token system |
| Animation | Framer Motion (respects `prefers-reduced-motion`) |
| Icons | lucide-react |
| Fonts | Fraunces (display) + Inter (body) + JetBrains Mono (code), via Google Fonts |
| Output | 100% static HTML/CSS/JS in `out/` — deployable anywhere |

**Why static export:** the site has no server-side state or user input, so a pure static build is the most robust, fastest, and easiest-to-host option. It deploys to Cloudflare Pages, GitHub Pages, Netlify, or any static host with zero server config. There is no Node runtime, no build server, no server functions.

---

## Getting started (local development)

```bash
npm install
npm run dev       # http://localhost:3000
```

Production build + preview:

```bash
npm run build     # type-checks, lints, and writes the static site to out/
npm run start     # serves out/ (after build)
```

Other scripts:

```bash
npm run lint      # ESLint (next/core-web-vitals)
npm run typecheck # tsc --noEmit
node scripts/audit.js       # checks all routes for console errors + horizontal overflow (needs `npm run start`)
node scripts/shoot.js       # captures desktop + mobile screenshots to /screenshots
```

---

## Architecture

```text
src/
  app/                    # Next.js App Router pages (routes = URLs)
    layout.tsx            # Root layout: metadata, fonts, JSON-LD, nav, footer
    page.tsx              # Homepage
    projects/page.tsx     # /projects (filterable grid)
    projects/[slug]/page.tsx  # /projects/:slug case studies
    about/page.tsx        # /about
    experience/page.tsx   # /experience
    contact/page.tsx      # /contact
    not-found.tsx         # 404
    sitemap.ts            # auto-generated sitemap.xml
    robots.ts             # auto-generated robots.txt
  components/
    layout/               # Nav, Footer, StatusStrip
    ui/                   # Reveal, SectionHeading, StatusBadge, mockups, ...
    projects/             # ProjectCard, case-study shells
    sections/             # Hero, IdeaToSoftware, CurrentlyBuilding
  content/                # CENTRAL CONTENT (edit here, not in JSX)
    site.ts               # name, email, domain, nav, social, hubs
    projects.ts           # every project's metadata
    experience.ts         # professional profile, expertise, tech
    currently-building.ts # "Currently building" + "Ideas → software" steps
  lib/                    # cn(), motion variants, utils
public/
  projects/classic-games/ # real game screenshots (webp)
  og/                     # pre-generated OpenGraph share images (1200×630)
  favicon.svg, apple-touch-icon.png, manifest.webmanifest
  _headers                # Cloudflare Pages security + cache headers
out/                      # build output (git-ignored)
```

---

## Adding a new project

A new project is added **entirely through the content layer** — no component or page edits required.

### 1. Add project metadata

Open `src/content/projects.ts` and append an object to the `projects` array:

```ts
{
  slug: "my-new-tool",            // URL slug
  name: "My New Tool",            // Display name
  tagline: "A short one-liner.",  // Shown on cards
  description: "1–3 sentence public-safe description.",
  category: "Web",                // AI | Trading | Games | Automation | Web | Experiments
  status: "In Development",       // Live | Published | In Development | Experiment | Coming Soon | Archived
  year: 2026,
  featured: false,                // appears in homepage "Selected work"
  sortOrder: 4,                   // lower = higher in lists
  image: "/projects/my-new-tool/hero.jpg", // hero image (or null to use a mockup)
  technologies: ["TypeScript", "React"],
  url: "https://tool.basilan.us", // optional live link
  caseStudy: "/projects/my-new-tool", // optional case-study page (auto-route)
  googlePlay: "",                 // optional; add once published
}
```

### 2. Add assets

Drop the hero/screenshots under `public/projects/<slug>/`. For performance, use optimized images (WebP/AVIF/compressed JPG). A good size for a hero is ~1600px wide; screenshots ~800px wide.

### 3. Add a case study (optional)

- Create `src/app/projects/<slug>/page.tsx` (a small wrapper returning your bespoke study component), **or**
- Reuse the generic template by giving the project a `caseStudy` route — `GenericCaseStudy` renders Overview + Technology automatically. For richer studies, create a component under `src/components/projects/` modeled on `TradingCaseStudy` / `ClassicGamesCaseStudy`.

### 4. Rebuild

```bash
npm run build
```

The homepage, `/projects` grid, sitemap, and metadata update automatically.

**Statuses are config-driven**, so the "Status strip" and status badges never need editing.

---

## Updating the résumé / experience

Edit `src/content/experience.ts`:

- `profile.summary` / `profile.story` — the About and Experience intros
- `expertiseAreas` — the three expertise columns
- `techGroups` — the technology grouping on `/experience`

To add a **downloadable résumé PDF**, place a sanitized file at `public/jon-jon-basilan-resume.pdf` and un-hide the "Résumé" card in `src/app/experience/page.tsx` (currently a disabled "Coming soon" placeholder).

> A résumé is not fabricated here. Only add employers, dates, titles, certifications, or education you have verified. Until a sanitized PDF is provided, `/experience` intentionally shows the verified overview instead.

---

## Updating "Currently building"

Edit `src/content/currently-building.ts`:

```ts
{
  title: "New AI experiments",
  note: "One line describing the work.",
  status: "research",   // building | research | planning
}
```

---

## Deploying to Cloudflare Pages

The site is a static export, so Cloudflare Pages deployment is just a build command.

1. Push this repo to GitHub (see below).
2. In Cloudflare Dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repo. Use these settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node version:** `22` (or the project's current major)
4. **Deploy.** Cloudflare auto-detects the `_headers` file for security/caching headers.
5. **Custom domain:** in the Pages project → Custom domains → add `basilan.us`, then add `www.basilan.us`.

### DNS (managed by Cloudflare)

| Type | Name | Target |
|---|---|---|
| A | `@` | `192.0.2.1` (use the Pages-assigned `*.pages.dev` CNAME instead if using Cloudflare Pages DNS) |
| CNAME | `www` | `<project>.pages.dev` |

For a **clean apex + www setup** with Cloudflare Pages, the recommended pattern is:
- `basilan.us` → CNAME to your Pages project (Cloudflare flattens the apex automatically).
- `www.basilan.us` → CNAME to the same Pages project, and enable **Bulk Redirect** (or a Page Rule) redirecting `www` → apex.

> **Do not touch `invest.basilan.us` or `games.basilan.us`.** `invest.basilan.us` is the live trading dashboard (its own application) and must keep its existing DNS/Cloudflare tunnel. `games.basilan.us` is reserved for the browser games app.

### Subdomains

`invest.basilan.us` and `games.basilan.us` are **separate applications**, not part of this repo. This site only links to them. See `src/content/site.ts` → `hubs`.

---

## Security

Because the site is fully static:

- **No secrets** can leak — there are no environment variables, server functions, or API keys. `.env*` is git-ignored.
- **No user input** — the only interactive element is a `mailto:` link (no form → no spam/rate-limit surface).
- Security headers are set via `public/_headers` (auto-applied by Cloudflare Pages):
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `X-Frame-Options: SAMEORIGIN`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()`
  - `Cross-Origin-Opener-Policy: same-origin`
- `favicon`/`apple-touch-icon`/`manifest` are local (no external icon requests).
- Public project descriptions are reviewed for sensitive information; the trading case study deliberately uses a **synthetic mockup** (no real account data, P&L, or credentials).

> To add HSTS, enable **Always Use HTTPS** + HSTS in the Cloudflare dashboard (edge-level), since HSTS must not be set on non-HTTPS hosts.

---

## Performance & accessibility

- Static, server-rendered HTML with minimal JS; no large animation library in the critical path.
- Real screenshots converted to WebP/compressed JPG; `next/image` with `unoptimized` for static.
- Caching rules in `_headers` (fingerprinted assets immutable, HTML no-cache).
- Semantic HTML, correct heading hierarchy, visible focus states, `prefers-reduced-motion` support, WCAG-conscious contrast.
- Verified: **zero console errors** and **no horizontal overflow** across all routes at 1440px and 390px (see `scripts/audit.js`).

---

## Rollback

Because every deploy is a static artifact from Git:

- Cloudflare Pages keeps a history of every deployment. In the Pages project → **Deployments**, you can promote any previous deployment to production instantly.
- Or push a revert commit (`git revert <sha>` or `git reset` + push) and redeploy.

---

## Repository

Local: `C:\Hermes-Profiles\projects\basilan-us`

This directory is **not** part of the hourly Hermes backup (which targets the trading dashboard + Obsidian vault). The website source lives in its own GitHub repo and is version-controlled independently.

---

## Content accuracy note

Per the public-site safety rule, this site only publishes public-safe information. It does not fabricate résumé entries, project statistics, download counts, trading returns, or testimonials. Any claim on the site is either verified or deliberately omitted.
