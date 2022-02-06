import {
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  Link,
} from "@chakra-ui/react";
import React from "react";
import Feature from "@/components/Feature";

export default function ValuationAndConsultancySection() {
  return (
    <Flex
      id="valuation-and-consultancy"
      flexDir={{ base: "column", md: "row" }}
      my={6}
      mt={{ base: 0, md: 6 }}
      align="center"
    >
      <Stack
        textAlign={{ base: "center", md: "left" }}
        spacing={4}
        w={{ base: "full", md: "55%" }}
        p={4}
      >
        <Heading fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}>
          Valuation and Professional Consultancy
        </Heading>
        <Text fontSize={{ base: "sm", md: "md" }}>
          {" "}
          Our Chartered Surveyors are RICS Registered Valuers and offer a
          comprehensive range of professional services for both corporate and
          individual clients on all types of residential and commercial
          property.
          <br />
          <br />
          We are members of the{" "}
          <span>
            <Link
              as="a"
              color="brand.400"
              href="https://www.rics.org"
              isExternal
            >
              Royal Institution of Chartered Surveyors
            </Link>
          </span>{" "}
          and as such are governed by their strict regulations.
        </Text>
        <Button as="a" w={{ base: "full", md: "40%" }} href="/contact">
          Contact Us
        </Button>
      </Stack>
      <VStack
        spacing={4}
        mt={{ base: 4, md: 0 }}
        align={{ base: "center", md: "start" }}
      >
        <Feature>
          Valuation for all purposes including security, probate, taxation and
          litigation
        </Feature>
        <Feature>
          Lease extensions and enfranchisement – both individual and collective
        </Feature>
        <Feature>
          Residential and commercial rent reviews and lease renewals
        </Feature>
        <Feature>
          Advice on Landlord & Tenant issues as well as development advise
        </Feature>
      </VStack>
    </Flex>
  );
}
