import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const source = (path) => readFileSync(new URL(path, import.meta.url), "utf8");

test("Next.js supporta export statico e basePath configurabile", () => {
  const config = source("../next.config.js");
  assert.match(config, /PORTFOLIO_STATIC_EXPORT/);
  assert.match(config, /output: 'export'/);
  assert.match(config, /trailingSlash: true/);
  assert.match(config, /images: \{ unoptimized: true \}/);
  assert.match(config, /NEXT_PUBLIC_BASE_PATH/);
});

test("metadata canonici e sitemap puntano a GitHub Pages", () => {
  assert.match(source("../src/app/layout.js"), /canonical:.*siteConfig\.url/);
  assert.match(source("../src/config/site.js"), /ilmuratore\.github\.io\/portfolio/);
  assert.match(source("../src/app/sitemap.js"), /siteConfig\.url/);
});

test("anteprima ed export pubblico usano policy SEO distinte", () => {
  const preview = source("../scripts/build-static.mjs");
  const production = source("../scripts/build-pages.mjs");
  assert.match(preview, /NEXT_PUBLIC_PORTFOLIO_PUBLISHED: "false"/);
  assert.match(production, /NEXT_PUBLIC_PORTFOLIO_PUBLISHED: "true"/);
  assert.match(production, /prepareSocialAssets/);
});
