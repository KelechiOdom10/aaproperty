import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { parse } from "querystring";
import React, { useEffect, useState } from "react";

export default function ContactFormDetails() {
  const router = useRouter();
  const { asPath } = router;

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const { firstName, lastName, email, subject, message } = values;

  useEffect(() => {
    const query = parse(asPath.substr(asPath.indexOf("?") + 1));
    const subject: string = query.subject as string;
    if (subject) {
      setValues({ ...values, subject });
    }
  }, [asPath]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <Box my={2} mx={{ base: 0, md: 4 }} textAlign="left">
      <form>
        <VStack spacing={4} p={4}>
          <Stack
            direction={{ base: "column", md: "row" }}
            w="full"
            spacing={3}
            align="center"
            justify="space-between"
          >
            <FormControl id="firstName" isRequired>
              <FormLabel fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
                First Name
              </FormLabel>
              <Input
                name="firstName"
                value={firstName}
                onChange={handleChange}
                type="text"
                placeholder="Enter first name"
                fontSize={{ base: "sm", md: "md" }}
              />
            </FormControl>
            <FormControl id="lastName" isRequired>
              <FormLabel fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
                Last Name
              </FormLabel>
              <Input
                name="lastName"
                value={lastName}
                onChange={handleChange}
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
              name="email"
              value={email}
              onChange={handleChange}
              type="email"
              placeholder="Enter your email address"
              fontSize={{ base: "sm", md: "md" }}
            />
          </FormControl>
          <FormControl id="subject">
            <FormLabel fontSize={{ base: "sm", md: "md" }} fontWeight="bold">
              Subject
            </FormLabel>
            <Input
              name="subject"
              value={subject}
              onChange={handleChange}
              type="text"
              placeholder="Enter reason for contact"
              fontSize={{ base: "sm", md: "md" }}
            />
          </FormControl>
          <FormControl id="contactMessage" isRequired>
            <FormLabel fontSize={{ base: "sm", md: "md" }} fontWeight="bold">
              Message
            </FormLabel>
            <Textarea
              name="message"
              value={message}
              onChange={handleChange}
              fontSize={{ base: "sm", md: "md" }}
              resize="none"
              height="100px"
              variant="filled"
              placeholder="Please include any useful details, i.e. current status, availability for viewings, etc."
              size="md"
            />
          </FormControl>

          <Button
            mt={4}
            type="submit"
            variant="primary"
            rounded="sm"
            alignSelf="start"
          >
            Send Message
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
