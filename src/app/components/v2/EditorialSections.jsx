import { featuredProjects, processSteps, skillAreas } from "@/content/placeholder.mjs";
import { HeroSoftwareVisual, ProjectSoftwareVisual } from "./SoftwareVisuals";

function SectionIntro({ eyebrow, title, description, aside, id }) {
  return (
    <div className="section-intro">
      <div><p className="eyebrow">{eyebrow}</p><h2 className="section-title" id={id}>{title}</h2></div>
      {(description || aside) && <div className="section-aside">{description && <p>{description}</p>}{aside}</div>}
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="hero site-container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-mark" /> PORTFOLIO / VERSIONE 2.0</p>
        <h1 id="hero-title">Il titolo del tuo <span>portfolio.</span></h1>
        <p className="hero-description">Qui inseriremo una presentazione sintetica del profilo, dei progetti e dell&apos;approccio allo sviluppo software.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Esplora i progetti <span aria-hidden="true">↗</span></a>
          <a className="button button-outline" href="#about">Scopri di più <span aria-hidden="true">↗</span></a>
        </div>
        <div className="hero-note"><span className="rule" /><span>Progettato per dare spazio alle idee e al codice.</span></div>
      </div>
      <HeroSoftwareVisual />
    </section>
  );
}

export function FeaturedSection() {
  return (
    <section className="section section-projects" id="projects" aria-labelledby="projects-title">
      <div className="site-container">
        <div className="section-intro">
          <div><p className="eyebrow">01 / PROGETTI IN EVIDENZA</p><h2 className="section-title" id="projects-title">Una selezione di <em>lavori.</em></h2></div>
          <div className="section-aside"><p>Qui presenteremo i progetti principali: contesto, tecnologie, architettura e risultati verificabili.</p><span className="plain-meta">CASE STUDY IN PREPARAZIONE</span></div>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.id} aria-labelledby={project.id + "-title"}>
              <ProjectSoftwareVisual variant={project.preview} />
              <div className="project-card-body">
                <div className="project-kicker"><span>{project.index} / {project.category}</span><span aria-hidden="true">↗</span></div>
                <h3 id={project.id + "-title"}>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags" aria-label="Tecnologie segnaposto">{project.tags.map((tag, i) => <span key={i}>{tag}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
        <p className="projects-disclaimer">Anteprime e informazioni dimostrative: i progetti reali verranno inseriti in una fase successiva.</p>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="section section-process" id="process" aria-labelledby="process-title">
      <div className="site-container">
        <div className="section-intro">
          <div><p className="eyebrow">02 / IL PROCESSO</p><h2 className="section-title" id="process-title">Dal problema <em>alla soluzione.</em></h2></div>
          <div className="section-aside"><p>Uno spazio per raccontare il metodo di lavoro attraverso passaggi chiari e documentati.</p></div>
        </div>
        <ol className="process-grid">
          {processSteps.map((step) => <li className="process-step" key={step.number}><span className="step-number">{step.number} <span aria-hidden="true">↗</span></span><h3>{step.title}</h3><p>{step.description}</p></li>)}
        </ol>
      </div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section className="section section-skills" id="skills" aria-labelledby="skills-title">
      <div className="site-container">
        <SectionIntro id="skills-title" eyebrow="03 / COMPETENZE" title={<>Strumenti per <em>costruire.</em></>} description="Le competenze saranno organizzate per area, senza percentuali arbitrarie o elenchi infiniti." />
        <div className="skills-grid">
          {skillAreas.map((item) => <div className="skill-tile" key={item.number}><span className="skill-number">{item.number} / AREA</span><span className="skill-icon" aria-hidden="true">{item.number === "01" ? "</>" : item.number === "02" ? "{ }" : item.number === "03" ? "▤" : "⌘"}</span><h3>{item.name}</h3><p>{item.description}</p></div>)}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="section section-about" id="about" aria-labelledby="about-title">
      <div className="site-container about-grid">
        <div className="about-visual" role="img" aria-label="Elemento tipografico decorativo segnaposto, senza fotografia personale"><span className="about-visual-top">ABOUT / PLACEHOLDER</span><div className="about-monogram">SI<span>.</span></div><span className="about-visual-bottom">DESIGN · DEVELOP · DOCUMENT</span></div>
        <div className="about-copy"><p className="eyebrow">04 / CHI SONO</p><h2 className="section-title" id="about-title">Un percorso fatto di <em>progetti.</em></h2><p>Questa sezione ospiterà una biografia breve, le esperienze significative e il collegamento tra competenze e progetti realizzati.</p><p>Nessun contenuto definitivo sarà pubblicato prima della revisione dei materiali.</p><a className="text-link" href="#contact">Vai ai contatti <span aria-hidden="true">↗</span></a></div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="site-container contact-grid"><div><p className="eyebrow">05 / CONTATTI</p><h2 id="contact-title">Uno spazio per <em>collaborare.</em></h2></div><div className="contact-side"><p>Qui inseriremo un breve invito a entrare in contatto. Per ora sono disponibili i profili esterni già verificati.</p><a className="button button-light" href="https://www.linkedin.com/in/simone-iengo-557914109/" target="_blank" rel="noopener noreferrer">Apri LinkedIn <span aria-hidden="true">↗</span></a></div></div>
    </section>
  );
}
