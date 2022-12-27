import { Flex, Box, Heading, Text, VStack } from "@chakra-ui/react";
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
      <VStack spacing={4} p={4} textAlign="center">
        <Heading color="white" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
          Find your dream home
        </Heading>
        <Text color="white" fontSize={{ base: "md", md: "xl" }}>
          Let’s find a home that’s perfect for you
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
