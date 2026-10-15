# Checklist di qualità — prima della pubblicazione

**Questa non è una procedura di deploy.** Il repository deve rimanere privato dai motori di ricerca fino alla sostituzione dei placeholder.

## Verifiche da eseguire in locale

```bash
npm ci
npm test
npm run lint
npm run build
npm run verify:static
npm run security:check
npm run audit
```

Per eseguirle automaticamente in un unico comando, dopo l'aggiornamento delle dipendenze:

```bash
npm run release:check
```

Prima della review, controllare almeno 360, 390, 768, 1024 e 1440 px; navigazione solo tastiera, menu su schermo piccolo, filtri catalogo, precedenti/successivi e pagina 404. Controllare che non ci siano overflow orizzontali e che le CTA abbiano destinazioni vere.

## SEO e contenuti

- **Profilo:** verificare la seniority junior e circa tre anni IT, senza confondere gli incarichi finanziari con esperienza di sviluppo. Confermare lo stato universitario L-31 prima di pubblicare dettagli aggiuntivi.
- **Progetti:** verificare le 3 schede tratte da GitHub; indicare esplicitamente quando un repository è sperimentale o ancora in sviluppo.
- Inserire screenshot veri oppure visual tecnici autentici.
- Verificare profilo, competenze e contatti pubblicati.
- Abilitare `NEXT_PUBLIC_PORTFOLIO_PUBLISHED=true` **solo dopo** la revisione.
- Togliere `noindex` soltanto dalle pagine complete e aggiornarne la sitemap.
- Impostare `NEXT_PUBLIC_SITE_URL` sul dominio definitivo e definire il `NEXT_PUBLIC_BASE_PATH` corretto.
- Testare il build artefatto generato in `out/` su un server statico con percorsi reali.

## Stato della PR06

È in corso la migrazione Next.js 16.4.1, React 19.3.1, Tailwind 4.3.3, PostCSS 8.5.29 ed ESLint Flat Config. Il lockfile va rigenerato da npm, poi occorre la review grafica per possibili differenze nel reset Tailwind. Il requisito per dichiarare **sicura** la release è l'aggiornamento di Next/React e un audit npm senza vulnerabilità che richiedano interventi. Evitare di marcare questa voce come superata prima di eseguire l'aggiornamento.
