import { Flex, Image } from "@chakra-ui/react";
import React from "react";

export default function CompanySection() {
  return (
    <Flex justifyContent="center" p={{ base: 8, md: 10 }} flexWrap="wrap">
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
        src="https://connectproperty.com/wp-content/uploads/2020/09/connect-property-accreditations-arla.png"
        alt="Arla Logo"
        mx={2}
        mt={2}
        w={{ base: "120px", md: "150px" }}
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
        src="https://www.tenancydepositscheme.com/wp-content/uploads/2017/07/TDS-Member-Logo-Transparent-Large.png"
        alt="TDS Logo"
        mx={2}
        mt={2}
        w={{ base: "80px", md: "110px" }}
        objectFit="contain"
      />
    </Flex>
  );
}
