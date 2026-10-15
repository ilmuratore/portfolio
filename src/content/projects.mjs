// Dati dimostrativi: nessuna scheda descrive un progetto realmente pubblicato.
export const projects = [
  {
    id: "project-01",
    slug: "progetto-01",
    index: "01",
    title: "Titolo progetto 01",
    category: "Applicazione web",
    categoryId: "web",
    description: "Presentazione segnaposto: qui illustreremo il problema, le funzionalità e le scelte di sviluppo.",
    intro: "Questo spazio ospiterà la sintesi di un progetto reale, con obiettivi, responsabilità, tecnologie e risultati verificabili.",
    preview: "dashboard",
    tags: ["Tecnologia 01", "Tecnologia 02", "Tecnologia 03"],
    featured: true,
    sections: {
      context: "Descrizione del contesto e delle esigenze da cui è nato il progetto. I dettagli verranno compilati dopo aver scelto un repository.",
      challenge: "Il problema da risolvere, i vincoli iniziali e gli obiettivi del lavoro saranno descritti in questa sezione.",
      solution: "Qui troveranno spazio le decisioni di progettazione, le funzionalità principali e le motivazioni delle scelte tecniche.",
      architecture: "Questa sezione conterrà una panoramica di componenti, relazioni, flussi dati e integrazioni realmente implementate.",
      results: "Risultati dimostrabili, test, compromessi e possibili evoluzioni saranno documentati senza inventare metriche."
    }
  },
  {
    id: "project-02",
    slug: "progetto-02",
    index: "02",
    title: "Titolo progetto 02",
    category: "Prodotto digitale",
    categoryId: "product",
    description: "Presentazione segnaposto: uno spazio per descrivere la soluzione e mostrare l'interfaccia reale.",
    intro: "La seconda scheda presenterà un prodotto digitale selezionato, il contesto d'uso e il percorso dallo studio iniziale alla realizzazione.",
    preview: "board",
    tags: ["Tecnologia 01", "Tecnologia 02", "Tecnologia 03"],
    featured: true,
    sections: {
      context: "Qui verranno introdotti utenti, requisiti e ambito del prodotto, sulla base della documentazione effettiva.",
      challenge: "La sfida progettuale sarà descritta con esempi concreti, vincoli e requisiti verificabili.",
      solution: "La scheda illustrerà progettazione delle interfacce, organizzazione del software e funzionalità principali.",
      architecture: "Un diagramma reale sostituirà questo placeholder per documentare moduli, interazioni e flussi.",
      results: "Questa sezione raccoglierà risultati, verifiche e prospettive di miglioramento supportate da evidenze."
    }
  },
  {
    id: "project-03",
    slug: "progetto-03",
    index: "03",
    title: "Titolo progetto 03",
    category: "Software engineering",
    categoryId: "engineering",
    description: "Presentazione segnaposto: architettura, codice, scelte progettuali e risultati del software.",
    intro: "La terza scheda sarà dedicata a un lavoro software, con attenzione all'architettura, all'implementazione e alla manutenzione.",
    preview: "terminal",
    tags: ["Tecnologia 01", "Tecnologia 02", "Tecnologia 03"],
    featured: true,
    sections: {
      context: "Qui descriveremo requisiti, scenario e obiettivi tecnici dell'applicazione reale.",
      challenge: "Questo spazio chiarirà quali problematiche sono state affrontate e quali vincoli hanno guidato il lavoro.",
      solution: "Qui saranno presentate le componenti sviluppate e le decisioni progettuali rilevanti.",
      architecture: "L'architettura sarà documentata con moduli, dipendenze e percorsi dei dati verificabili nel repository.",
      results: "Test, comportamenti osservabili, limiti noti e opportunità di evoluzione saranno descritti con precisione."
    }
  }
];

export const projectFilters = [
  { id: "all", label: "Tutti" },
  { id: "web", label: "Applicazioni web" },
  { id: "product", label: "Prodotti digitali" },
  { id: "engineering", label: "Software engineering" }
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
