import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { projects, featuredProjects, projectFilters, getProjectBySlug, getAdjacentProjects } from "../src/content/projects.mjs";

const chapterKeys = ["context", "challenge", "solution", "architecture", "results"];

test("i progetti hanno slug unici e URL statici validi", () => {
  assert.equal(projects.length, 3);
  assert.equal(new Set(projects.map((project) => project.id)).size, projects.length);
  assert.equal(new Set(projects.map((project) => project.slug)).size, projects.length);
  for (const project of projects) {
    assert.match(project.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.equal(getProjectBySlug(project.slug), project);
    assert.equal(project.title.startsWith("Titolo progetto"), true);
    assert.ok(project.description.length >= 25);
    assert.ok(project.intro.length >= 25);
    assert.equal(project.tags.length, 3);
    assert.ok(["dashboard", "board", "terminal"].includes(project.preview));
    assert.deepEqual(Object.keys(project.sections), chapterKeys);
    assert.ok(chapterKeys.every((key) => project.sections[key].length > 30));
  }
  assert.equal(getProjectBySlug("../../admin"), undefined);
});

test("progetti in evidenza, filtri e navigazione usano il medesimo catalogo", () => {
  assert.equal(featuredProjects.length, 3);
  assert.deepEqual(featuredProjects, projects.filter((project) => project.featured));
  assert.equal(new Set(projectFilters.map((filter) => filter.id)).size, projectFilters.length);
  assert.ok(projectFilters.some((filter) => filter.id === "all"));
  for (const project of projects) {
    assert.ok(projectFilters.some((filter) => filter.id === project.categoryId));
  }
  assert.deepEqual(getAdjacentProjects(projects[0].slug), { previous: null, next: projects[1] });
  assert.deepEqual(getAdjacentProjects(projects[2].slug), { previous: projects[1], next: null });
  assert.deepEqual(getAdjacentProjects("sconosciuto"), { previous: null, next: null });
});

test("nessun progetto fittizio o statistica inventata viene pubblicato come reale", () => {
  const data = JSON.stringify(projects);
  for (const name of ["Vorpal", "SpankEdicola", "Il Presidente", "Personal CRM", "10k users"]) {
    assert.equal(data.includes(name), false);
  }
  const page = readFileSync(new URL("../src/app/projects/[slug]/page.js", import.meta.url), "utf8");
  assert.match(page, /generateStaticParams/);
  assert.match(page, /dynamicParams = false/);
  assert.match(page, /index: false, follow: false/);
});
