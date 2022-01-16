import { AiOutlineCheck } from "react-icons/ai";
import { HStack, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};
export default function Feature({ children }: Props) {
  return (
    <HStack align="center" p={2} spacing={3}>
      <AiOutlineCheck />
      <Text
        textAlign={{ base: "center", md: "start" }}
        fontSize={{ base: "sm", md: "md" }}
      >
        {children}
      </Text>
    </HStack>
  );
}