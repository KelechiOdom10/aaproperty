import { ReactNode } from "react";
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Image,
  IconButton,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { FOOTER_ITEMS } from "@/data/footerItems";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo-transparent.png"
        alt="AA Property Logo"
        width="80px"
      />
    </Link>
  );
};

const SocialButton = ({
  icon,
  label,
  href,
}: {
  icon: any;
  label: string;
  href: string;
}) => {
  return (
    <IconButton
      aria-label={label}
      variant="ghost"
      as="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      rounded="full"
      icon={<Icon as={icon} w={8} h={8} />}
    />
  );
};
const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="gray.50" color="gray.700" as="footer">
      <Container as={Stack} maxW="6xl" py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Logo />
            <Text fontSize="sm">
              © {new Date().getFullYear()} AA Property Ltd. All rights reserved
            </Text>
            <Stack direction="row" spacing={6}>
              <SocialButton
                label="Twitter"
                href="https://twitter.com/aapropertyukltd"
                icon={FaTwitter}
              />
              <SocialButton
                label="Instagram"
                href="https://www.instagram.com/aapropertyuk"
                icon={FaInstagram}
              />
              <SocialButton
                label="Facebook"
                href="https://www.facebook.com/aapropertyuk/?sk=allactivity&privacy_source=activity_log&log_filter=cluster_114"
                icon={FaFacebook}
              />
            </Stack>
          </Stack>

          {FOOTER_ITEMS.map((item) => {
            return (
              <Stack align="flex-start" key={item.header}>
                <ListHeader>{item.header}</ListHeader>
                {item.children.map((linkItem) => (
                  <Link
                    key={linkItem.label}
                    fontSize={{ base: "sm", md: "md" }}
                    href={linkItem.href}
                    isExternal={item.header === "Follow Us"}
                  >
                    {linkItem.label}
                  </Link>
                ))}
              </Stack>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
