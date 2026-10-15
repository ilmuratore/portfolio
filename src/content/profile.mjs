// Contenuti professionali tratti dalle informazioni fornite dal proprietario.
// Le certificazioni senza titolo, data e credenziale non vengono presentate come attestati verificati.
export const profile = {
  name: "Simone Iengo",
  label: "SOFTWARE ENGINEER / AI & BACKEND",
  title: "Software Engineer · AI Systems & Backend",
  headline: "Dal software enterprise ai sistemi AI.",
  introduction: "Sviluppo applicazioni e architetture backend, con esperienza Java in ambito enterprise e un interesse crescente per i sistemi AI costruiti con Python e modelli locali. Affianco all'attività tecnica la progettazione di percorsi formativi e il coordinamento di progetti.",
  biography: [
    "Il mio percorso nello sviluppo software comprende applicazioni enterprise Java, microservizi, API REST, persistenza relazionale e analisi funzionale. Ho lavorato su sistemi destinati a organizzazioni nei settori bancario, finanziario e della pubblica amministrazione.",
    "Oggi approfondisco l'AI engineering attraverso progetti Python che combinano backend, memoria persistente e modelli linguistici locali. La formazione è un'altra parte importante del mio lavoro: progetto materiali, lezioni ed esercitazioni e affianco gli studenti anche nello sviluppo di progetti pratici."
  ],
  previousCareer: "Prima di dedicarmi allo sviluppo software ho maturato esperienza nella consulenza finanziaria, nella gestione commerciale, nella formazione e nel coordinamento di team.",
  availability: null
};

export const skillAreas = [
  {
    number: "01",
    name: "AI & Python",
    description: "Backend Python, memoria persistente e integrazione con LLM locali in progetti sperimentali.",
    technologies: ["Python", "FastAPI", "Pydantic", "SQLAlchemy", "LLM locali", "Pandas"]
  },
  {
    number: "02",
    name: "Backend",
    description: "Software enterprise, progettazione di servizi, API e persistenza dei dati.",
    technologies: ["Java", "Spring Boot", "REST API", "Microservizi", "JPA / Hibernate", "SOLID"]
  },
  {
    number: "03",
    name: "Web & Frontend",
    description: "Sviluppo di interfacce e applicazioni web, anche nel contesto dei percorsi formativi.",
    technologies: ["JavaScript", "TypeScript", "React", "Angular", "HTML / CSS", "Node.js"]
  },
  {
    number: "04",
    name: "Dati & Delivery",
    description: "Database relazionali, analisi dei requisiti, strumenti di collaborazione e coordinamento.",
    technologies: ["SQL", "PostgreSQL", "Git / GitHub", "Analisi funzionale", "Project management", "Formazione"]
  }
];

export const profileChapters = [
  {
    id: "approccio",
    index: "01",
    title: "Analisi e architettura",
    description: "Parto dai requisiti e dai vincoli, per definire componenti, flussi e responsabilità prima dell'implementazione."
  },
  {
    id: "esperienze",
    index: "02",
    title: "Sviluppo e collaborazione",
    description: "Ho lavorato su applicazioni Java enterprise, attività di analisi funzionale e coordinamento di progetti ed esercitazioni."
  },
  {
    id: "evoluzione",
    index: "03",
    title: "Direzione AI engineering",
    description: "Sto sviluppando competenze progettuali in sistemi AI attraverso backend Python, persistenza e integrazione con modelli locali."
  }
];

