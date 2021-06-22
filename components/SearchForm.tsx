import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import React from "react";

export default function SearchForm() {
  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box my={4} textAlign="left">
        <form>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="test@test.com" />
          </FormControl>
          <FormControl mt={6}>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="*******" />
          </FormControl>
          <Button width="full" mt={4} type="submit">
            Sign In
          </Button>
        </form>
      </Box>
    </Flex>
  );
}
