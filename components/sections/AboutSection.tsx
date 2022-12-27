import { Box, Divider, Text, VStack } from "@chakra-ui/react";

export default function AboutSection() {
  return (
    <Box mb={16}>
      <Box maxW="3xl" mx="auto">
        <Box my={8} width={{ base: "90%", md: "2xl" }} mx="auto">
          <Text as="h3" fontSize={{ base: "lg", md: "2xl" }} textAlign="center">
            Welcome to AA Property Services UK Ltd, a leading real estate
            company serving Central and North-west London. We are a limited
            liability company registered in England and have several years of
            experience in sales, lettings, and property management.
          </Text>
        </Box>
        <Divider color="gray.800" />
        <VStack
          align="center"
          my={8}
          w="90%"
          spacing={6}
          mx={{ base: 4, md: "auto" }}
          pl={{ base: 4, md: 0 }}
        >
          <Text fontSize={{ base: "md", md: "lg" }}>
            Our team is dedicated to providing top-notch accommodation and
            property-related services to meet the needs of each and every one of
            our clients.
          </Text>
          <Text fontSize={{ base: "md", md: "lg" }}>
            Our company specializes in providing centrally located apartments
            that are well appointed and feature functional and effective central
            heating, laundry service, and self-catering equipment. We understand
            the importance of finding a comfortable and convenient place to call
            home, which is why we take great care in selecting only the best
            properties for our clients.
          </Text>
          <Text fontSize={{ base: "md", md: "lg" }}>
            Our website is designed to make it easy for you to buy, rent, sell,
            and get a valuation for properties through us. Our experienced team
            is here to assist you every step of the way, from finding the
            perfect property to negotiating the best deal. With AA Property
            Services UK Ltd, you can trust that you are in good hands when it
            comes to all of your real estate needs.
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}
