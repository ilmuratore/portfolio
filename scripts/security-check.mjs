import { readFileSync } from "node:fs";

const pkg = JSON.parse(readFileSync(new URL("../package-lock.json", import.meta.url), "utf8"));
const versions = {
  next: pkg.packages["node_modules/next"]?.version,
  react: pkg.packages["node_modules/react"]?.version,
  reactDom: pkg.packages["node_modules/react-dom"]?.version,
  eslintConfigNext: pkg.packages["node_modules/eslint-config-next"]?.version
};

function atLeast(actual, minimum) {
  if (!actual) return false;
  const left = actual.split(".").map(Number);
  const right = minimum.split(".").map(Number);
  for (let i = 0; i < 3; i++) {
    if (left[i] > right[i]) return true;
    if (left[i] < right[i]) return false;
  }
  return true;
}

const checks = [
  { name: "next", actual: versions.next, minimum: "15.5.28" },
  { name: "react", actual: versions.react, minimum: "19.0.6" },
  { name: "react-dom", actual: versions.reactDom, minimum: "19.0.6" },
  { name: "eslint-config-next", actual: versions.eslintConfigNext, minimum: "15.5.28" }
];

let errors = 0;
for (const check of checks) {
  const okay = atLeast(check.actual, check.minimum);
  console.log(`${okay ? "OK" : "DA AGGIORNARE"}: ${check.name} ${check.actual ?? "mancante"} (minimo ${check.minimum})`);
  if (!okay) errors++;
}
if (errors > 0) {
  console.error("\nAggiorna i pacchetti e rigenera il lockfile: npm run upgrade:security");
  process.exit(1);
}
console.log("\nVersioni minime verificate. Eseguire anche npm run audit: non sostituisce l'analisi delle vulnerabilità.");
