import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  projects, privateProjects, caseStudies, featuredProjects, projectFilters,
  getCaseStudyBySlug, getAdjacentCaseStudies
} from "../src/content/projects.mjs";

const chapterKeys = ["context", "challenge", "solution", "architecture", "results"];
const expectedRepos = [
  "https://github.com/ilmuratore/banca-python",
  "https://github.com/ilmuratore/python-developer-ai",
  "https://github.com/ilmuratore/AziendaJava",
  "https://github.com/ilmuratore/valdoria",
  "https://github.com/ilmuratore/LeCronacheDelSigillo",
  "https://github.com/ilmuratore/backend-express"
];

test("sei case study pubblici con fonti, contenuti e slug unici", () => {
  assert.equal(projects.length, 6);
  assert.equal(new Set(projects.map((project) => project.id)).size, projects.length);
  assert.equal(new Set(projects.map((project) => project.slug)).size, projects.length);
  assert.deepEqual(projects.map((project) => project.repositoryUrl), expectedRepos);
  for (const project of projects) {
    assert.match(project.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.equal(getCaseStudyBySlug(project.slug), project);
    assert.ok(project.description.length > 25);
    assert.ok(project.intro.length > 25);
    assert.equal(project.tags.length, 3);
    assert.equal(new URL(project.repositoryUrl).hostname, "github.com");
    if (project.documentationUrl) assert.equal(new URL(project.documentationUrl).hostname, "github.com");
    assert.deepEqual(Object.keys(project.sections), chapterKeys);
    assert.ok(chapterKeys.every((key) => project.sections[key].length > 50));
    assert.equal(project.architectureNodes.length, 3);
  }
  assert.equal(getCaseStudyBySlug("../../admin"), undefined);
});

test("Valdoria è un caso studio formativo C#/Unity documentato nel repository pubblico", () => {
  const game = getCaseStudyBySlug("valdoria");
  assert.equal(game.preview, "game");
  assert.equal(game.categoryId, "game");
  assert.deepEqual(game.tags.slice(0, 2), ["C#", "Unity"]);
  assert.match(game.intro, /didattico/);
  assert.match(game.sections.solution, /NPC/);
  assert.match(game.sections.architecture, /Unity 6\.3 LTS/);
  assert.match(game.results ?? game.sections.results, /editor Unity/);
});

test("due progetti privati con pagine statiche senza link al codice", () => {
  assert.equal(privateProjects.length, 2);
  assert.deepEqual(privateProjects.map((item) => item.id), ["torven", "il-presidente"]);
  for (const project of privateProjects) {
    assert.equal(project.status, "Repository privato");
    assert.ok(project.summary.length > 40);
    assert.ok(project.highlights.length >= 3);
    assert.ok(!("repositoryUrl" in project));
    assert.ok(!("documentationUrl" in project));
    assert.equal(getCaseStudyBySlug(project.slug), project);
    assert.deepEqual(Object.keys(project.sections), chapterKeys);
    assert.equal(project.architectureNodes.length, 3);
  }
});

test("catalogo, filtri e navigazione condividono i case study", () => {
  assert.deepEqual(featuredProjects, projects.filter((project) => project.featured));
  assert.equal(featuredProjects.length, 4);
  assert.equal(caseStudies.length, 8);
  assert.equal(new Set(caseStudies.map((p) => p.slug)).size, 8);
  assert.equal(new Set(projectFilters.map((filter) => filter.id)).size, projectFilters.length);
  assert.ok(projectFilters.some((filter) => filter.id === "all"));
  assert.ok(projectFilters.some((filter) => filter.id === "game"));
  for (const project of projects) assert.ok(projectFilters.some((filter) => filter.id === project.categoryId));
  assert.deepEqual(getAdjacentCaseStudies(projects[0].slug), { previous: null, next: projects[1] });
  assert.deepEqual(getAdjacentCaseStudies(caseStudies[7].slug), { previous: caseStudies[6], next: null });
  assert.deepEqual(getAdjacentCaseStudies("sconosciuto"), { previous: null, next: null });
});

test("pagine case study statiche e indicizzazione dipendente dalla pubblicazione", () => {
  const file = readFileSync(new URL("../src/app/projects/[slug]/page.js", import.meta.url), "utf8");
  assert.match(file, /generateStaticParams/);
  assert.match(file, /dynamicParams = false/);
  assert.match(file, /robots:\s*siteConfig\.published\s*\?/);
  assert.match(file, /project\.repositoryUrl/);
  assert.match(file, /project\.documentationUrl/);
  assert.match(file, /project\.architectureNodes/);
  assert.match(file, /caseStudies\.map/);
  assert.match(file, /private-case-visual/);
});

test("due progetti formativi e backend aggiunti con fonti verificabili", () => {
  const game = getCaseStudyBySlug("le-cronache-del-sigillo");
  assert.equal(game.preview, "rpg");
  assert.match(game.sections.solution, /JSON/);
  const api = getCaseStudyBySlug("backend-express");
  assert.deepEqual(api.tags, ["Node.js", "Express", "PostgreSQL"]);
  assert.equal(api.preview, "api");
  assert.match(api.sections.solution, /JWT/);
  assert.equal(api.documentationUrl, null);
});
