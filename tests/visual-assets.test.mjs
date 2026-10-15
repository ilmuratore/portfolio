import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { techIconMap, techIconSlug } from "../src/content/icon-map.mjs";
import { projects } from "../src/content/projects.mjs";
import { skillAreas, certificationProviders } from "../src/content/profile.mjs";

const read = (file) => readFileSync(new URL(file, import.meta.url), "utf8");

test("ogni marchio referenziato ha un SVG locale valido", () => {
  const unique = new Set(Object.values(techIconMap));
  assert.ok(unique.size >= 20);
  for (const slug of unique) {
    const path = "../public/icons/tech/" + slug + ".svg";
    assert.ok(existsSync(new URL(path, import.meta.url)), "Asset mancante: " + path);
    const svg = read(path);
    assert.match(svg, /^<svg\b/);
    assert.match(svg, /viewBox="0 0 24 24"/);
    assert.match(svg, /<path\b/);
    assert.match(svg, /<\/svg>\s*$/);
    assert.ok(!svg.includes("<script"), "SVG non deve includere script");
    assert.ok(!svg.includes("https://"), "SVG non deve scaricare asset esterni");
  }
});

test("icone stack e fallback generico coprono tecnologie del portfolio", () => {
  for (const project of projects) {
    assert.ok(project.tags.some((tag) => techIconSlug(tag)), "Nessuna icona per " + project.title);
  }
  for (const area of skillAreas) {
    assert.ok(area.technologies.some((tag) => techIconSlug(tag)), "Nessuna icona per " + area.name);
  }
  assert.equal(techIconSlug("linguaggio inesistente"), null);
  const component = read("../src/app/components/v2/TechIcon.jsx");
  assert.match(component, /NEXT_PUBLIC_BASE_PATH/);
  assert.match(component, /unoptimized/);
  assert.doesNotMatch(component, /cdn\.|simpleicons\.org/);
});

test("certificazioni: loghi dei provider, nessun attestato fittizio", () => {
  for (const provider of certificationProviders) {
    assert.ok(techIconSlug(provider), "Icona mancante: " + provider);
  }
});

test("componenti condivisi mostrano loghi con etichette testuali", () => {
  for (const path of [
    "../src/app/components/v2/ProjectCard.jsx",
    "../src/app/components/v2/ProfileSections.jsx",
    "../src/app/about/page.js",
    "../src/app/projects/[slug]/page.js"
  ]) {
    assert.match(read(path), /TechBadge|TechIcon/);
  }
  const badge = read("../src/app/components/v2/TechBadge.jsx");
  assert.match(badge, /<span>{label}<\/span>/);
  const profile = read("../src/app/components/v2/ProfileSections.jsx");
  assert.match(profile, /TechIcon label=\{name\}/);
  assert.match(profile, /future-project-heading/);
  const icon = read("../src/app/components/v2/TechIcon.jsx");
  assert.match(icon, /alt=""/);
});

test("favicon e immagini social non necessitano di CDN o deployment", () => {
  const favicon = read("../src/app/icon.svg");
  const og = read("../src/app/opengraph-image.jsx");
  const twitter = read("../src/app/twitter-image.jsx");
  assert.match(favicon, /viewBox="0 0 64 64"/);
  assert.match(og, /ImageResponse/);
  assert.match(og, /width: 1200, height: 630/);
  assert.match(og, /force-static/);
  assert.match(twitter, /opengraph-image/);
  assert.doesNotMatch(og, /fetch\(|https:\/\//);
});
