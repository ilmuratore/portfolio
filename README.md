# Simone Iengo — Portfolio v2

Portfolio personale in Next.js con design **editoriale, flat, autunnale**, responsive e orientato al contenuto.

> **Stato:** contenuti in preparazione. I case study, le descrizioni professionali, l'elenco delle tecnologie e le anteprime sono dimostrativi. Le nuove pagine provvisorie sono marcate come `noindex`.

## Stack

- Next.js 15, React 19, Tailwind CSS 3 e CSS personalizzato
- Server Components per le pagine; Client Components limitati alle interazioni
- Nessuna integrazione Vercel o API server per l'invio di email
- Esportazione statica opzionale, compatibile con GitHub Pages

## Avvio e test locale

Richiesti Node.js 22 e npm.

```bash
npm ci
npm test
npm run build
npm run dev
```

Sito locale: http://localhost:3000

### Esportazione statica

Per testare il percorso GitHub Pages di progetto:

```bash
PORTFOLIO_STATIC_EXPORT=1 NEXT_PUBLIC_BASE_PATH=/portfolio NEXT_PUBLIC_SITE_URL=https://ilmuratore.github.io/portfolio npm run build
```

Su PowerShell impostare prima le variabili con `$env:NOME="valore"`. La directory risultante è `out/`.

**La pubblicazione non è attiva.** Il workflow GitHub Actions di CI è stato rimosso su richiesta: test e build vanno eseguiti localmente prima delle PR e del merge. Quando decideremo dove pubblicare, definiremo un processo esplicito di rilascio.

## Struttura

- `src/content/projects.mjs` — catalogo e schede dimostrative
- `src/content/profile.mjs` — profilo, ambiti di competenza e contatti verificati
- `src/content/placeholder.mjs` — processo e collegamenti ai contenuti provvisori
- `src/app/components/v2/` — componenti del layout, contenuto e anteprime illustrative
- `src/app/about/page.js` — profilo professionale (placeholder)
- `src/app/contact/page.js` — contatti pubblici, senza modulo di invio
- `src/app/projects/` — catalogo e case study
- `src/app/globals.css` — design system e regole responsive

## Configurazione

`.env.example` contiene soltanto un URL pubblicabile indicativo. Modificare `NEXT_PUBLIC_SITE_URL` in base alla destinazione reale del sito e all'eventuale dominio personalizzato.

## Documentazione

- [Design system](docs/DESIGN_SYSTEM.md)
- [Architettura](docs/ARCHITECTURE.md)
- [Progetti e case study](docs/PROJECTS.md)
- [Hosting statico](docs/HOSTING.md)
- [Roadmap](docs/ROADMAP.md)

## Workflow

Un branch e una PR per ambito, test manuali e locali prima del merge. Non pubblicare dati fittizi o placeholder come contenuto definitivo.
