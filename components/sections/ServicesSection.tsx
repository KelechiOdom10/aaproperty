import {
  Flex,
  VStack,
  Heading,
  Text,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import ManagementSection from "./ManagementSection";
import ValuationAndConsultancySection from "./ValuationAndConsultancySection";

export default function ServicesSection() {
  return (
    <>
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
            Services
          </Heading>
          <Text fontSize={{ base: "md", md: "xl" }} fontWeight="semibold">
            We offer a wide range of services to make finding your dream home
            easy
          </Text>
        </VStack>
      </Flex>
      <Stack
        flexDir="column"
        w="full"
        divider={<StackDivider />}
        p={8}
        px={{ base: 4, md: 8 }}
        mx={{ base: 0, md: "auto" }}
        maxW="6xl"
      >
        <ValuationAndConsultancySection />
        <ManagementSection />
      </Stack>
    </>
  );
}
