# AGENTS.md

This document provides an overview of the project structure for developers and AI agents working on this codebase.

## Project Overview

**DiGiTAL POiNT SK** — a student update portal providing admission notices, important dates, and help resources. Built with TanStack Start and deployed on Netlify.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── public/                  # Static assets (favicon, images)
├── src/
│   ├── data/
│   │   └── products.ts      # Scaffold leftover — unused by portal, can be removed
│   ├── routes/
│   │   ├── __root.tsx       # Root layout: HTML shell, global head meta, styles
│   │   ├── index.tsx        # Home page — DiGiTAL POiNT SK landing page
│   │   └── products/
│   │       └── $productId.tsx  # Scaffold leftover — unused
│   ├── router.tsx           # TanStack Router setup with scroll restoration
│   └── styles.css           # Global styles (Tailwind imports + CSS variables)
├── netlify.toml             # Build command, publish dir, dev server settings
├── package.json
├── tsconfig.json            # Strict mode, @/* alias for src/*
└── vite.config.ts           # Vite plugins: TanStack Start, Netlify, Tailwind
```

## Key Concepts

### File-Based Routing (TanStack Router)

Routes map to files in `src/routes/`:
- `__root.tsx` — root layout wrapping all pages
- `index.tsx` — the `/` homepage (DiGiTAL POiNT SK portal)
- `api.*.ts` — server-side API endpoints

### Styling Conventions

- Tailwind CSS utility classes throughout
- `cn()` helper for conditional class merging (if needed)
- CSS variables for theme tokens defined in `styles.css`
- Homepage uses `bg-gradient-to-b from-blue-950 to-blue-700` dark-blue theme with `yellow-300/400` accents

### TypeScript

- Strict mode enabled; import paths use `@/` alias
- Type-only imports with `import type` keyword

## Development Commands

```bash
npm run dev      # Start dev server (port 3000)
netlify dev      # Start with Netlify feature emulation (port 8888)
npm run build    # Production build
```

## Non-Obvious Decisions

- The scaffold product-related files (`src/data/products.ts`, `src/routes/products/`) are unused by the portal homepage and can be removed in a cleanup pass.
- The homepage component (`DigitalPointSKWebsite`) lives directly in `src/routes/index.tsx` as the TanStack Router route component — no separate component file was needed given the single-page nature.
