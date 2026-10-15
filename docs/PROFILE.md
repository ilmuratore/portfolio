# Profilo professionale — accuratezza e posizionamento

## Profilo attuale (ottobre 2026)

Il sito presenta Simone Iengo come **Software Developer junior**, in crescita verso competenze di livello intermedio. Il percorso nel settore IT dura **circa tre anni**, considerando formazione tecnica iniziata nel 2024, esperienze come sviluppatore e attività di docenza. Non attribuire al profilo 10 o 20 anni di esperienza nello sviluppo software.

**Esperienza di sviluppo documentata:** Java, Spring Boot, REST API, SQL, JPA/Hibernate, manutenzione di applicazioni enterprise e supporto all'analisi funzionale. Python e sistemi AI locali vengono presentati anche attraverso progetti personali, senza farli passare per incarichi aziendali come AI Engineer.

**Obiettivo dichiarato:** diventare AI Engineer. Il titolo AI Engineer non viene utilizzato come qualifica professionale attualmente acquisita.

## Formazione universitaria L-31

L'utente intende approfondire il proprio percorso attraverso una laurea **L-31 in Artificial Intelligence**. Non sono stati indicati ateneo, data di immatricolazione o stato certo dell'iscrizione.

Il dato compare perciò in `academicGoal` come **obiettivo formativo, non laurea conseguita**. Non scrivere «laureato in AI», «studente iscritto a...» o una data di conseguimento senza conferma.

EPICODE (gennaio–luglio 2024) resta un'esperienza formativa **conclusa** e distinta dal percorso universitario futuro.

## Esperienze — distinguere i settori

**Settore IT / formazione tecnica**
- Talentform: docente e formatore da giugno 2025.
- Nea Services: Java Developer / Functional Analyst, gennaio 2025–aprile 2026.
- Itconsulting: stage formativo e sviluppo Java, settembre–dicembre 2024.

**Settore finanziario e assicurativo precedente al passaggio IT**
- Aurora Finanziamenti: ottobre 2019–gennaio 2024; socio dirigente da settembre 2021.
- Facile.it: settembre 2018–ottobre 2019.
- Generali Italia: settembre 2014–settembre 2018.

Le responsabilità commerciali, organizzative e gestionali hanno valore nel racconto professionale ma **non aumentano la seniority tecnica**. Le sovrapposizioni di incarichi fornite dall'utente sono intenzionali e non vanno modificate arbitrariamente.

## Contenuti centralizzati

- `src/content/profile.mjs`: profilo, livello, obiettivo AI, esperienze, competenze, formazione completata e `academicGoal`.
- `src/app/components/v2/EditorialSections.jsx`: presentazione breve derivata da `profile.heroIntroduction`.
- `src/app/components/v2/ProfileSections.jsx`: esperienze e formazione, con obiettivo universitario visivamente distinto.
- `src/app/about/page.js`: pagina di presentazione completa.
- `src/config/site.js` e `src/app/opengraph-image.jsx`: metadata e social preview coerenti.
- `tests/profile-content.test.mjs`: controlli automatici su seniority, obiettivo L-31 e ruolo AI.

## Progetti, certificazioni e pubblicazione

Le schede Banca Python, Python Developer AI e AziendaJava rimangono collegate ai repository pubblici; alcune sono **esercitazioni o prototipi in evoluzione**, non software pronto per l'uso in produzione. RustOS e Il Presidente rimangono progetti futuri senza link privati.

Google e Coursera sono enti/piattaforme segnalati, ma non sono ancora stati forniti titoli e link ai singoli attestati: l'array certificazioni resta vuoto.

Prima della pubblicazione ricontrollare le date, lo stato del percorso universitario, l'aggiornamento dei repository, gli screenshot autentici, la sicurezza delle dipendenze e la configurazione `noindex`.

## Verifiche locali

```bash
npm ci
npm test
npm run lint
npm run build
npm run verify:static
```

Nessun deploy automatico, Vercel o GitHub Actions viene attivato da questa revisione.
