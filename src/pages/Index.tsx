import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import roadBackground from "@/assets/road-background.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Fixed Road Background */}
      <div className="fixed inset-0 z-0">
        <img 
          src={roadBackground} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/75" />
      </div>
      
      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
