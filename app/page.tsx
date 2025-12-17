import { HeroSection } from "@/components/sections/HeroSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { PanelSection } from "@/components/sections/PanelSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <main className="min-h-screen pt-20 md:pt-24">
      <HeroSection />
      <ContactSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <PanelSection />
      <TestimonialsSection />
    </main>
  );
}
