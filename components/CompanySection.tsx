import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";

export default function CompanySection() {
  return (
    <Box bg="gray.50" minH={50}>
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
          alt="Zoopla Logo"
          w={{ base: "110px", md: "140px" }}
          mt={2}
          mx={2}
          objectFit="contain"
        />
        <Image
          src="https://connectproperty.com/wp-content/uploads/2020/09/connect-property-accreditations-arla.png"
          alt="Zoopla Logo"
          mx={2}
          mt={2}
          w={{ base: "120px", md: "150px" }}
          objectFit="contain"
        />
        <Image
          src="https://www.bridges.co.uk/wp-content/uploads/2016/08/logo_naea.svg"
          alt="Zoopla Logo"
          mx={2}
          mt={2}
          w={{ base: "100px", md: "130px" }}
          objectFit="contain"
        />
        <Image
          src="https://www.tenancydepositscheme.com/wp-content/uploads/2017/07/TDS-Member-Logo-Transparent-Large.png"
          alt="Zoopla Logo"
          mx={2}
          mt={2}
          w={{ base: "80px", md: "110px" }}
          objectFit="contain"
        />
      </Flex>
    </Box>
  );
}
