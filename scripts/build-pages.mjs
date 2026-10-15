import { spawnSync } from "node:child_process";
import { writeFileSync, existsSync } from "node:fs";
import { join, resolve } from "node:path";
import { prepareSocialAssets } from "./prepare-social-assets.mjs";

const next = resolve("node_modules/next/dist/bin/next");
const env = {
  ...process.env,
  PORTFOLIO_STATIC_EXPORT: "1",
  NEXT_PUBLIC_BASE_PATH: "/portfolio",
  NEXT_PUBLIC_SITE_URL: "https://ilmuratore.github.io/portfolio",
  NEXT_PUBLIC_PORTFOLIO_PUBLISHED: "true"
};

const result = spawnSync(process.execPath, [next, "build"], { stdio: "inherit", env, shell: false });
if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}
if (result.status !== 0) process.exit(result.status ?? 1);
if (!existsSync("out/index.html")) {
  console.error("Build senza out/index.html. Nessuna release generata.");
  process.exit(1);
}
writeFileSync(join("out", ".nojekyll"), "", "utf8");
prepareSocialAssets("out");
console.log("Build pubblica GitHub Pages pronta in out/ con .nojekyll.");
