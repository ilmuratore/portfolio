import { readFileSync } from "node:fs";

const lock = JSON.parse(readFileSync(new URL("../package-lock.json", import.meta.url), "utf8"));
const checks = [
  ["next", "16.4.1"],
  ["eslint-config-next", "16.4.1"],
  ["react", "19.3.1"],
  ["react-dom", "19.3.1"],
  ["tailwindcss", "4.3.3"],
  ["@tailwindcss/postcss", "4.3.3"],
  ["eslint", "9.39.5"],
  ["postcss", "8.5.29"]
];
function atLeast(actual, minimum) {
  if (!actual || !/^\d+\.\d+\.\d+$/.test(actual)) return false;
  const left = actual.split(".").map(Number);
  const right = minimum.split(".").map(Number);
  for (let i = 0; i < 3; i++) {
    if (left[i] !== right[i]) return left[i] > right[i];
  }
  return true;
}
let errors = 0;
for (const [name, minimum] of checks) {
  const installed = lock.packages[`node_modules/${name}`]?.version;
  const okay = atLeast(installed, minimum);
  console.log(`${okay ? "OK" : "DA AGGIORNARE"}: ${name} ${installed ?? "mancante"} (minimo ${minimum})`);
  if (!okay) errors++;
}
if (errors) {
  console.error("\nRigenerare il lockfile con: npm run upgrade:security");
  process.exit(1);
}
console.log("\nVersioni minime verificate. Eseguire anche npm audit.");
