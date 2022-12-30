import {
  Box,
  Heading,
  HStack,
  Icon,
  Stack,
  StackDivider,
  SimpleGrid,
  Tag,
  Text,
  VStack,
  useDisclosure,
  Collapse,
  Button,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { IconType } from "react-icons";
import { BiCalendar } from "react-icons/bi";
import { FaBath, FaBed, FaHome, FaVectorSquare } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { definitions } from "types/supabase";
import ImageCarousel from "./ImageCarousel";
import { PropertyIconContainer } from "./Propertylisting";

const PropertyIconItem = ({
  icon,
  text,
  iconWidthMd = "xl",
  iconWidthBase = "lg",
}: {
  icon: IconType;
  text: string | number;
  iconWidthMd?: string;
  iconWidthBase?: string;
}) => (
  <>
    <Icon as={icon} fontSize={{ base: iconWidthBase, md: iconWidthMd }} />
    <Text fontSize={{ base: "15px", md: "16px" }}>{text}</Text>
  </>
);

const KeyFeatures = ({ text }: { text: any }) => (
  <HStack spacing={3} align="center">
    <Icon
      as={HiOutlineLocationMarker}
      color="brand.500"
      fontSize={{ base: "sm", md: "md" }}
    />
    <Text>{text}</Text>
  </HStack>
);

type Props = {
  property: definitions["property"];
};

function PropertyDetails({ property }: Props) {
  const Map = useMemo(
    () =>
      dynamic(() => import("./Map"), {
        loading: () => <p>Map loading...</p>,
        ssr: false,
      }),
    []
  );
  const { isOpen, onToggle } = useDisclosure();

  return (
    <VStack
      align="start"
      as={Box}
      spacing={6}
      divider={<StackDivider bg="gray.100" />}
    >
      <Box w="full">
        <ImageCarousel
          id={property.id}
          images={property.images}
          width="100%"
          rounded="sm"
        />
        <VStack align="start" spacing={4} w="full" mt={6}>
          <Stack
            flexDir={{ base: "column", md: "row" }}
            justifyContent={{ base: "start", md: "space-between" }}
            align={{ base: "flex-start", md: "center" }}
            width="full"
            flexWrap="wrap"
          >
            <VStack align="start" spacing={1}>
              <Heading fontSize={{ base: "xl", md: "2xl" }}>
                {property.title}
              </Heading>
              <Text fontSize="md" color="gray">
                {property.address}, {property.postalCode}
              </Text>
            </VStack>
            <Heading
              fontSize={{ base: "xl", md: "2xl" }}
              pt={{ base: 2, md: 0 }}
              alignSelf="flex-start"
            >
              {`£${property.price.toLocaleString("en-us")} ${
                property.purpose === "rent" ? "pcm" : ""
              }`}
            </Heading>
          </Stack>

          {property.tags && (
            <HStack spacing={4}>
              {property.tags.map((tag) => (
                <Tag
                  key={tag}
                  variant="solid"
                  size="md"
                  fontSize={{ base: "sm", md: "md" }}
                  fontWeight="bold"
                  padding={2}
                >
                  {tag}
                </Tag>
              ))}
            </HStack>
          )}
        </VStack>
      </Box>
      <HStack spacing={6}>
        <PropertyIconContainer>
          <PropertyIconItem icon={FaHome} text={property.propertyType} />
        </PropertyIconContainer>
        <PropertyIconContainer>
          <PropertyIconItem icon={FaBed} text={property.bedrooms} />
        </PropertyIconContainer>
        <PropertyIconContainer>
          <PropertyIconItem
            icon={FaBath}
            iconWidthBase="sm"
            iconWidthMd="16px"
            text={property.bathrooms}
          />
        </PropertyIconContainer>
        <PropertyIconContainer>
          <PropertyIconItem
            icon={FaVectorSquare}
            iconWidthBase="sm"
            iconWidthMd="md"
            text={`${property.size.toLocaleString("en-us")} ft`}
          />
        </PropertyIconContainer>
      </HStack>
      {property.purpose == "rent" && (
        <PropertyIconContainer>
          <PropertyIconItem
            icon={BiCalendar}
            iconWidthBase="xl"
            iconWidthMd="2xl"
            text={` Available from ${property.lettingDetails?.availabilityDate}`}
          />
        </PropertyIconContainer>
      )}
      {property.purpose == "rent" && (
        <VStack spacing={6} align="start">
          <Heading fontSize={{ base: "lg", md: "xl" }}>Letting Details</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacingX={40} spacingY={15}>
            <KeyFeatures
              text={`Deposit: £${property.lettingDetails?.deposit?.toLocaleString(
                "en-us"
              )}`}
            />
            <KeyFeatures text={property.lettingDetails?.furnishing} />
            <KeyFeatures text={property.lettingDetails?.letType} />
          </SimpleGrid>
        </VStack>
      )}
      {property.keyFeatures && (
        <VStack spacing={6} align="start">
          <Heading fontSize={{ base: "lg", md: "xl" }}>Key Features</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacingX={40} spacingY={15}>
            {property.keyFeatures?.map((feature) => (
              <KeyFeatures key={feature} text={feature} />
            ))}
          </SimpleGrid>
        </VStack>
      )}
      <VStack spacing={6} align="start">
        <Heading fontSize={{ base: "lg", md: "xl" }}>
          Property Description
        </Heading>
        <Collapse in={isOpen} startingHeight={70}>
          {property.description}
        </Collapse>
        <Button
          fontWeight="medium"
          leftIcon={
            <Icon
              as={
                isOpen ? MdOutlineKeyboardArrowUp : MdOutlineKeyboardArrowDown
              }
              fontSize="lg"
            />
          }
          _focus={{ boxShadow: "brand.500" }}
          variant="link"
          colorScheme="brand"
          onClick={onToggle}
        >
          Show {isOpen ? "Less" : "More"}
        </Button>
      </VStack>
      <Map
        coordinates={property.geom.coordinates}
        address={`${property.address}, ${property.postalCode}`}
      />
    </VStack>
  );
}

export default PropertyDetails;
