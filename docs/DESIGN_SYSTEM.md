# Portfolio v2 — Design system editoriale

> Stato: direzione grafica approvata; specifica per PR02. L'implementazione è in corso.

## Identità

**Obiettivo:** una vetrina professionale per progetti software reali. Design flat, minimale, mobile-first, con colori autunnali e contenuto prioritario. Il sito deve comunicare solidità, chiarezza e competenza tecnica.

**Riferimento approvato:** il terzo concept editoriale, evoluto sostituendo fotografie di architettura e paesaggi con visual di software (dashboard, editor, componenti e interfacce). Nessun recupero degli asset storici.

### Da fare / da evitare

- **Sì:** gerarchie editoriali, spaziatura ampia, geometrie semplici, bordi sottili, tipografia distintiva, microinterazioni.
- **Sì:** un'immagine hero composta da pannelli software disegnati appositamente, leggibile anche su smartphone.
- **No:** neon, glow, glassmorphism, gradienti vistosi, effetti 3D, scenografie architettoniche, foto stock.
- **No:** carrelli automatici, metriche inventate, slogan generici, badge «disponibile» non confermati.
- **No:** contenuti reali nella PR02. Usare solo placeholder espliciti, facilmente sostituibili.

## Palette proposta

| Token | HEX | Ruolo |
| --- | --- | --- |
| `--color-canvas` | `#F8F4ED` | Sfondo principale |
| `--color-surface` | `#FFFCF7` | Superfici e card |
| `--color-surface-muted` | `#EFE7DC` | Superfici secondarie |
| `--color-ink` | `#241D19` | Testo principale |
| `--color-muted` | `#625A53` | Testo secondario |
| `--color-border` | `#DCD0C3` | Separazioni |
| `--color-accent` | `#A34F34` | CTA, link e accenti terracotta |
| `--color-accent-hover` | `#843B29` | Stato hover |
| `--color-olive` | `#626C55` | Accento secondario, dosato |

Verificare i contrasti nel codice implementato. I token saranno centralizzati e non duplicati nelle sezioni.

## Tipografia e griglia

- **Titoli:** carattere display editoriale con grazie (serif); **interfaccia/testo:** sans leggibile; **frammenti tecnici:** monospace solo dove sensato.
- Gerarchia: hero display > heading sezione > titolo progetto > corpo > metadata.
- Ritmo mobile-first a partire da **360 px**. Griglia 1 colonna su smartphone, 2 a tablet quando serve, 3 card progetto su desktop.
- Larghezza contenuti desktop indicativa: **1200 px**; spaziature laterali fluide; nessun overflow orizzontale.
- Radius contenuto: **8–12 px** dove utile; niente elementi sistematicamente pill. Bordi leggeri e ombre quasi impercettibili.

## Homepage (solo placeholder nella PR02)

1. **Header:** monogramma provvisorio, menu mobile accessibile, navigazione sintetica.
2. **Hero:** titolo + sottotitolo + breve paragrafo placeholder, CTA funzionanti verso sezioni, visual composto da finestra editor di codice e pannello dashboard *fittizi*, senza dati veri.
3. **Featured projects:** tre card con asset segnaposto software, titolo, descrizione e tag generici. Non associare nomi/link a progetti non ancora selezionati.
4. **Process:** quattro step sintetici con simboli lineari.
5. **Skills:** griglia di tile segnaposto; niente barre percentuali arbitrarie.
6. **About:** blocco grafico neutro e testo placeholder, nessun ritratto inventato.
7. **Contact CTA:** invito generico e collegamento interno o a contatto verificato; nessun form inattivo simulato.
8. **Footer:** navigazione e link social già verificati, senza metriche.

## Motion

- **Ingresso elementi:** `opacity` e `translateY` brevi, una volta; mai indispensabili per leggere.
- **Pulsanti e link:** colore, sottolineatura e traslazione minima (1–2 px).
- **Card:** piccoli cambi di bordo/ombra, senza tilt tridimensionali.
- Durata indicativa 160–300 ms, easing morbido; evitare scroll-jacking e animazioni perpetue.
- `prefers-reduced-motion: reduce` disabilita le transizioni non essenziali.
- Gli stati hover devono avere un equivalente accessibile per tastiera e touch.

## Accessibilità, prestazioni, qualità

- Focus visibile, semantic HTML, contrasto AA, pulsanti con area touch adeguata.
- Verificare almeno **360, 390, 768, 1024, 1440 px**.
- Preferire CSS, SVG e HTML per i placeholder visuali; immagini locali ottimizzate solo quando necessarie.
- Conservare SSR/Server Components dove possibile, JavaScript client solo per interazioni.
- Target da misurare su build e deploy: LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1.

## Criteri di accettazione PR02

- Homepage interamente ricostruita con placeholder e nessun contenuto fittizio presentato come reale.
- Responsive mobile-first, tutti i link/CTA funzionanti e menu navigabile da tastiera.
- Nuovo sistema di token riutilizzabile, struttura componenti manutenibile.
- Nessun asset visivo ereditato dal design precedente.
- Build e controlli CI superati; validazione visiva desktop/mobile prima del merge.

I contenuti dei repository reali verranno integrati separatamente, dopo revisione e documentazione.
