# Checklist di rilascio — GitHub Pages

## Prima della pubblicazione

- [ ] Le pagine principali sono corrette: homepage, About, contatti, catalogo e tre case study.
- [ ] Profilo junior e obiettivo AI Engineer corretti; L-31 non dichiarata come laurea conseguita.
- [ ] Contenuti incompleti (certificati, screenshot) sono dichiarati apertamente come in aggiornamento o illustrativi.
- [ ] I repository collegati sono pubblici, accessibili e descritti correttamente.
- [ ] Navigazione tastiera e layout a 360, 390, 768, 1024 e 1440 px verificati.
- [ ] `npm ci`, `npm test`, `npm run lint`, `npm run build` superati.
- [ ] `npm run verify:static` superato (preview noindex).
- [ ] `npm run verify:pages` superato (build pubblica, sitemap, robots, metadata indicizzabili dei **tre case study** e asset).
- [ ] Il deploy non dipende da Docker; file obsoleti e test non utilizzati non sono presenti.
- [ ] `npm run security:check`, `npm run audit`, `npm run audit:prod` analizzati. Non affermare che i problemi sono risolti finché non lo sono.

## Pubblicazione

- [ ] Merge della PR di release su main.
- [ ] `git switch main`, `git pull --ff-only origin main`, `npm ci`.
- [ ] `npm run deploy:pages` da working tree pulito.
- [ ] GitHub repo Settings → Pages → Deploy from a branch → gh-pages → /(root).
- [ ] Controllare https://ilmuratore.github.io/portfolio/ e pagine interne.
- [ ] Verificare `/portfolio/robots.txt`, `/portfolio/sitemap.xml` e PNG Open Graph.
- [ ] Disconnettere/cancellare il vecchio progetto Vercel e rimuovere la relativa GitHub App dal repository, se ancora collegata.

## Dopo il lancio

- [ ] Aggiornare i repository e le schede progetto progressivamente.
- [ ] Aggiungere certificati verificati e screenshot autentici.
- [ ] Solo se desiderato, acquistare e configurare un dominio personalizzato.
- [ ] Rieseguire i test e pubblicare nuovamente il ramo gh-pages dopo ogni merge.

**Nessuna GitHub Actions personalizzata e nessun Vercel introdotto dal rilascio.**
