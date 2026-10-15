import { spawnSync } from "node:child_process";

const packages = [
  "next@16.4.1", "eslint-config-next@16.4.1",
  "react@19.3.1", "react-dom@19.3.1",
  "tailwindcss@4.3.3", "@tailwindcss/postcss@4.3.3",
  "eslint@9.39.5", "postcss@8.5.29"
];
console.log("Migrazione Next.js 16 / React 19.3 / Tailwind CSS 4 con lockfile coerente...");
const result = spawnSync(process.platform === "win32" ? "npm.cmd" : "npm", ["install", "--save-exact", ...packages], {
  stdio: "inherit",
  shell: process.platform === "win32"
});
if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}
process.exit(result.status ?? 1);
