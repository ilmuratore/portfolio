# Catalogo e case study — PR07

## Repository selezionati per la review

Sono stati usati tre repository **pubblici** dell'account GitHub `ilmuratore`. I testi si basano sulla documentazione presente nei rispettivi repository, senza informazioni su progetti privati o metriche inventate.

| Progetto | Repository | Documentazione verificata |
| --- | --- | --- |
| Banca Python | https://github.com/ilmuratore/banca-python | `README.md`, `docs/ARCHITECTURE.md` |
| Python Developer AI | https://github.com/ilmuratore/python-developer-ai | `README.md`, `PROJECT_AUDIT.md`, `pyproject.toml` |
| AziendaJava | https://github.com/ilmuratore/AziendaJava | `README.md`, `pom.xml` |

Questa selezione può essere cambiata nella review; non è una dichiarazione che siano i soli o i migliori progetti del portfolio.

## Rotte

- `/projects`: catalogo filtrabile per Data & Backend, AI, Gestionali.
- `/projects/banca-python`
- `/projects/python-developer-ai`
- `/projects/azienda-java`

Le pagine sono compilate staticamente con `generateStaticParams()`; il routing di Next.js gestisce correttamente il base path di GitHub Pages.

## Dati

`src/content/projects.mjs` è la sorgente unica. Ogni scheda contiene:

- `id`, `slug`, `index`, `title`, `categoryId`, `category`
- `description`, `intro`, `tags`, `featured`, `status`
- `repositoryUrl`, `documentationUrl` verificati
- `preview`: visual dimostrativo CSS, non screenshot del progetto
- `architectureNodes`: 3 componenti sintetizzati dalla documentazione, non un diagramma ufficiale
- `sections`: context, challenge, solution, architecture, results

`ProjectCard` mostra la scheda nel catalogo e nella homepage. La pagina case study mostra i link GitHub, il contesto tecnico e i limiti documentati.

## Limiti e verifiche prima del rilascio

- Tutti e tre i repository sono reali e pubblici; le schede non asseriscono risultati di produzione o metriche non documentate.
- Python Developer AI riporta M01 completata e M02 stabilizzata; M03 non viene presentata come implementata.
- Banca Python è un simulatore educativo e non gestisce operazioni bancarie reali.
- Le immagini illustrate in HTML/CSS sono segnaposto. Sostituirle solo con screenshot reali e revisionati.
- Le pagine restano `noindex` fino alla revisione complessiva del sito.
- I progetti privati non vengono citati o pubblicati.
- Per ulteriori progetti, aggiungere dati reali, aggiornare i test e verificare i link alle fonti.

## Controlli locali

```bash
npm ci
npm test
npm run lint
npm run build
npm run verify:static
```

Nessun workflow GitHub Actions o deploy automatico è stato introdotto.
