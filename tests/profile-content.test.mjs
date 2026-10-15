import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  profile, skillAreas, profileChapters, experience, education,
  academicGoal, certificationProviders, futureProjects, contactChannels
} from "../src/content/profile.mjs";
import { siteConfig } from "../src/config/site.js";

test("il profilo pubblico distingue esperienza software e obiettivo AI engineering", () => {
  assert.match(profile.label, /JUNIOR SOFTWARE DEVELOPER/);
  assert.match(profile.heroIntroduction, /junior/);
  assert.match(profile.introduction, /circa tre anni/);
  assert.match(profile.introduction, /AI Engineer/);
  assert.match(profile.introduction, /Java/);
  assert.match(profile.introduction, /Python/);
  assert.match(siteConfig.title, /Software Developer/);
  assert.doesNotMatch(siteConfig.title, /AI Engineer/);
});

test("competenze e percorso professionale sono strutturati", () => {
  assert.equal(skillAreas.length, 4);
  assert.equal(new Set(skillAreas.map((a) => a.number)).size, skillAreas.length);
  assert.equal(new Set(profileChapters.map((a) => a.id)).size, profileChapters.length);
  assert.ok(skillAreas.some((a) => a.technologies.includes("FastAPI")));
  assert.ok(skillAreas.some((a) => a.technologies.includes("Spring Boot")));
  assert.deepEqual(experience.map((item) => item.organization), [
    "Talentform", "Nea Services", "Itconsulting",
    "Aurora Finanziamenti S.r.l.", "Facile.it", "Generali Italia"
  ]);
  assert.equal(experience.filter((item) => item.category === "tech").length, 3);
  assert.equal(education[0].organization, "EPICODE");
});

test("L-31 è un percorso formativo desiderato e non un titolo conseguito", () => {
  assert.match(academicGoal.title, /L-31.*Artificial Intelligence/);
  assert.match(academicGoal.status, /non ancora conseguita/);
  const ui = readFileSync(new URL("../src/app/components/site/ProfileSections.jsx", import.meta.url), "utf8");
  assert.match(ui, /academicGoal\.status/);
  assert.match(ui, /certificationProviders\.map/);
  assert.deepEqual(certificationProviders, ["Google", "Coursera"]);
});

test("progetti a lungo termine e contatti sono presentati correttamente", () => {
  assert.deepEqual(futureProjects.map((item) => item.name), ["RustOS", "Il Presidente"]);
  assert.ok(futureProjects.every((item) => !("repositoryUrl" in item)));
  assert.deepEqual(contactChannels.map((channel) => channel.id), ["github", "linkedin"]);
  for (const channel of contactChannels) assert.equal(new URL(channel.href).protocol, "https:");
});

test("metadata coerenti su homepage e pagine interne", () => {
  const hero = readFileSync(new URL("../src/app/components/site/EditorialSections.jsx", import.meta.url), "utf8");
  const image = readFileSync(new URL("../src/app/opengraph-image.jsx", import.meta.url), "utf8");
  assert.match(hero, /profile\.heroIntroduction/);
  assert.match(image, /SOFTWARE DEVELOPER/);
  for (const page of ["about", "contact"]) {
    const source = readFileSync(new URL("../src/app/" + page + "/page.js", import.meta.url), "utf8");
    assert.match(source, /siteConfig\.published/);
  }
});
