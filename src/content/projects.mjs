export const projects = [
  {
    id: "banca-python",
    slug: "banca-python",
    index: "01",
    title: "Banca Python",
    category: "Data & Backend",
    categoryId: "data",
    description: "Simulatore bancario da terminale: logica a oggetti, persistenza PostgreSQL, import/export CSV e analisi con Pandas.",
    intro: "Un'applicazione Python per simulare la gestione di una filiale bancaria. Un modello a oggetti, un controller e un repository PostgreSQL coordinano operazioni, archiviazione e analisi.",
    preview: "dashboard",
    tags: ["Python", "PostgreSQL", "Pandas"],
    featured: true,
    status: "Simulazione didattica",
    repositoryUrl: "https://github.com/ilmuratore/banca-python",
    documentationUrl: "https://github.com/ilmuratore/banca-python/blob/main/docs/ARCHITECTURE.md",
    architectureNodes: ["Menu terminale", "Controller", "Repository SQL"],
    sections: {
      context: "Il repository nasce come progetto pratico per simulare le attività quotidiane di una filiale: clienti, conti, movimenti, personale, ATM, finanziamenti e investimenti. Non è software bancario di produzione e non gestisce denaro reale.",
      challenge: "Separare la logica del dominio dall'interazione nel terminale e dalla persistenza. Le modifiche devono essere salvate nel database senza affidarsi a file CSV come sorgente principale dei dati.",
      solution: "L'applicazione usa modelli Python, un controller applicativo, servizi CSV e un modulo Pandas. Le funzioni coprono anagrafiche, operazioni sui conti e analisi, mentre importazione ed esportazione CSV sono azioni esplicite.",
      architecture: "La documentazione descrive una separazione ispirata a MVC: view/menu → controller → repository PostgreSQL. Le scritture usano transazioni e le operazioni sul saldo sfruttano blocchi di riga SQL. Pandas legge dal repository e può produrre grafici PNG.",
      results: "Nel repository sono presenti unit test per dominio, CSV e interazioni SQL simulate, oltre a dati sintetici per le dimostrazioni. Non sono dichiarati test end-to-end automatizzati con PostgreSQL reale; l'uso resta didattico."
    }
  },
  {
    id: "python-developer-ai",
    slug: "python-developer-ai",
    index: "02",
    title: "Python Developer AI",
    category: "AI & Backend",
    categoryId: "ai",
    description: "Backend sperimentale per un assistente Python con memoria persistente e integrazione con un modello linguistico locale.",
    intro: "Un progetto di backend che sperimenta il dialogo fra memoria strutturata e modelli LLM locali. Conserva concetti, correzioni ed esempi tecnici per comporre risposte contestualizzate.",
    preview: "terminal",
    tags: ["Python", "FastAPI", "SQLite"],
    featured: true,
    status: "Progetto sperimentale",
    repositoryUrl: "https://github.com/ilmuratore/python-developer-ai",
    documentationUrl: "https://github.com/ilmuratore/python-developer-ai/blob/main/PROJECT_AUDIT.md",
    architectureNodes: ["API FastAPI", "Servizi memoria", "LLM locale"],
    sections: {
      context: "Il progetto nasce per studiare un assistente tecnico specializzato in Python che possa recuperare conoscenza salvata, correzioni e codice validato. Non è presentato come un sistema autonomo capace di apprendere senza supervisione.",
      challenge: "Gestire la conoscenza persistente e distinguerla dalle risposte del modello linguistico, mantenendo tracciabili le fonti recuperate e controllando errori, timeout e disponibilità del server LLM.",
      solution: "Il backend espone API FastAPI con schemi Pydantic e persistenza SQLite/SQLAlchemy. Un ConversationService coordina riconoscimento dell'intento, ricerca nella memoria, costruzione del prompt, client LLM locale e composizione della risposta.",
      architecture: "La documentazione M02 descrive il flusso FastAPI → ConversationService → MemoryService/PromptBuilder → LocalLLMClient → modello locale via LM Studio → ResponseComposer. Il sistema documentato lavora su singoli turni e non conserva implicitamente la cronologia della conversazione.",
      results: "La documentazione tecnica indica M01 completata e M02 stabilizzata con test e una verifica di integrazione con LM Studio. La memoria semantica avanzata prevista per M03 è ancora una milestone futura, non una funzionalità già presente."
    }
  },
  {
    id: "azienda-java",
    slug: "azienda-java",
    index: "03",
    title: "AziendaJava",
    category: "Backend & Gestionale",
    categoryId: "backend",
    description: "Progetto gestionale dipendenti con Java 21, Spring Boot, persistenza relazionale e gestione di ruoli e account.",
    intro: "Un sistema dimostrativo per la gestione di dipendenti, account e ruoli. Il repository include un backend Spring Boot, persistenza JPA e documentazione delle API.",
    preview: "board",
    tags: ["Java 21", "Spring Boot", "JPA"],
    featured: true,
    status: "Progetto dimostrativo",
    repositoryUrl: "https://github.com/ilmuratore/AziendaJava",
    documentationUrl: "https://github.com/ilmuratore/AziendaJava/blob/main/README.md",
    architectureNodes: ["API Spring", "JPA / Hibernate", "Database"],
    sections: {
      context: "Un gestionale Java per organizzare anagrafiche dei dipendenti, ruoli e account. Il README lo presenta come sistema dimostrativo sviluppato con Spring Boot e un database relazionale.",
      challenge: "Organizzare le operazioni CRUD e la persistenza delle entità, distinguendo le informazioni dei dipendenti dagli account e dalle autorizzazioni applicative.",
      solution: "La documentazione elenca endpoint e funzionalità per dipendenti, ruoli e account; descrive l'uso di Spring Security e JWT. Sono inoltre documentati strumenti per la configurazione iniziale e la generazione di dati di esempio.",
      architecture: "Il file Maven dichiara Java 21, Spring Boot 3.5, JPA, librerie Spring Security, JWT e OpenAPI. Il README documenta MariaDB per la persistenza e H2 in sviluppo, con Hibernate come livello ORM.",
      results: "Il repository rende consultabili codice e documentazione delle funzionalità previste. Non vengono riportate misure di prestazione o risultati di produzione; la scheda si limita agli elementi descritti dai file pubblici."
    }
  },
  {
    id: "valdoria",
    slug: "valdoria",
    index: "04",
    title: "Valdoria",
    category: "Game Development",
    categoryId: "game",
    description: "RPG 2D top-down sviluppato in C# e Unity come laboratorio pratico per un corso di game development.",
    intro: "Un progetto didattico che collega i principi della programmazione orientata agli oggetti a sistemi di gameplay concreti: movimento, animazioni, combattimento, NPC e progressione.",
    preview: "game",
    tags: ["C#", "Unity", "OOP"],
    featured: true,
    status: "Case study didattico · In evoluzione",
    repositoryUrl: "https://github.com/ilmuratore/valdoria",
    documentationUrl: "https://github.com/ilmuratore/valdoria/blob/main/README.md",
    architectureNodes: ["Player e Input", "NPC e stati", "Combattimento e UI"],
    sections: {
      context: "Valdoria è un RPG 2D con visuale top-down usato come caso studio nel percorso formativo di sviluppo videogiochi con C# e Unity. L'obiettivo è trasformare concetti di OOP, componenti e gestione dello stato in meccaniche verificabili all'interno dell'editor.",
      challenge: "Coordinare input, animazioni, combattimento, salute e comportamento dei personaggi senza concentrare tutta la logica in un unico script. Gli NPC devono reagire a situazioni diverse e il giocatore deve poter seguire la propria progressione.",
      solution: "Il repository documenta movimento e animazioni del personaggio, attacchi e danni, gestione della vita e della morte, esperienza e progressione, interfaccia di salute e NPC alleati e nemici. Il comportamento degli NPC utilizza una macchina a stati con pattugliamento, inseguimento, ricerca e attacco.",
      architecture: "Il progetto è realizzato in Unity 6.3 LTS con C#, URP 2D, Unity Input System e TextMesh Pro. Le funzionalità sono organizzate come componenti di gioco: controllo del personaggio, NPC con FSM, gestione delle interazioni e visualizzazione dello stato. I sistemi di gioco e i livelli della mappa sono esercizi progressivi di progettazione a oggetti.",
      results: "Il progetto raccoglie meccaniche e sistemi riutilizzabili all'interno di un'esperienza didattica. Il codice e le scene sono consultabili nel repository pubblico e il progetto può essere avviato nell'editor Unity. Valdoria è ancora in evoluzione e non viene presentato come videogioco commerciale completato."
    }
  },
  {
    id: "le-cronache-del-sigillo",
    slug: "le-cronache-del-sigillo",
    index: "05",
    title: "Le Cronache del Sigillo",
    category: "Game Development & Formazione",
    categoryId: "game",
    description: "RPG da console in C# con sistemi di combattimento, missioni, inventario e contenuti esterni in JSON.",
    intro: "Un progetto formativo strutturato che esplora la progettazione orientata agli oggetti attraverso un RPG testuale, separando meccaniche di gioco, modello del dominio e cataloghi di contenuto.",
    preview: "terminal",
    tags: ["C#", ".NET", "JSON"],
    featured: false,
    status: "Progetto didattico · Codice pubblico",
    repositoryUrl: "https://github.com/ilmuratore/LeCronacheDelSigillo",
    documentationUrl: "https://github.com/ilmuratore/LeCronacheDelSigillo/blob/main/README.md",
    architectureNodes: ["Core e partita", "Sistemi di gioco", "Cataloghi JSON"],
    sections: {
      context: "Le Cronache del Sigillo è un RPG testuale progettato per un percorso didattico C#. Il repository contiene il codice dell'applicazione, modelli orientati agli oggetti, servizi e dati JSON relativi a missioni, nemici, NPC, dialoghi, oggetti e abilità.",
      challenge: "Mantenere le regole di combattimento, il progresso della partita e i contenuti di gioco separati, per poter aggiungere missioni e personaggi modificando i cataloghi senza riscrivere i sistemi principali.",
      solution: "Il progetto organizza la logica in Core, Modelli, Sistemi e Servizi. Sono documentati combattimenti PvE e PvP, inventario, negozio, missioni e punti abilità. Un loader legge i contenuti da file JSON, mentre un validatore controlla riferimenti e identificativi.",
      architecture: "L'applicazione C# utilizza modelli OOP, cataloghi esterni sotto Dati e servizi di salvataggio. I dati del mondo sono separati da quelli della partita: il progresso del giocatore viene salvato in JSON, con una scrittura temporanea prima della sostituzione del file. Il target del progetto va verificato nel file .csproj per l'ambiente di esecuzione.",
      results: "Il repository pubblico include codice, cataloghi JSON e comandi di validazione dei contenuti. È un laboratorio di programmazione, non un videogioco commerciale. Il README indica verifiche statiche sui dati ma non una build .NET eseguita nel suo ambiente di preparazione."
    }
  },
  {
    id: "backend-express",
    slug: "backend-express",
    index: "06",
    title: "Backend Express · Biblioteca",
    category: "Backend & API",
    categoryId: "backend",
    description: "Backend REST Node.js/Express per libri, utenti e prestiti, con PostgreSQL, middleware di autenticazione e importazione CSV.",
    intro: "Un'API backend organizzata per responsabilità, con route, controller, servizi, modelli PostgreSQL e middleware per richieste, autorizzazioni e gestione degli errori.",
    preview: "board",
    tags: ["Node.js", "Express", "PostgreSQL"],
    featured: false,
    status: "Progetto backend · Codice pubblico",
    repositoryUrl: "https://github.com/ilmuratore/backend-express",
    documentationUrl: null,
    architectureNodes: ["Route REST", "Controller e servizi", "Modelli PostgreSQL"],
    sections: {
      context: "Il repository pubblico contiene un backend Node.js ed Express per gestire utenti, catalogo libri e prestiti. Offre endpoint distinti per le risorse del dominio, importazione massiva di libri e persistenza relazionale.",
      challenge: "Separare validazione delle richieste, logica applicativa e query SQL, assicurando che le operazioni sui prestiti usino l'identità autenticata e che gli endpoint amministrativi siano protetti.",
      solution: "L'applicazione organizza route, controller, servizi e modelli. Integra autenticazione JWT, controlli sui ruoli, validazione con express-validator, gestione centralizzata degli errori e importazione CSV dei libri con controllo dei duplicati per ISBN.",
      architecture: "Express espone le route /api/utente, /api/libri, /api/prestiti e /api/import. I controller delegano ai servizi, che coordinano i modelli PostgreSQL. Middleware dedicati implementano autorizzazione, Helmet, rate limiting e gestione degli upload.",
      results: "Il codice di endpoint, modelli e middleware è consultabile nel repository. Si tratta di un progetto backend da valutare e provare localmente: il package.json non dichiara una suite di test automatizzati e non vengono riportate metriche di produzione."
    }
  }
];

