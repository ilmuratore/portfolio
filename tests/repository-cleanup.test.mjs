import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { processSteps } from "../src/content/process.mjs";
import { featuredProjects } from "../src/content/projects.mjs";
import { techIconMap } from "../src/content/icon-map.mjs";

test("la distribuzione GitHub Pages non contiene residui Docker o font inutilizzati", () => {
  for (const relative of [
    "../Dockerfile",
    "../.dockerignore",
    "../src/app/fonts/GeistMonoVF.woff",
    "../scripts/upgrade-security.mjs",
    "../src/content/placeholder.mjs"
  ]) {
    assert.equal(existsSync(new URL(relative, import.meta.url)), false, "File obsoleto: " + relative);
  }
  assert.ok(existsSync(new URL("../src/app/fonts/GeistVF.woff", import.meta.url)));
});

test("processo e progetti usano una fonte dati esplicita", () => {
  assert.equal(processSteps.length, 4);
  assert.ok(featuredProjects.length > 0);
  const editorial = readFileSync(new URL("../src/app/components/v2/EditorialSections.jsx", import.meta.url), "utf8");
  assert.match(editorial, /content\/process\.mjs/);
  assert.match(editorial, /content\/projects\.mjs/);
  assert.doesNotMatch(editorial, /content\/placeholder/);
});

test("nessun comando npm reintroduce il vecchio upgrade bloccato", () => {
  const manifest = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
  assert.ok(!("upgrade:security" in manifest.scripts));
  assert.equal(manifest.scripts["deploy:pages"], "node scripts/deploy-pages.mjs");
  assert.ok(!("Docker" in techIconMap));
});
