import { bedrooms, propertyTypes, priceOptions } from "@/data/formOptions";
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
import { useRouter } from "next/router";
import React from "react";
import { IoLocation } from "react-icons/io5";

export default function MiniSearchForm({
  purpose,
}: {
  purpose: "buy" | "rent";
}) {
  const router = useRouter();
  const [values, setValues] = React.useState({
    location: "",
    minRooms: "",
    type: "",
    minPrice: 0,
    maxPrice: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push({
      pathname: "/search",
      query: { ...values, purpose },
    });
  };

  const { location, minRooms, type, maxPrice, minPrice } = values;

  return (
    <Box my={2} px={4} textAlign="left">
      <form onSubmit={handleSubmit}>
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
                City
              </FormLabel>
              <InputGroup borderRadius="sm">
                <InputLeftElement pointerEvents="none">
                  <Icon as={IoLocation} w={5} h={5} color="gray.300" />
                </InputLeftElement>
                <Input
                  type="text"
                  name="location"
                  value={location}
                  onChange={handleChange}
                  placeholder="Search city eg. Oxford, London..."
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
                  name="minPrice"
                  value={minPrice}
                  onChange={handleChange}
                  fontSize={{ base: "sm", md: "md" }}
                >
                  {priceOptions[purpose].map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {`${opt.label} ${purpose === "rent" ? "pcm" : ""}`}
                    </option>
                  ))}
                </Select>
                <Select
                  name="maxPrice"
                  value={maxPrice}
                  onChange={handleChange}
                  placeholder="No max"
                  fontSize={{ base: "sm", md: "md" }}
                >
                  {priceOptions[purpose].map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {`${opt.label} ${purpose === "rent" ? "pcm" : ""}`}
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
                value={minRooms}
                name="minRooms"
                onChange={handleChange}
                placeholder="No. of Bedrooms"
                fontSize={{ base: "sm", md: "md" }}
              >
                {bedrooms.map((opt) => (
                  <option key={opt.label} value={opt.value}>
                    {opt.label}
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
                name="type"
                value={type}
                onChange={handleChange}
                fontSize={{ base: "sm", md: "md" }}
              >
                {propertyTypes.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Stack>

          <Button width="full" mt={4} type="submit" variant="primary">
            Search
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