export const projectFilters = [
  { id: "all", label: "Tutti" },
  { id: "data", label: "Data & Backend" },
  { id: "ai", label: "AI" },
  { id: "backend", label: "Backend & API" },
  { id: "game", label: "Game Development" }
];


// I repository di questi progetti sono privati: solo caratteristiche generali e pubblicabili.
export const privateProjects = [
  {
    id: "torven",
    slug: "torven",
    index: "07",
    name: "Torven",
    title: "Torven",
    domain: "Systems Programming",
    category: "Systems Programming",
    status: "Repository privato",
    description: "Sistema operativo sperimentale x86-64 in Rust: avvio UEFI, kernel, gestione memoria e isolamento.",
    summary: "Sistema operativo sperimentale per architettura x86-64, sviluppato in Rust per approfondire programmazione di sistema, gestione della memoria e isolamento.",
    intro: "Un progetto personale di ricerca e apprendimento sull'architettura dei sistemi operativi: dal boot e dalle strutture del kernel ai confini tra memoria, esecuzione e sicurezza.",
    context: "Ricerca personale e studio dell'architettura dei sistemi operativi; non è un prodotto pronto per la produzione.",
    preview: "terminal",
    tags: ["Rust", "UEFI", "Sistemi operativi"],
    highlights: ["Kernel Rust no_std", "Avvio UEFI", "Memoria e isolamento"],
    architectureNodes: ["Boot UEFI", "Kernel Rust", "Memoria e isolamento"],
    sections: {
      context: "Torven è un sistema operativo sperimentale e indipendente realizzato come progetto personale in Rust per piattaforme x86-64. Il lavoro è dedicato allo studio dei sistemi a basso livello, non allo sviluppo di un prodotto per utenti finali.",
      challenge: "Comprendere come un sistema operativo avvia il kernel, gestisce memoria e processi di esecuzione e separa i livelli di privilegio, mantenendo responsabilità e contratti tecnici espliciti.",
      solution: "Il progetto esplora un'architettura con kernel Rust no_std e avvio UEFI, insieme a concetti di gestione della memoria, organizzazione del kernel ed esecuzione isolata. Le caratteristiche sono descritte a livello generale, senza pubblicare implementazioni interne.",
      architecture: "La visione progettuale comprende un percorso di avvio UEFI, componenti kernel modulari in Rust e meccanismi per gestire indirizzamento e isolamento. Lo schema è concettuale: non rappresenta un diagramma tecnico completo né documenta interfacce interne.",
      results: "Torven è un progetto di ricerca personale ancora sperimentale. È una dimostrazione di studio delle architetture di sistema e di Rust a basso livello; non viene presentato come sistema operativo stabile, distribuito o pronto per la produzione."
    }
  },
  {
    id: "il-presidente",
    slug: "il-presidente",
    index: "08",
    name: "Il Presidente",
    title: "Il Presidente",
    domain: "Game & Simulation",
    category: "Game & Simulation",
    status: "Repository privato",
    description: "Prototipo di simulazione politico-economica su Windows, con interfaccia C#/.NET e motore Python.",
    summary: "Prototipo di simulazione politico-economica per PC Windows con interfaccia C#/.NET e motore Python.",
    intro: "Un gioco di simulazione sperimentale che mette in relazione decisioni, eventi e indicatori ipotetici attraverso un'interfaccia desktop e un motore di regole.",
    context: "Esplorazione di logiche di gioco e simulazione: eventi, bilancio e conseguenze delle decisioni usano scenari ipotetici, non previsioni economiche.",
    preview: "board",
    tags: ["C#", "Python", "Simulazione"],
    highlights: ["Interfaccia desktop C#/.NET", "Motore di simulazione Python", "Decisioni e bilancio di gioco"],
    architectureNodes: ["Interfaccia C#/.NET", "Motore Python", "Stato ed eventi"],
    sections: {
      context: "Il Presidente è un progetto personale di game development incentrato su una simulazione politico-economica per PC Windows. Lo scopo è studiare la modellazione di sistemi di gioco e le conseguenze delle decisioni attraverso variabili e scenari dichiaratamente fittizi.",
      challenge: "Tradurre scelte e condizioni di uno scenario in variazioni dello stato di gioco, mantenendo separati il livello di presentazione, le regole applicative e i dati della simulazione.",
      solution: "Il prototipo combina un'interfaccia desktop in C#/.NET con un motore Python dedicato alla logica della simulazione. Il modello considera decisioni, eventi e bilancio come elementi di gameplay e non come strumenti di analisi o previsione politica reale.",
      architecture: "La separazione concettuale prevede interfaccia utente, motore di regole e stato della simulazione. Lo schema descrive responsabilità generali, non protocolli, strutture interne o implementazioni del repository privato.",
      results: "Il progetto resta un prototipo sperimentale. Il suo valore nel portfolio è la progettazione di una simulazione e l'integrazione fra tecnologie diverse; non viene presentato come gioco pubblicato, modello economico attendibile o software di previsione."
    }
  }
];

export const featuredProjects = projects.filter((project) => project.featured);
export const caseStudies = [...projects, ...privateProjects];
export const getCaseStudyBySlug = (slug) => caseStudies.find((project) => project.slug === slug);
export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
export function getAdjacentProjects(slug) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { previous: null, next: null };
  return {
    previous: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null
  };
}

export function getAdjacentCaseStudies(slug) {
  const index = caseStudies.findIndex((project) => project.slug === slug);
  if (index === -1) return { previous: null, next: null };
  return {
    previous: index > 0 ? caseStudies[index - 1] : null,
    next: index < caseStudies.length - 1 ? caseStudies[index + 1] : null
  };
}
