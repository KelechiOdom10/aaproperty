import { Box } from "@chakra-ui/react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import CompanySection from "@/components/CompanySection";

export default function Home() {
  return (
    <Box>
      <NavBar />
      <Hero />
      <FeatureSection />
      <CompanySection />
    </Box>
  );
}
