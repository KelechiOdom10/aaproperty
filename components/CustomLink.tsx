import NextLink from "next/link";
import { Link, LinkProps } from "@chakra-ui/react";
import React, { ReactChild, ReactNode } from "react";

type Props = {
  href: string;
  children: ReactChild | ReactNode;
  underline?: boolean;
};

// eslint-disable-next-line react/display-name
export const CustomLink = React.forwardRef<
  HTMLAnchorElement,
  Props & LinkProps
>(({ href, children, underline, ...props }, ref) => {
  return (
    <NextLink href={href} passHref>
      <Link
        ref={ref}
        {...props}
        _hover={{
          textDecor: `${underline ? "underline" : "none"}`,
        }}
        _focus={{ border: "none" }}
      >
        {children}
      </Link>
    </NextLink>
  );
});
