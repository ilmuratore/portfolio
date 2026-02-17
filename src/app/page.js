import dynamic from "next/dynamic";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const AchievementsSection = dynamic(() => import("./components/AchievementsSection"));
const AboutSection = dynamic(() => import("./components/AboutSection"));
const ProjectsSection = dynamic(() => import("./components/ProjectsSection"));
const EmailSection = dynamic(() => import("./components/EmailSection"));

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container px-12 py-4 mx-auto mt-24">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}