import {
  minPriceOptions,
  maxPriceOptions,
  bedrooms,
  propertyTypes,
} from "@/data/formOptions";
import {
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
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { IoLocation } from "react-icons/io5";

export default function MiniSearchForm({ purpose }: { purpose?: string }) {
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
                  <Icon as={IoLocation} w={5} h={5} color="gray.300" />
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

          <Button
            width="full"
            mt={4}
            type="submit"
            variant="primary"
            rounded="sm"
          >
            Search
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
