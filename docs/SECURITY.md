# Sicurezza e dipendenze — PR06

## Stato al 15 ottobre 2026

Il portfolio è predisposto per **hosting statico**. Non ha endpoint POST, sessioni o API server pubbliche, ma le dipendenze di build devono comunque essere aggiornate e controllate.

L'audit automatico precedente (PR05) aveva segnalato **32 vulnerabilità** prima della rimozione di altre dipendenze. Non considerare questo numero aggiornato: va ripetuto dopo l'installazione.

Sono state rimosse da `package.json` sei dipendenze inutilizzate: `@heroicons/react`, `framer-motion`, `react-animated-numbers`, `react-type-animation`, `nodemailer` e `resend`. Gli indici diretti sono stati rimossi anche dal lockfile, ma per ripulire completamente le dipendenze transitive serve rigenerare il lockfile con npm.

## Aggiornamento richiesto prima del merge finale / pubblicazione

Il commit di partenza usa **Next.js 15.5.12** e **React 19.0.0**. Non sono versioni sufficienti per considerare risolti gli advisory del 2026.

Il 14 ottobre 2026 è stato pubblicato un advisory critico Next.js; tra le versioni patched figura **15.5.28**. Riferimento ufficiale: https://github.com/vercel/next.js/security/advisories/GHSA-2464-fhr4-w9xw

Gli advisory React/Server Components pubblicati nel maggio 2026 indicano **React 19.0.6** come versione corretta del ramo 19.0.x. Riferimento: https://vercel.com/changelog/next-js-may-2026-security-release

Per rigenerare un `package-lock.json` coerente su Windows, Linux o macOS:

```bash
npm run upgrade:security
npm ci
npm test
npm run lint
npm run build
npm run verify:static
npm run security:check
npm run audit
```

Il comando `upgrade:security` installa esattamente:

- `next@15.5.28`
- `eslint-config-next@15.5.28`
- `react@19.0.6`
- `react-dom@19.0.6`

Questa operazione **richiede accesso al registro npm**. Il lockfile dovrà essere incluso nello stesso commit del `package.json`.

Controllare gli output di `npm audit` e `npm audit --omit=dev`. Non lanciare `npm audit fix --force` senza revisione: potrebbe aggiornare versioni major e rompere Next.js. Una versione minima patched NON garantisce assenza di ulteriori vulnerabilità.

`npm run security:check` legge le versioni effettive **bloccate** nel lockfile ed esce con errore se sono più vecchie del minimo. `npm run release:check` aggiunge verifica applicazione e audit npm: deve passare prima del rilascio.

## Pubblicazione e accessibilità

- Il portfolio resta **non indicizzabile** finché `NEXT_PUBLIC_PORTFOLIO_PUBLISHED` non viene impostato esplicitamente a `true` in fase di build.
- `robots.txt` blocca la scansione; i metadata generali impostano `noindex,nofollow`; la sitemap è vuota.
- Le singole pagine di profilo, contatti, catalogo e progetti restano `noindex` perché contengono placeholder.
- Prima del rilascio, verificare che tutti i contenuti siano reali e rimuovere i `noindex` delle pagine approvate; poi aggiornare sitemap e URL canonici.

## Limiti della verifica

I test Node controllano struttura, dati, URL e vincoli di release. Non sostituiscono test di browser, Lighthouse, analisi degli asset, verifica delle dipendenze installate o una valutazione di sicurezza. Non sono presenti GitHub Actions, come richiesto.
