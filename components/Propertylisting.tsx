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
import ImageCarousel from "./ImageCarousel";

type Props = {
  item: definitions["property"];
};

type PropertyIconProps = {
  children: React.ReactNode;
};

const PropertyIconContainer = ({ children }: PropertyIconProps) => {
  return (
    <HStack
      spacing={1}
      align="center"
      color="gray.600"
      fontSize={{ base: "xs", md: "sm" }}
    >
      {children}
    </HStack>
  );
};

export default function PropertyListing({ item }: Props) {
  return (
    <Flex
      flexDirection="column"
      _hover={{ transform: "scale(1.05)" }}
      transition="transform .4s ease-in-out"
      cursor={item.isAvailable ? "pointer" : "not-allowed"}
      flex="0 0 auto"
      rounded="md"
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
        >{`£ ${item.price.toLocaleString("en-us")}`}</Text>
      </ImageCarousel>
      <VStack
        width="100%"
        align="start"
        justify="space-between"
        py={4}
        px={2}
        minH="150px"
      >
        <HStack justify="space-between" w="full">
          <Heading fontSize={{ base: "15px", md: "17px" }}>
            {item.title}
          </Heading>{" "}
          {item.tags && (
            <Badge
              variant="subtle"
              colorScheme="orange"
              fontSize={{ base: "10px", md: "12px" }}
            >
              {item.tags[0]}
            </Badge>
          )}
        </HStack>
        <Text
          w="90%"
          color="gray.600"
          fontSize={{ base: "xs", md: "sm" }}
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
