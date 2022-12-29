import { AiOutlineCheck } from "react-icons/ai";
import { HStack, Icon, Text } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};
export default function Feature({ children }: Props) {
  return (
    <HStack align="center" p={2} spacing={3}>
      <Icon as={AiOutlineCheck} size="2em" color="brand.400" />
      <Text textAlign="left">{children}</Text>
    </HStack>
  );
}
