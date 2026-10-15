# Hosting del portfolio — GitHub Pages

## Scelta: GitHub Pages gratuito

Il repository `ilmuratore/portfolio` è pubblico. Su GitHub Free è possibile pubblicare gratuitamente siti statici di repository pubblici. Il portfolio non richiede un server Node per le pagine pubbliche; Next.js 16 produce un export statico nella cartella `out/`.

- URL previsto: **https://ilmuratore.github.io/portfolio/**
- Hosting: **€0**, nei limiti e nelle condizioni del servizio.
- Dominio personalizzato: **facoltativo** e, se acquistato, soggetto a costo del registrar.
- GitHub Pages offre HTTPS. I limiti attuali includono sito pubblicato fino a 1 GB e soft limit di banda 100 GB/mese.
- Non interpretare il piano gratuito come una garanzia di disponibilità e condizioni immutate per sempre.

Riferimenti: [GitHub Pages, fonte di pubblicazione](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [Limiti Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits), [Export statico Next.js](https://nextjs.org/docs/app/guides/static-exports).

## Due modalità di build

Le due modalità sono **distinte** e non riutilizzano i metadata SEO della modalità sbagliata.

### Anteprima protetta (non pubblicare)

```bash
npm ci
npm run verify
npm run verify:static
```

`verify:static` usa `PORTFOLIO_STATIC_EXPORT=1`, `NEXT_PUBLIC_BASE_PATH=/portfolio` e `NEXT_PUBLIC_PORTFOLIO_PUBLISHED=false`.

Questa modalità genera `noindex` e `robots.txt` con divieto di scansione. Serve per verificare il sito, **non** per la release indicizzabile.

### Release GitHub Pages

```bash
npm run verify:pages
```

Il comando compila con:

- `PORTFOLIO_STATIC_EXPORT=1`
- `NEXT_PUBLIC_BASE_PATH=/portfolio`
- `NEXT_PUBLIC_SITE_URL=https://ilmuratore.github.io/portfolio`
- `NEXT_PUBLIC_PORTFOLIO_PUBLISHED=true`

Produce `out/`, genera `.nojekyll` (per i file in `_next/`) e verifica: homepage, About, contatti, catalogo, case study, asset, `robots.txt`, sitemap, metadata social e assenza di `noindex` nelle pagine approvate.

**Immagini social in Next.js 16:** la build genera le route `/opengraph-image` e `/twitter-image`, che nell'export statico possono essere file senza estensione. Lo script `scripts/prepare-social-assets.mjs` verifica che i loro contenuti siano PNG 1200×630, ne crea copie `out/opengraph-image.png` e `out/twitter-image.png` e modifica i metadata HTML per puntare ai PNG con estensione. Questo assicura URL con MIME prevedibile su GitHub Pages. Il controllo `check-pages.mjs` verifica anche queste immagini e i relativi collegamenti.


Le certificazioni prive di titolo verificato rimangono esplicitamente contrassegnate come "in aggiornamento"; gli screenshot non ancora disponibili restano dichiarati come anteprime illustrative.

## Come pubblicare senza workflow nel repository

**Prima verificare e mergiare la PR della release.** Non pubblicare da un branch di sviluppo.

1. Eseguire localmente:

   ```bash
   git switch main
   git pull --ff-only origin main
   npm ci
   npm test
   npm run lint
   npm run security:check
   npm run audit:prod
   npm run deploy:pages
   ```

2. `deploy:pages` accetta solo `main` con working tree pulito. Compila l'export pubblico, verifica i file, crea un repository Git temporaneo fuori dalla cartella del sorgente e aggiorna il branch `gh-pages` con i soli artefatti di `out/`. Non modifica `main`.

3. Aprire [Settings → Pages](https://github.com/ilmuratore/portfolio/settings/pages) del repository, scegliere **Source: Deploy from a branch**, **Branch: gh-pages**, **Folder: /(root)** e salvare. L'eventuale primo deploy deve essere stato eseguito almeno una volta perché il branch esista nel menu.

4. Verificare il sito all'URL previsto, comprese le URL `/about/`, `/contact/`, `/projects/` e le pagine case study; controllare CSS, icone SVG, social preview e `robots.txt`.

5. Per i successivi aggiornamenti: fare merge delle PR su `main`, aggiornare il clone locale ed eseguire nuovamente `npm run deploy:pages`.

**Nota sul processo interno:** non vengono creati workflow in `.github/workflows`. GitHub Pages esegue tuttavia un proprio workflow gestito da GitHub anche quando si pubblica da un branch. Questo è il comportamento documentato da GitHub, non una CI o un processo di build Next configurati nel repository.

Lo script usa `--force-with-lease` quando il branch `gh-pages` esiste, per impedire la sovrascrittura se il remoto è cambiato tra verifica e invio. Non usare manualmente `git push --force` sul branch `main`.

## Separarsi completamente da Vercel

Dipendenze Vercel, Analytics, URL di fallback e workflow del precedente setup sono già stati rimossi dal repository. **Questo non cancella il progetto ospitato su Vercel né revoca l'accesso dell'integrazione GitHub.**

Dopo aver verificato il sito GitHub Pages:

1. Nella dashboard Vercel, aprire il vecchio progetto, disconnettere il repository in **Settings → Git** (se presente).
2. In **Settings → General**, eliminare il progetto Vercel se non serve più.
3. In GitHub, aprire **Settings → Applications → Installed GitHub Apps**, individuare Vercel e rimuovere l'accesso al repository `portfolio`. Non revocare indiscriminatamente l'accesso a repository usati da altri progetti.
4. Se un dominio personale puntava a Vercel, rimuovere o sostituire i record DNS relativi soltanto quando verrà configurato il dominio definitivo.

Queste operazioni sui servizi esterni devono essere eseguite dal proprietario dell'account; **non sono state completate via questa PR**.

## Dominio personalizzato, in futuro

GitHub Pages permette domini personalizzati. Con `simoneiengo.it` (o altro dominio) si eliminerebbe il `basePath=/portfolio`, ma serve una nuova build e riconfigurare DNS, Pages e canonical/OG. Il dominio registrato è normalmente a pagamento. **Per iniziare non serve comprarlo.**

## Limiti

- GitHub Pages ospita HTML, JS, CSS, SVG e immagini; **non esegue API Next.js, Server Actions o servizi di invio email**.
- `next/image` è impostato per export statico senza ottimizzazione dinamica.
- Le intestazioni HTTP personalizzate di `next.config.js` non sono fornite da Pages: la sicurezza si basa anche sul codice frontend statico e sulle impostazioni HTTPS del provider.
- L'assenza di avvisi di audit non può essere dichiarata finché `npm audit` e `npm audit:prod` non sono stati verificati in locale.
