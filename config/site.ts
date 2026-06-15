export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Discount Time Machine Wholesale",
  description:
    "A great place to buy time machines at ridiculous prices! Obviously this is example text. Write a description of what your site is / what it does.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Sales",
      href: "/sales_numbers",
    },
    {
      label: "Products",
      href: "/products",
    },
    /*
    {
      label: "Invincible",
      href: "/invincible",
    },
    */
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Marvel",
      href: "/marvel",
    },
    {
      label: "DC",
      href: "/dc",
    },
    /*
    {
      label: "Invincible",
      href: "/invincible",
    },
    */
  ],
  links: {
    instagram: "#",
    facebook: "#",
    twitter: "#",
  },
};
