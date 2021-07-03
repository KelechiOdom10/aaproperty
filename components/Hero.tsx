import { Flex, Box, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import HeroTabs from "@/components/HeroTabs";

export default function Hero() {
  return (
    <Flex
      backgroundImage={`linear-gradient( rgba(0,0,0,.7), rgba(0,0,0,.5) ), url(${"/images/hero.jpg"})`}
      position="relative"
      height={{ base: "320px", md: "550px" }}
      backgroundSize="cover"
      backgroundPosition="center"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <VStack spacing={4} p={4}>
        <Heading color="white" fontSize={{ base: "2xl", md: "4xl" }}>
          Find your dream home
        </Heading>
        <Text
          textAlign="center"
          color="white"
          fontSize={{ base: "sm", md: "md" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum archite!
        </Text>
        <Box
          position={{ base: "absolute", md: "relative" }}
          bottom={{ base: "-260px", md: "0" }}
          right={{ md: 0 }}
          width="100%"
        >
          <HeroTabs />
        </Box>
      </VStack>
    </Flex>
  );
}
