# Strategia hosting — Portfolio v2

**Decisione non ancora presa:** la pubblicazione è rimandata fino al completamento delle pagine e dei contenuti. La CI può soltanto *verificare* la build statica: non effettua alcun deployment.

## Possibili destinazioni

| Soluzione | Compatibile con sito statico | Note |
| --- | --- | --- |
| GitHub Pages | Sì | Pubblico e gratuito su GitHub Free; URL iniziale `ilmuratore.github.io/portfolio/`; possibile dominio personalizzato |
| Cloudflare Pages | Sì | Verificare quote, termini e build/deploy quando si pubblica |
| Vercel | Sì | Può ospitare la build Next.js corrente; eventuali funzionalità server restano dipendenti dalla piattaforma |
| VPS | Sì | Maggiore controllo ma server, sicurezza, aggiornamenti e costi a carico del proprietario |

Le condizioni commerciali possono cambiare: non promettere hosting «gratuito per sempre». Il dominio personale, se acquistato, ha normalmente un costo di rinnovo.

## Export statico (già testabile, NON pubblica nulla)

Il progetto mantiene una build Next.js standard:

```bash
npm ci
npm test
npm run build
```

Per verificare l'esportazione statica come **GitHub Pages di progetto** (`/portfolio/`):

```bash
PORTFOLIO_STATIC_EXPORT=1 NEXT_PUBLIC_BASE_PATH=/portfolio NEXT_PUBLIC_SITE_URL=https://ilmuratore.github.io/portfolio npm run build
```

Su PowerShell impostare prima le tre variabili con `$env:...`. La cartella risultante è `out/`, da considerare un artefatto e non da committare. Per un dominio proprio, **non impostare** `NEXT_PUBLIC_BASE_PATH` e valorizzare `NEXT_PUBLIC_SITE_URL` con il dominio reale.

La CI su pull request verifica entrambe le compilazioni, ma non distribuisce `out/`: servirà un workflow separato abilitato solo al rilascio finale. Per GitHub Pages si potranno utilizzare `actions/upload-pages-artifact` e `actions/deploy-pages` dopo avere configurato Pages nelle impostazioni del repository.

## Vincoli Next.js

- Il sito pubblico può utilizzare componenti server calcolati **durante la build**, ma non richiedere un server alla visita.
- Le pagine dinamiche dei case study richiederanno `generateStaticParams()` oppure una generazione equivalente per creare HTML statico per ogni progetto.
- Eventuali immagini devono essere già ottimizzate oppure utilizzare un image loader compatibile; il default ottimizzatore di Next.js non è disponibile in export.
- Niente route POST, Server Actions o logiche che richiedono header/cookie dinamici.
- Il vecchio endpoint POST `/api/send`, non collegato alla homepage v2, è rimosso in PR03. Per il form finale valutare mailto, servizi form esterni o backend separato.
- Le security headers definite in `next.config.js` valgono solo con server Next.js; un hosting statico richiede la propria configurazione se si desiderano header personalizzati.
- La URL canonica e la sitemap seguono `NEXT_PUBLIC_SITE_URL`, che deve includere `/portfolio` quando si usa l'URL GitHub Pages di progetto.

## Niente deploy prima della release

La PR03 **non configura o attiva GitHub Pages**. L'attuale errore di build su Vercel si affronterà soltanto se decideremo di usarlo. Prima di pubblicare: contenuti verificati, QA mobile, dominio, policy di contatto e SEO.
