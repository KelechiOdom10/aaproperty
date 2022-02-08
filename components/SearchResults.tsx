import {
  Box,
  Button,
  Flex,
  HStack,
  Select,
  Text,
  VStack,
  Drawer,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { definitions } from "types/supabase";
import { BiSliderAlt } from "react-icons/bi";
import { UtilityButton } from "./sections/PropertyContactSection";
import SearchForm from "./SearchForm";
import PropertyResultListing from "./PropertyResultListing";

function SearchResults({
  properties,
}: {
  properties: definitions["property"][];
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [filteredProperties, setFilteredProperties] = React.useState<
    definitions["property"][]
  >([]);

  const handleAscending = () => {
    const sortedProperties = [...filteredProperties].sort(
      (a, b) => a.price - b.price
    );
    setFilteredProperties(sortedProperties);
  };

  const handleDescending = () => {
    const sortedProperties = [...filteredProperties].sort(
      (a, b) => b.price - a.price
    );
    setFilteredProperties(sortedProperties);
  };

  const handleNewest = () => {
    const updatedProperties = [...filteredProperties].sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
    setFilteredProperties(updatedProperties);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    switch (value) {
      case "Newest":
        return handleNewest();
      case "Highest Price":
        return handleDescending();
      case "Lowest Price":
        return handleAscending();
      default:
        break;
    }
  };

  React.useEffect(() => {
    setFilteredProperties(properties);
  }, [properties]);

  return (
    <Box mx={{ base: 2, md: "auto" }} mt={8} maxWidth="4xl">
      {properties.length > 0 ? (
        <>
          <Flex
            flexDir={{ base: "column", sm: "row" }}
            w="95%"
            mx="auto"
            align={{ base: "start", sm: "center" }}
            mb={8}
            justifyContent="space-between"
            px={2}
          >
            <Text
              fontSize={{ base: "md", sm: "lg" }}
              color="gray.600"
              fontStyle="italic"
            >{`${properties.length} propert${
              properties.length === 1 ? "y" : "ies"
            } found`}</Text>
            <HStack align="center" mt={{ base: 4, sm: 0 }}>
              <UtilityButton
                as={Flex}
                icon={BiSliderAlt}
                display={{ md: "none" }}
                alignItems="center"
                onClick={onOpen}
              >
                Filters
              </UtilityButton>
              <Select
                onChange={handleChange}
                color="brand.500"
                bg="white"
                border="2px"
                borderColor="brand.500"
                w="95%"
                h={12}
                placeholder="Sort By"
              >
                <option value="Newest">Newest</option>
                <option value="Lowest Price">Lowest Price</option>
                <option value="Highest Price">Highest Price</option>
              </Select>
            </HStack>
          </Flex>
          <Box w="full" mx="auto">
            {filteredProperties.map((property) => (
              <PropertyResultListing key={property.id} property={property} />
            ))}
          </Box>
        </>
      ) : (
        <VStack align="start" spacing={8}>
          <Text
            fontSize="xl"
            fontStyle="italic"
            color="gray.600"
            p={{ base: 0, md: 6 }}
          >
            <strong>Oops!</strong> No properties found, try refining your search
            by changing the filters
          </Text>
          <UtilityButton
            w="auto"
            icon={BiSliderAlt}
            display={{ md: "none" }}
            onClick={onOpen}
          >
            Filters
          </UtilityButton>
        </VStack>
      )}

      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="md"
      >
        <DrawerContent display={{ base: "block", md: "none" }}>
          <SearchForm onClose={onClose} />
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default SearchResults;
