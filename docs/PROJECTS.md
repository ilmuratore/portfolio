# Catalogo e case study — PR04

La sezione progetti ha una struttura completa ma **non contiene ancora progetti reali**. I dati temporanei sono esplicitamente marcati come dimostrativi, e le schede provvisorie sono `noindex`.

## Rotte

| Percorso | Utilizzo |
| --- | --- |
| `/` | Homepage, tre progetti selezionati |
| `/projects` | Catalogo filtrabile |
| `/projects/[slug]` | Case study editoriali (5 capitoli) |

Tutte le rotte sono compatibili con Next.js App Router ed esportazione statica: `generateStaticParams()` definisce le pagine concrete durante la build, `dynamicParams = false` evita pagine fuori catalogo.

## Contenuti centralizzati

`src/content/projects.mjs` definisce la collezione `projects`. Ogni elemento include:

- `id`, `slug`, `index`, `title`
- `category`, `categoryId`, `preview`
- `description`, `intro`, `tags`
- `featured`, per homepage
- `sections.context`, `.challenge`, `.solution`, `.architecture`, `.results`

`featuredProjects`, `getProjectBySlug()` e `getAdjacentProjects()` derivano tutti dallo stesso array. La homepage non mantiene copie di testi né immagini.

## Componenti

- `src/app/components/v2/ProjectCard.jsx` — card linkabile, descrizioni e tag.
- `src/app/components/v2/ProjectCatalog.jsx` — filtro categorie (unico Client Component aggiunto).
- `src/app/components/v2/SoftwareVisuals.jsx` — preview illustrative HTML/CSS riutilizzate.
- `src/app/components/v2/SitePageFrame.jsx` — layout condiviso per pagine interne.
- `src/app/projects/page.js` — catalogo.
- `src/app/projects/[slug]/page.js` — schede.
- `src/app/globals.css` — elementi editoriali responsive.

## Passaggio ai contenuti reali

Per pubblicare un progetto:

1. Selezionare un repository effettivamente documentato.
2. Scrivere contesto, problema, soluzione, architettura, verifica/risultati senza numeri inventati.
3. Sostituire l'anteprima CSS con screenshot reali ottimizzati o diagrammi verificati.
4. Inserire stack e collegamenti reali solo dopo averli controllati.
5. Aggiornare `slug` a una URL definitiva evitando rotture nei collegamenti.
6. Rimuovere la dicitura demo dai componenti **solo quando i dati non sono più placeholder**.
7. Rimuovere `robots: { index: false, follow: false }` dalle pagine validate, aggiungere le nuove URL alla sitemap e verificare canonical/OG.

Non aggiungere una pagina finta per ogni repository. Si può avere un catalogo di progetti selezionati e case study approfonditi solo per i lavori rappresentativi.

## Hosting

Il progetto non viene pubblicato da questa PR. L'esportazione statica si verifica ora localmente con `PORTFOLIO_STATIC_EXPORT=1`, controllando le pagine generate sotto `out/projects/...`. I workflow GitHub Actions sono rimossi su richiesta. I link interni devono usare `next/link` per ricevere automaticamente il base path `/portfolio` su GitHub Pages.
