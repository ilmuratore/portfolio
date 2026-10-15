import SiteHeader from "./components/site/SiteHeader";
import SiteFooter from "./components/site/SiteFooter";
import { HeroSection, FeaturedSection, ProcessSection } from "./components/site/EditorialSections";
import { SkillsSection, AboutSection, ContactSection } from "./components/site/ProfileSections";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Vai al contenuto principale</a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <FeaturedSection />
        <ProcessSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
