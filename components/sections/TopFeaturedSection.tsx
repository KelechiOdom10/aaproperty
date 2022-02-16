import React from "react";
import {
  VStack,
  Flex,
  Heading,
  Text,
  Button,
  Box,
  Icon,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { definitions } from "types/supabase";
import PropertyListing from "@/components/Propertylisting";
import { CustomLink } from "../CustomLink";

type Props = {
  properties: Array<definitions["property"]>;
};

export default function TopFeaturedSection({ properties }: Props) {
  return (
    <Box bg="gray.50">
      <Box as="section" mx={{ base: 2, md: "auto" }} py={12} maxW="6xl">
        <Flex
          align="center"
          direction={{ base: "column", md: "row" }}
          justify={{ base: "center", md: "space-between" }}
          mx={6}
          mb={8}
        >
          <VStack
            align={{ base: "center", md: "flex-start" }}
            mb={{ base: 6, md: 0 }}
          >
            <Heading fontSize={{ base: "2xl", md: "4xl" }}>
              Top Featured Dealss
            </Heading>
            <Text
              fontSize={{ base: "sm", md: "md" }}
              color="gray.500"
              textAlign={{ base: "center", md: "start" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus assumenda
            </Text>
          </VStack>

          <Button
            as={CustomLink}
            href="/search?purpose=buy"
            background="brand.10"
            border="1px solid #d1d9ec"
            rightIcon={<Icon as={FaArrowRight} color="brand.500" />}
            color="brand.500"
            _hover={{ background: "brand.50" }}
            fontSize="sm"
            w={{ base: "full", md: "auto" }}
          >
            View All Properties
          </Button>
        </Flex>

        <Box mx={{ base: 4, md: 4 }} my={4}>
          <Flex
            overflowX="auto"
            width="100%"
            flexWrap="nowrap"
            alignItems="stretch"
            justifyContent={{ base: "flex-start", md: "space-between" }}
          >
            {properties.map((property) => (
              <PropertyListing key={property.id} item={property} />
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
