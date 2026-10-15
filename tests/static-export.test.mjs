import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { existsSync } from "node:fs";

const config = readFileSync(new URL("../next.config.js", import.meta.url), "utf8");
const layout = readFileSync(new URL("../src/app/layout.js", import.meta.url), "utf8");
const ci = readFileSync(new URL("../.github/workflows/ci.yml", import.meta.url), "utf8");

test("la build statica resta opt-in e non attiva deploy", () => {
  assert.match(config, /PORTFOLIO_STATIC_EXPORT/);
  assert.match(config, /output: 'export'/);
  assert.match(ci, /GitHub Pages export smoke test \(no deployment\)/);
  assert.doesNotMatch(ci, /deploy-pages/);
});

test("il vecchio endpoint POST non blocca l'export statico", () => {
  assert.equal(existsSync(new URL("../src/app/api/send/route.js", import.meta.url)), false);
});

test("SEO e analytics non assumono l'hosting Vercel nell'export", () => {
  assert.match(layout, /canonical: siteConfig.url/);
  assert.match(layout, /useVercelInsights/);
});
