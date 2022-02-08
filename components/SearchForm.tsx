import { propertyTypes, bedrooms, bathrooms } from "@/data/formOptions";
import { convertToNumber } from "@/utils/convertToNumber";
import {
  Box,
  VStack,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Icon,
  Input,
  Text,
  Select,
  Button,
  StackDivider,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Tab,
  TabList,
  Tabs,
  BoxProps,
  IconButton,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { parse } from "querystring";
import React, { useEffect } from "react";
import { BiX } from "react-icons/bi";
import { IoLocation } from "react-icons/io5";

function SearchForm({
  onClose,
  ...props
}: { onClose?: () => void } & BoxProps) {
  const router = useRouter();
  const { query, asPath } = router;

  const [queryPurpose, setQueryPurpose] = React.useState(
    (query.purpose as "buy" | "rent") || "buy"
  );

  const purposes = ["buy", "rent"];

  const maxValue = queryPurpose === "rent" ? 10000 : 10000000;

  const [values, setValues] = React.useState({
    purpose: queryPurpose,
    location: "",
    type: "",
    minPrice: 0,
    maxPrice: maxValue,
    minRooms: 0,
    minBaths: 0,
  });

  const { location, type, minPrice, maxPrice, minBaths, minRooms, purpose } =
    values;

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
    const path = router.pathname;
    const { query } = router;
    Object.entries(values).forEach(([key, value]) => {
      if (value !== "" || value !== undefined) {
        query[key] = value as string;
      }
    });
    onClose && onClose();
    router.push({ pathname: path, query: query });
  };

  useEffect(() => {
    const query = parse(asPath.substr(asPath.indexOf("?") + 1));
    const maxValue = query.purpose === "rent" ? 10000 : 10000000;
    setQueryPurpose((query.purpose as "buy" | "rent") || "buy");
    setValues({
      purpose: query.purpose as "buy" | "rent",
      location: (query?.location as string) || "",
      type: (query?.type as string) || "",
      minPrice: convertToNumber(query?.minPrice as string) || 0,
      maxPrice: convertToNumber(query?.maxPrice as string) || maxValue,
      minBaths: convertToNumber(query?.minBaths as string) || 0,
      minRooms: convertToNumber(query?.minRooms as string) || 0,
    });
  }, [
    query?.purpose,
    query?.location,
    query?.type,
    query?.minPrice,
    query?.maxPrice,
    query?.minBaths,
    query?.minRooms,
    asPath,
  ]);

  return (
    <Box py={8} px={{ base: 4, sm: 6 }} w="full" {...props}>
      {onClose && (
        <IconButton
          aria-label="Close Search Form"
          display="block"
          marginLeft="auto"
          marginRight={0}
          icon={<Icon as={BiX} w={8} h={8} />}
          variant={"ghost"}
          mb={6}
          onClick={onClose}
        />
      )}
      <Tabs
        variant="unstyled"
        index={purposes.indexOf(queryPurpose)}
        w="full"
        rounded="md"
        mb={8}
      >
        <TabList bg="gray.50">
          <Tab
            w="50%"
            roundedLeft="sm"
            onClick={() => {
              setQueryPurpose("buy");
              setValues({
                ...values,
                purpose: "buy",
                maxPrice: 10000000,
              });
            }}
            _selected={{ color: "white", bg: "brand.500" }}
          >
            Buy
          </Tab>
          <Tab
            w="50%"
            roundedBottomRight="sm"
            onClick={() => {
              setQueryPurpose("rent");
              setValues({
                ...values,
                purpose: "rent",
                maxPrice: 10000,
              });
            }}
            _selected={{ color: "white", bg: "brand.500" }}
          >
            Rent
          </Tab>
        </TabList>
      </Tabs>
      <Box textAlign="left">
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} divider={<StackDivider color="gray.100" />}>
            <FormControl id="location">
              <FormLabel fontWeight="bold">City</FormLabel>
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
            <FormControl id="propertyType">
              <FormLabel fontWeight="bold">Property Type</FormLabel>
              <Select
                name="type"
                value={type}
                onChange={handleChange}
                placeholder="Property Type"
                fontSize={{ base: "sm", md: "md" }}
              >
                {propertyTypes.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel fontWeight="bold">Price Range</FormLabel>
              <Text py={2}>{`£${minPrice.toLocaleString()} ${
                purpose === "rent" ? "(pcm)" : ""
              } - £${maxPrice.toLocaleString()} ${
                purpose === "rent" ? "(pcm)" : ""
              }`}</Text>
              <RangeSlider
                aria-label={["Min Price", "Max Price"]}
                min={0}
                max={maxValue}
                step={queryPurpose === "rent" ? 500 : 100000}
                onChangeEnd={(val) => {
                  setValues({
                    ...values,
                    minPrice: val[0],
                    maxPrice: val[1],
                  });
                }}
                defaultValue={[minPrice, maxPrice]}
              >
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
              </RangeSlider>
            </FormControl>

            <FormControl id="bedrooms">
              <FormLabel fontWeight="bold">Bedrooms</FormLabel>
              <Select
                name="minRooms"
                value={minRooms}
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
            <FormControl id="bathrooms">
              <FormLabel fontWeight="bold">Bathrooms</FormLabel>
              <Select
                name="minBaths"
                value={minBaths}
                onChange={handleChange}
                placeholder="No. of Bathrooms"
                fontSize={{ base: "sm", md: "md" }}
              >
                {bathrooms.map((opt) => (
                  <option key={opt.label} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </Select>
            </FormControl>

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
    </Box>
  );
}

export default SearchForm;
