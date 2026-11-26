import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  profile, skillAreas, profileChapters, experience, education,
  academicGoal, contactChannels
} from "../src/content/profile.mjs";
import { privateProjects } from "../src/content/projects.mjs";
import { siteConfig } from "../src/config/site.js";

const source = (path) => readFileSync(new URL(path, import.meta.url), "utf8");

test("profilo junior e obiettivo AI Engineer distinti dalle qualifiche attuali", () => {
  assert.match(profile.label, /SOFTWARE DEVELOPER/);
  assert.match(profile.heroIntroduction, /junior/);
  assert.match(profile.heroIntroduction, /tre anni/);
  assert.match(profile.introduction, /Java/);
  assert.match(profile.introduction, /Python/);
  assert.match(profile.introduction, /AI Engineer/);
  assert.match(siteConfig.title, /Software Developer/);
  assert.doesNotMatch(siteConfig.title, /AI Engineer/);
});

test("sei ambiti, dalla professione ai progetti didattici e personali", () => {
  assert.equal(skillAreas.length, 6);
  assert.equal(new Set(skillAreas.map((item) => item.number)).size, 6);
  assert.equal(new Set(profileChapters.map((item) => item.id)).size, profileChapters.length);
  const labels = skillAreas.flatMap((area) => area.technologies);
  for (const tech of ["Java", "Python", "C#", "Unity", "Rust", "PostgreSQL"]) {
    assert.ok(labels.includes(tech), "Tecnologia mancante: " + tech);
  }
  assert.match(skillAreas.find((area) => area.name === "Systems & Rust").description, /personale/);
  assert.match(skillAreas.find((area) => area.name === "Game Development").description, /didattica/);
});

test("cronologia professionale coerente e docenza con laboratorio Valdoria", () => {
  assert.deepEqual(experience.map((item) => item.organization), [
    "Talentform", "Nea Services", "Itconsulting",
    "Aurora Finanziamenti S.r.l.", "Facile.it", "Generali Italia"
  ]);
  assert.equal(experience.filter((item) => item.category === "tech").length, 3);
  assert.ok(experience.find((item) => item.id === "talentform").highlights.some((x) => x.includes("Valdoria")));
  assert.equal(education[0].organization, "EPICODE");
});

test("università L-31 in corso senza dichiarare una laurea ottenuta", () => {
  assert.match(academicGoal.title, /L-31.*Artificial Intelligence/);
  assert.match(academicGoal.status, /in corso/);
  assert.match(academicGoal.status, /non ancora conseguita/);
  assert.match(source("../src/app/components/site/ProfileSections.jsx"), /academicGoal\.status/);
});

test("progetti privati presentati per aree tecniche senza rivelare repository", () => {
  assert.deepEqual(privateProjects.map((project) => project.name), ["Torven", "Il Presidente"]);
  assert.ok(privateProjects.every((project) => project.status === "Repository privato"));
  assert.ok(privateProjects.every((project) => !("repositoryUrl" in project) && !("documentationUrl" in project)));
  assert.ok(privateProjects.every((project) => project.highlights.length >= 3));
  assert.match(source("../src/app/components/site/PrivateProjectCards.jsx"), /privateProjects\.map/);
});

test("contatti pubblici includono email, GitHub e LinkedIn", () => {
  assert.deepEqual(contactChannels.map((channel) => channel.id), ["email", "github", "linkedin"]);
  assert.equal(contactChannels[0].href, "mailto:iengo.simone@gmail.com");
  for (const channel of contactChannels.slice(1)) {
    assert.equal(new URL(channel.href).protocol, "https:");
  }
  assert.match(source("../src/app/components/site/ProfileSections.jsx"), /"mail"/);
});

test("homepage e SEO non attribuiscono titoli o competenze commerciali inesistenti", () => {
  const hero = source("../src/app/components/site/EditorialSections.jsx");
  const og = source("../src/app/opengraph-image.jsx");
  assert.match(hero, /profile\.heroIntroduction/);
  assert.match(og, /SOFTWARE DEVELOPER/);
  assert.doesNotMatch(og, /SOFTWARE ENGINEER/);
  for (const name of ["about", "contact"]) {
    assert.match(source("../src/app/" + name + "/page.js"), /siteConfig\.published/);
  }
});
