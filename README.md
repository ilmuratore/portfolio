# Simone Iengo — Portfolio v2

Il portfolio utilizza un nuovo stile **editoriale, flat, autunnale**, con UI mobile-first e visual software progettati in HTML/CSS.

> PR02 — **contenuti placeholder**. Titoli, descrizioni, tecnologie e anteprime dei progetti sono dimostrativi. Non sono pubblicati dati fittizi presentati come risultati reali.

## Stack

- Next.js 15, React 19, Tailwind CSS 3 e CSS semantico personalizzato
- Server Components per le sezioni, Client Component solo per il menu mobile
- Vercel Analytics e Speed Insights (già presenti)

## Avvio locale

Node.js 22 e npm richiesti.

```bash
npm ci
npm run dev
```

Aprire http://localhost:3000.

## Test e build

```bash
npm test
npm run build
```

La CI esegue test e build. Verificare anche i layout a 360, 390, 768, 1024 e 1440 px, il menu da tastiera e le preferenze di movimento ridotto.

## Dove cambiare i placeholder

- `src/content/projects.mjs`: catalogo e case study dimostrativi
- `src/content/placeholder.mjs`: processo e competenze da completare
- `src/app/components/v2/EditorialSections.jsx`: sezioni della homepage
- `src/app/components/v2/SoftwareVisuals.jsx`: anteprime HTML/CSS per i progetti
- `src/app/components/v2/SiteHeader.jsx`: menu mobile accessibile
- `src/app/globals.css`: palette, tipografia, motion, layout responsive
- `src/app/icon.svg`: icona site v2

## Configurazione

Copiare `.env.example` in `.env.local` per impostare le variabili necessarie. Non pubblicare credenziali. La vecchia API email resta nel codice ma non è utilizzata dalla nuova homepage, in attesa della revisione di sicurezza.

## Documentazione

- [Design system](docs/DESIGN_SYSTEM.md)
- [Architettura](docs/ARCHITECTURE.md)
- [Roadmap](docs/ROADMAP.md)
- [Hosting senza lock-in e build statica](docs/HOSTING.md)
- [Catalogo progetti e case study](docs/PROJECTS.md)

## Workflow

Branch dedicati, PR verso `main`, review e CI prima del merge. I progetti e i case study reali saranno aggiunti nelle PR successive.
