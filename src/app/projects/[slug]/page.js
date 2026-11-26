import Link from "next/link";
import TechBadge from "@/app/components/site/TechBadge";
import UiIcon from "@/app/components/site/UiIcon";
import { notFound } from "next/navigation";
import SitePageFrame from "@/app/components/site/SitePageFrame";
import { ProjectSoftwareVisual } from "@/app/components/site/SoftwareVisuals";
import { caseStudies, getCaseStudyBySlug, getAdjacentCaseStudies } from "@/content/projects.mjs";
import { siteConfig } from "@/config/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getCaseStudyBySlug(slug);
  if (!project) return { title: "Progetto non trovato", robots: { index: false, follow: false } };
  return {
    title: `${project.title} — ${siteConfig.name}`,
    description: project.description,
    alternates: { canonical: `${siteConfig.url}/projects/${project.slug}/` },
    robots: siteConfig.published ? { index: true, follow: true } : { index: false, follow: false }
  };
}

const details = [
  { key: "context", number: "01", label: "Contesto" },
  { key: "challenge", number: "02", label: "La sfida" },
  { key: "solution", number: "03", label: "La soluzione" },
  { key: "architecture", number: "04", label: "Architettura" },
  { key: "results", number: "05", label: "Risultati e stato attuale" }
];

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getCaseStudyBySlug(slug);
  if (!project) notFound();
  const { previous, next } = getAdjacentCaseStudies(slug);
  const isPrivate = !project.repositoryUrl;
  return (
    <SitePageFrame>
      <article className="case-study">
        <div className="site-container">
          <nav className="breadcrumbs" aria-label="Percorso">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/projects">Progetti</Link><span aria-hidden="true">/</span><span aria-current="page">{project.title}</span>
          </nav>
          <header className="case-header">
            <p className="eyebrow">{project.index} / {project.category.toUpperCase()} / {isPrivate ? "PROGETTO PERSONALE" : "CASE STUDY"}</p>
            <h1>{project.title}<span className="case-title-accent">.</span></h1>
            <p>{project.intro}</p>
            <div className="case-tags"><span className="case-status">{project.status}</span>{project.tags.map((tag, i) => <TechBadge key={i} label={tag} />)}</div>
          </header>
          <div className="case-hero-visual">
            {isPrivate ? (
              <div className="private-case-visual" role="img" aria-label={`Schema concettuale di ${project.title}: ${project.architectureNodes.join(", ")}`}>
                <div className="private-case-visual-bar"><span>PROJECT / ENGINEERING</span><span>CODICE PRIVATO</span></div>
                <div className="private-case-visual-main">
                  <div><span className="eyebrow">PROGETTO INDIPENDENTE</span><h2>{project.title}</h2><p>{project.description}</p></div>
                  <div className="private-case-visual-flow">
                    {project.architectureNodes.map((node, index) => (
                      <span key={node}><small>{String(index + 1).padStart(2, "0")}</small>{node}</span>
                    ))}
                  </div>
                </div>
                <span className="private-case-visual-footer">Schema concettuale · Nessun dettaglio interno pubblicato</span>
              </div>
            ) : <ProjectSoftwareVisual variant={project.preview} primaryTech={project.tags[0]} />}
          </div>
          <div className="case-body">
            <aside className="case-aside">
              <p className="eyebrow">INDICE / 05 SEZIONI</p>
              <nav aria-label="Indice del case study">
                {details.map((item) => <a href={`#${item.key}`} key={item.key}>{item.number} <span>{item.label}</span></a>)}
              </nav>
              <p className="case-aside-note">{isPrivate ? "Presentazione generale di un progetto personale: non include codice né documentazione riservata." : "Contenuti documentati nel repository pubblico. Le anteprime sono illustrative."}</p>
            </aside>
            <div className="case-content">
              {details.map((item) => (
                <section id={item.key} key={item.key} className="case-chapter" aria-labelledby={`heading-${item.key}`}>
                  <span className="eyebrow">{item.number} / CASE STUDY</span>
                  <h2 id={`heading-${item.key}`}>{item.label}</h2>
                  <p>{project.sections[item.key]}</p>
                  {item.key === "architecture" && <div className="architecture-diagram" role="img" aria-label={isPrivate ? "Schema concettuale, senza dettagli riservati" : "Schema riepilogativo dei componenti documentati nel repository"}>
                    {project.architectureNodes.map((node) => (
                      <div key={node}>{node}<small>{isPrivate ? "Ambito generale" : "Componente documentato"}</small></div>
                    ))}
                  </div>}
                </section>
              ))}
              <div className="case-disclosure">
                <strong>{isPrivate ? "Presentazione pubblica" : "Repository e documentazione"}</strong>
                <p>{isPrivate
                  ? "Il progetto è personale e il repository non è pubblico. Questa pagina presenta soltanto obiettivi e caratteristiche generali, senza pubblicare codice o dettagli riservati."
                  : "La scheda si basa sul codice e sui contenuti consultabili nel repository pubblico. Le illustrazioni non sono screenshot delle applicazioni."}</p>
                {isPrivate ? (
                  <div className="case-source-links">
                    <Link href="/contact"><UiIcon name="mail" size={17} /> Contattami per informazioni <span aria-hidden="true">↗</span></Link>
                  </div>
                ) : (
                  <div className="case-source-links">
                    <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer"><UiIcon name="github" size={17} /> Esamina il codice su GitHub <UiIcon name="external" size={14} /></a>
                    {project.documentationUrl && <a href={project.documentationUrl} target="_blank" rel="noopener noreferrer"><UiIcon name="file" size={17} /> Leggi la documentazione <UiIcon name="external" size={14} /></a>}
                  </div>
                )}
              </div>
            </div>
          </div>
          <nav className="case-navigation" aria-label="Navigazione tra i progetti">
            {previous ? <Link href={`/projects/${previous.slug}`}><span>← Progetto precedente</span><strong>{previous.title}</strong></Link> : <Link href="/projects"><span>← Torna al catalogo</span><strong>Tutti i progetti</strong></Link>}
            {next ? <Link href={`/projects/${next.slug}`}><span>Progetto successivo →</span><strong>{next.title}</strong></Link> : <Link href="/projects"><span>Torna al catalogo →</span><strong>Tutti i progetti</strong></Link>}
          </nav>
        </div>
      </article>
    </SitePageFrame>
  );
}
