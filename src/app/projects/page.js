import Link from "next/link";
import SitePageFrame from "@/app/components/site/SitePageFrame";
import ProjectCatalog from "@/app/components/site/ProjectCatalog";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: `Progetti — ${siteConfig.name}`,
  description: "Progetti software documentati: banca Python, assistente AI locale e gestionale Java.",
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
          <p>Un catalogo pensato per raccontare processi, scelte tecniche e risultati. Mostro repository pubblici, progetti formativi e prototipi in evoluzione: contenuti e funzionalità vengono migliorati progressivamente. Le anteprime restano illustrative.</p>
        </div>
        <ProjectCatalog />
        <div className="catalog-footnote"><span>01 — 03 / REPOSITORY</span><Link className="text-link" href="/contact">Vai ai contatti <span aria-hidden="true">↗</span></Link></div>
      </section>
    </SitePageFrame>
  );
}
