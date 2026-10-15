import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { projects, featuredProjects, projectFilters, getProjectBySlug, getAdjacentProjects } from "../src/content/projects.mjs";

const chapterKeys = ["context", "challenge", "solution", "architecture", "results"];
const expectedRepos = [
  "https://github.com/ilmuratore/banca-python",
  "https://github.com/ilmuratore/python-developer-ai",
  "https://github.com/ilmuratore/AziendaJava"
];

test("catalogo reale: slug, repository e fonti unici", () => {
  assert.equal(projects.length, 3);
  assert.equal(new Set(projects.map((project) => project.id)).size, projects.length);
  assert.equal(new Set(projects.map((project) => project.slug)).size, projects.length);
  assert.deepEqual(projects.map((project) => project.repositoryUrl), expectedRepos);
  for (const project of projects) {
    assert.match(project.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.equal(getProjectBySlug(project.slug), project);
    assert.ok(project.title.length >= 4);
    assert.ok(project.description.length > 25);
    assert.ok(project.intro.length > 25);
    assert.ok(project.status.length > 5);
    assert.equal(project.tags.length, 3);
    assert.ok(project.tags.every((tag) => tag.length >= 2));
    assert.ok(["dashboard", "board", "terminal"].includes(project.preview));
    assert.equal(new URL(project.repositoryUrl).hostname, "github.com");
    assert.equal(new URL(project.documentationUrl).hostname, "github.com");
    assert.deepEqual(Object.keys(project.sections), chapterKeys);
    assert.ok(chapterKeys.every((key) => project.sections[key].length > 50));
    assert.equal(project.architectureNodes.length, 3);
  }
  assert.equal(getProjectBySlug("../../admin"), undefined);
});

test("homepage, filtri e navigazione condividono lo stesso catalogo", () => {
  assert.deepEqual(featuredProjects, projects.filter((project) => project.featured));
  assert.equal(featuredProjects.length, 3);
  assert.equal(new Set(projectFilters.map((filter) => filter.id)).size, projectFilters.length);
  assert.ok(projectFilters.some((filter) => filter.id === "all"));
  for (const project of projects) {
    assert.ok(projectFilters.some((filter) => filter.id === project.categoryId));
  }
  assert.deepEqual(getAdjacentProjects(projects[0].slug), { previous: null, next: projects[1] });
  assert.deepEqual(getAdjacentProjects(projects[2].slug), { previous: projects[1], next: null });
  assert.deepEqual(getAdjacentProjects("sconosciuto"), { previous: null, next: null });
});

test("case study generati staticamente, con SEO configurabile e link alle fonti", () => {
  const source = readFileSync(new URL("../src/app/projects/[slug]/page.js", import.meta.url), "utf8");
  assert.match(source, /generateStaticParams/);
  assert.match(source, /dynamicParams = false/);
  assert.match(source, /robots:\s*siteConfig\.published\s*\?/);
  assert.match(source, /project\.repositoryUrl/);
  assert.match(source, /project\.documentationUrl/);
  assert.match(source, /project\.architectureNodes/);

});
