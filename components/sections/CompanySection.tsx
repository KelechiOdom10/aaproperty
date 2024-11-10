import { Flex, Image } from "@chakra-ui/react";

export default function CompanySection() {
  return (
    <Flex
      justifyContent="center"
      p={{ base: 8, md: 10 }}
      flexWrap="wrap"
      gap={6}
    >
      <Image
        src="https://www.house-builder.co.uk/media/images/ZOOPLA_NO_TAG_PURPLE_LOGO_PRINT_1_1.max-570x410.png"
        alt="Zoopla Logo"
        mt={2}
        mx={2}
        w={{ base: "110px", md: "140px" }}
        objectFit="contain"
      />
      <Image
        src="https://cdn.worldvectorlogo.com/logos/the-property-ombudsman.svg"
        alt="The Property Obudsman Logo"
        w={{ base: "110px", md: "140px" }}
        mt={2}
        mx={2}
        objectFit="contain"
      />
      <Image
        src="https://mr1.homeflow-assets.co.uk/files/site_asset/image/3245/5886/_x_/ARLA_20Logo_280_08.jpg"
        alt="Arla Logo"
        mx={2}
        mt={2}
        w={{ base: "60px", md: "80px" }}
        objectFit="contain"
      />
      <Image
        src="https://en-academic.com/pictures/enwiki/78/National_Association_of_Estate_Agents.png"
        alt="NAEA Logo"
        mx={2}
        mt={2}
        w={{ base: "120px", md: "160px" }}
        objectFit="contain"
      />
      <Image
        src="https://www.lambertandfoster.co.uk/wp-content/uploads/2020/04/TDS.png"
        alt="TDS Logo"
        mx={2}
        mt={2}
        w={{ base: "100px", md: "130px" }}
        objectFit="contain"
      />
    </Flex>
  );
}
