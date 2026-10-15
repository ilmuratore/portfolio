# Architettura attuale — Portfolio statico

## Obiettivo

Portfolio di Simone Iengo con Next.js 16 App Router, React 19 e Tailwind CSS 4. Il sito è servito come **HTML/CSS/JS statici** da GitHub Pages. Non richiede Docker, un server Node, API REST proprie, database o servizi di invio email.

## Componenti

```text
src/app/
  layout.js                       Metadata generali e font Geist locale
  page.js                         Homepage
  about/page.js                   Profilo e percorso
  contact/page.js                 Contatti pubblici
  projects/page.js                Catalogo filtrabile
  projects/[slug]/page.js         Case study prerenderizzati
  robots.js, sitemap.js           SEO condizionale
  opengraph-image.jsx             Immagine OG prerenderizzata
  twitter-image.jsx               Immagine Twitter prerenderizzata
  icon.svg                        Favicon
  components/v2/                 UI editoriale condivisa
src/content/
  projects.mjs                    Catalogo, filtri e schede
  profile.mjs                     Testi e competenze
  process.mjs                     Le quattro fasi del processo
  icon-map.mjs                    Marchi tecnologici in SVG
src/config/site.js                URL e stato di pubblicazione
public/icons/tech/                SVG locali
scripts/                          Test, export, preparazione social e deploy
tests/                            Test Node e regressioni
```

## Scelte architetturali

- Le pagine e la maggior parte delle sezioni sono Server Components; menu e filtri usano componenti client.
- I dati sono locali e versionati: nessuna richiesta a un CMS o database in fase di visita.
- `generateStaticParams()` fornisce gli slug noti dei case study.
- `next/font/local` include solo il font Geist effettivamente utilizzato.
- Le icone SVG sono file locali; per le tecnologie senza logo c'è un fallback grafico generico.
- Le immagini social vengono generate durante la build, verificate come PNG e distribuite con estensione `.png`.
- Il design rimane CSS responsive con palette coordinata; le anteprime dei progetti sono dichiaratamente illustrative.

## SEO: due modalità distinte

`NEXT_PUBLIC_PORTFOLIO_PUBLISHED=false` (predefinito) produce un'anteprima non indicizzabile. La build per Pages imposta esplicitamente `true`, quindi homepage, About, contatti, catalogo e **ogni case study pubblicato** possono essere indicizzati e compaiono nella sitemap.

La funzione `generateMetadata()` delle pagine progetto deve rispettare la stessa condizione; il controllo `scripts/check-pages.mjs` verifica che i file HTML pubblicati non contengano `noindex`. Le pagine inesistenti mantengono `noindex`.

## Deploy

`npm run deploy:pages` viene lanciato localmente solo su `main` pulito. Verifica l'export e pubblica gli artefatti statici su `gh-pages` tramite un repository Git temporaneo, senza toccare il sorgente e senza workflow personalizzati.

Docker non è previsto: sono stati eliminati il vecchio `Dockerfile` e `.dockerignore`, che avviavano un server `next start` superfluo per Pages.

## Verifica

```bash
npm ci
npm run verify
npm run verify:static
npm run verify:pages
```

Il controllo visivo in browser e l'audit di sicurezza restano necessari prima della pubblicazione.
