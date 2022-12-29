import { CustomLink } from "@/components/CustomLink";
import { Flex, VStack, Text, Stack, Button } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Flex
      w={"full"}
      minH="800px"
      backgroundImage={`linear-gradient( rgba(0,0,0,.7), rgba(0,0,0,.5) ), url(${"/images/background.jpeg"})`}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={{ base: 4, md: 8 }}
        // bgGradient={"linear(to-r, blackAlpha.600, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={{ base: "3xl", md: "4xl" }}
          >
            404 | Not Found
          </Text>
          <Text
            color={"white"}
            fontWeight="semibold"
            fontSize={{ base: "md", md: "lg" }}
            lineHeight={1.5}
          >
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Text>
          <Stack direction={"row"}>
            <CustomLink variant="default" href="/" size="md" mt="xl">
              <Button variant="primary" size="lg">
                Get back to home page
              </Button>
            </CustomLink>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default NotFound;
