import { featuredProjects } from "@/content/projects.mjs";
import { processSteps } from "@/content/process.mjs";
import { HeroSoftwareVisual } from "./SoftwareVisuals";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import UiIcon from "./UiIcon";
import { profile } from "@/content/profile.mjs";

export function HeroSection() {
  return (
    <section className="hero site-container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-mark" /> JUNIOR SOFTWARE DEVELOPER / JAVA & PYTHON</p>
        <h1 id="hero-title">Sviluppo software. <span>Verso l’AI.</span></h1>
        <p className="hero-description">{profile.heroIntroduction}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Esplora i progetti <span aria-hidden="true">↗</span></a>
          <a className="button button-outline" href="#about">Scopri di più <span aria-hidden="true">↗</span></a>
        </div>
        <div className="hero-note"><span className="rule" /><span>Backend Java · Python · Docenza · Obiettivo AI Engineer</span></div>
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
          <div className="section-aside"><p>Tre repository pubblici con descrizioni, tecnologie e scelte architetturali ricavate dalla loro documentazione.</p><span className="plain-meta">CASE STUDY / REPOSITORY PUBBLICI</span></div>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project) => <ProjectCard key={project.id} project={project} compact />)}
        </div>
        <div className="featured-footer">
          <p className="projects-disclaimer">Progetti reali; anteprime grafiche illustrative, non screenshot dei software.</p>
          <Link className="text-link" href="/projects">Tutti i progetti <span aria-hidden="true">↗</span></Link>
        </div>
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
          <div className="section-aside"><p>Un approccio orientato ai requisiti, all&apos;architettura e alla verifica, maturato attraverso sviluppo e analisi funzionale.</p></div>
        </div>
        <ol className="process-grid">
          {processSteps.map((step) => <li className="process-step" key={step.number}><span className="step-number">{step.number} <UiIcon name={step.number === "01" ? "search" : step.number === "02" ? "layers" : step.number === "03" ? "code" : "check"} size={23} /></span><h3>{step.title}</h3><p>{step.description}</p></li>)}
        </ol>
      </div>
    </section>
  );
}


