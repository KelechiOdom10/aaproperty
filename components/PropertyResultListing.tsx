import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  VStack,
  Text,
  Stack,
} from "@chakra-ui/react";
import { FaBed, FaBath, FaVectorSquare } from "react-icons/fa";
import { definitions } from "types/supabase";
import ImageCarousel from "./ImageCarousel";
import { PropertyIconContainer } from "./Propertylisting";
import { UtilityButton } from "./sections/PropertyContactSection";
import { IoIosMail } from "react-icons/io";
import { useRouter } from "next/router";
import { CustomLink } from "./CustomLink";

export default function PropertyResultListing({
  property,
}: {
  property: definitions["property"];
}) {
  const router = useRouter();
  return (
    <Box
      cursor="pointer"
      position="relative"
      my={8}
      w={{ base: "full", sm: "95%" }}
      backgroundColor="white"
      border="1px solid #D1D0CF"
      borderRadius="md"
      mx="auto"
      _hover={{
        boxShadow: "md",
      }}
      overflow="hidden"
    >
      <Flex
        as={CustomLink}
        href={`/details/${property.id}`}
        flexDir={{ base: "column", sm: "row" }}
        w="full"
      >
        <Box w={{ base: "full", sm: "60%", md: "50%" }} h="100%">
          <ImageCarousel
            id={property.id}
            images={property.images}
            ratio={1.48 / 1}
            width="100%"
            h={{ base: "200px", sm: "280px", md: "240px" }}
            objectFit="contain"
          >
            <Text
              position="absolute"
              top="3"
              zIndex={5}
              right="3"
              bg="brand.500"
              rounded="sm"
              fontSize={{ base: "sm", md: "md" }}
              px={2}
              py={1}
              color="white"
              fontWeight="semibold"
            >{`£ ${property.price.toLocaleString("en-us")} ${
              property.purpose === "rent" ? "pcm" : ""
            }`}</Text>
          </ImageCarousel>
        </Box>
        <Box w={{ base: "full", sm: "40%", md: "50%" }} px={3}>
          <VStack
            width="100%"
            align="start"
            justify="space-between"
            spacing={6}
            px={2}
          >
            <VStack align="start" mt={4}>
              <Heading fontSize={{ base: "15px", md: "17px" }}>
                {property.title}
              </Heading>
              <Text
                w="90%"
                color="gray.600"
                fontSize={{ base: "xs", md: "sm" }}
                whiteSpace="normal"
              >
                {property.address}, {property.postalCode}
              </Text>
              <HStack spacing={4}>
                <PropertyIconContainer>
                  <Icon as={FaBed} fontSize={{ base: "md", md: "18px" }} />{" "}
                  <Text>{property.bedrooms}</Text>
                </PropertyIconContainer>
                <PropertyIconContainer>
                  <Icon as={FaBath} /> <Text>{property.bathrooms}</Text>
                </PropertyIconContainer>
                <PropertyIconContainer>
                  <Icon as={FaVectorSquare} />{" "}
                  <Text>
                    {`${property.size.toLocaleString("en-us")} ft`}
                    <sup>2</sup>
                  </Text>
                </PropertyIconContainer>
              </HStack>
            </VStack>
            <Box display={{ base: "block", sm: "none", md: "block" }}>
              <Text
                noOfLines={2}
                w="90%"
                color="gray.600"
                fontSize={{ base: "xs", md: "sm" }}
                whiteSpace="normal"
                mb={4}
              >
                {property.description}
              </Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
      <Flex
        justifyContent="space-between"
        flexWrap="wrap"
        align="center"
        p={4}
        borderTop="1px solid #D1D0CF"
      >
        <Stack align="center">
          {property.purpose === "buy" && (
            <Text color="gray.600" fontSize="sm" whiteSpace="normal">
              {`Listed on ${new Date(property.createdAt).toLocaleDateString()}`}
            </Text>
          )}
          {property.purpose === "rent" && (
            <Text color="gray.600" fontSize="sm" whiteSpace="normal">
              {`Available ${property.lettingDetails?.availabilityDate}`}
            </Text>
          )}
        </Stack>

        <UtilityButton
          size="md"
          w="auto"
          mt={{ base: 2, md: 0 }}
          icon={IoIosMail}
          onClick={() => {
            router.push("/contact", {
              query: {
                subject: `Enquiry about ${property.title}, with id: ${property.id}`,
              },
              pathname: "/contact",
            });
          }}
        >
          Email Agent
        </UtilityButton>
      </Flex>
    </Box>
  );
}
