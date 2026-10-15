# Portfolio v2.0 — Creative Engineering

## Visione

Un portfolio interattivo che comunica capacità di progettare e sviluppare software reale. Non un template con slider e icone: una vetrina di sistemi, processi, architetture e risultati, con una direzione art-directed contemporanea.

**Tre principi:** progetti prima dell'elenco di skill; interazioni con funzione narrativa; esperienza mobile completa, non un desktop rimpicciolito.

## Direzione estetica

- **Base:** dark grafite/blu notte, superfici stratificate, bordi sottili, texture tecniche appena percepibili.
- **Accenti:** blu elettrico, violetto e ciano. Non utilizzare tutti gli accenti in ogni componente.
- **Tipografia:** titoli display forti e compatti, testo sobrio, dati e label in monospace. Valutare Geist + Geist Mono nella PR design system; la prima PR non cambia i font.
- **Griglia:** ritmo editoriale, spaziatura generosa, composizioni asimmetriche controllate.
- **Immagini:** veri screenshot, schemi architetturali e anteprime di progetto; evitare fotografie stock e illustrazioni decorative generiche.

### Token iniziali

| Token | Valore | Utilizzo |
|---|---|---|
| `--color-canvas` | `#0B1017` | Background |
| `--color-surface` | `#151D28` | Card |
| `--color-surface-raised` | `#1B283A` | Layer attivi |
| `--color-border` | `#2C3A4E` | Divisori |
| `--color-text` | `#F1F5F9` | Testo principale |
| `--color-text-muted` | `#A6B4C7` | Testo secondario |
| `--color-accent` | `#4F8BFF` | CTA/focus |
| `--color-accent-alt` | `#8B6DFF` | Highlight |
| `--color-glow` | `#48D7F0` | Dettagli interattivi |

## Homepage: sequenza narrativa

1. **Hero immersiva:** headline sintetica, ruolo professionale e CTA immediata. Fondale con griglia prospettica o gradient mesh animata leggerissima. Un singolo elemento grafico distintivo che reagisce al puntatore, senza compromettere touch o lettura.
2. **Selected work:** 2–3 progetti principali con screenshot, etichetta del ruolo, stack, problema risolto e link al case study. Card editoriali grandi, non una griglia di sei placeholder uguali.
3. **Engineering capabilities:** backend, frontend, data, infrastrutture e strumenti organizzati per competenza dimostrabile, non barre di percentuale.
4. **Approach:** diagramma sintetico di come un problema diventa un'architettura, poi un software funzionante.
5. **About / timeline:** esperienza e percorso collegati a lavori verificabili.
6. **Contact:** CTA chiara, GitHub/LinkedIn, e un form soltanto se realmente affidabile.

## Motion language

| Interazione | Desktop | Mobile/touch |
|---|---|---|
| Hero | Parallasse lieve e glow che segue il cursore | Motion ambientale semplificata, senza tracking del dito |
| Entrata sezioni | Reveal di opacità + traslazione breve | Stesso reveal, distanza ridotta |
| Progetti | Tilt 3D moderato, bordo luminoso, anteprima su hover | Card interamente navigabile, preview visibile senza hover |
| Navigazione | Highlight animato e progress indicator | Menu full-screen accessibile, transizioni rapide |
| Case study | Diagrammi a step durante lo scroll | Diagrammi statici o step manuali, leggibili anche in verticale |
| CTA | Feedback microinterattivo | Feedback tap, senza target piccoli |

Nessuna animazione deve nascondere dati, bloccare lo scroll, ritardare il click o diventare prerequisito per comprendere il contenuto. Preferire trasformazioni CSS/GPU (`transform`, `opacity`) a calcoli layout continui. Caricare moduli pesanti solo nelle sezioni che ne hanno bisogno.

## Mobile-first e accessibilità

- Progettare da **360 px** in su; testare almeno 360, 390, 768, 1024 e 1440 px.
- Touch target di almeno **44 × 44 px**; navigazione e filtri disponibili anche senza hover.
- Contrasto WCAG AA per i testi, focus visibile, landmark semantici, tastiera funzionante.
- Rispettare `prefers-reduced-motion` e fornire stati statici equivalenti.
- Evitare scrolling orizzontale accidentale, autoplay audio/video e animazioni permanenti di alta intensità.

## Performance budget (obiettivi, da misurare)

- Core Web Vitals al 75° percentile: LCP < 2,5 s, INP < 200 ms, CLS < 0,1.
- Preferire animazioni CSS/SVG; usare canvas/WebGL soltanto se il beneficio giustifica payload e consumo energetico.
- `next/image`, formati moderni, responsive `sizes`, lazy loading per media sotto la fold.
- Limitare la quantità di JavaScript client e rispettare i dispositivi con bassa potenza.

## Da evitare

Testo che cambia in loop e rende difficile leggere il nome; cursori custom intrusivi; particelle in ogni sezione; skill bars arbitrarie; caroselli che nascondono i contenuti; terminali finti utilizzati come unico mezzo di navigazione; splash screen; effetti di scroll che interrompono la navigazione.

## Approvazione visual prima dell'implementazione

La PR 02 definirà e mostrerà hero, navbar, progetto in evidenza e card mobile. La direzione va verificata visivamente su mobile e desktop prima della riscrittura delle sezioni.