export const experience = [
  {
    id: "talentform",
    role: "Docente / Formatore",
    organization: "Talentform",
    period: "Giu 2025 — Presente",
    arrangement: "Collaborazione autonoma · Da remoto",
    category: "tech",
    description: "Progettazione e conduzione di percorsi di programmazione e sviluppo software, con esercitazioni progressive, progetti pratici e tutoraggio.",
    highlights: [
      "Corsi su fondamenti informatici, JavaScript, Node.js, React, C# e Unity.",
      "Realizzazione autonoma di materiali didattici, esercizi, slide e progetti.",
      "Supporto ai tirocini e coordinamento delle attività di progetto."
    ]
  },
  {
    id: "nea-services",
    role: "Java Developer / Functional Analyst",
    organization: "Nea Services",
    period: "Gen 2025 — Apr 2026",
    arrangement: "Tempo pieno · Da remoto",
    category: "tech",
    description: "Sviluppo e manutenzione di applicazioni enterprise per clienti in ambito bancario, finanziario e amministrazione pubblica.",
    highlights: [
      "Java e Spring Boot, servizi distribuiti e integrazioni tramite REST API.",
      "Persistenza dei dati con JPA / Hibernate, manutenzione di sistemi legacy e moderni.",
      "Supporto nell'analisi dei requisiti e nella documentazione delle specifiche."
    ]
  },
  {
    id: "itconsulting",
    role: "Stage formativo / Junior Java Developer",
    organization: "Itconsulting",
    period: "Set 2024 — Dic 2024",
    arrangement: "Tempo pieno · Da remoto",
    category: "tech",
    description: "Percorso applicativo Java e Spring Boot con sviluppo di API REST, componenti CRUD e persistenza relazionale.",
    highlights: [
      "Java, collezioni, algoritmi di base e OOP.",
      "MySQL/PostgreSQL, JDBC, JPA e organizzazione service/repository."
    ]
  },
  {
    id: "aurora",
    role: "Socio dirigente / Responsabile tecnico commerciale",
    organization: "Aurora Finanziamenti S.r.l.",
    period: "Ott 2019 — Gen 2024",
    arrangement: "Reggio Emilia · In sede",
    category: "previous",
    description: "Progressione da responsabilità tecnico-commerciali alla gestione di sede e al coordinamento di circa 12 collaboratori.",
    highlights: [
      "Socio dirigente da settembre 2021 a gennaio 2024; gestione e sviluppo del team.",
      "Coordinamento, formazione e affiancamento della rete commerciale.",
      "Valutazione delle pratiche di finanziamento e responsabilità operative."
    ]
  },
  {
    id: "facile",
    role: "Consulente di vendita",
    organization: "Facile.it",
    period: "Set 2018 — Ott 2019",
    arrangement: "Parma · In sede",
    category: "previous",
    description: "Consulenza assicurativa e finanziaria presso lo store di Parma.",
    highlights: []
  },
  {
    id: "generali",
    role: "Agente assicurativo",
    organization: "Generali Italia",
    period: "Set 2014 — Set 2018",
    arrangement: "Pomigliano d'Arco · In sede",
    category: "previous",
    description: "Attività di consulenza e relazione con i clienti nel settore assicurativo.",
    highlights: []
  }
];

export const education = [
  {
    id: "epicode",
    title: "Percorso intensivo Full Stack",
    organization: "EPICODE",
    period: "Gen 2024 — Lug 2024",
    detail: "Percorso full-time di sviluppo software concluso il 18 luglio 2024. Java, Spring, PostgreSQL, Angular, JavaScript, TypeScript e progetti applicativi in team."
  }
];

// Nomi degli enti segnalati, non singole certificazioni pubblicate.
// Inserire nell'array certificates soltanto attestati con titolo confermato.
export const certificationProviders = ["Google", "Coursera"];
export const certificates = [];

export const futureProjects = [
  {
    id: "rustos",
    name: "RustOS",
    status: "In sviluppo",
    description: "Progetto a lungo termine. Dettagli tecnici, materiali e link pubblici verranno aggiunti quando saranno pronti."
  },
  {
    id: "il-presidente",
    name: "Il Presidente",
    status: "In sviluppo",
    description: "Simulatore politico-economico in evoluzione. La presentazione completa arriverà dopo la revisione del progetto."
  }
];

export const contactChannels = [
  { id: "github", label: "GitHub", type: "Codice e repository pubblici", href: "https://github.com/ilmuratore", short: "github.com/ilmuratore" },
  { id: "linkedin", label: "LinkedIn", type: "Esperienze e percorso professionale", href: "https://www.linkedin.com/in/simone-iengo-557914109/", short: "Profilo LinkedIn" }
];
