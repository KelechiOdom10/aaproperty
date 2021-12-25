import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

export default function ContactFormDetails() {
  return (
    <Box my={2} mx={{ base: 0, md: 4 }} textAlign="left">
      <form>
        <VStack spacing={3} p={4}>
          <Stack
            direction={{ base: "column", md: "row" }}
            w="full"
            spacing={3}
            align="center"
            justify="space-between"
          >
            <FormControl id="firstName" isRequired>
              <FormLabel fontWeight="bold">First Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter first name"
                fontSize={{ base: "sm", md: "md" }}
              />
            </FormControl>
            <FormControl id="lastName" isRequired>
              <FormLabel fontWeight="bold">Last Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter last name"
                fontSize={{ base: "sm", md: "md" }}
              />
            </FormControl>
          </Stack>
          <FormControl id="email" isRequired>
            <FormLabel fontSize={{ base: "sm", md: "md" }} fontWeight="bold">
              Email address
            </FormLabel>
            <Input
              type="email"
              placeholder="Enter your email address"
              fontSize={{ base: "sm", md: "md" }}
            />
          </FormControl>
          <FormControl id="contactMessage" isRequired>
            <FormLabel fontSize={{ base: "sm", md: "md" }} fontWeight="bold">
              Message
            </FormLabel>
            <Textarea
              resize="none"
              height="100px"
              variant="filled"
              placeholder="Write your message here"
              size="md"
            />
          </FormControl>

          <Button
            mt={4}
            type="submit"
            bg="brand.600"
            color="white"
            rounded="sm"
            alignSelf="start"
            _hover={{ bg: "brand.600", color: "white" }}
          >
            Send Message
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
