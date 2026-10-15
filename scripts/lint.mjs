import { spawnSync } from "node:child_process";
import { resolve } from "node:path";

const eslint = resolve("node_modules/eslint/bin/eslint.js");
const result = spawnSync(process.execPath, [eslint, "src"], { stdio: "inherit", shell: false });
if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}
process.exit(result.status ?? 1);
