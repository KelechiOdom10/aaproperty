import { NavItem } from "types";

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Buy",
    href: "/search?purpose=buy",
    children: [
      {
        label: "Property for sale",
        href: "/search?purpose=buy",
      },
      {
        label: "New Homes for sale",
        href: "/search?purpose=buy&type=house",
      },
      {
        label: "Flats for sale",
        href: "/search?purpose=buy&type=flat",
      },
    ],
  },
  {
    label: "Rent",
    href: "/search?purpose=rent",
    children: [
      {
        label: "Property to rent",
        href: "/search?purpose=rent",
      },
      {
        label: "Studio to rent",
        href: "/search?purpose=rent&type=studio",
      },
      {
        label: "Flats to rent",
        href: "/search?purpose=rent&type=flat",
      },
    ],
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Valuation & Consultancy",
        href: "/services#valuation-and-consultancy",
      },
      {
        label: "Management",
        href: "/services#management",
      },
    ],
  },
  {
    label: "Paperwork",
    href: "/paperwork",
    children: [
      {
        label: "Sales terms of business",
        href: "/paperwork#termsofbusiness",
      },
      {
        label: "Agency Agreement Landlords",
        href: "/paperwork#landlordagreement",
      },
      {
        label: "Fees",
        href: "/paperwork#fees",
      },
      {
        label: "Compliance",
        href: "/paperwork#compliance",
      },
    ],
  },
];
