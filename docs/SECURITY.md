# Sicurezza e dipendenze — PR06 / upgrade Next.js 16

## Stato: migrazione in corso

I test forniti dal proprietario sul ramo Next 15.5.28 hanno avuto esito positivo: **17 test, build Next.js e build statica superati**. L'ultimo `npm audit` dopo `npm audit fix` ha però riportato ancora **14 vulnerabilità** (2 low, 3 moderate, 9 high).

Per risolvere la parte legata a Next.js, Tailwind, PostCSS ed ESLint, la PR06 migra allo stack moderno:

| Pacchetto | Versione |
| --- | --- |
| next | 16.4.1 |
| react, react-dom | 19.3.1 |
| tailwindcss, @tailwindcss/postcss | 4.3.3 |
| eslint-config-next | 16.4.1 |
| eslint | 9.39.5 |
| postcss | 8.5.29 |

Vengono rimossi `autoprefixer`, la configurazione legacy `tailwind.config.js` e `.eslintrc.json`.

## Migrazione in locale

**Il commit GitHub include codice e configurazioni target ma NON un lockfile rigenerato da npm.** Non è possibile eseguire `npm ci` finché il lockfile non viene rigenerato e inserito nella stessa PR.

Dalla branch `refactor/06-quality-security-hardening`:

```bash
git pull
npm run upgrade:security
npm ci
npm test
npm run lint
npm run build
npm run verify:static
npm run security:check
npm run audit
npm run audit:prod
```

Se i controlli passano e non emergono problemi visivi:

```bash
git add package.json package-lock.json
git commit -m "chore: finalize Next 16 and Tailwind 4 dependency migration"
git push
```

Per il `package-lock.json`, non sostituire a mano le versioni o copiare solo singole sezioni: fare generare tutte le transitive a npm. `npm run upgrade:security` richiede Internet e npm; **non utilizzare `npm audit fix --force`** indiscriminatamente.

## Cosa verificare

1. Il sito funziona a `/`, `/projects`, `/projects/progetto-01`, `/about`, `/contact`.
2. L'export statico genera la cartella `out/` correttamente con `NEXT_PUBLIC_BASE_PATH=/portfolio`.
3. Non si introducono differenze di layout dal CSS reset di Tailwind 4; verificare 360, 390, 768, 1024 e 1440 px.
4. ESLint Flat Config non produce errori.
5. `npm audit` e `npm audit:prod` vengono rieseguiti sul nuovo lockfile. Non considerare la migrazione una garanzia di zero vulnerabilità.
6. Contenuti dimostrativi ancora non indicizzabili. Nessun deploy, Vercel o GitHub Actions.

## Riferimenti

- [Next.js 16, guida ufficiale](https://nextjs.org/docs/app/guides/upgrading/version-16)
- [Next.js 16.4, novità](https://nextjs.org/blog/next-16-4)
- [Tailwind CSS 4 e Next.js](https://tailwindcss.com/docs/installation/framework-guides/nextjs)
- [ESLint Flat Config in Next.js](https://nextjs.org/docs/app/api-reference/config/eslint)

## Condizione per la release

Il sito potrà essere considerato pronto **solo dopo la rigenerazione del lockfile, i test, l'audit, la verifica dei contenuti e la review visiva**. Questa PR non abilita la pubblicazione.
