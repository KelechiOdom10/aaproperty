import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useDisclosure,
} from "@chakra-ui/react";
import { Image } from "@/components/Image";
import { NavItem } from "types";
import { NAV_ITEMS } from "@/data/navItems";
import {
  BiPhone,
  BiX,
  BiMenu,
  BiChevronDown,
  BiChevronRight,
} from "react-icons/bi";
import { useState } from "react";
import { CustomLink } from "../CustomLink";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onToggle = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Box
      as="nav"
      position="sticky"
      boxShadow="md"
      top="0"
      zIndex={6}
      bg="white"
    >
      <Flex
        color="gray.600"
        h="60px"
        mx="auto"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor="gray.200"
        align={"center"}
        justify="space-between"
        maxW="8xl"
      >
        <Flex justify={{ base: "center", md: "start" }} align="center">
          <CustomLink href="/">
            <Image
              src="/images/logo.png"
              priority={true}
              alt="AA Property Logo"
              width="61px"
              height="60px"
            />
          </CustomLink>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={{ base: 1, md: 6 }}
          align="center"
        >
          <IconButton
            as={CustomLink}
            href="tel:+44 20 7794 6559"
            display={{ base: "flex", md: "none" }}
            icon={<Icon as={BiPhone} w={5} h={5} />}
            variant={"ghost"}
            aria-label={"Call AA Property"}
            color="black"
          />
          <Flex ml={{ base: -2 }} display={{ base: "flex", md: "none" }}>
            <IconButton
              onClick={onToggle}
              icon={
                isMenuOpen ? (
                  <Icon as={BiX} w={6} h={6} />
                ) : (
                  <Icon as={BiMenu} w={6} h={6} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
              color="black"
            />
          </Flex>
          <Button
            as={CustomLink}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            variant="primary"
            href="/contact"
          >
            Contact Us
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isMenuOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <CustomLink
                p={2}
                href={navItem.href}
                fontSize={"sm"}
                fontWeight={600}
                color="gray.600"
                variant="primary"
              >
                {navItem.label}
              </CustomLink>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg="white"
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href }: NavItem) => {
  return (
    <CustomLink href={href} role={"group"} display={"block"} rounded={"md"}>
      <Stack
        direction={"row"}
        align={"center"}
        p={2}
        _hover={{ bg: "orange.50" }}
      >
        <Text transition={"all .3s ease"} _groupHover={{ color: "orange.500" }}>
          {label}
        </Text>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"orange.500"} w={5} h={5} as={BiChevronRight} />
        </Flex>
      </Stack>
    </CustomLink>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg="white"
      p={4}
      display={{ md: "none" }}
      minH="100vh"
      position="fixed"
      left={0}
      top="60px"
      width="100%"
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex py={2} justify={"space-between"} align={"center"}>
        <Text
          as={CustomLink}
          fontWeight={600}
          color="gray.600"
          href={href ?? "#"}
          _hover={{
            textDecoration: "none",
          }}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={BiChevronDown}
            transition="all .25s ease-in-out"
            transform={isOpen ? "rotate(180deg)" : ""}
            cursor="pointer"
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle="solid"
          borderColor="gray.200"
          align="start"
        >
          {children &&
            children.map((child) => (
              <CustomLink key={child.label} py={2} href={child.href}>
                {child.label}
              </CustomLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
