# PRD.md — Product Requirements (v8)

## Probleem
Consumenten missen de beste deals omdat het vergelijken van prijzen te tijdrovend en overweldigend is. Ze scannen meerdere sites, vergeten prijsveranderingen, en krijgen geen persoonlijk advies. Dit leidt tot overbetaling en frustratie.

## Core Features & Acceptatiecriteria

### 1. Zoeken + Filteren
- Zoekopdracht werkt met typo-tolerantie ("Macbook" → "MacBook")
- Filter op prijsbereik, winkel, categorie, en beschikbaarheid (in voorraad)
- Filters laden in <500ms bij 12 producten

### 2. Vergelijken (max 4)
- Gebruiker kan maximaal 4 producten selecteren voor vergelijking
- Vergelijkingstabel toont prijs, winkel, levering, en rating per product
- Knop "Vergelijken" wordt pas actief bij 2+ geselecteerde producten

### 3. PrijsHistorie (90d chart)
- Interactieve lijngrafiek toont prijsverloop van de laatste 90 dagen
- Hover toont exacte datum + prijs
- Grafiek laadt binnen 1s na productselectie

### 4. AI Koopadvies (score 1-10 + verdict)
- AI geeft een score van 1-10 op basis van prijsverloop, winkelbetrouwbaarheid, en reviews
- Verdict: "Goedkoop nu", "Wachten", of "Snel kopen"
- Score wordt weergegeven als een badge met kleurcode (rood → groen)

### 5. Prijsalerts
- Gebruiker kan een alert instellen op een product met een doelprijs
- Alert wordt verstuurd via e-mail (niet in-app) bij prijsval
- Alert wordt automatisch verwijderd na 30 dagen of bij aankoop

### 6. Responsive Mobile-First
- Mobile-first ontwerp: alles werkt op 320px width
- Bottom navigation op mobiel (Home, Zoeken, Vergelijken, Deals)
- Alle knoppen minimaal 44x44px groot

## Niet-Scope
- Accounts aanmaken / inloggen
- Echte API integraties (alle data is statisch in v8)
- Betalingen of affiliate-click tracking
- Dark mode implementatie

## Monetisatie
- Affiliate links (Bol.com, Coolblue, etc.) — klikken op "Koop nu" genereert commissie
- Freemium: gratis toegang tot basisfuncties; premium (€2,99/maand) voor geavanceerde alerts, historie >90d, en AI-advies zonder ads

---
*PRD v8 — Benchmark. Geen real-time data. Geen backend. Alleen UI/UX validatie.*