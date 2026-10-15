import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { projects } from "../src/content/projects.mjs";

const root = "out";
const required = ["index.html", "404.html", "robots.txt", "sitemap.xml", "projects/index.html", "about/index.html", "contact/index.html", ...projects.map((project) => `projects/${project.slug}/index.html`)];

for (const path of required) {
  assert.ok(existsSync(join(root, path)), `Export mancante: ${path}`);
}

const pages = required.filter((path) => path.endsWith(".html"));
for (const path of pages) {
  const html = readFileSync(join(root, path), "utf8");
  if (path !== "404.html") assert.match(html, /noindex/i, `Pagina provvisoria indicizzabile: ${path}`);
}

const robots = readFileSync(join(root, "robots.txt"), "utf8");
assert.match(robots, /Disallow:\s*\//i, "L'anteprima non deve essere indicizzata");
const catalog = readFileSync(join(root, "projects/index.html"), "utf8");
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/portfolio";
for (const project of projects) {
  assert.ok(catalog.includes(`${basePath}/projects/${project.slug}/`), `Link basePath errato: ${project.slug}`);
}

const home = readFileSync(join(root, "index.html"), "utf8");
assert.match(home, /og:image/i, "Metadata Open Graph mancanti");
assert.match(home, /twitter:image/i, "Metadata Twitter mancanti");
for (const logo of ["python", "openjdk", "fastapi", "postgresql", "react", "github", "sqlite"]) {
  assert.ok(existsSync(join(root, "icons", "tech", logo + ".svg")), "Logo statico mancante: " + logo);
}
console.log(`Export statico verificato: ${required.length} file e ${projects.length} case study.`);
