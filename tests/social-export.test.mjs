import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { prepareSocialAssets } from "../scripts/prepare-social-assets.mjs";

const base = "https://ilmuratore.github.io/portfolio";
function png(width = 1200, height = 630) {
  const result = Buffer.alloc(33);
  Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]).copy(result, 0);
  result.writeUInt32BE(13, 8);
  result.write("IHDR", 12, "ascii");
  result.writeUInt32BE(width, 16);
  result.writeUInt32BE(height, 20);
  return result;
}

test("Next export: immagini senza estensione diventano PNG con URL servibili da GitHub Pages", () => {
  const out = mkdtempSync(join(tmpdir(), "portfolio-og-"));
  try {
    writeFileSync(join(out, "opengraph-image"), png());
    writeFileSync(join(out, "twitter-image"), png());
    mkdirSync(join(out, "about"));
    const html = '<html><head><meta property="og:image" content="' + base + '/opengraph-image?abc=123"><meta name="twitter:image" content="' + base + '/twitter-image?def=456"></head></html>';
    const about = '<html><head><meta content="/portfolio/opengraph-image" property="og:image"><meta content="/portfolio/twitter-image" name="twitter:image"></head></html>';
    writeFileSync(join(out, "index.html"), html);
    writeFileSync(join(out, "about", "index.html"), about);

    prepareSocialAssets(out);
    assert.ok(existsSync(join(out, "opengraph-image.png")));
    assert.ok(existsSync(join(out, "twitter-image.png")));
    assert.deepEqual(readFileSync(join(out, "opengraph-image.png")), png());
    for (const file of ["index.html", "about/index.html"]) {
      const rendered = readFileSync(join(out, file), "utf8");
      assert.ok(rendered.includes(base + "/opengraph-image.png"));
      assert.ok(rendered.includes(base + "/twitter-image.png"));
      assert.doesNotMatch(rendered, /opengraph-image\?/);
    }
    prepareSocialAssets(out);
    assert.ok(readFileSync(join(out, "index.html"), "utf8").includes(base + "/twitter-image.png"));
  } finally {
    rmSync(out, { recursive: true, force: true });
  }
});

test("l'export blocca immagini social mancanti, non PNG o di dimensioni errate", () => {
  const out = mkdtempSync(join(tmpdir(), "portfolio-og-invalid-"));
  try {
    assert.throws(() => prepareSocialAssets(out), /non trovata/);
    writeFileSync(join(out, "opengraph-image"), Buffer.from("not a png"));
    assert.throws(() => prepareSocialAssets(out), /PNG non valido/);
    writeFileSync(join(out, "opengraph-image"), png(100, 100));
    assert.throws(() => prepareSocialAssets(out), /Larghezza PNG inattesa/);
  } finally {
    rmSync(out, { recursive: true, force: true });
  }
});
