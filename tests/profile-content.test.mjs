import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  skillAreas, contactChannels, profile, profileChapters, experience,
  education, certificates, certificationProviders, futureProjects
} from "../src/content/profile.mjs";
import { siteConfig } from "../src/config/site.js";

test("profilo professionale e posizionamento AI senza qualifica lavorativa inventata", () => {
  assert.equal(profile.name, siteConfig.name);
  assert.match(profile.title, /Software Engineer/);
  assert.match(profile.title, /AI/);
  assert.ok(profile.introduction.includes("Java"));
  assert.ok(profile.introduction.includes("Python"));
  assert.equal(profile.availability, null);
});

test("competenze reali organizzate per ambiti e non per percentuali", () => {
  assert.equal(skillAreas.length, 4);
  assert.equal(new Set(skillAreas.map((area) => area.number)).size, skillAreas.length);
  assert.equal(profileChapters.length, 3);
  assert.equal(new Set(profileChapters.map((item) => item.id)).size, profileChapters.length);
  for (const area of skillAreas) {
    assert.ok(area.description.length > 25);
    assert.ok(area.technologies.length >= 4);
    assert.ok(area.technologies.every((name) => !name.startsWith("Tecnologia ")));
  }
  assert.ok(skillAreas.some((area) => area.technologies.includes("FastAPI")));
  assert.ok(skillAreas.some((area) => area.technologies.includes("Spring Boot")));
});

test("cronologia coerente con i dati professionali forniti", () => {
  assert.deepEqual(experience.map((item) => item.organization), [
    "Talentform", "Nea Services", "Itconsulting",
    "Aurora Finanziamenti S.r.l.", "Facile.it", "Generali Italia"
  ]);
  assert.equal(new Set(experience.map((item) => item.id)).size, experience.length);
  assert.equal(experience.filter((item) => item.category === "tech").length, 3);
  assert.ok(experience.find((item) => item.id === "talentform").period.includes("Presente"));
  assert.ok(experience.find((item) => item.id === "aurora").description.includes("12"));
  assert.equal(education.length, 1);
  assert.equal(education[0].organization, "EPICODE");
});

test("certificazioni: struttura pronta ma senza inventare attestati", () => {
  assert.deepEqual(certificationProviders, ["Google", "Coursera"]);
  assert.equal(certificates.length, 0);
});

test("progetti futuri senza link a repository privati", () => {
  assert.deepEqual(futureProjects.map((item) => item.name), ["RustOS", "Il Presidente"]);
  assert.ok(futureProjects.every((item) => item.status === "In sviluppo"));
  assert.ok(futureProjects.every((item) => !("repositoryUrl" in item)));
});

test("contatti HTTPS pubblici senza email fittizie", () => {
  assert.deepEqual(contactChannels.map((channel) => channel.id), ["github", "linkedin"]);
  for (const channel of contactChannels) {
    const url = new URL(channel.href);
    assert.equal(url.protocol, "https:");
    assert.ok(["github.com", "www.linkedin.com"].includes(url.hostname));
  }
  const data = JSON.stringify({ profile, contactChannels, experience, certificates, futureProjects });
  assert.ok(!data.includes("mailto:"));
  assert.ok(!data.includes("@gmail.com"));
});

test("About e Contact restano noindex finché il sito non è pronto", () => {
  for (const name of ["about", "contact"]) {
    const source = readFileSync(new URL("../src/app/" + name + "/page.js", import.meta.url), "utf8");
    assert.match(source, /index: false, follow: false/);
  }
});

test("nessuna integrazione Vercel nella configurazione", () => {
  const pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
  const lock = JSON.parse(readFileSync(new URL("../package-lock.json", import.meta.url), "utf8"));
  const layout = readFileSync(new URL("../src/app/layout.js", import.meta.url), "utf8");
  const site = readFileSync(new URL("../src/config/site.js", import.meta.url), "utf8");
  assert.ok(!Object.keys(pkg.dependencies).some((name) => name.startsWith("@vercel/")));
  assert.ok(!Object.keys(lock.packages).some((name) => name.startsWith("node_modules/@vercel/")));
  assert.doesNotMatch(layout, /@vercel\/|SpeedInsights|Analytics/);
  assert.doesNotMatch(site, /vercel\.app/);
});
