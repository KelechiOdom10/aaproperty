import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
  Icon,
} from "@chakra-ui/react";
import ContactFormDetails from "./ContactFormDetails";
import { AiFillPhone, AiFillMail, AiFillEnvironment } from "react-icons/ai";

export default function ContactForm() {
  return (
    <Flex
      width={{ base: "85%", sm: "90%", md: "85%" }}
      maxW="5xl"
      bg="white"
      mx="auto"
      direction={{ base: "column", md: "row" }}
      align={{ base: "center", md: "normal" }}
      rounded="md"
      borderWidth={1}
      p={4}
      minH="300px"
    >
      <Box
        w={{ base: "100%", md: "35%" }}
        mx="auto"
        bg="brand.500"
        rounded="md"
      >
        <VStack align="start" py={10} px={6} color="white" spacing={4}>
          <Heading fontSize={{ base: "lg", md: "xl" }} textAlign="left">
            Contact Information
          </Heading>
          <Text fontSize={{ base: "sm", md: "md" }} textAlign="left">
            You can reach us via email, phone, or by visiting us at our office.
            Our team is always happy to help with any questions or inquiries you
            may have.
          </Text>
          <VStack align="start" color="white" spacing={6} pt={6}>
            <HStack as="a" href="tel:+44 20 7794 6559">
              <Icon as={AiFillPhone} color="yellow.300" w={5} h={5} />
              <Text fontSize={{ base: "sm", md: "md" }}>020 7794 6559</Text>
            </HStack>
            <HStack as="a" href="mailto:aa@aapropertyuk.com">
              <Icon as={AiFillMail} color="yellow.300" w={5} h={5} />
              <Text fontSize={{ base: "sm", md: "md" }}>
                aa@aapropertyuk.com
              </Text>
            </HStack>
            <HStack>
              <Icon as={AiFillEnvironment} color="yellow.300" w={5} h={5} />
              <Text fontSize={{ base: "sm", md: "md" }} textAlign="left">
                392 Finchley Road, London NW2 2HR
              </Text>
            </HStack>
          </VStack>
        </VStack>
      </Box>
      <Box w={{ base: "100%", md: "65%" }} mx="auto" bg="white" rounded="md">
        <ContactFormDetails />
      </Box>
    </Flex>
  );
}
