# Identità visiva e icone — PR09A

Il portfolio resta flat/editoriale, con crema, terracotta, oliva e inchiostro. Gli asset sono locali, senza CDN di icone e senza dipendenze npm aggiuntive.

## Icone tecnologia

I file vettoriali sono in `public/icons/tech/*.svg`. Sono stati recuperati dal repository [Simple Icons](https://github.com/simple-icons/simple-icons), ramo `develop`, il 15 ottobre 2026 e usati nella loro geometria originale, con solo l'aggiunta di una tinta monocromatica attenuata compatibile col design.

Le icone fornite rappresentano marchi di terzi **solo per identificare correttamente tecnologie e piattaforme**. Simple Icons adotta CC0 per il progetto, ma singole icone possono avere licenze o linee guida di marchio specifiche: leggere il [disclaimer ufficiale](https://github.com/simple-icons/simple-icons/blob/develop/DISCLAIMER.md). Non rivendichiamo alcuna affiliazione, patrocinio o proprietà dei marchi. Se emergono restrizioni specifiche su un logo, sostituirlo con un'icona generica.

Sono presenti loghi per Python, OpenJDK, JavaScript, TypeScript, React, Angular, Spring Boot, FastAPI, PostgreSQL, Pandas, Git, GitHub, Node.js, Unity, Linux, Hibernate, HTML5, SQLAlchemy, Pydantic, Next.js, Google, Coursera, .NET e Rust.

Il mapping leggibile è in `src/content/icon-map.mjs`, chiave = nome visualizzato e valore = basename SVG. Se una tecnologia non ha un marchio locale, `TechIcon` usa un'icona UI generica: **mai un'immagine rotta o scaricata da siti esterni**.

## Componenti

- `TechIcon.jsx`: restituisce `next/image` SVG locale oppure fallback con `UiIcon.jsx`. Prependere `NEXT_PUBLIC_BASE_PATH` mantiene le immagini funzionanti nel percorso `/portfolio` di GitHub Pages.
- `TechBadge.jsx`: chip testuale + icona. Il nome rimane leggibile e accessibile anche se l'immagine non viene mostrata.
- `UiIcon.jsx`: simboli vettoriali minimali per processi, documentazione, link e contatti. Non usa una libreria runtime.
- `ProfileSections.jsx`: aree competenze, certificazioni Google/Coursera e contatti.
- `ProjectCard.jsx` e `projects/[slug]/page.js`: chip e preview con logo della tecnologia primaria.
- `SiteFooter.jsx`: collegamenti esterni identificati da icone.

Le anteprime dell'editor, terminale e dashboard restano **illustrazioni**, non screenshot dei repository reali.

## Asset originali

- `src/app/icon.svg`: monogramma SI. con fondo inchiostro e punto terracotta; Next.js lo usa come favicon.
- `src/app/opengraph-image.jsx`: immagine social **1200×630 PNG**, resa statica in fase di build tramite API `ImageResponse` inclusa in Next.js.
- `src/app/twitter-image.jsx`: usa la medesima composizione per Twitter/X.

Il nuovo PNG è un asset di presentazione generale e non contiene screenshot o risultati non documentati. Non effettua richieste remote e non richiede servizi server durante le visite. **Verificare comunque il risultato di `npm run verify:static` dopo la migrazione Next 16 prima del merge.**

## Verifiche

```bash
npm ci
npm test
npm run lint
npm run build
npm run verify:static
```

Controllare su smartphone e desktop tutte le aree skill, i chip progetto, i contatti, la favicon e le immagini social generate nell'output statico. Per le icone nel browser assicurarsi che il path inizii con `/portfolio/icons/tech/` quando `NEXT_PUBLIC_BASE_PATH=/portfolio`.

La PR **non abilita** GitHub Actions, Vercel, pubblicazione o indicizzazione e non richiede nuove dipendenze npm.
