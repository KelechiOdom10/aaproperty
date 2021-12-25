import Hero from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import CompanySection from "@/components/sections/CompanySection";
import TopFeaturedSection from "@/components/sections/TopFeaturedSection";
import ContactUsSection from "@/components/sections/ContactUsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <TopFeaturedSection />
      <CompanySection />
      <ContactUsSection />
    </>
  );
}
