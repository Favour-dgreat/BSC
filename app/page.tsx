import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { JoinSection } from "@/components/sections/join-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen from-background to-background/80">
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <BenefitsSection />
        <TestimonialsSection />
        <JoinSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
