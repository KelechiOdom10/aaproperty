import { AiOutlineCheck } from "react-icons/ai";
import { HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};
export default function Feature({ children }: Props) {
  return (
    <HStack align="center" p={2} spacing={3}>
      <Icon as={AiOutlineCheck} size="2em" color="brand.400" />
      <Text textAlign="left" fontSize={{ base: "sm", md: "md" }}>
        {children}
      </Text>
    </HStack>
  );
}
