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
import React, { ReactNode, useEffect, useState } from "react";
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
  const { asPath, events } = useRouter();
  const documents = [
    "termsofbusiness",
    "landlordagreement",
    "fees",
    "compliance",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const hash = asPath.substr(asPath.indexOf("#") + 1);
    setIndex(hash ? documents.indexOf(hash) : 0);

    const setDefaultIndex = (url: string) => {
      const hash = url.split("#")[1];
      switch (hash) {
        case "termsofbusiness":
          setIndex(0);
          break;
        case "landlordagreement":
          setIndex(1);
          break;
        case "fees":
          setIndex(2);
          break;
        case "compliance":
          setIndex(3);
          break;
        default:
          setIndex(0);
          break;
      }
    };

    events.on("hashChangeStart", setDefaultIndex);
    console.log(index);

    return () => {
      events.off("hashChangeStart", () => {});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asPath, events]);

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
      <Accordion w="full" index={index} allowToggle>
        <AccordionItem id="termsOfBusiness" onClick={() => setIndex(0)}>
          <AccordionTitle>Sales Terms of Business</AccordionTitle>
          <AccordionPanel pb={4}>
            <IconDocumentItem
              text="Terms of Business"
              href="https://docs.google.com/viewer?embedded=true&url=http://www.aapropertyuk.com/wp-content/uploads/2015/09/Sales-terms-of-business.pdf"
            />
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem id="landlordagreement" onClick={() => setIndex(1)}>
          <AccordionTitle>Agency Agreement - Landlords</AccordionTitle>
          <AccordionPanel pb={4}>
            <IconDocumentItem
              text="Landlord Agreement"
              href="https://docs.google.com/viewer?embedded=true&url=http://www.aapropertyuk.com/wp-content/uploads/2015/09/Agency-Agreement-Original-2.pdf"
            />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem id="fees" onClick={() => setIndex(2)}>
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
        <AccordionItem id="compliance" onClick={() => setIndex(3)}>
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
