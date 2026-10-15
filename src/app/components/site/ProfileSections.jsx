import Link from "next/link";
import TechBadge from "./TechBadge";
import TechIcon from "./TechIcon";
import UiIcon from "./UiIcon";
import {
  profile, skillAreas, profileChapters, contactChannels,
  experience, education, academicGoal, certificationProviders, futureProjects
} from "@/content/profile.mjs";

export function SkillsSection() {
  return (
    <section className="section section-skills" id="skills" aria-labelledby="skills-title">
      <div className="site-container">
        <div className="section-intro">
          <div><p className="eyebrow">03 / COMPETENZE</p><h2 className="section-title" id="skills-title">Tecnologie, <em>con metodo.</em></h2></div>
          <div className="section-aside"><p>Java e Spring nel lavoro, Python e AI nei progetti di apprendimento. Strumenti distinti per ambito, senza autovalutazioni arbitrarie.</p></div>
        </div>
        <div className="skills-grid skill-groups">
          {skillAreas.map((area) => (
            <article className="skill-tile" key={area.number}>
              <span className="skill-number">{area.number} / AMBITO</span>
              <div className="skill-glyph-group" aria-hidden="true">
                <span className="skill-glyph"><TechIcon label={area.technologies[0]} size={27} /></span>
                <span className="skill-glyph-secondary"><TechIcon label={area.technologies[1]} size={20} /></span>
              </div>
              <h3>{area.name}</h3>
              <p>{area.description}</p>
              <div className="skill-technologies" aria-label={"Strumenti per " + area.name}>
                {area.technologies.map((tech) => <TechBadge label={tech} key={tech} />)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="section section-about" id="about" aria-labelledby="about-title">
      <div className="site-container about-grid">
        <div className="about-visual" aria-hidden="true">
          <span className="about-visual-top">SOFTWARE / AI / FORMAZIONE</span>
          <div className="about-monogram">SI<span>.</span></div>
          <span className="about-visual-bottom">ANALISI — ARCHITETTURA — SVILUPPO</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">04 / CHI SONO</p>
          <h2 className="section-title" id="about-title">Tre anni nel software. <em>Un percorso che cresce.</em></h2>
          <p>{profile.introduction}</p>
          <p>La mia esperienza professionale è junior: continuo a consolidare il backend e ad approfondire l’intelligenza artificiale.</p>
          <Link className="text-link" href="/about">Percorso professionale <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="site-container contact-grid">
        <div><p className="eyebrow">05 / CONTATTI</p><h2 id="contact-title">Tecnologia e <em>confronto.</em></h2></div>
        <div className="contact-side">
          <p>Backend Java, progetti Python e formazione: trovi codice e lavori pubblici su GitHub e il percorso professionale su LinkedIn.</p>
          <Link className="button button-light" href="/contact">Vai ai contatti <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}

export function ProfileChapters() {
  return (
    <div className="profile-chapters">
      {profileChapters.map((chapter) => (
        <section className="profile-chapter" key={chapter.id} id={chapter.id} aria-labelledby={"profile-" + chapter.id}>
          <span className="profile-number">{chapter.index}</span>
          <div><h3 id={"profile-" + chapter.id}>{chapter.title}</h3><p>{chapter.description}</p></div>
        </section>
      ))}
    </div>
  );
}

export function ExperienceTimeline() {
  const primary = experience.filter((item) => item.category === "tech");
  const previous = experience.filter((item) => item.category === "previous");
  return (
    <div className="career">
      <div className="career-list">
        {primary.map((item) => (
          <article className="career-entry" key={item.id}>
            <div className="career-entry-period">{item.period}</div>
            <div className="career-entry-body">
              <span className="career-organization">{item.organization}</span>
              <h3>{item.role}</h3>
              <p className="career-arrangement">{item.arrangement}</p>
              <p>{item.description}</p>
              {item.highlights.length > 0 && <ul>{item.highlights.map((point) => <li key={point}>{point}</li>)}</ul>}
            </div>
          </article>
        ))}
      </div>
      <div className="career-previous">
        <h3>Esperienza precedente</h3>
        <p>{profile.previousCareer}</p>
        {previous.map((item) => (
          <article key={item.id} className="career-previous-item">
            <span>{item.period}</span>
            <div><strong>{item.role}</strong><span>{item.organization}</span><p>{item.description}</p></div>
          </article>
        ))}
      </div>
    </div>
  );
}

export function EducationSection() {
  return (
    <div className="education-list">
      {education.map((item) => (
        <article className="education-entry" key={item.id}>
          <span className="eyebrow">{item.period}</span>
          <h3>{item.title}</h3>
          <p className="career-organization">{item.organization}</p>
          <p>{item.detail}</p>
        </article>
      ))}
      <aside className="academic-goal" aria-labelledby="academic-goal-title">
        <span className="eyebrow">PROSSIMA DIREZIONE / STUDI UNIVERSITARI</span>
        <h3 id="academic-goal-title">{academicGoal.title}</h3>
        <p className="academic-goal-status">{academicGoal.status}</p>
        <p>{academicGoal.detail}</p>
      </aside>
    </div>
  );
}

export function CertificationsSection() {
  return (
    <div className="certification-panel">
      <div className="certification-empty">
        <span className="eyebrow">CREDENZIALI</span>
        <h3>Certificazioni e attestati.</h3>
        <p>La sezione raccoglierà i dettagli degli attestati quando saranno disponibili titoli e credenziali verificabili.</p>
        <div className="certification-providers" aria-label="Piattaforme indicate">
          {certificationProviders.map((name) => <span key={name}><TechIcon label={name} size={18} />{name}</span>)}
        </div>
      </div>
    </div>
  );
}

export function FutureProjectsSection() {
  return (
    <div className="future-project-grid">
      {futureProjects.map((item, index) => (
        <article className="future-project" key={item.id}>
          <div className="future-project-top"><span>0{index + 1} / PROGETTO A LUNGO TERMINE</span><span>{item.status}</span></div>
          <div className="future-project-heading">{item.id === "rustos" ? <TechIcon label="Rust" size={25} /> : <UiIcon name="layers" size={25} />}<h3>{item.name}</h3></div>
          <p>{item.description}</p>
          <span className="future-project-note">Presentazione pubblica in preparazione</span>
        </article>
      ))}
    </div>
  );
}

export function ContactChannels({ variant = "default" }) {
  return (
    <div className={"contact-channels " + (variant === "wide" ? "contact-channels-wide" : "")}>
      {contactChannels.map((channel) => (
        <a className="contact-channel" href={channel.href} key={channel.id} target="_blank" rel="noopener noreferrer">
          <span className="contact-channel-symbol">{channel.id === "github" ? <TechIcon label="GitHub" size={25} /> : <UiIcon name="linkedin" size={25} />}</span>
          <span className="contact-channel-body"><strong>{channel.label}</strong><small>{channel.type}</small><span>{channel.short}</span></span>
          <span className="contact-channel-arrow" aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  );
}
