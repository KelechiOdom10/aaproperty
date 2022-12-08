import SearchForm from "@/components/SearchForm";
import SearchResults from "@/components/SearchResults";
import { supabase } from "@/utils/supabaseClient";
import { Flex, Box } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import React from "react";
import { definitions } from "types/supabase";

function searchPage({
  properties,
}: {
  properties: definitions["property"][];
  purpose: "buy" | "rent";
}) {
  return (
    <Flex mx={{ base: 4, md: "auto" }} maxW="6xl">
      <Box
        w={{ base: "full", md: "30%" }}
        position="relative"
        display={{ base: "none", md: "block" }}
      >
        <SearchForm
          borderWidth={1}
          borderColor="gray.200"
          rounded="md"
          position="sticky"
          top={20}
          my={8}
          mx="auto"
        />
      </Box>
      <Box w={{ base: "full", md: "70%" }}>
        <SearchResults properties={properties} />
      </Box>
    </Flex>
  );
}

export default searchPage;

export const getServerSideProps: GetServerSideProps = async ({
  query,
  res,
}) => {
  res.setHeader("Cache-Control", `s-maxage=172800, stale-while-revalidate`);

  const purpose = query.purpose || "buy";
  const location = query.location as string;
  const type = query.type as string;
  const minPrice = query.minPrice || 0;
  const maxPrice = query.maxPrice || 1000000;
  const minRooms = query.minRooms || 0;
  const minBaths = query.minBaths || 0;

  let searchQuery = supabase
    .from<definitions["property"]>("property")
    .select("*")
    .eq("purpose", purpose)
    .gte("price", minPrice)
    .lte("price", maxPrice)
    .gte("bedrooms", minRooms)
    .gte("bathrooms", minBaths);

  if (type && type !== "") {
    searchQuery = searchQuery.textSearch("propertyType", type, {
      config: "english",
    });
  }

  if (location && location !== "") {
    searchQuery = searchQuery.textSearch("city", location, {
      config: "english",
    });
  }

  const { data: properties } = await searchQuery;

  return {
    props: {
      properties: properties || [],
    },
  };
};
