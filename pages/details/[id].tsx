import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import PropertyDetails from "@/components/PropertyDetails";
import { supabase } from "@/utils/supabaseClient";
import { GetStaticPaths, GetStaticProps } from "next";
import { definitions } from "types/supabase";
import SimilarProperties from "@/components/SimilarProperties";
import PropertyContactSection from "@/components/sections/PropertyContactSection";

type Props = {
  property: definitions["property"];
  similarProperties: definitions["property"][];
};

function DetailPage({ property, similarProperties }: Props) {
  return (
    <Box>
      <Flex maxW="7xl" mx="auto" mb={20}>
        <Grid
          position="relative"
          templateColumns="repeat(6, 1fr)"
          gap={6}
          mt={12}
          mx={{ base: 4, md: 4, lg: 6 }}
        >
          <GridItem colSpan={{ base: 6, md: 4 }}>
            <PropertyDetails property={property} />
          </GridItem>
          <GridItem
            colSpan={{ base: 6, md: 2 }}
            position={{ base: "fixed", md: "static" }}
            zIndex={{ base: 6, md: 3 }}
            bottom={{ base: 0, md: undefined }}
            left={0}
            right={0}
          >
            <PropertyContactSection property={property} />
          </GridItem>
        </Grid>
      </Flex>
      <SimilarProperties similarProperties={similarProperties} />
    </Box>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: properties } = await supabase
    .from<definitions["property"]>("property")
    .select("id");
  const paths = properties?.map((property) => ({
    params: { id: property.id },
  }));

  return { paths: paths || [], fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data: property } = await supabase
    .from<definitions["property"]>("property")
    .select("*")
    .eq("id", params?.id)
    .maybeSingle();

  const { data: similarProperties } = await supabase
    .from<definitions["property"]>("property")
    .select("*")
    .eq("purpose", property?.purpose)
    .not("id", "eq", property?.id)
    .limit(4);

  return { props: { property, similarProperties } };
};

export default DetailPage;
