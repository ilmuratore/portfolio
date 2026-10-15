# Roadmap — Portfolio v2.0

## Workflow

Una PR per ambito, nessun merge automatico su `main`, review + CI prima del merge. Deploy in preview per verificare mobile e desktop.

| PR | Ambito | Criteri di completamento |
|---|---|---|
| 01 — Foundation | Cleanup configurazioni, SEO tecnico iniziale, design brief, README, CI | Build verificata in Actions; nessuna modifica sostanziale alla UI pubblica |
| 02 — Design system | Token, font, bottoni, container, menu, effetti base | Hero/navbar/cards approvati visivamente a 360 e 1440 px; reduced motion rispettato |
| 03 — Homepage | Hero, selected work, capabilities, about preview, CTA | Nessun placeholder o CTA inattiva; percorsi chiari |
| 04 — Projects | Catalogo contenuti tipizzato, filtri, pagine `/projects/[slug]`, case study | Dati centralizzati; link verificati; route generate dai contenuti |
| 05 — About & Contact | Bio, esperienza, certificazioni selezionate, contatti | Contenuti aggiornati; validazione e antiabuso lato server |
| 06 — Quality & Release | Test, CI completa, SEO, accessibilità, performance, README | Audit responsive, Lighthouse/Web Vitals, checklist release |

## Accettazione design

Il risultato deve apparire come un prodotto sviluppato su misura, non come un template: visual identity riconoscibile, elementi motion integrati nella narrazione, pagine progetto curatoriali, navigazione solida e prestazioni su telefoni comuni.

## Contenuti progetti

Le PR visuali non richiedono che ogni repository GitHub sia già ripulito. Per i progetti non pronti: pubblicare solo contenuto verificato o non metterli ancora in evidenza. Niente card `Coming soon` riempitive.

## Release

Tenere deploy esistente e `main` stabili fino all'approvazione delle preview. Tag/versione v2.0.0 soltanto dopo PR06.
