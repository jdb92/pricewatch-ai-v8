# SRD.md — Software Requirements (v8)

## Technische Stack
- **Frontend**: React 19 (React Server Components enabled)
- **TypeScript**: Strict mode, `verbatimModuleSyntax: true`
- **Bundler**: Vite 8 (ESBuild + Rollup)
- **Styling**: Tailwind CSS v4 (with `@theme` tokens)
- **Charts**: Recharts (v2.12+)
- **Animations**: Framer Motion 11
- **Routing**: React Router v7 (useNavigate, useLocation)

## Code Splitting
- Elk pagina-component geladen via `React.lazy()`
- Manual chunks voor vendors (`react`, `react-router`, `recharts`, `framer-motion`)
- Vite config: `build.rollupOptions.output.manualChunks` gedefinieerd

## Pagina’s (5)
1. **Home** — Featured deals, categorieën, zoekbalk
2. **Search** — Filterbare lijst met producten (grid + list toggle)
3. **ProductDetail** — Prijsverloop, AI-advies, vergelijking, "Koop nu"-knop
4. **Compare** — Tabel met max 4 producten, side-by-side kenmerken
5. **Deals** — Aanbiedingen per winkel, tijdgebonden deals

## Producten & Categorieën
- 12 producten (statisch, JSON in `src/data/products.ts`)
- 6 categorieën: Laptops, Smartphones, TVs, Audio, Gaming, Fotografie
- 5 winkels: Bol.com, Coolblue, MediaMarkt, Amazon.nl, Alternate

## Directory Structuur (verplicht)
```
src/
├── types/index.ts
├── data/
│   ├── stores.ts
│   └── products.ts
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── product/
│       ├── ProductCard.tsx
│       ├── PriceChart.tsx
│       ├── AiBadge.tsx
│       ├── CompareTable.tsx
│       └── DealCard.tsx
├── pages/
│   ├── HomePage.tsx
│   ├── SearchPage.tsx
│   ├── ProductDetailPage.tsx
│   ├── ComparePage.tsx
│   └── DealsPage.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## Configuratie
- `.npmrc`: `legacy-peer-deps=true`
- `.gitignore`: eerste commit bevat standaard Node.js + Vite + TS ignore rules
- `vite.config.ts`: `plugins: [react()]`, `css: { preprocessorOptions: { ... } }`

## Data
- Alle producten en winkels zijn statisch JSON. Geen API calls.
- Mock data: `products.ts` bevat 12 objecten met velden: `id`, `name`, `price`, `store`, `category`, `rating`, `history` (90d array), `url`

## Build & Deploy
- Build output: `dist/` — statisch hostbaar op Vercel/Netlify
- Geen backend nodig voor v8

---
*SRD v8 — Implementatieplan voor frontend-only benchmark.*