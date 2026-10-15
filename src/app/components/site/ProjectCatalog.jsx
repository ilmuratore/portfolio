"use client";

import { useState } from "react";
import { projects, projectFilters } from "@/content/projects.mjs";
import ProjectCard from "./ProjectCard";

export default function ProjectCatalog() {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? projects : projects.filter((project) => project.categoryId === filter);

  return (
    <>
      <div className="catalog-toolbar">
        <div className="catalog-filters" role="group" aria-label="Filtra i progetti per categoria">
          {projectFilters.map((item) => (
            <button
              type="button"
              key={item.id}
              className={"catalog-filter" + (item.id === filter ? " is-active" : "")}
              aria-pressed={item.id === filter}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <p className="catalog-count" aria-live="polite">{filtered.length} {filtered.length === 1 ? "scheda" : "schede"}</p>
      </div>
      <div className="project-grid catalog-grid" aria-label="Elenco dei progetti">
        {filtered.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
      <p className="projects-disclaimer">Le descrizioni derivano dai repository pubblici. Le anteprime sono illustrazioni grafiche e non screenshot delle applicazioni.</p>
    </>
  );
}
