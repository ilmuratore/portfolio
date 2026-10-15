import { spawnSync } from "node:child_process";
import { resolve } from "node:path";

const next = resolve("node_modules/next/dist/bin/next");
const env = {
  ...process.env,
  PORTFOLIO_STATIC_EXPORT: "1",
  NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH ?? "/portfolio",
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ilmuratore.github.io/portfolio",
  NEXT_PUBLIC_PORTFOLIO_PUBLISHED: "false"
};
const result = spawnSync(process.execPath, [next, "build"], { stdio: "inherit", env, shell: false });
if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}
process.exit(result.status ?? 1);
