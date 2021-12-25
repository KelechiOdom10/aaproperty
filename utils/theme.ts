import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  fonts: {
    heading: "'Open Sans', sans-serif",
    body: "'Open Sans', sans-serif",
    mono: "Menlo, monospace",
  },
  colors: {
    brand: {
      10: "#eceff6",
      50: "#d9e0ef",
      100: "#d1d9ec",
      200: "#b2c0e0",
      300: "#8ca1d0",
      400: "#6581c0",
      500: "#3e62b1",
      600: "#1842a1",
      700: "#143786",
      800: "##102c6b",
      900: "#0c2151",
    },
    primary: {
      50: "#ffe3e3",
      100: "#ffc7c7",
      200: "#ffabab",
      300: "#ff8e8e",
      400: "#ff7272",
      500: "#ff5656",
      600: "#FF4F4F",
      700: "#aa3939",
      800: "#802b2b",
      900: "#551d1d",
    },
    gray: {
      50: "#F8F8F9",
    },
  },
  config,
});
