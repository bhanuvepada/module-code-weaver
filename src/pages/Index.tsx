import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ElectionsSection from "@/components/ElectionsSection";
import RolesSection from "@/components/RolesSection";
import ActivitySection from "@/components/ActivitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <ElectionsSection />
        <RolesSection />
        <ActivitySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
