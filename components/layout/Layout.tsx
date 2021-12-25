import { ReactNode } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Box, Flex } from "@chakra-ui/react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <Flex direction="column" minHeight="100vh">
      <NavBar />
      <Box flex="1 0 auto">{children}</Box>
      <Footer />
    </Flex>
  );
}

export default Layout;
