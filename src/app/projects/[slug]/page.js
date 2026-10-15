import Link from "next/link";
import { notFound } from "next/navigation";
import SitePageFrame from "@/app/components/v2/SitePageFrame";
import { ProjectSoftwareVisual } from "@/app/components/v2/SoftwareVisuals";
import { projects, getProjectBySlug, getAdjacentProjects } from "@/content/projects.mjs";
import { siteConfig } from "@/config/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Progetto non trovato", robots: { index: false, follow: false } };
  return {
    title: `${project.title} — ${siteConfig.name}`,
    description: `Scheda dimostrativa per ${project.title}. Contenuti provvisori, non corrispondono a un progetto pubblicato.`,
    alternates: { canonical: `${siteConfig.url}/projects/${project.slug}` },
    robots: { index: false, follow: false }
  };
}

const details = [
  { key: "context", number: "01", label: "Contesto" },
  { key: "challenge", number: "02", label: "La sfida" },
  { key: "solution", number: "03", label: "La soluzione" },
  { key: "architecture", number: "04", label: "Architettura" },
  { key: "results", number: "05", label: "Risultati e sviluppi" }
];

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const { previous, next } = getAdjacentProjects(slug);
  return (
    <SitePageFrame>
      <article className="case-study">
        <div className="site-container">
          <nav className="breadcrumbs" aria-label="Percorso">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/projects">Progetti</Link><span aria-hidden="true">/</span><span aria-current="page">{project.title}</span>
          </nav>
          <header className="case-header">
            <p className="eyebrow">{project.index} / {project.category.toUpperCase()} / SCHEDA DEMO</p>
            <h1>{project.title}<span className="case-title-accent">.</span></h1>
            <p>{project.intro}</p>
            <div className="case-tags"><span className="case-status">CONTENUTO PROVVISORIO</span>{project.tags.map((tag, i) => <span key={i}>{tag}</span>)}</div>
          </header>
          <div className="case-hero-visual"><ProjectSoftwareVisual variant={project.preview} /><div className="case-visual-note"><span>ANTEPRIMA ILLUSTRATIVA</span><span>NESSUNA IMMAGINE REALE DISPONIBILE</span></div></div>
          <div className="case-body">
            <aside className="case-aside">
              <p className="eyebrow">INDICE / 05 SEZIONI</p>
              <nav aria-label="Indice del case study">
                {details.map((item) => <a href={`#${item.key}`} key={item.key}>{item.number} <span>{item.label}</span></a>)}
              </nav>
              <p className="case-aside-note">I dati e le rappresentazioni di questa pagina sono segnaposto, non informazioni su un progetto reale.</p>
            </aside>
            <div className="case-content">
              {details.map((item) => (
                <section id={item.key} key={item.key} className="case-chapter" aria-labelledby={`heading-${item.key}`}>
                  <span className="eyebrow">{item.number} / CASE STUDY</span>
                  <h2 id={`heading-${item.key}`}>{item.label}</h2>
                  <p>{project.sections[item.key]}</p>
                  {item.key === "architecture" && <div className="architecture-placeholder" role="img" aria-label="Schema architetturale dimostrativo, non rappresenta un sistema reale">
                    <div>Modulo A <small>Placeholder</small></div><span aria-hidden="true">→</span><div>Modulo B <small>Placeholder</small></div><span aria-hidden="true">→</span><div>Modulo C <small>Placeholder</small></div>
                  </div>}
                </section>
              ))}
              <div className="case-disclosure"><strong>Nota sui contenuti</strong><p>Questa è una scheda di impaginazione. Testi, immagini, moduli e tecnologie saranno sostituiti con documentazione autentica prima della pubblicazione definitiva.</p></div>
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
