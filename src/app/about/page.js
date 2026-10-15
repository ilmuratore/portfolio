import Link from "next/link";
import TechBadge from "@/app/components/site/TechBadge";
import SitePageFrame from "@/app/components/site/SitePageFrame";
import {
  ProfileChapters, ExperienceTimeline, EducationSection,
  CertificationsSection, FutureProjectsSection
} from "@/app/components/site/ProfileSections";
import { profile, skillAreas } from "@/content/profile.mjs";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Chi sono — " + siteConfig.name,
  description: "Simone Iengo, sviluppatore software junior: Java, Spring Boot, Python, docenza e percorso verso l’AI engineering.",
  alternates: { canonical: siteConfig.url + "/about/" },
  robots: siteConfig.published ? { index: true, follow: true } : { index: false, follow: false }
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
          <h1>Sviluppo software oggi. <em>AI engineering come obiettivo.</em></h1>
          <p>{profile.introduction}</p>
        </header>

        <div className="profile-intro-grid">
          <div className="profile-poster" aria-hidden="true">
            <span>JUNIOR DEVELOPER / BACKEND</span>
            <strong>SI<span>.</span></strong>
            <small>BACKEND · PROGETTI · FORMAZIONE</small>
          </div>
          <div className="profile-biography">
            <p className="eyebrow">PROFILO / CHI SONO</p>
            <h2>Pratica, formazione e <em>crescita continua.</em></h2>
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
            <div className="section-aside"><p>Il percorso tecnico inizia nel 2024. Prima ho lavorato in ambito finanziario e gestionale: due esperienze diverse, entrambe utili.</p></div>
          </div>
          <ExperienceTimeline />
        </section>

        <section className="profile-skills" aria-labelledby="profile-skills-title">
          <div className="section-intro">
            <div><p className="eyebrow">03 / SKILL SET</p><h2 className="section-title" id="profile-skills-title">Competenze <em>applicate.</em></h2></div>
            <div className="section-aside"><p>Distinguo le tecnologie usate nel lavoro da quelle esplorate nella formazione e nei progetti personali.</p></div>
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
            <div className="section-aside"><p>EPICODE è una formazione conclusa; la L-31 in Artificial Intelligence è un obiettivo universitario, non una laurea conseguita.</p></div>
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
