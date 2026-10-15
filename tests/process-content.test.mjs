import test from "node:test";
import assert from "node:assert/strict";
import { featuredProjects } from "../src/content/projects.mjs";
import { processSteps } from "../src/content/process.mjs";
import { skillAreas } from "../src/content/profile.mjs";

test("homepage: tre repository reali e anteprime illustrative", () => {
  assert.equal(featuredProjects.length, 3);
  assert.equal(new Set(featuredProjects.map((project) => project.id)).size, featuredProjects.length);
  for (const project of featuredProjects) {
    assert.match(project.repositoryUrl, /^https:\/\/github\.com\/ilmuratore\//);
    assert.ok(project.title.length >= 4);
    assert.ok(project.description.length > 20);
    assert.equal(project.tags.length, 3);
    assert.ok(["dashboard", "board", "terminal"].includes(project.preview));
  }
});

test("processo e competenze hanno identificatori univoci", () => {
  assert.equal(processSteps.length, 4);
  assert.equal(skillAreas.length, 4);
  assert.equal(new Set(processSteps.map((step) => step.number)).size, processSteps.length);
  assert.equal(new Set(skillAreas.map((area) => area.number)).size, skillAreas.length);
});

test("le schede in evidenza rimandano a repository pubblici selezionati", () => {
  for (const project of featuredProjects) {
    const url = new URL(project.repositoryUrl);
    assert.equal(url.protocol, "https:");
    assert.equal(url.hostname, "github.com");
    assert.ok(url.pathname.startsWith("/ilmuratore/"));
  }
});
