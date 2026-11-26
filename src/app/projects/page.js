import Link from "next/link";
import SitePageFrame from "@/app/components/site/SitePageFrame";
import ProjectCatalog from "@/app/components/site/ProjectCatalog";
import PrivateProjectCards from "@/app/components/site/PrivateProjectCards";
import { projects } from "@/content/projects.mjs";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: `Progetti — ${siteConfig.name}`,
  description: "Case study pubblici di Java, Python e Unity/C#, con progetti personali selezionati di Rust e simulazione.",
  alternates: { canonical: `${siteConfig.url}/projects/` },
  robots: siteConfig.published ? { index: true, follow: true } : { index: false, follow: false }
};

export default function ProjectsPage() {
  return (
    <SitePageFrame>
      <section className="catalog-page site-container" aria-labelledby="catalog-title">
        <nav className="breadcrumbs" aria-label="Percorso"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Progetti</span></nav>
        <div className="catalog-hero">
          <div><p className="eyebrow">PORTFOLIO / PROGETTI</p><h1 id="catalog-title" className="catalog-title">Il lavoro, <em>nel dettaglio.</em></h1></div>
          <p>Case study con repository consultabili e scelte tecniche motivate, dal backend al game development. Più sotto presento due progetti indipendenti a codice privato, descritti solo attraverso caratteristiche generali.</p>
        </div>
        <ProjectCatalog />
        <section className="private-catalog-section" aria-labelledby="private-catalog-title">
          <div className="section-intro">
            <div><p className="eyebrow">RICERCA PERSONALE</p><h2 className="section-title" id="private-catalog-title">Oltre i repository <em>pubblici.</em></h2></div>
            <div className="section-aside"><p>Torven e Il Presidente sono progetti personali con codice privato. Le descrizioni indicano solo ambiti, tecnologie e caratteristiche generali.</p></div>
          </div>
          <PrivateProjectCards />
        </section>
        <div className="catalog-footnote"><span>{String(projects.length).padStart(2, "0")} / CASE STUDY PUBBLICI</span><Link className="text-link" href="/contact">Vai ai contatti <span aria-hidden="true">↗</span></Link></div>
      </section>
    </SitePageFrame>
  );
}
