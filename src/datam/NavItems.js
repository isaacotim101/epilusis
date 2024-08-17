const navItems = [
  {
    id: 1,
    name: "Home",
    href: "/",
    subNavItems: [],
  },
  {
    id: 2,
    name: "About Us",
    href: "/about",
    subNavItems: [
      { id: 1, name: "Our History", href: "/about" },
      { id: 2, name: "Team", href: "/volunteers" },
      { id: 3, name: "Contact", href: "/contact" },
    ],
  },
  {
    id: 3,
    name: "Our Work",
    href: "/stories",
    subNavItems: [
      { id: 1, name: "Programs", href: "/program" },
      { id: 2, name: "Campaigns", href: "/causes" },
      { id: 3, name: "Gallery", href: "/gallery" },
    ],
  },
  {
    id: 3,
    name: "Our Impact",
    href: "/projects",
    subNavItems: [
      { id: 1, name: "Success Stories", href: "/stories" },
      { id: 2, name: "Success Projects", href: "/projects" },
      { id: 3, name: "News Letters", href: "/news" },
    ],
  },
  {
    id: 7,
    name: "Updates",
    href: "/updates",
    subNavItems: [],
  },
  {
    id: 8,
    name: "Educate a child",
    href: "/sponsor",
    subNavItems: [],
  }
  
];

export default navItems;

export const social = [
  { icon: "fa-twitter", link: "" },
  { icon: "fa-facebook-square", link: "" },
];
