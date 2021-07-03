import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  HStack,
  VStack,
  Stack,
  Select,
} from "@chakra-ui/react";
import React from "react";
import { SearchIcon } from "@chakra-ui/icons";

//Bedroom input values dropdown
const bedrooms = [
  { value: "Studio", label: "Studio" },
  { value: "1+", label: "One+" },
  { value: "2+", label: "Two+" },
  { value: "3+", label: "Three+" },
  { value: "4+", label: "Four+" },
  { value: "5+", label: "Five+" },
  { value: "6+", label: "Six+" },
  { value: "8+", label: "Eight+" },
];

//Property types dropdown menu items
const propertyTypes = [
  { value: "Any" },
  { value: "Detached House" },
  { value: "Semi-detached House" },
  { value: "Town House" },
  { value: "Terraced House" },
  { value: "Flat" },
  { value: "Studio" },
  { value: "Garage" },
  { value: "Unavailable" },
];

//Minimum pricing options
const minPriceOptions = [
  { value: "None", label: "None" },
  { value: 200000, label: "£200,000" },
  { value: 250000, label: "£250,000" },
  { value: 300000, label: "£300,000" },
];

//Maximum pricing options
const maxPriceOptions = [
  { value: "Max", label: "Max" },
  { value: 7000000, label: "£7,000,000" },
];

//Pricing type options: conditional on let form
const pricingtype = [
  { value: "Any", label: "Any" },
  { value: "Monthly", label: "Monthly" },
  { value: "Weekly", label: "Weekly" },
  { value: "S.o.f", label: "Share of Freehold" },
  { value: "Freehold", label: "Freehold" },
  { value: "Leasehold", label: "Leasehold" },
];

//Furnishing options: conditionally on let form
const furnishing = [
  { value: "Any", label: "Any" },
  { value: "Furnished", label: "Furnished" },
  { value: "Unfurnished", label: "Unfurnished" },
];

export default function SearchForm() {
  return (
    <Box my={2} mx={4} textAlign="left">
      <form>
        <VStack spacing={3}>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={3}
            align="center"
            justify="space-between"
          >
            <FormControl id="location">
              <FormLabel
                display={{ base: "none", md: "block" }}
                fontWeight="bold"
              >
                Location
              </FormLabel>
              <InputGroup borderRadius="sm">
                <InputLeftElement pointerEvents="none">
                  <SearchIcon color="gray.300" />
                </InputLeftElement>
                <Input
                  type="text"
                  placeholder="eg. Oxford or NW3"
                  autoComplete="off"
                  fontSize={{ base: "sm", md: "md" }}
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel
                display={{ base: "none", md: "block" }}
                fontWeight="bold"
              >
                Price Range
              </FormLabel>
              <HStack align="center">
                <Select
                  placeholder="Min Price"
                  fontSize={{ base: "sm", md: "md" }}
                >
                  {minPriceOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </Select>
                <Select
                  placeholder="No max"
                  fontSize={{ base: "sm", md: "md" }}
                >
                  {maxPriceOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </Select>
              </HStack>
            </FormControl>
          </Stack>
          <Stack
            direction={{ base: "column", md: "row" }}
            width="100%"
            spacing={3}
            align="center"
            justify="space-between"
          >
            <FormControl id="bedrooms">
              <FormLabel
                display={{ base: "none", md: "block" }}
                fontWeight="bold"
              >
                Bedrooms
              </FormLabel>
              <Select
                placeholder="No. of Bedrooms"
                fontSize={{ base: "sm", md: "md" }}
              >
                {bedrooms.map((opt) => (
                  <option key={opt.label} value={opt.value}>
                    {opt.value}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl id="propertyType">
              <FormLabel
                display={{ base: "none", md: "block" }}
                fontWeight="bold"
              >
                Property Type
              </FormLabel>
              <Select
                placeholder="Property Type"
                fontSize={{ base: "sm", md: "md" }}
              >
                {propertyTypes.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.value}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Stack>

          <Button width="full" mt={4} type="submit" colorScheme="blue">
            Search
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
