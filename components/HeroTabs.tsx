import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import MiniSearchForm from "@/components/MiniSearchForm";

export default function HeroTabs() {
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
        >
          Rent
        </Tab>
      </TabList>
      <TabPanels bg="white">
        <TabPanel>
          <MiniSearchForm purpose="buy" />
        </TabPanel>
        <TabPanel>
          <MiniSearchForm purpose="rent" />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
