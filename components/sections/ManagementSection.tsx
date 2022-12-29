import { Heading, Link, VStack, Text } from "@chakra-ui/react";
import { CustomLink } from "../CustomLink";

export default function ManagementSection() {
  return (
    <VStack
      id="management"
      spacing={4}
      align={{ base: "center", md: "start" }}
      my={6}
    >
      <Heading fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}>
        Management
      </Heading>
      <Text textAlign={{ base: "center", md: "start" }} px={3}>
        AA property services UK LTD provide a full property management service
        where professional prospective tenants are fully vetted by a reputable
        referencing service. We also cater for employees of various blue chip
        companies looking for decent accommodation. Inventories and Tenancy
        Agreements are prepared on your behalf. Rents are collected either on
        monthly, quarterly, or half yearly basis together with regular
        inspections on your property.For further information kindly refer to our
        agency terms and conditions.
      </Text>
      <Link
        as={CustomLink}
        color="brand.400"
        textDecoration="underline"
        href="/images/management.jpeg"
        isExternal
      >
        Learn More
      </Link>
    </VStack>
  );
}
