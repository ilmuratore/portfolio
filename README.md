# Simone Iengo — Portfolio v2

Portfolio Next.js con design editoriale minimale e palette autunnale. **Stato: sviluppo.** Il catalogo presenta tre repository pubblici reali; il profilo distingue circa tre anni di percorso IT dalla carriera precedente; alcune esperienze e progetti sono ancora in aggiornamento. Certificazioni e screenshot autentici restano da completare. Il sito non è ancora destinato all'indicizzazione o alla pubblicazione.

## Stack

Next.js 16.4.1, React 19.3.1, Tailwind CSS 4.3.3, ESLint Flat Config, componenti server per le pagine statiche e componenti client limitati a menu e filtri. Le anteprime di codice e dashboard sono illustrative.

## Avvio locale

Richiesti Node.js 22 e npm:

```bash
npm ci
npm run dev
```

Aprire http://localhost:3000.

## Test e controlli

```bash
npm test
npm run lint
npm run build
npm run verify:static
```

`verify:static` genera un export di prova con `basePath=/portfolio`, controlla tutte le pagine, verifica i link e i metadata `noindex`. Non effettua deployment.

### Prima del rilascio

La migrazione a Next.js 16 è già stata integrata nel lockfile. Prima di considerare il progetto pronto per la pubblicazione è necessario eseguire:

```bash
npm ci
npm run release:check
```

Consultare [SECURITY.md](docs/SECURITY.md) ed esaminare le vulnerabilità eventualmente residue. **Non effettuare un deploy pubblico prima della verifica.**

## Struttura dei contenuti

- `src/content/projects.mjs` — schede reali basate su repository pubblici: Banca Python, Python Developer AI, AziendaJava
- `src/content/profile.mjs` — percorso professionale, competenze, formazione, certificazioni e contatti
- `src/content/placeholder.mjs` — processo di lavoro coerente con il percorso professionale
- `src/app/components/v2/` — componenti editoriali riutilizzabili
- `src/app/globals.css` — design system responsive
- `scripts/` — lint, export statico e verifiche di sicurezza
- `tests/` — test unitari e di integrità delle configurazioni

## Hosting

Il sito è predisposto per export statico e può essere ospitato su GitHub Pages o un provider equivalente. Non è collegato a un processo automatico di deploy. `NEXT_PUBLIC_PORTFOLIO_PUBLISHED` ha valore predefinito **false**: genera `noindex` e `robots.txt` che blocca l'indicizzazione.

La pubblicazione con dominio proprio resta una fase separata. Nessuna GitHub Actions o integrazione Vercel è configurata nel codice.

## Documentazione

- [Architettura](docs/ARCHITECTURE.md)
- [Design system](docs/DESIGN_SYSTEM.md)
- [Icone e asset grafici](docs/VISUAL_ASSETS.md)
- [Progetti](docs/PROJECTS.md)
- [Hosting](docs/HOSTING.md)
- [Sicurezza](docs/SECURITY.md)
- [Checklist rilascio](docs/RELEASE_CHECKLIST.md)
- [Roadmap](docs/ROADMAP.md)
- [Profilo professionale](docs/PROFILE.md)

## Stack Next.js 16

Le versioni sono definite e bloccate in `package.json` e `package-lock.json`.

- Turbopack è il bundler predefinito per `next dev` e `next build`.
- Tailwind 4 si configura in CSS con `@import "tailwindcss"` e il plugin PostCSS dedicato.
- ESLint utilizza `eslint.config.mjs`, senza `.eslintrc.json` e senza `next lint`.
- Verificare la resa grafica mobile/desktop: la nuova versione Tailwind comprende modifiche al CSS reset.
- Non eseguire `npm audit fix --force` prima di esaminare le incompatibilità.

## Progetti verificabili

Le schede del catalogo sono collegate ai repository pubblici e alla documentazione tecnica:

- [Banca Python](https://github.com/ilmuratore/banca-python) — simulator Python/PostgreSQL/Pandas
- [Python Developer AI](https://github.com/ilmuratore/python-developer-ai) — backend FastAPI con memoria e LLM locale
- [AziendaJava](https://github.com/ilmuratore/AziendaJava) — gestionale Spring Boot/Java/JPA

Le anteprime sono costruzioni CSS illustrative, non screenshot. Le altre sezioni mantengono i placeholder e l'intero sito resta non indicizzabile in attesa del rilascio.

## Profilo professionale — PR08

Il profilo attuale è **Software Developer junior**, in crescita verso competenze intermedie, con **circa tre anni di percorso nel settore IT** fra formazione, sviluppo e docenza. Il precedente lavoro finanziario è raccontato separatamente e non conta come esperienza nello sviluppo. **Diventare AI Engineer è un obiettivo**, non un ruolo già ricoperto. La laurea **L-31 in Artificial Intelligence** è indicata come direzione universitaria, non come titolo conseguito o iscrizione già confermata.

RustOS e Il Presidente restano iniziative in sviluppo senza collegamenti ai repository privati. I progetti GitHub vengono aggiornati progressivamente; i certificati Google/Coursera non hanno ancora titoli inventati.
