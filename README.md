# Atelier — Portfolio + Notes

A minimal, fast personal site for showing selected work and writing long-form notes.

- **Stack** — Vite · React 18 · TypeScript · Tailwind CSS · MDX · React Router
- **Content** — local MDX files in `content/`, no external CMS
- **Style** — modern minimal, light/dark mode, responsive
- **Build** — static-friendly SPA, ~50 KB gzipped JS

## Quick start

```bash
npm install        # install dependencies
npm run dev        # start dev server (http://localhost:5173)
npm run build      # build for production → dist/
npm run preview    # preview the production build (http://localhost:4173)
npm run rss        # regenerate rss.xml from content/posts/*.mdx
```

## Project layout

```
content/                  # all content lives here, as MDX
├── portfolio/            # one .mdx file per project
├── posts/                # one .mdx file per blog post
└── pages/                # static pages (e.g. about.mdx)
public/
├── covers/               # project cover images (SVG/JPG/PNG)
└── favicon.svg
src/
├── components/           # layout, ui, home, portfolio, blog
├── pages/                # one .tsx per route
├── content/              # content loader (auto-discovers MDX)
├── lib/                  # helpers
├── hooks/                # hooks
├── styles/               # globals.css + prose.css
├── App.tsx               # router
└── main.tsx              # entry
scripts/
└── build-rss.ts          # generates public/rss.xml at build time
```

## Adding content

### A new project

Create `content/portfolio/your-slug.mdx`:

```mdx
---
title: "Your Project"
slug: "your-slug"
cover: "/covers/your-slug.svg"
role: "Lead Designer"
year: 2026
tags: ["design", "product"]
summary: "One sentence describing the project."
links:
  live: "https://example.com"
  repo: "https://github.com/you/repo"
featured: true
order: 4
---

Write the project body in MDX. You can use any Markdown, plus
React components inline.
```

### A new post

Create `content/posts/2026-08-some-post.mdx`:

```mdx
---
title: "Your Post Title"
slug: "your-post-slug"
date: 2026-08-15
tags: ["writing"]
summary: "What this post is about, in one sentence."
featured: false
---

Your content here.
```

## Customizing

- **Site name** — search for "Atelier" in `src/components/layout/Header.tsx`, `Footer.tsx`, and `index.html`
- **Site URL** — set `SITE_URL` env var when building for production
- **Colors** — `tailwind.config.ts` + `src/styles/globals.css` (look for `--accent`, `--bg`, `--fg`)
- **Fonts** — change the Google Fonts link in `index.html` and update `tailwind.config.ts` `fontFamily`

## Deployment

The `dist/` output is a static site. Drop it on Vercel, Netlify, Cloudflare Pages, or any static host.

```bash
npm run build          # outputs to dist/
# then upload dist/ to your host
```

## What this site is *not*

- No CMS — content is in Git
- No comments — keep things simple
- No analytics — add Plausible or Umami if you want
- No search yet — add Flexsearch later if the archive grows

## License

MIT — do what you want, attribution appreciated.
