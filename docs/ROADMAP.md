# Roadmap — Portfolio

Tutte le modifiche al codice passano da pull request. La pubblicazione è manuale, con export statico verso GitHub Pages.

| Fase | Ambito | Stato |
| --- | --- | --- |
| PR01–PR06 | Fondamenta, design, accessibilità, Next.js 16 e pulizia Vercel | Mergiate |
| PR07 | Case study di repository pubblici | Mergiata |
| PR08 | Profilo, formazione, competenze e certificazioni | Mergiata |
| PR09A | Loghi SVG, favicon e immagini social | Mergiata |
| PR10 | Profilo junior e obiettivo AI Engineer | Mergiata |
| PR11 | Preparazione hosting statico su GitHub Pages | Mergiata |
| PR12 | Correzioni metadata Twitter e test canonical | Mergiata |
| PR13 | Export PNG social e normalizzazione URL | Mergiata |
| **PR14** | **Correzione SEO dei case study, rimozione Docker e file obsoleti** | **In revisione** |
| Evoluzione successiva | Certificati, screenshot reali e nuovi progetti pubblici | Iterativa |
| Facoltativo | Dominio personalizzato | Da valutare |

## Requisiti del primo rilascio

1. I test `npm run verify`, `npm run verify:static` e `npm run verify:pages` devono superare i controlli locali.
2. La build Pages è indicizzabile: niente `noindex` sui tre case study pubblici.
3. Le immagini social vengono pubblicate come PNG validi e tutti i link hanno `basePath=/portfolio`.
4. Il profilo distingue chiaramente esperienza IT junior, esperienza precedente finanziaria e obiettivo futuro AI Engineer.
5. Le anteprime CSS restano identificate come illustrative e le certificazioni senza titolo come in aggiornamento.
6. Gli avvisi `npm audit` sono conosciuti e documentati; nessun downgrade forzato delle dipendenze.
7. Il deploy avviene soltanto da `main`, senza Docker, Vercel o workflow GitHub Actions personalizzati.

Dopo il primo deploy si aggiornano gradualmente case study, certificati e asset veri, senza riscrivere di nuovo il sito.
