# Simone Iengo — Portfolio

Portfolio personale con Next.js 16, React 19 e Tailwind CSS 4. Design editoriale responsive, palette autunnale e contenuti professionali verificabili.

La presentazione è orientata al ruolo di **Software Developer junior** con esperienza Java, Spring Boot, Python e docenza. **AI Engineer è un obiettivo professionale**, non un incarico già ricoperto. La L-31 in Artificial Intelligence è un obiettivo formativo, non una laurea conseguita.

## Avvio locale

Richiesti Node.js e npm compatibili con Next.js 16:

```bash
npm ci
npm run dev
```

Aprire http://localhost:3000.

## Qualità

```bash
npm test
npm run lint
npm run build
npm run verify:static
npm run verify:pages
npm run security:check
npm run audit
```

- `verify:static` genera un'**anteprima** con `noindex` e controllo di pagine, link e asset.
- `verify:pages` genera la **release pubblica** e verifica sitemap, metadata SEO, PNG social, icone e percorsi con base path.
- Eventuali avvisi `npm audit` devono essere valutati, non nascosti con `npm audit fix --force`. Dettagli in [Sicurezza](docs/SECURITY.md).

## Pubblicazione gratuita con GitHub Pages

Non sono configurati Vercel, Docker o workflow GitHub Actions personalizzati. Il sito viene compilato in statico e pubblicato manualmente nel branch `gh-pages`, **solo dopo il merge su `main`**.

```bash
git switch main
git pull --ff-only origin main
npm ci
npm run deploy:pages
```

In [Settings → Pages](https://github.com/ilmuratore/portfolio/settings/pages) scegliere **Deploy from a branch → gh-pages → /(root)**. URL previsto: https://ilmuratore.github.io/portfolio/.

Non eseguire il deploy da branch di sviluppo. I processi interni di GitHub Pages possono comparire nella sezione Actions, pur senza workflow personalizzati nel repository.

## Organizzazione

```text
src/
  app/                    Pagine, componenti, font e asset social Next.js
  config/site.js          Identità pubblica, URL e SEO
  content/
    projects.mjs          Repository pubblici e case study
    profile.mjs           Carriera, competenze, contatti e formazione
    process.mjs           Fasi del metodo di lavoro
    icon-map.mjs          Tecnologie e relative icone
public/icons/tech/        Loghi SVG locali
scripts/                  Build, export, controlli e deploy
tests/                    Test di regressione
docs/                     Architettura, design, hosting e sicurezza
```

I tre case study attuali presentano Banca Python, Python Developer AI e AziendaJava. Le anteprime CSS sono **illustrative** e alcuni repository sono ancora in evoluzione. RustOS e Il Presidente restano progetti in sviluppo senza collegamenti a repository privati. Certificazioni e screenshot saranno aggiunti progressivamente quando verificati.

## Documentazione

- [Architettura](docs/ARCHITECTURE.md)
- [Design system](docs/DESIGN_SYSTEM.md)
- [Icone e asset](docs/VISUAL_ASSETS.md)
- [Progetti](docs/PROJECTS.md)
- [Profilo professionale](docs/PROFILE.md)
- [Hosting e rimozione di Vercel](docs/HOSTING.md)
- [Sicurezza](docs/SECURITY.md)
- [Checklist rilascio](docs/RELEASE_CHECKLIST.md)
- [Roadmap](docs/ROADMAP.md)
