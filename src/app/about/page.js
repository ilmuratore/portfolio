import Link from "next/link";
import TechBadge from "@/app/components/v2/TechBadge";
import SitePageFrame from "@/app/components/v2/SitePageFrame";
import {
  ProfileChapters, ExperienceTimeline, EducationSection,
  CertificationsSection, FutureProjectsSection
} from "@/app/components/v2/ProfileSections";
import { profile, skillAreas } from "@/content/profile.mjs";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Chi sono — " + siteConfig.name,
  description: "Il percorso professionale di Simone Iengo: sviluppo Java enterprise, backend Python, progetti AI, formazione tecnica e coordinamento.",
  alternates: { canonical: siteConfig.url + "/about" },
  robots: { index: false, follow: false }
};

export default function AboutPage() {
  return (
    <SitePageFrame>
      <div className="site-container profile-page">
        <nav className="breadcrumbs" aria-label="Percorso">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Chi sono</span>
        </nav>
        <header className="profile-hero">
          <p className="eyebrow">{profile.label}</p>
          <h1>Dal software enterprise <em>ai sistemi AI.</em></h1>
          <p>{profile.introduction}</p>
        </header>

        <div className="profile-intro-grid">
          <div className="profile-poster" aria-hidden="true">
            <span>SOFTWARE ENGINEERING / AI SYSTEMS</span>
            <strong>SI<span>.</span></strong>
            <small>BACKEND · PROGETTI · FORMAZIONE</small>
          </div>
          <div className="profile-biography">
            <p className="eyebrow">PROFILO / CHI SONO</p>
            <h2>Esperienza e <em>curiosità tecnica.</em></h2>
            {profile.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <Link href="/projects" className="text-link">Esplora il lavoro <span aria-hidden="true">↗</span></Link>
          </div>
        </div>

        <section className="profile-details" aria-labelledby="profile-approach-title">
          <div className="section-intro">
            <div><p className="eyebrow">01 / APPROCCIO</p><h2 className="section-title" id="profile-approach-title">Il modo di <em>costruire.</em></h2></div>
            <div className="section-aside"><p>Analisi, progettazione, implementazione e continua evoluzione delle competenze.</p></div>
          </div>
          <ProfileChapters />
        </section>

        <section className="profile-experience" aria-labelledby="profile-experience-title">
          <div className="section-intro">
            <div><p className="eyebrow">02 / ESPERIENZA PROFESSIONALE</p><h2 className="section-title" id="profile-experience-title">Il percorso, <em>nel concreto.</em></h2></div>
            <div className="section-aside"><p>Dall'esperienza organizzativa alla programmazione enterprise, fino alla formazione tecnica e ai progetti AI.</p></div>
          </div>
          <ExperienceTimeline />
        </section>

        <section className="profile-skills" aria-labelledby="profile-skills-title">
          <div className="section-intro">
            <div><p className="eyebrow">03 / SKILL SET</p><h2 className="section-title" id="profile-skills-title">Competenze <em>applicate.</em></h2></div>
            <div className="section-aside"><p>Ambiti e strumenti utilizzati nello sviluppo, nei progetti e nella formazione; nessun punteggio arbitrario.</p></div>
          </div>
          <div className="profile-skill-list">
            {skillAreas.map((area) => (
              <div key={area.number}>
                <span>{area.number}</span><strong>{area.name}</strong>
                <small>{area.description}</small>
                <div className="profile-skill-tags">{area.technologies.map((tech) => <TechBadge label={tech} key={tech} />)}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="profile-training" aria-labelledby="profile-training-title">
          <div className="section-intro">
            <div><p className="eyebrow">04 / FORMAZIONE</p><h2 className="section-title" id="profile-training-title">Formazione <em>continua.</em></h2></div>
            <div className="section-aside"><p>Il percorso di formazione tecnica si affianca allo sviluppo professionale e ai progetti realizzati.</p></div>
          </div>
          <EducationSection />
        </section>

        <section className="profile-certifications" aria-labelledby="profile-certifications-title">
          <div className="section-intro">
            <div><p className="eyebrow">05 / CERTIFICAZIONI</p><h2 className="section-title" id="profile-certifications-title">Competenze da <em>documentare.</em></h2></div>
            <div className="section-aside"><p>La struttura è pronta per titoli, enti, date, credenziali e collegamenti di verifica.</p></div>
          </div>
          <CertificationsSection />
        </section>

        <section className="profile-future" aria-labelledby="profile-future-title">
          <div className="section-intro">
            <div><p className="eyebrow">06 / IN EVOLUZIONE</p><h2 className="section-title" id="profile-future-title">Progetti a <em>lungo termine.</em></h2></div>
            <div className="section-aside"><p>Due iniziative ancora in sviluppo: presenterò architetture, risultati e materiali pubblici quando saranno pronti.</p></div>
          </div>
          <FutureProjectsSection />
        </section>

        <div className="profile-page-footer">
          <span>SOFTWARE · AI · FORMAZIONE</span>
          <Link className="button button-primary" href="/contact">Contatti e profili <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </SitePageFrame>
  );
}
