import {
  Button,
  ButtonProps,
  Heading,
  HStack,
  Icon,
  Link,
  Stack,
} from "@chakra-ui/react";
import React, { ReactChild, ReactNode } from "react";
import { IconType } from "react-icons";
import { BsFillTelephoneFill, BsShareFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import { definitions } from "types/supabase";
import { useRouter } from "next/router";

type ContactButtonProps = {
  children: ReactChild | ReactNode;
  [x: string]: any;
};
const PropertyContactButton = ({
  children,
  ...props
}: ContactButtonProps & ButtonProps) => (
  <Button size="lg" {...props}>
    {children}
  </Button>
);

export const UtilityButton = ({
  children,
  icon,
  ...props
}: {
  children: ReactNode | ReactChild;
  icon: IconType;
} & ButtonProps) => (
  <PropertyContactButton
    w="full"
    variant="accent"
    transition="all 0.3s ease-in"
    _hover={{
      bg: "brand.700",
      boxShadow: "lg",
      color: "white",
      borderColor: "brand.700",
    }}
    {...props}
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
      <Heading
        fontSize={{ base: "xl", md: "2xl" }}
        display={{ base: "none", md: "block" }}
      >
        Interested in this property?
      </Heading>
      <PropertyContactButton
        as="a"
        href="tel:+44 20 7794 6559"
        variant="accent"
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
        <UtilityButton icon={BsShareFill}>Share</UtilityButton>
        <UtilityButton icon={FiHeart}>Save</UtilityButton>
      </HStack>
    </Stack>
  );
}

export default PropertyContactSection;
