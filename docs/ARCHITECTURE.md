# Architettura — stato attuale e obiettivo v2

## Stato attuale

Il progetto usa Next.js App Router, JavaScript e Tailwind. Le sezioni dell'intera homepage sono componenti sotto `src/app/components`. Il contenuto dei progetti è attualmente hardcoded in `ProjectsSection.jsx`.

La PR 01 non sposta o riscrive componenti esistenti: elimina configurazioni duplicate, centralizza l'identità pubblica e prepara documentazione e controlli CI. Questo consente di verificare regressioni prima di cambiare l'interfaccia.

## Struttura obiettivo (incrementale)

```text
src/
  app/
    (site)/
      page.jsx
      about/page.jsx
      contact/page.jsx
      projects/page.jsx
      projects/[slug]/page.jsx
    api/
    layout.js
    globals.css
  components/
    ui/
    layout/
    motion/
    projects/
  config/
    site.js
  content/
    projects.js
    experience.js
  lib/
    projects.js
  styles/
    tokens.css
public/
  images/
    projects/
    og/
docs/
  DESIGN_SYSTEM.md
  ARCHITECTURE.md
  ROADMAP.md
```

Il file tree è una proposta: le directory verranno create quando servono, non tutte nella prima PR.

## Regole

1. Configurazione e identità del sito in `src/config/site.js`.
2. Contenuti dei progetti separati dai componenti; i componenti ricevono dati tramite props.
3. `server components` come default e `use client` solo per interazioni necessarie.
4. Ogni progetto può essere `featured`, `archived`, `public` o `private case study`; nessuna URL placeholder `/`.
5. Media caricati con Next Image o equivalenti ottimizzati; niente asset di peso elevato per mera decorazione.
6. Gestione contatti con validazione server, protezione antiabuso adatta al deployment, errori gestiti e nessun segreto esposto.
7. SEO canonico centralizzato; `robots.js` e `sitemap.js` sono route metadata di App Router, senza sitemap pubblica duplicata.
8. Componenti animati devono avere fallback statici e supportare `prefers-reduced-motion`.

## Contenuti dei case study

Ogni progetto selezionato dovrebbe avere: `slug`, nome, tagline, descrizione, anno/stato verificato, ruolo, stack, problema, soluzione, architettura, decisioni tecniche, immagini, risultati dimostrabili e link pubblici verificati. Nessun numero inventato (utenti, prestazioni, metriche).

## Tecnologia

Conservare Next.js/React fino a quando audit e CI non dimostrano la necessità di una migrazione. Valutare TypeScript in modo progressivo, insieme alla riorganizzazione dei componenti. Non introdurre database/CMS per un catalogo piccolo e controllato.

## Graphify

Valutare uno step di generazione di mappa del codice solo dopo la riorganizzazione dei componenti. L'artefatto, se utile, va versionato o pubblicato in CI con percorso e processo riproducibili. Non è un prerequisito della prima release.
