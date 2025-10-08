import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SupportSection from "@/components/SupportSection";
import PartnerSection from "@/components/PartnerSection";
import DynamicServicesSection from "@/components/DynamicServicesSection";
import Footer from "@/components/Footer";
import ReviewSummary from "@/components/ReviewSummary";
import NativeTeamsSection from "@/components/NativeTeamsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <DynamicServicesSection />
      <TestimonialsSection />
      <PartnerSection />
      <NativeTeamsSection />
      <SupportSection />
      <ReviewSummary />

      <Footer />
    </main>
  );
}
