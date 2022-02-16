import {
  Heading,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  HStack,
  Icon,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { CustomLink } from "../CustomLink";

const AccordionTitle = ({ children }: { children: ReactNode }) => (
  <Flex h="60px" align="center">
    <AccordionButton _expanded={{ bg: "gray.50" }}>
      <Box flex="1" textAlign="left">
        {children}
      </Box>
      <AccordionIcon />
    </AccordionButton>
  </Flex>
);

const IconDocumentItem = ({
  text,
  href,
}: {
  text: ReactNode;
  href: string;
}) => (
  <HStack as={CustomLink} href={href} target="_blank" rel="noreferrer noopener">
    <Icon as={BsFileEarmarkPdf} fontSize={{ base: "md", md: "lg" }} />
    <Text fontSize={{ base: "sm", md: "md" }}>{text}</Text>
  </HStack>
);

export default function PaperworkSection() {
  const { asPath } = useRouter();

  const setDefault = () => {
    const hash = asPath.split("#")[1];
    switch (hash) {
      case "termsOfBusiness":
        return 0;
      case "landlordagreement":
        return 1;
      case "fees":
        return 2;
      case "compliance":
        return 3;
      default:
        return 0;
    }
  };

  return (
    <VStack
      align="start"
      mx={{ base: 0, md: "auto" }}
      py={8}
      px={{ base: 6, md: 8 }}
      maxW="6xl"
      spacing={8}
    >
      <Heading fontSize={{ base: "lg", md: "2xl" }}>
        Important Documents
      </Heading>
      <Accordion w="full" defaultIndex={setDefault()} allowToggle>
        <AccordionItem id="termsOfBusiness">
          <AccordionTitle>Sales Terms of Business</AccordionTitle>
          <AccordionPanel pb={4}>
            <IconDocumentItem
              text="Terms of Business"
              href="https://docs.google.com/viewer?embedded=true&url=http://www.aapropertyuk.com/wp-content/uploads/2015/09/Sales-terms-of-business.pdf"
            />
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem id="landlordagreement">
          <AccordionTitle>Agency Agreement - Landlords</AccordionTitle>
          <AccordionPanel pb={4}>
            <IconDocumentItem
              text="Landlord Agreement"
              href="https://docs.google.com/viewer?embedded=true&url=http://www.aapropertyuk.com/wp-content/uploads/2015/09/Agency-Agreement-Original-2.pdf"
            />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem id="fees">
          <AccordionTitle>Fees</AccordionTitle>
          <AccordionPanel pb={4}>
            <VStack w="full" align="start">
              <IconDocumentItem
                text="Tenant fees- Assured shorthold tenancies V3.4"
                href="http://www.aapropertyuk.com/wp-content/uploads/2016/08/Tenant-fees%E2%80%94Assured-Shorthold-Tenancies-V3.42.pdf"
              />
              <IconDocumentItem
                text="Tenant Fees – Assured Tenancies"
                href="http://www.aapropertyuk.com/wp-content/uploads/2020/09/Tenant-fees%E2%80%94Assured-Tenancies-V3.4.pdf"
              />
              <IconDocumentItem
                text="Landlord fee Schedule V3.4"
                href="http://www.aapropertyuk.com/wp-content/uploads/2020/09/Landlord-fees-schedule-V3.4.pdf"
              />
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem id="compliance">
          <AccordionTitle>Compliance</AccordionTitle>
          <AccordionPanel pb={4}>
            <VStack w="full" align="start">
              <IconDocumentItem
                text="Client Money protection certificate"
                href="http://www.aapropertyuk.com/wp-content/uploads/2016/08/Client-Money-Protection-Certificate.pdf"
              />
              <IconDocumentItem
                text="Conduct and membership rules"
                href="http://www.aapropertyuk.com/wp-content/uploads/2016/08/Conduct-Membership-Rules.pdf"
              />
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </VStack>
  );
}
