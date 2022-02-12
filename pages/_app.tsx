import { AppProps } from "next/app";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { theme } from "@/utils/theme";
import Layout from "@/components/layout/Layout";
import NextNProgress from "nextjs-progressbar";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/swiper.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider
        options={theme.config}
        value={theme.config.initialColorMode}
      >
        <NextNProgress color="#1842a1" />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
