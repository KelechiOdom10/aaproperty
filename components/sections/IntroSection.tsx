import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { INTRO_LIST } from "@/data/introList";
import { CustomLink } from "../CustomLink";

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
      <Heading fontSize={{ base: "2xl", md: "4xl" }} textAlign="center" px={8}>
        Welcome to AA Property Services UK
      </Heading>
      <Text w={{ base: "95%", md: "60%" }} textAlign="center">
        Our team is dedicated to providing top-notch accommodation and
        property-related services to meet the needs of each and every one of our
        clients
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
            maxW={{ base: "260px", md: "260px" }}
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
            <Button as={CustomLink} w="full" variant="primary" href={data.href}>
              Find out more
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  );
}
