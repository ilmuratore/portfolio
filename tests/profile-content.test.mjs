import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  skillAreas, contactChannels, profile, profileChapters, experience,
  education, academicGoal, certificates, certificationProviders, futureProjects
} from "../src/content/profile.mjs";
import { siteConfig } from "../src/config/site.js";

test("profilo professionale e posizionamento AI senza qualifica lavorativa inventata", () => {
  assert.equal(profile.name, siteConfig.name);
  assert.match(profile.title, /Software Developer/);
  assert.doesNotMatch(profile.title, /AI Engineer/);
  assert.match(profile.label, /JUNIOR/);
  assert.match(profile.level, /Junior/);
  assert.match(profile.softwareExperience, /3 anni/);
  assert.match(profile.aiGoal, /AI Engineer/);
  assert.match(profile.heroIntroduction, /junior/);
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

test("la laurea L-31 è esplicitamente un obiettivo, non un titolo conseguito", () => {
  assert.match(academicGoal.title, /L-31/);
  assert.match(academicGoal.title, /Artificial Intelligence/);
  assert.match(academicGoal.status, /non ancora conseguita/);
  assert.match(academicGoal.detail, /obiettivo/);
  const sections = readFileSync(new URL("../src/app/components/site/ProfileSections.jsx", import.meta.url), "utf8");
  assert.match(sections, /academicGoal\.status/);
  const about = readFileSync(new URL("../src/app/about/page.js", import.meta.url), "utf8");
  assert.match(about, /non una laurea conseguita/);
});

test("metadata, hero e social preview non attribuiscono un ruolo AI già acquisito", () => {
  const hero = readFileSync(new URL("../src/app/components/site/EditorialSections.jsx", import.meta.url), "utf8");
  const og = readFileSync(new URL("../src/app/opengraph-image.jsx", import.meta.url), "utf8");
  assert.match(hero, /profile\.heroIntroduction/);
  assert.match(hero, /Verso l’AI/);
  assert.match(siteConfig.title, /Software Developer/);
  assert.doesNotMatch(siteConfig.title, /AI Engineer/);
  assert.match(og, /SOFTWARE DEVELOPER/);
  assert.doesNotMatch(og, /SOFTWARE ENGINEER/);
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
