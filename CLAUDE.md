# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server.
- `npm run build` — Runs `tsc -b` (type-check) + `vite build` + writes `dist/CNAME` (`maipharm.com`). Must pass before deploy.
- `npm run postbuild` — Runs `scripts/prerender.mjs`: spins up a local static server on port 45678, launches Puppeteer, and writes pre-rendered HTML snapshots of each route in `routes` into `dist/<route>/index.html`. **If you add a new route in `src/App.tsx`, also add it to the `routes` array in `scripts/prerender.mjs`, otherwise SEO/direct-link hydration breaks.**
- `npm run lint` — ESLint over the project.
- `npm run deploy` — `gh-pages -d dist`. Publishes `dist/` to the `gh-pages` branch; the `CNAME` file routes `maipharm.com` to it.
- No test runner is configured.

## Architecture

Single-page React 18 + TypeScript + Vite site for **마이팜 (MaiPharm)** — a marketing/product site for an AI pharmacy management platform, hosted on GitHub Pages at `maipharm.com`.

**Rendering model.** `src/main.tsx` decides between `hydrateRoot` (if the root element already has children — the prerendered case) and `createRoot` (dev / first paint). This pairs with `scripts/prerender.mjs`, so build output is static HTML that React hydrates on load. Any component that reads `window` / runs browser-only code at module top-level will crash Puppeteer during prerender.

**Routing.** `react-router-dom` v7 `BrowserRouter` in `main.tsx`; routes declared in `src/App.tsx`. Product detail is a single route `/products/:id` that switches content by numeric id (1–8), each mapped to a key (`pharmsquare`, `medimix`, `psinsight`, `dashboard`, `autocg`, `crm`, `marketing`, `api`) in `src/pages/detail/*.ts`. The prerender list currently covers ids 1–8.

**i18n.** `src/i18n.ts` is the single source of truth for copy — one ~70K-line file with Korean (`ko`), English (`en`), and Japanese (`ja`) resources. Product detail pages (`ProductDetail.tsx`) pull nested objects via `t('product.<key>.features', { returnObjects: true })`, so when adding a product you must add both the detail module in `src/pages/detail/` and the matching translation subtree in `i18n.ts` for all three languages. `i18next-browser-languagedetector` auto-selects the language.

**State.** Two Zustand stores in `src/store/` (`itemsStore`, `headerStore`) plus a React Context (`src/context/Product.ts` + `src/components/Provider.tsx`) that holds parsed spreadsheet data. `readXlsx.ts` + `exceljs` support this, suggesting the site shares code with a sibling pharmacy-tool app. The marketing pages themselves don't write to these stores — treat them as carry-over infrastructure; don't remove without checking.

**SEO.** `react-helmet-async` (wrapped at `main.tsx`) lets each page set `<head>` tags. `public/sitemap.xml`, `public/robots.txt`, `public/_headers` (CSP + security headers), and `public/_redirects` (http → https, apex) are deploy-time artifacts served as-is. Update the sitemap when routes change.

**Asset pipeline.** `vite-plugin-image-optimizer` compresses images at build time (webp/jpg/png quality 80). `vite.config.ts` also injects a `mocha-error-reporter` plugin that `postMessage`s console/errors to the parent window — this is scaffolding from the initial generator and is harmless in production.

**Build output tweaks.** `vite.config.ts` `manualChunks` splits `react`/`react-dom`/`react-router-dom` into a `vendor` chunk and `lucide-react` into a `ui` chunk; `chunkSizeWarningLimit: 1000`.

## Conventions specific to this repo

- Comments, commit messages, and in-code Korean copy are in Korean (project instructions require 한글 commit messages, ≤50 chars, 1 line).
- Deployment is GitHub Pages via the `gh-pages` branch; the custom domain is pinned by `CNAME` (root) and re-emitted into `dist/CNAME` by the `build` script — don't remove that `echo`.
- When touching routes: update `src/App.tsx`, `scripts/prerender.mjs` `routes`, and `public/sitemap.xml` together.
