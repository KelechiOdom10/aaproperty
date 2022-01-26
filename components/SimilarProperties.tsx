import { Box, Heading, HStack } from "@chakra-ui/react";
import { definitions } from "types/supabase";
import PropertyListing from "./Propertylisting";

function SimilarProperties({
  similarProperties,
}: {
  similarProperties: definitions["property"][];
}) {
  return (
    <Box>
      <Box
        as="section"
        rounded="md"
        bg="gray.50"
        mx={{ base: 2, md: "auto" }}
        mb={12}
        px={8}
        py={8}
        maxW="7xl"
      >
        <Heading fontSize={{ base: "xl", md: "2xl" }}>
          Similar Properties
        </Heading>

        <Box my={4}>
          <HStack
            spacing={{ base: 4, md: 10 }}
            justifyContent="flex-start"
            overflowX="auto"
            width="100%"
            flexWrap="nowrap"
          >
            {similarProperties.map((property) => (
              <PropertyListing key={property.id} item={property} />
            ))}
          </HStack>
        </Box>
      </Box>
    </Box>
  );
}

export default SimilarProperties;
