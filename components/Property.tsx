import {
  VStack,
  Flex,
  Heading,
  Text,
  HStack,
  Box,
  Icon,
  Badge,
} from "@chakra-ui/react";
import React from "react";
import { Property } from "types";
import { FaBath, FaBed, FaVectorSquare } from "react-icons/fa";

type Props = {
  item: Property;
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
      flex="0 0 auto"
      rounded="sm"
      w={{ base: "240px", md: "260px" }}
      bg="white"
      boxShadow="sm"
      mx={2}
      my={4}
    >
      <Flex
        height={{ base: "140px", md: "180px" }}
        backgroundImage={`url(${item.image})`}
        position="relative"
        backgroundSize="cover"
        backgroundPosition="center"
        roundedTop="sm"
      >
        <Text
          position="absolute"
          top="3"
          right="3"
          bg="brand.600"
          rounded="sm"
          fontSize={{ base: "sm", md: "md" }}
          px={2}
          py={1}
          color="white"
          fontWeight="semibold"
        >{`£ ${item.price.toLocaleString("en-us")}`}</Text>
      </Flex>
      <VStack width="100%" align="start" spacing={3} py={4} px={2}>
        <VStack align="start" spacing={1}>
          <HStack justify="space-between" w="full">
            <Heading fontSize={{ base: "15px", md: "17px" }}>
              {item.name}
            </Heading>{" "}
            {item.tag && (
              <Badge
                variant="subtle"
                colorScheme="orange"
                fontSize={{ base: "10px", md: "12px" }}
              >
                {item.tag}
              </Badge>
            )}
          </HStack>
          <Text
            w="90%"
            color="gray.600"
            fontSize={{ base: "xs", md: "sm" }}
            whiteSpace="normal"
          >
            {item.address}
          </Text>
        </VStack>
        <HStack spacing={4}>
          <PropertyIconContainer>
            <Icon as={FaBed} fontSize={{ base: "md", md: "18px" }} />{" "}
            <Text>{item.numOfBeds}</Text>
          </PropertyIconContainer>
          <PropertyIconContainer>
            <Icon as={FaBath} /> <Text>{item.numOfBaths}</Text>
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
