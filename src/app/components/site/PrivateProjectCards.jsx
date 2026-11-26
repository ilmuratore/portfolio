import Link from "next/link";
import { privateProjects } from "@/content/projects.mjs";
import TechBadge from "./TechBadge";
import TechIcon from "./TechIcon";
import UiIcon from "./UiIcon";

export default function PrivateProjectCards() {
  return (
    <div className="private-project-grid">
      {privateProjects.map((project) => (
        <article className="private-project-card" key={project.id} aria-labelledby={"private-" + project.id}>
          <div className="private-project-meta">
            <span>{project.domain}</span>
            <span className="private-project-status"><UiIcon name="lock" size={13} /> {project.status}</span>
          </div>
          <div className="private-project-heading">
            <span className="private-project-symbol"><TechIcon label={project.tags[0]} size={28} /></span>
            <div>
              <h3 id={"private-" + project.id}>{project.name}</h3>
              <p>{project.summary}</p>
            </div>
          </div>
          <ul className="private-project-highlights" aria-label={"Caratteristiche generali di " + project.name}>
            {project.highlights.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
          <div className="private-project-tags" aria-label="Tecnologie e ambiti">
            {project.tags.map((tag) => <TechBadge key={tag} label={tag} />)}
          </div>
          <p className="private-project-note">{project.context}</p>
          <Link className="private-project-link" href={`/projects/${project.slug}`} aria-label={`Leggi la presentazione di ${project.name}`}>Esplora il progetto <span aria-hidden="true">↗</span></Link>
        </article>
      ))}
    </div>
  );
}
