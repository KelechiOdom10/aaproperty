export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href: string;
}

export interface IntroItem {
  heading: string;
  description: string;
  href: string;
}

export interface Property {
  id: number;
  name: string;
  address: string;
  numOfBeds: number;
  numOfBaths: number;
  size: number;
  price: number;
  image: string;
  tag?: string;
}

export interface MetaSeo {
  title: string;
  description: string;
  image: string;
  keywords: string[];
  author: {
    name: string;
  };
  social: Record<string, string>;
}
