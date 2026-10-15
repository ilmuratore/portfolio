import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { techIconMap } from "../src/content/icon-map.mjs";
import { skillAreas, certificationProviders, contactChannels, futureProjects } from "../src/content/profile.mjs";
import { projects } from "../src/content/projects.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));

function* filesIn(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* filesIn(path);
    else if (/\.(mjs|jsx|js)$/.test(entry.name)) yield path;
  }
}

function fileExists(path) {
  return [path, path + ".js", path + ".jsx", path + ".mjs", join(path, "index.js")]
    .some((candidate) => existsSync(candidate) && statSync(candidate).isFile());
}

test("tutti gli import locali puntano a moduli presenti", () => {
  const paths = [...filesIn(join(root, "src"))];
  assert.ok(paths.length > 20);
  for (const path of paths) {
    const contents = readFileSync(path, "utf8");
    for (const match of contents.matchAll(/\bfrom\s*["']([^"']+)["']|\bimport\s*["']([^"']+)["']/g)) {
      const specifier = match[1] ?? match[2];
      let target = null;
      if (specifier.startsWith("@/")) target = join(root, "src", specifier.slice(2));
      else if (specifier.startsWith(".")) target = resolve(dirname(path), specifier);
      if (target) assert.ok(fileExists(target), "Import non risolto: " + specifier + " in " + path);
    }
  }
});

test("grafica del README e loghi del sito hanno sorgenti reali", () => {
  const content = readFileSync(join(root, "README.md"), "utf8");
  for (const match of content.matchAll(/<img\s+src="\.\/([^"]+)"/g)) {
    assert.ok(existsSync(join(root, match[1])), "Grafica README mancante: " + match[1]);
  }
  const referenced = new Set(Object.values(techIconMap));
  for (const name of readdirSync(join(root, "public", "icons", "tech"))) {
    assert.ok(name.endsWith(".svg"));
    const slug = name.replace(/\.svg$/, "");
    assert.ok(referenced.has(slug) || content.includes("icons/tech/" + name), "Asset inutilizzato: " + name);
  }
});

test("le tecnologie presenti nei contenuti hanno asset disponibili", () => {
  const labels = [
    ...skillAreas.flatMap((area) => area.technologies),
    ...projects.flatMap((project) => project.tags),
    ...certificationProviders,
    ...contactChannels.map((channel) => channel.label),
    ...futureProjects.filter((item) => item.id === "rustos").map(() => "Rust")
  ];
  for (const slug of new Set(labels.map((label) => techIconMap[label]).filter(Boolean))) {
    assert.ok(existsSync(join(root, "public", "icons", "tech", slug + ".svg")));
  }
});

test("ogni script di gestione npm rimanda a un file presente", () => {
  const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
  for (const name of ["lint", "build:static", "security:check", "build:pages", "check:pages", "deploy:pages"]) {
    const command = pkg.scripts[name];
    assert.match(command, /^node scripts\/[-\w]+\.mjs$/);
    assert.ok(existsSync(join(root, command.slice("node ".length))));
  }
});
