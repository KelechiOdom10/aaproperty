/* eslint-disable react/no-unescaped-entities */
import {
  VStack,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Link,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";

const TermsHeading = ({ children }: { children: ReactNode }) => (
  <Heading fontSize={{ base: "md", md: "lg" }} py={2}>
    {children}
  </Heading>
);

const TermsText = ({ children }: { children: ReactNode }) => (
  <Text as="div">{children}</Text>
);

export default function TermsSection() {
  return (
    <VStack
      maxW="6xl"
      mx="auto"
      py={8}
      px={{ base: 5, md: 8 }}
      align="start"
      mb={6}
    >
      <Heading fontSize={{ base: "lg", md: "2xl" }} py={4}>
        AA Property's Terms & Conditions
      </Heading>
      <Heading fontSize={{ base: "md", md: "lg" }} py={2}>
        Terms & Conditions
      </Heading>
      <TermsText>
        Your access to and use of aapropertyuk.com (the "Web site") are subject
        exclusively and strictly to these Terms & Conditions of Use:
      </TermsText>
      <TermsHeading>Copyright</TermsHeading>
      <TermsText>
        All Web site design, text, graphics, the selection and arrangement
        thereof and all software compilations, underlying source code, software
        (including applets) and all other material on this Web site are
        copyright AA Property Services UK LTD and its affiliates or their
        content and technology providers, unless otherwise indicated. All
        trademarks for products we sell are recognized. ALL RIGHTS RESERVED.
        Permission is granted to electronically copy and to print in hard copy
        portions of this Web site for the sole purpose of considering properties
        shown on this web site. Any other use of materials on this Web
        site-including reproduction for purposes other than those noted above,
        modification, distribution, or re-publication-without the prior written
        permission of AA Property Services UK LTD is strictly prohibited.
      </TermsText>
      <TermsHeading>Representation</TermsHeading>
      <TermsText>
        The property particulars have been prepared in good faith to give a fair
        overall view of the property. They are for the guidance of prospective
        purchases or tenants, and do not constitute the whole or part of an
        offer or contract. If there is any point which is of importance to any
        purchaser or tenant please contact AA Property Services UK LTD for
        verification if contemplating travelling some distance to view the
        property.
        <br />
        <br />
        AA Property Services UK LTD cannot guarantee the accuracy of any
        description, dimensions, references to condition, necessary permissions
        for use and occupation. Neither shall these particulars be deemed to be
        a statement that the property is in good structural or general condition
        nor that any appliances, equipment and facilities are in good working
        order. Purchases or tenants must satisfy themselves as to their
        accuracy.
        <br />
        <br />
        No employee of AA Property Services UK LTD (or their joint agents where
        applicable) has any authority to make or give any representation or
        warranty, or enter into any contract whatsoever in relation to this
        property. Rents quoted on this Web site may be subject to VAT.
        <br />
        <br />
        It should not be assumed that the property remains as displayed in the
        photographs. Nor should it be assumed that the contents, furniture and
        furnishings shown in the photographs are to be included in the tenancy
        or sale. AA Property Services UK LTD will not be liable, in negligence
        or otherwise, for any loss arising from the use of these particulars. AA
        Property Services UK LTD Rights AA Property Services UK LTD ("we/us")
        reserve the right to:
        <UnorderedList py={2}>
          <ListItem>
            change or remove (temporarily or permanently) the Web site (or any
            part of it) without notice to you and you confirm that we shall not
            be liable to you for any such change or removal: and/or
          </ListItem>
          <ListItem>
            change these Terms & Conditions of Use at any time, and your
            continued use of the Web site following any change shall be deemed
            to be your acceptance of such change. It is your responsibility to
            check the Terms & Conditions of Use regularly for changes. If you do
            not agree with any change to the Terms & Conditions of Use you must
            immediately stop using the Web site.
          </ListItem>
        </UnorderedList>
      </TermsText>
      <TermsHeading>Third Party Links</TermsHeading>
      <TermsText>
        We may provide links to other web sites or resources from time to time.
        Any such link to other web sites or resources is not an endorsement of
        such web site or resources and you acknowledge and agree that we are not
        responsible for the availability of and content on such web sites or
        resources.
      </TermsText>
      <TermsHeading>Your Warranties</TermsHeading>
      <TermsText>
        {" "}
        You warrant that:
        <UnorderedList py={2}>
          <ListItem>
            you will use the Web site only in accordance with these Terms &
            Conditions of Use and only for lawful purposes and in a lawful
            manner; and
          </ListItem>
          <ListItem>
            all information which you provide to us is true, accurate, current
            and complete in all respects and that you will notify us immediately
            of any changes to such information.
          </ListItem>
        </UnorderedList>
      </TermsText>
      <TermsHeading>Limitation Of Liability </TermsHeading>
      <TermsText>
        {" "}
        The Web site is provided to you on an "as is" and "as available" basis
        without any warranty being given in relation to the Web site including
        (but not limited to) implied warranties of non-infringement,
        compatibility, security, accuracy or any implied warranty arising from
        course of dealing or usage or trade. We make no warranty that the Web
        site will meet your requirements or will be uninterrupted, timely, or
        error-free, that defects will be corrected or that the site or the
        server(s) that makes it available are free of viruses or bugs. We will
        not be responsible or liable to you for any loss of material uploaded or
        transmitted through the Web site We will not be liable in contract,
        tort, negligence, for pre-contract or other representations (other than
        fraudulent or negligent representations) or otherwise out of or in
        connection with these Terms & Conditions of Use for: any economic loss
        (including without limitation loss of revenues, profits, contracts,
        business or anticipated savings); or any special or indirect losses
        whatsoever. Nothing in these Terms & Conditions of Use shall exclude or
        limit liability for death or personal injury resulting from our
        negligence or that of our agents or employees.
      </TermsText>
      <TermsHeading>Indemnity</TermsHeading>
      <TermsText>
        You agree to fully indemnify, defend and hold us, and our officers,
        directors, employees, agents and suppliers, harmless immediately on
        demand, from and against all claims, liability, damages, losses, costs
        and expenses, including legal fees, arising out of any breach of these
        Terms & Conditions of Use by you or other liabilities arising out of
        your use of the Web site.{" "}
      </TermsText>
      <TermsHeading>Severance</TermsHeading>
      <TermsText>
        Each provision of these Terms & Conditions of Use shall be construed
        separately and independently of each other and the validity of any one
        part shall not affect the validity of any other part.{" "}
      </TermsText>
      <TermsHeading>Law</TermsHeading>
      <TermsText>
        These Terms & Conditions of Use shall be governed by the laws of England
        and you agree to submit to the exclusive jurisdiction of the English
        court.
      </TermsText>
      <TermsHeading>Our Details</TermsHeading>
      <TermsText>
        You may contact us in one of the following ways:
        <UnorderedList py={2}>
          <ListItem>
            By email at{" "}
            <Link href="mailto:aa@aapropertyuk.com" color="brand.400">
              {" "}
              aa@aapropertyuk.com{" "}
            </Link>
          </ListItem>
          <ListItem>
            By phone at{" "}
            <Link href="tel:+44 (0)207 794 6559" color="brand.400">
              {" "}
              +44 (0)207 794 6559
            </Link>
          </ListItem>
          <ListItem>
            {" "}
            By post at <br /> 392 Finchley Rd London NW2 2HR
          </ListItem>
          <ListItem>
            By fax at{" "}
            <Link href="tel:+44 (0)207 431 5753" color="brand.400">
              {" "}
              +44 (0)207 431 5753
            </Link>
          </ListItem>
        </UnorderedList>
      </TermsText>
    </VStack>
  );
}
