import {
  Flex,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import React from "react";
import SearchForm from "@/components/SearchForm";

export default function HeroTabs() {
  return (
    <Tabs
      variant="enclosed"
      width={{ base: "300px", md: "300px" }}
      boxShadow="lg"
    >
      <TabList>
        <Tab
          bg="white"
          borderBottom="0.2px solid #EDF2F7"
          borderRightRadius={0}
          _selected={{
            color: "white",
            bg: "blue.500",
          }}
        >
          Buy
        </Tab>
        <Tab
          bg="white"
          borderBottom="0.2px solid #EDF2F7"
          borderLeftRadius={0}
          _selected={{
            color: "white",
            bg: "blue.500",
          }}
        >
          Rent
        </Tab>
      </TabList>
      <TabPanels bg="white">
        <TabPanel>
          <SearchForm />
        </TabPanel>
        <TabPanel>
          <SearchForm />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
