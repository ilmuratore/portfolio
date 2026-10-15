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
  }
];

export const projectFilters = [
  { id: "all", label: "Tutti" },
  { id: "data", label: "Data & Backend" },
  { id: "ai", label: "AI" },
  { id: "backend", label: "Gestionali" }
];

export const featuredProjects = projects.filter((project) => project.featured);
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
