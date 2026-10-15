import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { projects } from "../src/content/projects.mjs";

const base = "https://ilmuratore.github.io/portfolio";
const out = "out";
const files = [
  "index.html", "404.html", "robots.txt", "sitemap.xml", ".nojekyll",
  "opengraph-image.png", "twitter-image.png",
  "about/index.html", "contact/index.html", "projects/index.html",
  ...projects.map((project) => `projects/${project.slug}/index.html`)
];
for (const file of files) {
  assert.ok(existsSync(join(out, file)), `File Pages mancante: ${file}`);
}
assert.ok(existsSync(join(out, "_next")), "Mancano gli asset Next.js.");
assert.equal(readFileSync(join(out, ".nojekyll"), "utf8"), "");

const pages = files.filter((file) => file.endsWith(".html") && file !== "404.html");
for (const path of pages) {
  const html = readFileSync(join(out, path), "utf8");
  assert.doesNotMatch(html, /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i, `Pagina ancora noindex: ${path}`);
  assert.match(html, /og:image/i, `Open Graph mancante: ${path}`);
  assert.match(html, /twitter:image/i, `Twitter image mancante: ${path}`);
  assert.ok(html.includes("/portfolio/_next/"), `Asset con basePath errato: ${path}`);
}

const robots = readFileSync(join(out, "robots.txt"), "utf8");
assert.match(robots, /Allow:\s*\//i);
assert.doesNotMatch(robots, /Disallow:\s*\//i);
assert.ok(robots.includes(base + "/sitemap.xml"));

const sitemap = readFileSync(join(out, "sitemap.xml"), "utf8");
const routes = ["/", "/about/", "/contact/", "/projects/", ...projects.map((p) => `/projects/${p.slug}/`)];
for (const route of routes) {
  assert.ok(sitemap.includes(base + route), `URL mancante nella sitemap: ${route}`);
}
const catalog = readFileSync(join(out, "projects/index.html"), "utf8");
for (const project of projects) {
  assert.ok(catalog.includes(`/portfolio/projects/${project.slug}/`), `Link al progetto non valido: ${project.slug}`);
}
for (const name of ["python", "openjdk", "react", "github", "postgresql", "sqlite", "fastapi"]) {
  assert.ok(existsSync(join(out, "icons", "tech", name + ".svg")), `Icona mancante: ${name}`);
}
console.log(`Release GitHub Pages verificata: ${pages.length} pagine e ${routes.length} URL indicizzabili.`);
