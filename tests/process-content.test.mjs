import test from "node:test";
import assert from "node:assert/strict";
import { featuredProjects } from "../src/content/projects.mjs";
import { processSteps } from "../src/content/process.mjs";
import { skillAreas } from "../src/content/profile.mjs";

test("homepage: quattro case study pubblici con anteprime illustrate", () => {
  assert.equal(featuredProjects.length, 4);
  assert.equal(new Set(featuredProjects.map((project) => project.id)).size, featuredProjects.length);
  assert.ok(featuredProjects.some((project) => project.slug === "valdoria"));
  for (const project of featuredProjects) {
    assert.match(project.repositoryUrl, /^https:\/\/github\.com\/ilmuratore\//);
    assert.ok(project.title.length >= 4);
    assert.ok(project.description.length > 20);
    assert.equal(project.tags.length, 3);
    assert.ok(["dashboard", "board", "terminal", "game"].includes(project.preview));
  }
});

test("processo e sei aree di competenza hanno identificatori univoci", () => {
  assert.equal(processSteps.length, 4);
  assert.equal(skillAreas.length, 6);
  assert.equal(new Set(processSteps.map((step) => step.number)).size, processSteps.length);
  assert.equal(new Set(skillAreas.map((area) => area.number)).size, skillAreas.length);
});

test("i case study in evidenza rimandano a repository selezionati e pubblici", () => {
  for (const project of featuredProjects) {
    const url = new URL(project.repositoryUrl);
    assert.equal(url.protocol, "https:");
    assert.equal(url.hostname, "github.com");
    assert.ok(url.pathname.startsWith("/ilmuratore/"));
  }
});
