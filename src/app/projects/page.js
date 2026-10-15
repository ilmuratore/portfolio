import Link from "next/link";
import SitePageFrame from "@/app/components/v2/SitePageFrame";
import ProjectCatalog from "@/app/components/v2/ProjectCatalog";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: `Progetti — ${siteConfig.name}`,
  description: "Catalogo dimostrativo dei progetti: struttura in preparazione, contenuti non ancora definitivi.",
  alternates: { canonical: `${siteConfig.url}/projects` },
  robots: { index: false, follow: false }
};

export default function ProjectsPage() {
  return (
    <SitePageFrame>
      <section className="catalog-page site-container" aria-labelledby="catalog-title">
        <nav className="breadcrumbs" aria-label="Percorso"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Progetti</span></nav>
        <div className="catalog-hero">
          <div><p className="eyebrow">PORTFOLIO / PROGETTI</p><h1 id="catalog-title" className="catalog-title">Il lavoro, <em>nel dettaglio.</em></h1></div>
          <p>Un catalogo pensato per raccontare processi, scelte tecniche e risultati. Le schede attuali sono placeholder e verranno sostituite da progetti reali.</p>
        </div>
        <ProjectCatalog />
        <div className="catalog-footnote"><span>01 — 03 / DEMO</span><Link className="text-link" href="/#contact">Vai ai contatti <span aria-hidden="true">↗</span></Link></div>
      </section>
    </SitePageFrame>
  );
}
