import { ReactNode } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Box, Flex } from "@chakra-ui/react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <Flex direction="column" minHeight="100vh">
      <NavBar />
      <Box as="main" flex="1 0 auto" minH="800px">
        {children}
      </Box>
      <Footer />
    </Flex>
  );
}

export default Layout;
