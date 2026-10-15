import test from "node:test";
import assert from "node:assert/strict";
import { featuredProjects, processSteps, skillAreas } from "../src/content/placeholder.mjs";

test("homepage: tre repository reali e anteprime illustrative", () => {
  assert.equal(featuredProjects.length, 3);
  assert.equal(new Set(featuredProjects.map((project) => project.id)).size, featuredProjects.length);
  for (const project of featuredProjects) {
    assert.match(project.repositoryUrl, /^https:\/\/github\.com\/ilmuratore\//);
    assert.ok(!project.title.startsWith("Titolo progetto"));
    assert.ok(project.description.length > 20);
    assert.equal(project.tags.length, 3);
    assert.ok(["dashboard", "board", "terminal"].includes(project.preview));
  }
});

test("processo e competenze restano placeholder con identificatori univoci", () => {
  assert.equal(processSteps.length, 4);
  assert.equal(skillAreas.length, 4);
  assert.equal(new Set(processSteps.map((step) => step.number)).size, processSteps.length);
  assert.equal(new Set(skillAreas.map((area) => area.number)).size, skillAreas.length);
});

test("nessun repository privato viene esposto nel catalogo pubblico", () => {
  const content = JSON.stringify({ featuredProjects, processSteps, skillAreas });
  for (const name of ["Vorpal", "SpankEdicola", "Il Presidente", "Personal CRM"]) {
    assert.equal(content.includes(name), false);
  }
});
