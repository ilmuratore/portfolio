import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { siteConfig } from "../src/config/site.js";

const source = (path) => readFileSync(new URL(path, import.meta.url), "utf8");

test("metadata e indicizzazione configurati", () => {
  assert.equal(siteConfig.published, false);
  assert.match(source("../src/app/layout.js"), /siteConfig\.published/);
  assert.match(source("../src/app/robots.js"), /disallow: '\/'/);
  assert.match(source("../src/app/sitemap.js"), /projects\.map/);
});

test("font e interfaccia non richiedono risorse remote", () => {
  const layout = source("../src/app/layout.js");
  assert.match(layout, /next\/font\/local/);
  assert.match(layout, /GeistVF\.woff/);
  assert.doesNotMatch(layout, /next\/font\/google/);
  assert.match(source("../src/app/globals.css"), /^@import "tailwindcss";/);
});

test("navigazione accessibile tramite menu e tastiera", () => {
  const header = source("../src/app/components/site/SiteHeader.jsx");
  const home = source("../src/app/page.js");
  const frame = source("../src/app/components/site/SitePageFrame.jsx");
  assert.match(header, /aria-current/);
  assert.match(header, /aria-expanded/);
  assert.match(home, /tabIndex=\{-1\}/);
  assert.match(frame, /tabIndex=\{-1\}/);
  assert.match(source("../src/app/globals.css"), /prefers-reduced-motion/);
});

test("manifest, lockfile e toolchain coerenti", () => {
  const pkg = JSON.parse(source("../package.json"));
  const lock = JSON.parse(source("../package-lock.json"));
  assert.equal(pkg.version, "1.0.0");
  assert.equal(lock.version, pkg.version);
  assert.equal(lock.packages[""].version, pkg.version);
  assert.deepEqual(Object.keys(pkg.dependencies).sort(), Object.keys(lock.packages[""].dependencies).sort());
  assert.equal(pkg.dependencies.next, "16.4.1");
  assert.equal(pkg.dependencies.react, "19.3.1");
  assert.equal(pkg.dependencies.tailwindcss, "4.3.3");
  assert.match(source("../postcss.config.js"), /@tailwindcss\/postcss/);
  assert.match(source("../eslint.config.mjs"), /eslint-config-next\/core-web-vitals/);
});
