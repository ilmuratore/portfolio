import SiteHeader from "./components/v2/SiteHeader";
import SiteFooter from "./components/v2/SiteFooter";
import { HeroSection, FeaturedSection, ProcessSection } from "./components/v2/EditorialSections";
import { SkillsSection, AboutSection, ContactSection } from "./components/v2/ProfileSections";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Vai al contenuto principale</a>
      <SiteHeader />
      <main id="main-content">
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
