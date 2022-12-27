import Hero from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import CompanySection from "@/components/sections/CompanySection";
import TopFeaturedSection from "@/components/sections/TopFeaturedSection";
import ContactUsSection from "@/components/sections/ContactUsSection";
import { GetStaticProps } from "next";
import { supabase } from "@/utils/supabaseClient";
import { definitions } from "types/supabase";
import Meta from "@/components/layout/Meta";

type Props = {
  properties: definitions["property"][];
};

export default function Home({ properties }: Props) {
  return (
    <>
      <Meta
        meta={{
          title: `AA Property UK > Search Property to Buy, Rent, House Prices, Estate Agents`,
        }}
      />
      <Hero />
      <IntroSection />
      <TopFeaturedSection properties={properties} />
      <CompanySection />
      <ContactUsSection />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: properties } = await supabase
    .from<definitions["property"]>("property")
    .select("*")
    .eq("purpose", "buy")
    .order("price", { ascending: false })
    .limit(4);

  return {
    props: {
      properties: properties || [],
    },
  };
};
