import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { siteConfig } from "../src/config/site.js";

const content = (file) => readFileSync(new URL(file, import.meta.url), "utf8");

test("anteprima privata finché non si attiva esplicitamente la pubblicazione", () => {
  assert.equal(siteConfig.published, false);
  assert.match(content("../src/app/robots.js"), /disallow: '\/'/);
  assert.match(content("../src/app/layout.js"), /index: false, follow: false/);
  assert.match(content("../src/app/sitemap.js"), /if \(!siteConfig.published\) return \[\]/);
});

test("font locale: la build non richiede Google Fonts", () => {
  const layout = content("../src/app/layout.js");
  assert.match(layout, /next\/font\/local/);
  assert.match(layout, /GeistVF\.woff/);
  assert.doesNotMatch(layout, /next\/font\/google/);
});

test("link e navigazione accessibili senza dipendere da un hosting specifico", () => {
  const header = content("../src/app/components/v2/SiteHeader.jsx");
  const home = content("../src/app/page.js");
  const frame = content("../src/app/components/v2/SitePageFrame.jsx");
  assert.match(header, /aria-current/);
  assert.match(header, /aria-expanded/);
  assert.match(home, /tabIndex=\{-1\}/);
  assert.match(frame, /tabIndex=\{-1\}/);
});

test("dipendenze runtime limitate ai moduli effettivamente utilizzati", () => {
  const pkg = JSON.parse(content("../package.json"));
  const lock = JSON.parse(content("../package-lock.json"));
  assert.deepEqual(Object.keys(pkg.dependencies).sort(), Object.keys(lock.packages[""].dependencies).sort());
  for (const name of ["@heroicons/react", "framer-motion", "react-animated-numbers", "react-type-animation", "nodemailer", "resend", "@vercel/analytics", "@vercel/speed-insights"]) {
    assert.ok(!(name in pkg.dependencies), `Dipendenza inutile: ${name}`);
  }
  assert.ok(!("deploy" in pkg.scripts));
});
