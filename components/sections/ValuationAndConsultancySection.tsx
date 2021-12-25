import { Stack, Flex, Heading, Text, Button, VStack } from "@chakra-ui/react";
import React from "react";
import Feature from "@/components/Feature";

export default function ValuationAndConsultancySection() {
  return (
    <Flex
      flexDir={{ base: "column", md: "row" }}
      p={8}
      mx={{ base: 2, md: "auto" }}
      mt={{ base: "280px", md: 6 }}
      mb={{ md: 6 }}
      align="center"
      maxW="6xl"
    >
      <Stack
        textAlign={{ base: "center", md: "left" }}
        spacing={4}
        w={{ base: "full", md: "55%" }}
        p={4}
      >
        <Heading fontSize={{ base: "2xl", md: "4xl" }}>
          This is the headline
        </Heading>
        <Text fontSize={{ base: "sm", md: "md" }}>
          {" "}
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore
        </Text>
        <Button w={{ base: "full", md: "50%" }} colorScheme="blue">
          Get Started
        </Button>
      </Stack>
      <VStack
        spacing={4}
        mt={{ base: 4, md: 0 }}
        align={{ base: "center", md: "start" }}
      >
        <Feature>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </Feature>
        <Feature>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </Feature>
        <Feature>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </Feature>
        <Feature>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </Feature>
        <Feature>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </Feature>
      </VStack>
    </Flex>
  );
}
