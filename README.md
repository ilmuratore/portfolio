# Simone Iengo — Portfolio v2

Portfolio Next.js con design editoriale minimale e palette autunnale. **Stato: sviluppo.** Il catalogo presenta tre repository pubblici reali; biografia, processo, competenze e anteprime grafiche restano provvisori. Il sito non è ancora destinato all'indicizzazione o alla pubblicazione.

## Stack

Next.js 16.4.1, React 19.3.1, Tailwind CSS 4.3.3, ESLint Flat Config, componenti server per le pagine statiche e componenti client limitati a menu e filtri. Le anteprime di codice e dashboard sono illustrative.

## Avvio locale

Richiesti Node.js 22 e npm:

```bash
npm run upgrade:security
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

**Attenzione:** dopo la migrazione a Next.js 16, il lockfile va rigenerato tramite npm: il precedente commit usava Next.js 15.5.28, React 19.0.6 e Tailwind 3. Prima di considerare il progetto pronto per la pubblicazione è necessario eseguire:

```bash
npm run upgrade:security
npm ci
npm run release:check
```

Il comando di upgrade richiede accesso npm e modifica `package.json` e `package-lock.json`. Leggere [SECURITY.md](docs/SECURITY.md) per i dettagli e includere il lockfile rigenerato nel commit. **Non effettuare un deploy pubblico prima della verifica.**

## Struttura dei contenuti

- `src/content/projects.mjs` — schede reali basate su repository pubblici: Banca Python, Python Developer AI, AziendaJava
- `src/content/profile.mjs` — About, competenze e contatti
- `src/content/placeholder.mjs` — processo
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
- [Progetti](docs/PROJECTS.md)
- [Hosting](docs/HOSTING.md)
- [Sicurezza](docs/SECURITY.md)
- [Checklist rilascio](docs/RELEASE_CHECKLIST.md)
- [Roadmap](docs/ROADMAP.md)

## Migrazione PR06: Next.js 16

Le versioni sono definite in `package.json`, ma **prima di verificare o fare il merge** va aggiornato e committato il lockfile con `npm run upgrade:security`.

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
