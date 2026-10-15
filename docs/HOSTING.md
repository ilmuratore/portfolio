# Hosting statico — Portfolio v2

**Hosting non ancora scelto né attivato.** Il repository è preparato per un'esportazione statica indipendente da un servizio specifico. Vercel non è più integrato nel codice.

## Opzioni

| Destinazione | Note |
| --- | --- |
| GitHub Pages | Hosting statico gratuito per repository pubblici secondo le condizioni attuali; dominio GitHub oppure personalizzato |
| Cloudflare Pages | Hosting statico con limiti del relativo piano gratuito |
| Hosting statico su server proprio | Maggior controllo, ma sicurezza, manutenzione e costi del server restano responsabilità del proprietario |

Il dominio personalizzato ha generalmente un costo di rinnovo. Nessun piano gratuito è garantito a tempo indeterminato.

## Test della build statica

La build normale resta possibile:

```bash
npm ci
npm test
npm run build
```

Per GitHub Pages, con repository `portfolio` e URL di progetto `/portfolio`:

```bash
PORTFOLIO_STATIC_EXPORT=1 NEXT_PUBLIC_BASE_PATH=/portfolio NEXT_PUBLIC_SITE_URL=https://ilmuratore.github.io/portfolio npm run build
```

La build statica è generata in `out/` e comprende homepage, pagine About/Contact e case study costruiti con `generateStaticParams()`. Questo comando **non pubblica nulla**.

Se viene scelto un dominio personalizzato servono `NEXT_PUBLIC_SITE_URL=https://dominio.example` e `NEXT_PUBLIC_BASE_PATH` vuoto. Per il deployment si sceglierà successivamente tra caricamento manuale degli artefatti e un workflow di pubblicazione dedicato.

## GitHub Actions rimosse

Su richiesta sono eliminati i workflow GitHub Actions presenti in `.github/workflows`; non eseguiamo test o deploy automaticamente. Prima di ogni merge eseguire i test locali e la build. Le run storiche di Actions rimangono visibili su GitHub, a meno di operazioni ulteriori nelle impostazioni del repository.

## Limiti dell'export statico

- Nessun endpoint POST o server in esecuzione sul provider statico.
- Il modulo email preesistente è già stato rimosso; in PR05 vengono mostrati soltanto GitHub e LinkedIn.
- Le pagine progetto sono prerenderizzate in fase di build.
- Immagini e video vanno ottimizzati prima della pubblicazione; l'ottimizzazione dinamica di `next/image` non è disponibile.
- Gli header HTTP personalizzati in `next.config.js` non vengono applicati da GitHub Pages.
- Impostare correttamente canonical e sitemap quando si sceglie il dominio definitivo.

## Disconnessione esterna del vecchio provider

Eliminare dipendenze e codice dal repository **non disconnette il progetto remoto** da un provider già associato. Se il vecchio provider continua a effettuare deployment automatici, scollegare il repository nelle impostazioni del servizio esterno o cancellare il relativo progetto. Queste operazioni non sono eseguite dalle modifiche al codice.
