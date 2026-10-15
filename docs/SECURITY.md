# Sicurezza e dipendenze — stato verificato al 15 ottobre 2026

## Situazione attuale

Il sito utilizza Next.js 16.4.1, React 19.3.1, Tailwind CSS 4.3.3 ed ESLint 9.39.5. Il lockfile è già stato rigenerato per lo stack Next 16 e la PR11 di GitHub Pages è stata integrata in `main`.

Dall'ultimo report locale del proprietario:

- `npm run security:check`: versioni minime superate.
- `npm audit` e `npm audit:prod`: **5 avvisi high** che discendono dallo stesso advisory su `braces`.
- La catena è `eslint-config-next → @next/eslint-plugin-next → fast-glob → micromatch → braces@3.0.3`.
- `npm audit fix --force` propone di installare `eslint-config-next@14.2.35`: è un downgrade major incompatibile con Next 16. **Non eseguirlo.**

## Advisory e valutazione del rischio

[GHSA-vfj7-8cjw-p6xm / CVE-2026-93687](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) riguarda un possibile esaurimento dello stack quando `braces` elabora pattern profondamente annidati. Alla data del controllo, l'advisory dichiara **nessuna versione patchata**.

Nel portfolio la dipendenza è introdotta attraverso il sistema di linting e i glob di build. Il sito GitHub Pages distribuisce **file statici** HTML/CSS/JavaScript/immagini: la toolchain Node/ESLint non viene eseguita dai visitatori. L'esposizione del sito pubblicato a questo specifico percorso è dunque differente da quella di un servizio Node che elabora pattern esterni.

Questo non annulla l'advisory e non autorizza a dichiarare l'audit pulito. Occorre continuare a verificare gli aggiornamenti e mantenere il linting su pattern controllati. In una PR successiva si possono separare in `devDependencies` gli strumenti di build/lint e rigenerare il lockfile mediante npm, per rendere anche `npm audit:prod` semanticamente corretto.

## Build statica e deploy

Il 15 ottobre 2026 il log locale ha confermato che la compilazione Next.js 16 e le 14 pagine statiche si generano correttamente. La PR13 ha inoltre risolto la normalizzazione dei file PNG social.

L'ultimo blocco riscontrato è **l'indicizzazione delle pagine progetto**: `generateMetadata()` impostava ancora `noindex` per Banca Python anche nella build pubblica. La PR14 uniforma la policy SEO dei case study a `siteConfig.published` e aggiunge un test di regressione specifico. Non eseguire il deploy da una PR: dopo i controlli locali e il merge, pubblicare esclusivamente da `main`.

La pulizia ha eliminato Docker e lo script di upgrade delle dipendenze che reinstalla versioni esatte del 2026. Per gli aggiornamenti futuri usare npm con un lockfile coerente e verificare il risultato di `npm audit`, evitando il downgrade forzato di Next/eslint-config-next.

## Controlli consigliati

```bash
npm ci
npm run verify
npm run verify:static
npm run verify:pages
npm run security:check
npm run audit
npm run audit:prod
```

Non disabilitare `npm audit` per nascondere le segnalazioni. Non introdurre dipendenze o override di versioni inesistenti. Aggiornare questo documento quando l'advisory o la catena ESLint cambieranno.
