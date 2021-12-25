import { NavItem } from "types";

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Buy",
    href: "/search?type=buy",
    children: [
      {
        label: "Property for sale",
        href: "/search?type=buy",
      },
      {
        label: "New Homes for sale",
        href: "/search?type=buy&property=house",
      },
      {
        label: "Apartments for sale",
        href: "/search?type=buy&property=flat",
      },
    ],
  },
  {
    label: "Rent",
    href: "/search?type=rent",
    children: [
      {
        label: "Property to rent",
        href: "/search?type=rent",
      },
      {
        label: "Studio to rent",
        href: "/search?type=rent&property=studio",
      },
      {
        label: "Apartments to rent",
        href: "/search?type=rent&property=flat",
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
