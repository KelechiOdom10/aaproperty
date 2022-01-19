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
  styles: {
    global: {
      body: {
        fontSize: "1em",

        MozOsxFontSmoothing: "grayscale",
        WebkitFontSmoothing: "antialiased",
        textRendering: "optimizeLegibility",
      },
      html: {
        scrollBehavior: "smooth",
      },
    },
  },
  colors: {
    brand: {
      10: "#eceff6",
      50: "#d9e0ef",
      100: "#5380e5",
      200: "#3d70e2",
      300: "#275fdf",
      400: "#1f54cd",
      500: "#1842a1",
      600: "#113075",
      700: "#0e275e",
      800: "#0b1e48",
      900: "#040b1c",
    },
    gray: {
      50: "#F8F8F9",
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
      variants: {
        primary: {
          color: "white",
          bg: "brand.500",
          rounded: "sm",
          fontSize: ["sm", "sm", "md", "md"],
          _disabled: {
            opacity: 0.6,
          },
          _hover: {
            _disabled: {
              bg: "brand.500",
              opacity: 0.7,
            },
          },
        },
        secondary: {
          color: "brand.500",
          fontSize: ["sm", "sm", "md", "md"],
          bg: "white",
          borderColor: "none",
        },
      },
    },
    Link: {
      baseStyle: {
        color: "gray.600",
        _focus: { boxShadow: "none" },
      },
      variants: {
        primary: {
          _hover: {
            textDecoration: "none",
            color: "gray.800",
          },
        },
      },
    },
  },
  config,
});
