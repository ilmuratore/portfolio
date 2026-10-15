import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";

const config = readFileSync(new URL("../next.config.js", import.meta.url), "utf8");
const layout = readFileSync(new URL("../src/app/layout.js", import.meta.url), "utf8");

test("la build statica resta opt-in e non attiva deployment", () => {
  assert.match(config, /PORTFOLIO_STATIC_EXPORT/);
  assert.match(config, /output: 'export'/);
  assert.equal(existsSync(new URL("../.github/workflows/ci.yml", import.meta.url)), false);
});

test("il vecchio endpoint POST non blocca l'export statico", () => {
  assert.equal(existsSync(new URL("../src/app/api/send/route.js", import.meta.url)), false);
});

test("SEO indipendente dal provider e integrazioni analytics esterne rimosse", () => {
  assert.match(layout, /canonical:\s*`\$\{siteConfig\.url\}\/`/);
  assert.doesNotMatch(layout, /@vercel\/|SpeedInsights|Analytics/);
});
