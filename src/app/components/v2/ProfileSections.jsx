import Link from "next/link";
import { profile, skillAreas, profileChapters, contactChannels } from "@/content/profile.mjs";

export function SkillsSection() {
  return (
    <section className="section section-skills" id="skills" aria-labelledby="skills-title">
      <div className="site-container">
        <div className="section-intro">
          <div><p className="eyebrow">03 / AREE DI COMPETENZA</p><h2 className="section-title" id="skills-title">Strumenti per <em>costruire.</em></h2></div>
          <div className="section-aside"><p>Una panoramica ordinata per ambiti. Le tecnologie definitive saranno inserite dopo la revisione delle esperienze e dei progetti.</p></div>
        </div>
        <div className="skills-grid skill-groups">
          {skillAreas.map((area) => (
            <article className="skill-tile" key={area.number}>
              <span className="skill-number">{area.number} / AMBITO</span>
              <span className="skill-glyph" aria-hidden="true">{area.number === "01" ? "⌘" : area.number === "02" ? "{ }" : area.number === "03" ? "▤" : "↗"}</span>
              <h3>{area.name}</h3>
              <p>{area.description}</p>
              <div className="skill-technologies" aria-label="Tecnologie da confermare">
                {area.technologies.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
            </article>
          ))}
        </div>
        <p className="skills-footnote">Elenco dimostrativo — nessun livello di competenza attribuito arbitrariamente.</p>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="section section-about" id="about" aria-labelledby="about-title">
      <div className="site-container about-grid">
        <div className="about-visual" aria-hidden="true">
          <span className="about-visual-top">PROFILO / PLACEHOLDER</span>
          <div className="about-monogram">SI<span>.</span></div>
          <span className="about-visual-bottom">IDEA — PROGETTO — CODICE</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">04 / CHI SONO</p>
          <h2 className="section-title" id="about-title">Un percorso fatto di <em>progetti.</em></h2>
          <p>{profile.introduction}</p>
          <p>Approccio, esperienze e percorso saranno raccontati nella pagina dedicata, senza informazioni inventate.</p>
          <Link className="text-link" href="/about">Scopri il profilo <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="site-container contact-grid">
        <div><p className="eyebrow">05 / CONTATTI</p><h2 id="contact-title">Uno spazio per <em>collaborare.</em></h2></div>
        <div className="contact-side">
          <p>La pagina contatti raccoglie i canali pubblici verificati. Il form email sarà valutato soltanto quando ne avremo definito il servizio.</p>
          <Link className="button button-light" href="/contact">Contatti e profili <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}

export function ProfileChapters() {
  return (
    <div className="profile-chapters">
      {profileChapters.map((chapter) => (
        <section className="profile-chapter" key={chapter.id} id={chapter.id} aria-labelledby={`profile-${chapter.id}`}>
          <span className="profile-number">{chapter.index}</span>
          <div><h2 id={`profile-${chapter.id}`}>{chapter.title}</h2><p>{chapter.description}</p></div>
        </section>
      ))}
    </div>
  );
}

export function ContactChannels({ variant = "default" }) {
  return (
    <div className={"contact-channels " + (variant === "wide" ? "contact-channels-wide" : "")}>
      {contactChannels.map((channel, i) => (
        <a className="contact-channel" href={channel.href} key={channel.id} target="_blank" rel="noopener noreferrer">
          <span className="contact-channel-number">0{i + 1}</span>
          <span className="contact-channel-body"><strong>{channel.label}</strong><small>{channel.type}</small><span>{channel.short}</span></span>
          <span className="contact-channel-arrow" aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  );
}
