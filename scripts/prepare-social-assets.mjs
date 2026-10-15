import assert from "node:assert/strict";
import { copyFileSync, existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const base = "https://ilmuratore.github.io/portfolio";
const pngSignature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
const social = [
  { meta: "og:image", route: "opengraph-image" },
  { meta: "twitter:image", route: "twitter-image" }
];

function* htmlFiles(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(path);
    else if (entry.isFile() && entry.name.endsWith(".html")) yield path;
  }
}

function checkPng(file) {
  const data = readFileSync(file);
  assert.ok(data.length >= 24 && data.subarray(0, 8).equals(pngSignature), "PNG non valido: " + file);
  assert.equal(data.readUInt32BE(16), 1200, "Larghezza PNG inattesa: " + file);
  assert.equal(data.readUInt32BE(20), 630, "Altezza PNG inattesa: " + file);
}

function changeMeta(tag, seen) {
  const key = tag.match(/\b(?:property|name)=(["'])([^"']+)\1/i)?.[2];
  const item = social.find((entry) => entry.meta === key);
  if (!item) return tag;

  const content = tag.match(/\bcontent=(["'])([^"']+)\1/i);
  assert.ok(content, "URL mancante per " + item.meta);
  const url = new URL(content[2].replace(/&amp;/g, "&"), base + "/");
  const expected = "/portfolio/" + item.route;
  assert.equal(url.origin, new URL(base).origin, "Host social inatteso per " + item.meta);
  assert.ok(url.pathname === expected || url.pathname === expected + ".png", "Route social inattesa: " + url.pathname);

  seen.add(item.meta);
  return tag.replace(/\bcontent=(["'])([^"']+)\1/i, (_, quote) => "content=" + quote + base + "/" + item.route + ".png" + quote);
}

export function prepareSocialAssets(out = "out") {
  for (const item of social) {
    const original = join(out, item.route);
    const target = join(out, item.route + ".png");
    if (existsSync(original)) {
      checkPng(original);
      copyFileSync(original, target);
    }
    assert.ok(existsSync(target), "Immagine Next.js non trovata: " + original + " (o " + target + ")");
    checkPng(target);
  }

  const seen = new Set();
  for (const file of htmlFiles(out)) {
    const html = readFileSync(file, "utf8");
    const updated = html.replace(/<meta\b[^>]*>/gi, (tag) => changeMeta(tag, seen));
    if (updated !== html) writeFileSync(file, updated, "utf8");
  }
  for (const item of social) assert.ok(seen.has(item.meta), "Metadata social assente nell'export: " + item.meta);
  console.log("Immagini social verificate e URL PNG aggiornati per GitHub Pages.");
}
