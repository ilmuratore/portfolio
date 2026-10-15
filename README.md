# Simone Iengo — Portfolio

Portfolio personale dedicato a sviluppo software full stack, architettura applicativa e progetti reali.

> **Stato:** portfolio esistente attivo; refactor v2.0 incrementale in corso. Le specifiche del nuovo design non sono ancora tutte implementate.

## Stack attuale

- Next.js 15 (App Router), React 19
- Tailwind CSS 3, Framer Motion
- Vercel Analytics e Speed Insights
- Node.js 22 per build e CI

## Avvio locale

```bash
npm ci
npm run dev
```

Aprire `http://localhost:3000`.

## Verifica

```bash
npm run build
```

La verifica del build avviene anche nella CI delle pull request. L'adozione di test automatici e la revisione della configurazione lint sono previste nelle PR successive.

## Configurazione

Copiare `.env.example` in `.env.local` e impostare le variabili necessarie. Non inserire mai segreti nel repository.

- `NEXT_PUBLIC_SITE_URL`: URL canonico del sito, senza slash finale; in assenza della variabile si utilizza l'URL Vercel corrente.
- `GMAIL_USER`, `GMAIL_PASSWORD`: credenziali usate dal form di contatto esistente. La sicurezza e l'implementazione del form saranno riviste durante il refactor.

## Documentazione

- [Visione e motion design](docs/DESIGN_SYSTEM.md)
- [Architettura e confini](docs/ARCHITECTURE.md)
- [Roadmap v2.0](docs/ROADMAP.md)

## Workflow

Lavorare su branch dedicati, aprire pull request verso `main`, verificare la CI e richiedere revisione prima del merge. `main` resta il ramo di pubblicazione stabile.

## Licenza

Consultare [LICENSE](LICENSE).
