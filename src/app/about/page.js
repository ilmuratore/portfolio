import Link from "next/link";
import SitePageFrame from "@/app/components/v2/SitePageFrame";
import { ProfileChapters } from "@/app/components/v2/ProfileSections";
import { profile, skillAreas } from "@/content/profile.mjs";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: `Chi sono — ${siteConfig.name}`,
  description: "Pagina profilo in preparazione. Informazioni professionali e competenze saranno aggiornate prima della pubblicazione definitiva.",
  alternates: { canonical: `${siteConfig.url}/about` },
  robots: { index: false, follow: false }
};

export default function AboutPage() {
  return (
    <SitePageFrame>
      <div className="site-container profile-page">
        <nav className="breadcrumbs" aria-label="Percorso"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Chi sono</span></nav>
        <header className="profile-hero">
          <p className="eyebrow">{profile.label}</p>
          <h1>Il percorso dietro <em>il lavoro.</em></h1>
          <p>{profile.introduction}</p>
        </header>
        <div className="profile-intro-grid">
          <div className="profile-poster" aria-hidden="true"><span>PROFILO / PLACEHOLDER</span><strong>SI<span>.</span></strong><small>DOCUMENTAZIONE IN PREPARAZIONE</small></div>
          <div className="profile-biography">
            <p className="eyebrow">PROFILO / 01</p>
            <h2>Una storia da <em>raccontare.</em></h2>
            {profile.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <Link href="/projects" className="text-link">Esplora i progetti <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <section className="profile-details" aria-labelledby="profile-chapters-title">
          <div className="section-intro"><div><p className="eyebrow">IL PERCORSO / SEGNAPOSTO</p><h2 className="section-title" id="profile-chapters-title">Le tappe <em>importanti.</em></h2></div><div className="section-aside"><p>Una struttura pronta per raccontare informazioni documentate. Non vengono attribuiti ruoli, titoli o date non verificati.</p></div></div>
          <ProfileChapters />
        </section>
        <section className="profile-skills" aria-labelledby="profile-skills-title">
          <div className="section-intro"><div><p className="eyebrow">COMPETENZE / SEGNAPOSTO</p><h2 id="profile-skills-title" className="section-title">Aree di <em>lavoro.</em></h2></div><div className="section-aside"><p>I singoli strumenti saranno selezionati dai progetti reali, senza progress bar o autovalutazioni numeriche.</p></div></div>
          <div className="profile-skill-list">{skillAreas.map((area) => <div key={area.number}><span>{area.number}</span><strong>{area.name}</strong><small>{area.description}</small></div>)}</div>
        </section>
        <div className="profile-page-footer"><span>CONTENUTI IN PREPARAZIONE</span><Link className="button button-primary" href="/contact">Vai ai contatti <span aria-hidden="true">↗</span></Link></div>
      </div>
    </SitePageFrame>
  );
}
