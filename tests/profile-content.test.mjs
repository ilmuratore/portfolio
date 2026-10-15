import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { skillAreas, contactChannels, profile, profileChapters } from "../src/content/profile.mjs";
import { siteConfig } from "../src/config/site.js";

test("skill placeholder e capitoli profilo hanno identificatori univoci", () => {
  assert.equal(skillAreas.length, 4);
  assert.equal(profileChapters.length, 3);
  assert.equal(new Set(skillAreas.map((area) => area.number)).size, skillAreas.length);
  assert.equal(new Set(profileChapters.map((chapter) => chapter.id)).size, profileChapters.length);
  for (const area of skillAreas) {
    assert.ok(area.description.length > 8);
    assert.equal(area.technologies.length, 3);
    assert.ok(area.technologies.every((tech) => tech.startsWith("Tecnologia ")));
  }
  assert.equal(profile.name, siteConfig.name);
});

test("i contatti sono link esterni verificabili e nessun indirizzo email è inventato", () => {
  assert.deepEqual(contactChannels.map((channel) => channel.id), ["github", "linkedin"]);
  for (const channel of contactChannels) {
    const url = new URL(channel.href);
    assert.equal(url.protocol, "https:");
    assert.ok(["github.com", "www.linkedin.com"].includes(url.hostname));
    assert.ok(channel.label && channel.type);
  }
  const content = JSON.stringify({ profile, contactChannels, profileChapters });
  assert.equal(content.includes("mailto:"), false);
  assert.equal(content.includes("@gmail.com"), false);
});

test("About e Contact provvisorie non sono indicizzabili", () => {
  for (const name of ["about", "contact"]) {
    const source = readFileSync(new URL(`../src/app/${name}/page.js`, import.meta.url), "utf8");
    assert.match(source, /index: false, follow: false/);
  }
});

test("nessuna integrazione Vercel rimane nella configurazione dell'app", () => {
  const pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
  const lock = JSON.parse(readFileSync(new URL("../package-lock.json", import.meta.url), "utf8"));
  const layout = readFileSync(new URL("../src/app/layout.js", import.meta.url), "utf8");
  const site = readFileSync(new URL("../src/config/site.js", import.meta.url), "utf8");
  assert.ok(!Object.keys(pkg.dependencies).some((name) => name.startsWith("@vercel/")));
  assert.ok(!Object.keys(lock.packages).some((name) => name.startsWith("node_modules/@vercel/")));
  assert.doesNotMatch(layout, /@vercel\/|SpeedInsights|Analytics/);
  assert.doesNotMatch(site, /vercel\.app/);
});
