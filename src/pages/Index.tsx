import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import PersonalSection from "@/components/sections/PersonalSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AchievementsSection />
        <SkillsSection />
        <ExperienceSection />
        <PersonalSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
