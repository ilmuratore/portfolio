# Roadmap — Portfolio v2

Tutte le modifiche al sorgente passano da pull request; la pubblicazione avviene dopo il merge con uno script di export statico locale.

| Fase | Ambito | Stato |
| --- | --- | --- |
| PR01–PR05 | Foundation, design, responsive, pagine | Mergiate |
| PR06 | Next.js 16, React, Tailwind, hardening | Mergiata |
| PR07 | Tre case study da repository pubblici | Mergiata |
| PR08 | Profilo, esperienze, competenze, formazione | Mergiata |
| PR09A | Icone SVG, favicon e social image | Mergiata |
| PR10 | Junior developer, 3 anni IT e obiettivo AI Engineer | Mergiata |
| **PR11** | **Preparazione release su GitHub Pages: SEO, verifica e deploy manuale** | **In review** |
| Evoluzione continua | Screenshot, certificazioni e nuove schede dei repository | Iterativa |
| Opzionale | Dominio personalizzato con configurazione dedicata | Successiva |

## Politica editoriale

- Profilo attuale junior, in crescita; AI Engineer è un obiettivo e non un titolo già acquisito.
- La laurea L-31 è un obiettivo universitario, non un titolo conseguito.
- Esperienza finanziaria e gestionale distinta dall'esperienza di sviluppo.
- Le schede dei repository possono descrivere lavori formativi o prototipi in miglioramento.
- Le anteprime illustrate non sono spacciate per screenshot.
- Le certificazioni restano senza titoli finché non vengono fornite e verificate.
- RustOS e Il Presidente non vengono collegati a repository privati.

## Hosting

GitHub Pages (repository pubblico) consente l'hosting statico gratuito con URL `https://ilmuratore.github.io/portfolio/`. La release avviene da `gh-pages`, popolato dallo script `npm run deploy:pages`; il repository non contiene workflow GitHub Actions personalizzati. I processi interni GitHub Pages possono produrre run nella sezione Actions del servizio.

Vercel non è più usato dal codice; la rimozione dell'integrazione esterna richiede una verifica nelle impostazioni Vercel e nelle GitHub Apps. Nessun dominio acquistato o deployment live viene creato automaticamente con la PR11.
