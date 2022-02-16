/* eslint-disable react/no-unescaped-entities */
import {
  Heading,
  HStack,
  Icon,
  Link,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { CustomLink } from "../CustomLink";

const PrivacyText = ({ children }: { children: ReactNode }) => (
  <Text as="div" fontSize={{ base: "sm", md: "md" }}>
    {children}
  </Text>
);

const PrivacySubHeading = ({ children }: { children: ReactNode }) => (
  <HStack
    align="center"
    justifyContent={{ base: "center", md: "start" }}
    spacing={4}
    pt={6}
  >
    <Icon as={BsArrowRightCircle} fontSize={{ base: "md", md: "lg" }} />
    <Heading fontSize={{ base: "sm", md: "md" }}>{children}</Heading>
  </HStack>
);

export default function PrivacySection() {
  return (
    <VStack
      maxW="6xl"
      mx="auto"
      py={8}
      px={{ base: 5, md: 8 }}
      align="start"
      mb={6}
    >
      <Heading fontSize={{ base: "lg", md: "2xl" }}>
        AA Property's Privacy Policy
      </Heading>
      <PrivacyText>
        Here at AA Property we are committed to protecting your privacy. This
        policy explains how and for what purposes we use the information
        collected about you. Please read this privacy policy carefully. If you
        use our website, our apps or any of our other services, you agree to be
        bound by this policy in respect of the information that we collect about
        you.
      </PrivacyText>
      <PrivacySubHeading> Who we are </PrivacySubHeading>
      <PrivacyText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eum harum,
        animi dolorum eligendi onsectetur adipisicing elit. Hic eum harum, animi
        dolorum eligend!
      </PrivacyText>
      <PrivacySubHeading> Personal information we collect </PrivacySubHeading>
      <PrivacyText>
        When you visit or use our Site, App, or any of our services, you may be
        asked to provide certain information about yourself, including your name
        and your contact details. We may also collect information about how you
        use our services, including your searches, the properties and pages you
        look at, the advertisers or partners you contact and the contents of the
        messages you send to them. Finally, we may also collect information from
        any correspondence that you have with us. Collectively, we refer to this
        as "Your Information".
      </PrivacyText>
      <PrivacySubHeading> How we use your information </PrivacySubHeading>
      <PrivacyText>
        <UnorderedList>
          <ListItem>
            To contact you regarding properties you have expressed an interest
            in
          </ListItem>
          <ListItem>
            To enable us to review, develop and improve the products that we
            offer
          </ListItem>
          <ListItem>To provide opt-in mailings by email and/or post</ListItem>
        </UnorderedList>
      </PrivacyText>
      <PrivacySubHeading>
        Who Do We Pass Personal Information To?
      </PrivacySubHeading>
      <PrivacyText>
        We may provide information about you as follows:
        <br />
        <br />
        <UnorderedList>
          <ListItem>
            Other than as necessary to satisfy your enquiry, we will not provide
            your personal information (i.e. information you supply that
            identifies you) to any third party other than detailed above without
            your consent or unless we are required to do so by law
          </ListItem>
          <ListItem>
            Some general statistical information about the user base, sales
            patterns, traffic volumes and related matters may be passed on to
            reputable third parties but these details will not include
            information personally identifying the individual user.
          </ListItem>
        </UnorderedList>
      </PrivacyText>
      <PrivacySubHeading>Your Use of This Site</PrivacySubHeading>
      <PrivacyText>
        In order that we can monitor and improve the site, we may gather certain
        information about you when you use it, including details of your domain
        name and IP address, operating system, browser, version and the web site
        that you visited prior to our site.
      </PrivacyText>
      <PrivacySubHeading>Cookies</PrivacySubHeading>
      <PrivacyText>
        These are small pieces of information stored by your browser on your
        computer's hard drive. Cookies may be used in conjunction with property
        lists, but will not hold any personal data.
      </PrivacyText>
      <PrivacySubHeading>Other Links</PrivacySubHeading>
      <PrivacyText>
        Please be aware that our site may link to other web sites which may be
        accessed through our site. We are not responsible for the data policies,
        content or security of these linked web sites.
      </PrivacyText>
      <PrivacySubHeading>Our Terms</PrivacySubHeading>
      <PrivacyText>
        {" "}
        Please note that all products are supplied subject to our{" "}
        <CustomLink underline color="brand.400" href="/terms">
          Terms and Conditions.
        </CustomLink>{" "}
      </PrivacyText>
      <PrivacySubHeading>Contact Us</PrivacySubHeading>
      <PrivacyText>
        {" "}
        If you have any comments or queries in connection with our privacy
        policy, please{" "}
        <CustomLink underline color="brand.400" href="/contact">
          contact us.
        </CustomLink>{" "}
      </PrivacyText>
    </VStack>
  );
}
