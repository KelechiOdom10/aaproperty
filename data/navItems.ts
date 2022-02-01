import { NavItem } from "types";

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/",
  },
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
        label: "Apartments for sale",
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
        label: "Apartments to rent",
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
        href: "#",
      },
      {
        label: "Management",
        href: "#",
      },
      {
        label: "Sales terms of business",
        href: "#",
      },
      {
        label: "Agency Agreement Landlords",
        href: "#",
      },
      {
        label: "Fees",
        href: "#",
      },
    ],
  },
];
