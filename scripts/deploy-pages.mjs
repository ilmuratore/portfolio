import { spawnSync } from "node:child_process";
import { cpSync, mkdtempSync, rmSync, existsSync } from "node:fs";
import { join, resolve } from "node:path";
import { tmpdir } from "node:os";

function exec(command, args, cwd, output = false) {
  const result = spawnSync(command, args, {
    cwd,
    encoding: "utf8",
    stdio: output ? "inherit" : ["inherit", "pipe", "pipe"],
    shell: false
  });
  if (result.error || result.status !== 0) {
    const message = result.error?.message || result.stderr || result.stdout || `Uscita ${result.status}`;
    throw new Error(`${command} ${args[0]}: ${message.trim()}`);
  }
  return output ? "" : result.stdout.trim();
}

const root = resolve(".");
if (!existsSync(join(root, ".git"))) throw new Error("Eseguire dalla radice del repository Git.");
const branch = exec("git", ["branch", "--show-current"], root);
if (branch !== "main") throw new Error("Pubblicazione consentita solo da main dopo il merge e il pull.");
if (exec("git", ["status", "--porcelain"], root)) throw new Error("Working tree non pulito. Salvare o ripristinare le modifiche prima del deploy.");
const remote = exec("git", ["remote", "get-url", "origin"], root);
if (!remote) throw new Error("Remote origin assente.");

console.log("Build e controllo release prima del push...");
exec(process.execPath, [join(root, "scripts", "build-pages.mjs")], root, true);
exec(process.execPath, [join(root, "scripts", "check-pages.mjs")], root, true);

const tmp = mkdtempSync(join(tmpdir(), "portfolio-pages-"));
try {
  cpSync(join(root, "out"), tmp, { recursive: true, force: true });
  exec("git", ["init", "--initial-branch=gh-pages"], tmp);
  exec("git", ["remote", "add", "origin", remote], tmp);
  exec("git", ["add", "--all"], tmp);
  exec("git", ["-c", "user.name=Portfolio Publisher", "-c", "user.email=pages@users.noreply.github.com",
    "commit", "-m", "deploy(pages): publish verified static export"], tmp);
  const existing = exec("git", ["ls-remote", "--heads", "origin", "refs/heads/gh-pages"], root).split(/\s+/)[0];
  const push = ["push", "origin", "HEAD:refs/heads/gh-pages"];
  if (existing) push.push(`--force-with-lease=refs/heads/gh-pages:${existing}`);
  exec("git", push, tmp, true);
  console.log("Branch gh-pages aggiornato. In Settings > Pages selezionare gh-pages / (root).");
} finally {
  rmSync(tmp, { recursive: true, force: true });
}
