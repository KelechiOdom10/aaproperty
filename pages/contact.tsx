import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import ContactForm from "@/components/ContactForm";
import Meta from "@/components/layout/Meta";

export default function contact() {
  return (
    <>
      <Meta meta={{ title: "Contact Us | AA Property UK" }} />
      <Box
        backgroundImage={`linear-gradient( rgba(0,0,0,.7), rgba(0,0,0,.5) ), url(${"/images/hero.jpg"})`}
        position="relative"
        height={{ base: "300px", md: "350px" }}
        backgroundSize="cover"
        backgroundPosition="center"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mb={{ base: "820px", md: "680px", lg: "350px" }}
      >
        <VStack spacing={4} px={4} py={8} textAlign="center">
          <Heading color="white" fontSize={{ base: "2xl", md: "3xl" }} pt={4}>
            Get in Touch
          </Heading>
          <Text
            color="white"
            fontSize={{ base: "sm", md: "lg" }}
            w={{ base: "full", md: "50%" }}
            pb={4}
          >
            Let’s find a home that’s perfect for you
          </Text>
          <Box
            position={{ base: "absolute", md: "relative" }}
            bottom={{ base: "-780px", sm: "-700px", md: "-20px" }}
            right={{ md: 0 }}
            width="100%"
          >
            <ContactForm />
          </Box>
        </VStack>
      </Box>
    </>
  );
}
