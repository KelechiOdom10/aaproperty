import {
  VStack,
  Flex,
  Heading,
  Text,
  HStack,
  Icon,
  Badge,
} from "@chakra-ui/react";
import React from "react";
import { FaBath, FaBed, FaVectorSquare } from "react-icons/fa";
import { definitions } from "types/supabase";
import { CustomLink } from "./CustomLink";
import ImageCarousel from "./ImageCarousel";

type Props = {
  item: definitions["property"];
};

type PropertyIconProps = {
  children: React.ReactNode;
};

export const PropertyIconContainer = ({ children }: PropertyIconProps) => {
  return (
    <HStack spacing={1} align="center" color="gray.600" fontSize="sm">
      {children}
    </HStack>
  );
};

export default function PropertyListing({ item }: Props) {
  return (
    <Flex
      as={CustomLink}
      href={`/details/${item.id}`}
      flexDirection="column"
      _hover={{ transform: "scale(1.05)" }}
      transition="transform .4s ease-in-out"
      cursor={item.isAvailable ? "pointer" : "not-allowed"}
      flex="0 0 auto"
      rounded="sm"
      w={{ base: "240px", md: "260px" }}
      boxShadow="md"
      mx={2}
      my={4}
    >
      <ImageCarousel
        id={item.id}
        images={item.images}
        w={{ base: "240px", md: "260px" }}
        height={{ base: "140px", md: "180px" }}
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
        >{`£ ${item.price.toLocaleString("en-us")} ${
          item.purpose === "rent" ? "pcm" : ""
        }`}</Text>
      </ImageCarousel>
      <VStack
        bg="white"
        width="100%"
        align="start"
        justify="space-between"
        py={4}
        px={2}
        minH="150px"
      >
        <Flex
          flexDir={{ base: "column", md: "row" }}
          justifyContent={{ base: "start", md: "space-between" }}
          alignItems={{ base: "flex-start", md: "center" }}
          width="full"
          flexWrap="wrap"
        >
          <Heading fontSize={{ base: "15px", md: "17px" }}>
            {item.title}
          </Heading>{" "}
          {item.tags && (
            <Badge
              variant="subtle"
              colorScheme="orange"
              fontSize={{ base: "10px", md: "12px" }}
              mt={{ base: 1, md: 0 }}
            >
              {item.tags[0]}
            </Badge>
          )}
        </Flex>
        <Text
          w="90%"
          color="gray.600"
          fontSize={{ base: "sm", md: "15px" }}
          noOfLines={2}
          whiteSpace="normal"
        >
          {item.address}, {item.postalCode}
        </Text>

        <HStack spacing={4}>
          <PropertyIconContainer>
            <Icon as={FaBed} fontSize={{ base: "md", md: "18px" }} />{" "}
            <Text>{item.bedrooms}</Text>
          </PropertyIconContainer>
          <PropertyIconContainer>
            <Icon as={FaBath} /> <Text>{item.bathrooms}</Text>
          </PropertyIconContainer>
          <PropertyIconContainer>
            <Icon as={FaVectorSquare} />{" "}
            <Text>
              {`${item.size.toLocaleString("en-us")} ft`}
              <sup>2</sup>
            </Text>
          </PropertyIconContainer>
        </HStack>
      </VStack>
    </Flex>
  );
}
