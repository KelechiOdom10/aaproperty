import {
  Button,
  ButtonProps,
  HStack,
  Icon,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { ReactChild, ReactNode } from "react";
import { IconType } from "react-icons";
import { BsFillTelephoneFill, BsShareFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import { definitions } from "types/supabase";
import { useRouter } from "next/router";

const PropertyContactButton = ({
  children,
  ...props
}: { children: ReactNode | ReactChild } & ButtonProps) => (
  <Button size="lg" {...props}>
    {children}
  </Button>
);

const UtilityContactButton = ({
  children,
  icon,
}: {
  children: ReactNode | ReactChild;
  icon: IconType;
}) => (
  <PropertyContactButton
    w="full"
    variant="accent"
    transition="all 0.3s ease-in"
    _hover={{
      bg: "brand.700",
      boxShadow: "lg",
      color: "white",
      border: "none",
    }}
    leftIcon={<Icon as={icon} fontSize="lg" />}
  >
    {children}
  </PropertyContactButton>
);

function PropertyContactSection({
  property,
}: {
  property: definitions["property"];
}) {
  const router = useRouter();
  return (
    <Stack
      flexDir={{ base: "row", md: "column" }}
      position="sticky"
      top={20}
      borderTopWidth={{ base: "1px", md: "0" }}
      justifyContent={{ base: "space-around", md: "start" }}
      bg="white"
      rounded="sm"
      boxShadow="md"
      spacing={{ base: 2, md: 4 }}
      p={{ base: 2, md: 4 }}
    >
      <Image
        display={{ base: "none", md: "block" }}
        src="/images/logo.png"
        alt="AA Property Logo"
        width="91.5px"
        height="90px"
      />
      <PropertyContactButton
        variant="accent"
        onClick={() => {
          window.open("tel:+44 20 7794 6559");
        }}
        leftIcon={<Icon as={BsFillTelephoneFill} />}
      >
        Call Agent
      </PropertyContactButton>
      <PropertyContactButton
        variant="primary"
        leftIcon={<Icon as={IoIosMail} fontSize="2xl" />}
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
      </PropertyContactButton>
      <HStack align="center" display={{ base: "none", md: "flex" }}>
        <UtilityContactButton icon={BsShareFill}>Share</UtilityContactButton>
        <UtilityContactButton icon={FiHeart}>Save</UtilityContactButton>
      </HStack>
    </Stack>
  );
}

export default PropertyContactSection;
