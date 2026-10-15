import Link from "next/link";
import { ProjectSoftwareVisual } from "./SoftwareVisuals";

export default function ProjectCard({ project, compact = false }) {
  return (
    <article className={"project-card" + (compact ? " project-card-compact" : "")} aria-labelledby={project.id + "-title"}>
      <Link href={`/projects/${project.slug}`} className="project-card-link" aria-label={`Apri la scheda dimostrativa: ${project.title}`}>
        <ProjectSoftwareVisual variant={project.preview} />
        <div className="project-card-body">
          <div className="project-kicker">
            <span>{project.index} / {project.category.toUpperCase()}</span>
            <span className="project-card-arrow" aria-hidden="true">↗</span>
          </div>
          <h3 id={project.id + "-title"}>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-tags" aria-label="Tecnologie segnaposto">{project.tags.map((tag, index) => <span key={index}>{tag}</span>)}</div>
          <span className="project-card-cta">Apri la scheda <span aria-hidden="true">→</span></span>
        </div>
      </Link>
    </article>
  );
}
