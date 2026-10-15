import { spawnSync } from "node:child_process";

const packages = ["next@15.5.28", "eslint-config-next@15.5.28", "react@19.0.6", "react-dom@19.0.6"];
console.log("Aggiornamento dipendenze di sicurezza con lockfile coerente...");
const result = spawnSync(process.platform === "win32" ? "npm.cmd" : "npm", ["install", "--save-exact", ...packages], {
  stdio: "inherit",
  shell: process.platform === "win32"
});
if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}
process.exit(result.status ?? 1);
