import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import MiniSearchForm from "@/components/MiniSearchForm";
import { useState } from "react";

export default function HeroTabs() {
  const [purpose, setPurpose] = useState<"buy" | "rent">("buy");

  return (
    <Tabs
      variant="enclosed"
      width={{ base: "300px", md: "100%" }}
      mx="auto"
      boxShadow="lg"
      mt={{ md: 8 }}
    >
      <TabList>
        <Tab
          bg="white"
          rounded="none"
          borderBottom="0.1px solid #EDF2F7"
          borderRightRadius={0}
          _selected={{
            color: "white",
            bg: "brand.500",
          }}
          onClick={() => setPurpose("buy")}
        >
          Buy
        </Tab>
        <Tab
          bg="white"
          rounded="none"
          borderBottom="0.1px solid #EDF2F7"
          borderLeftRadius={0}
          _selected={{
            color: "white",
            bg: "brand.500",
          }}
          onClick={() => setPurpose("rent")}
        >
          Rent
        </Tab>
      </TabList>
      <TabPanels bg="white" py={4} px={{ base: 2, md: 4 }} maxW="600px">
        <MiniSearchForm purpose={purpose} />
      </TabPanels>
    </Tabs>
  );
}
