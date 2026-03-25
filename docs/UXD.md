# UXD.md — UX Design (v8)

## Kleurenpalet: Deep Purple (Purplish Midnight)

**Keuze**: `#4B0082` (Indigo) + `#6A0DAD` (Dark Violet) + `#8A2BE2` (Blue Violet)

**Onderbouwing**:
- Niet gebruikt in v1-v7 (gecontroleerd via historie)
- Deep purple voelt luxe, vertrouwd, en intellectueel — perfect voor een prijsanalyse tool
- Verwijst naar data, precisie, en rust (tegenover agressieve rood/oranje)
- Werkt uitstekend in lichtmodus: donkerder tonen creëren diepte zonder dark mode
- Contra-staat goed met wit en lichtgrijs — ideaal voor leesbaarheid

## Anti-AI-Design Principes
- Geen gradients, glows, of "Revolutionize"-taal
- Geen overbodige illustraties of animaties
- Ruimte is een design element: ruime padding, duidelijke hierarchie
- Kleuren zijn beperkt: 3 hoofdkleuren + grijsen
- Geen "AI-look" zoals blauwe cirkels of floating cards

## Referenties
1. **Tweakers** — Data-gedreven, duidelijke tabellen, geen decoratie
2. **Coolblue** — Vertrouwen via transparantie (prijsvergelijking, leveringstijden)
3. **Idealo** — Internationaal clean, heldere navigatie, geen overbelasting

## Layout & Interactie
- **Light mode default** — Geen dark mode in v8
- **Mobile bottom nav** — Iconen: Home (🏠), Zoeken (🔍), Vergelijken (📊), Deals (⏰)
- **Desktop**: bovenste navigatie + sidebar voor categorieën
- **Typografie**: Inter (Google Fonts), system-ui fallback
- **Button style**: zacht afgerond (border-radius: 8px), geen schaduw
- **Card style**: lichte rand (1px #e0e0e0), geen schaduw

## Beweging
- Framer Motion: alleen voor overgangen tussen pagina’s (fade)
- Geen hover-effects op productcards — alleen click
- Prijsgrafiek: animatie bij laden (0.3s ease-in-out)

---
*UXD v8 — Rustig, betrouwbaar, data-first. Geen flitsen. Geen flauwe ideeën.*