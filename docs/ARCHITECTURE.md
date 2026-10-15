# Architettura — Portfolio v2

## Struttura implementata nella PR02

Il progetto rimane in Next.js App Router e React. La homepage è un Server Component con sezioni e anteprime modulari. Solo il menu mobile richiede `use client`.

```text
src/
  app/
    page.js                    homepage v2
    layout.js                  metadati, font, analytics
    globals.css                token e responsive
    icon.svg                   favicon editoriale
    components/v2/
      SiteHeader.jsx           menu accessibile (client)
      SiteFooter.jsx           link esterni verificati
      EditorialSections.jsx    sezioni homepage (server)
      SoftwareVisuals.jsx      visual segnaposto (server)
  content/placeholder.mjs      dati dimostrativi
  config/site.js               identità, URL e SEO
tests/placeholder-content.test.mjs
```

## Decisioni

1. Layout mobile-first; le griglie sono progressive, non un desktop rimpicciolito.
2. CSS semantico e Tailwind con token coordinati, senza dipendenze aggiuntive.
3. Server Components predefiniti, client isolato per navigazione mobile.
4. Oggetti placeholder centralizzati; nessun nome, numero o URL di progetto inventato.
5. Asset legacy eliminati; anteprime di editor/dashboard create con HTML/CSS.
6. Le card dimostrative non hanno link: le CTA funzionanti puntano a sezioni o profili verificati.
7. Accessibilità: skip link, focus visibile, Escape per chiudere il menu, reduced motion.
8. L'API email precedente resta non esposta dalla homepage, fino a successiva revisione server.

## Evoluzione

Le pagine progetto con slug e contenuti verificati saranno realizzate successivamente. Nessuna dipendenza da database, CMS o WebGL necessaria per la v2.

## Verifica

Eseguire `npm test`, `npm run build` e una revisione visiva su smartphone e desktop. I test statici non sostituiscono i controlli su browser.
