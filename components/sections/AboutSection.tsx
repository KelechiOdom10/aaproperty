import { Box, Divider, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

export default function AboutSection() {
  return (
    <Box mb={16}>
      <Flex
        backgroundImage={`linear-gradient( rgba(0,0,0,.5), rgba(0,0,0,.4) ), url(${"/images/about-us.jpg"})`}
        position="relative"
        height={{ base: 80, md: "500px" }}
        backgroundSize="cover"
        backgroundPosition="center"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <VStack color="white" spacing={4} p={4} textAlign="center">
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            Find your dream home
          </Heading>
          <Text fontSize={{ base: "md", md: "xl" }}>
            Let’s find a home that’s perfect for you ipisicing elit. Hic eum
          </Text>
        </VStack>
      </Flex>
      <Box maxW="3xl" mx="auto">
        <Box my={8} width={{ base: "90%", md: "2xl" }} mx="auto">
          <Text as="h3" fontSize={{ base: "lg", md: "2xl" }} textAlign="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eum
            harum, animi dolorum eligendi nam sed ipsa dolore maiores quam ab
            recusandae labore alias dolor nostrum fuga ducimus eveniet neque!
          </Text>
        </Box>
        <Divider color="gray.800" />
        <VStack
          align="center"
          my={8}
          w="90%"
          spacing={6}
          mx={{ base: 4, md: "auto" }}
          pl={{ base: 4, md: 0 }}
        >
          <Text fontSize={{ base: "md", md: "lg" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eum
            harum, animi dolorum eligendi onsectetur adipisicing elit. Hic eum
            harum, animi dolorum eligend!
          </Text>
          <Text fontSize={{ base: "md", md: "lg" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eum
            harum, animi dolorum eligendi nam sed ipsa dolore maiores quam ab
            recusandae labore alias dolor nostrum fuga ducimus eveniet neque!
          </Text>
          <Text fontSize={{ base: "md", md: "lg" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eum
            harum, animi dolorum eligendi nam sed ipsa dolore maiores quam ab
            recusandae labore alias dolor nostrum fuga ducimus eveniet neque!
          </Text>
          <Text fontSize={{ base: "md", md: "lg" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eum
            harum, animi dolorum eligendi nam sed ipsa dolore maiores quam ab
            recusandae labore alias dolor nostrum fuga ducimus eveniet neque!
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}
