import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { projects } from "../src/content/projects.mjs";
import { siteConfig } from "../src/config/site.js";

const source = (path) => readFileSync(new URL(path, import.meta.url), "utf8");

test("la modalità anteprima non cambia e non viene indicizzata", () => {
  assert.equal(siteConfig.published, false);
  const preview = source("../scripts/build-static.mjs");
  assert.match(preview, /NEXT_PUBLIC_PORTFOLIO_PUBLISHED: "false"/);
  assert.match(source("../src/app/robots.js"), /disallow: '\/'/);
});

test("la build pubblica usa URL GitHub Pages e file .nojekyll", () => {
  const build = source("../scripts/build-pages.mjs");
  assert.match(build, /NEXT_PUBLIC_PORTFOLIO_PUBLISHED: "true"/);
  assert.match(build, /NEXT_PUBLIC_BASE_PATH: "\/portfolio"/);
  assert.match(build, /ilmuratore\.github\.io\/portfolio/);
  assert.match(build, /\.nojekyll/);
});

test("metadata indicizzabili solo nella modalità pubblicata", () => {
  const layouts = [
    "../src/app/about/page.js",
    "../src/app/contact/page.js",
    "../src/app/projects/page.js",
    "../src/app/projects/[slug]/page.js"
  ];
  for (const page of layouts) {
    const contents = source(page);
    assert.match(contents, /siteConfig\.published/);
    assert.match(contents, /index: false, follow: false/);
    assert.match(contents, /index: true, follow: true/);
  }
});

test("sitemap completa e coerente con il catalogo pubblico", () => {
  const contents = source("../src/app/sitemap.js");
  assert.match(contents, /if \(!siteConfig\.published\) return \[\]/);
  assert.match(contents, /projects\.map/);
  assert.ok(projects.length >= 3);
});

test("deploy manuale evita pubblicazioni da altri branch e force push ciechi", () => {
  const deploy = source("../scripts/deploy-pages.mjs");
  assert.match(deploy, /branch !== "main"/);
  assert.match(deploy, /status", "--porcelain"/);
  assert.match(deploy, /force-with-lease/);
  assert.match(deploy, /refs\/heads\/gh-pages/);
  assert.doesNotMatch(deploy, /--force"/);
  const pkg = JSON.parse(source("../package.json"));
  assert.equal(pkg.scripts["deploy:pages"], "node scripts/deploy-pages.mjs");
});

test("il controllo release verifica SEO, icone, preview social e file statici", () => {
  const check = source("../scripts/check-pages.mjs");
  for (const needle of [".nojekyll", "opengraph-image.png", "twitter-image.png", "sitemap.xml", "robots.txt", "noindex", "projects/"]) {
    assert.ok(check.includes(needle), "Manca un controllo: " + needle);
  }
});
