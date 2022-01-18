import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { INTRO_LIST } from "@/data/introList";

export default function IntroSection() {
  return (
    <VStack
      as="section"
      mx={{ base: 2, md: "auto" }}
      mt={{ base: "300px", md: 12 }}
      mb={12}
      spacing={4}
      align="center"
      maxW="6xl"
    >
      <Heading fontSize={{ base: "2xl", md: "4xl" }} textAlign="center">
        This is the headline
      </Heading>
      <Text
        fontSize={{ base: "sm", md: "md" }}
        w={{ base: "95%", md: "60%" }}
        textAlign="center"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque iste vel
        mollitia architecto, rem perferendis quod quas animi odio aut iusto
        dolorem dicta nesciunt veniam veritatis corporis repudiandae sint
        beatae.
      </Text>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 4 }}
        spacing="30px"
        px={4}
        pt={8}
      >
        {INTRO_LIST.map((data) => (
          <Box
            key={data.heading}
            maxW={{ base: "240px", md: "260px" }}
            bg="gray.50"
            rounded="md"
            py={7}
            px={5}
          >
            <Heading
              fontSize={{ base: "lg", md: "xl" }}
              textAlign="left"
              my={4}
            >
              {data.heading}
            </Heading>
            <Text fontSize={{ base: "sm" }} my={4}>
              {data.description}
            </Text>
            <Button as="a" w="full" variant="primary" href={data.href}>
              Find out more
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  );
}
