import {
  Image,
  Button,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
  AspectRatio,
} from "@chakra-ui/react";
import React from "react";
import { CustomLink } from "../CustomLink";

export default function ContactUsSection() {
  return (
    <Flex
      w="full"
      color="white"
      direction={{ base: "column", md: "row" }}
      bg="brand.500"
      align="center"
      maxH={{ base: "auto", md: "350px" }}
    >
      <AspectRatio
        width={{ base: "full", md: "50vw", lg: "40vw" }}
        maxH="350px"
        ratio={4 / 3}
      >
        <Image
          src="/images/moving-in.jpg"
          alt="People moving in"
          objectFit="cover"
        />
      </AspectRatio>

      <Flex
        px={{ base: 4, md: 8 }}
        py={{ base: 8, md: 0 }}
        width={{ base: "full", md: "50vw" }}
        align={{ base: "center", md: "flex-start" }}
        direction="column"
        alignSelf="center"
        textAlign={{ base: "center", md: "start" }}
      >
        <Heading fontSize={{ base: "xl", md: "2xl" }} my={4}>
          Lorem ipsum dolor sit amet consectetur
        </Heading>
        <Text
          fontSize={{ base: "sm", md: "md" }}
          w={{ base: "full", md: "80%" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maxime
          laborum eveniet quaerat aepe maxime r adipisici
        </Text>
        <Button
          as={CustomLink}
          my={6}
          variant="secondary"
          size={useBreakpointValue({ base: "sm", sm: "md" })}
          w={{ base: "80%", md: "auto" }}
          href="/contact"
        >
          Contact Us
        </Button>
      </Flex>
    </Flex>
  );
}
