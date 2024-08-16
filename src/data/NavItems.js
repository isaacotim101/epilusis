const navItems = [
  {
    id: 1,
    name: "Home",
    href: "/",
    subNavItems: [],
  },
  {
    id: 2,
    name: "About",
    href: "/about",
    subNavItems: [
      { id: 1, name: "Teams", href: "/volunteers" },
      { id: 2, name: "Gallery", href: "/gallery" },
      //{ id: 3, name: "Become a Volunteer", href: "/become-volunteer" },
      { id: 4, name: "Success Stories", href: "/stories"},
    ],
  },
  {
    id: 3,
    name: "Our Projects",
    href: "#",
    subNavItems: [ {id: 1, name: "Successful Projects", href: "/projects"},
    {id:2, name:"Campaigns & Fundraising", href: "/causes"},
    ],
  },
  {
    id: 4,
    name: "News Letters",
    href: "/news",
    subNavItems: [],
  },
  {
    id: 6,
    name: "Careers",
    href:"#",
    subNavItems: [],
  },
  {
    id: 5,
    name: "Contact",
    href: "/contact",
    subNavItems: [],
  },
  
];

export default navItems;

export const social = [
  { icon: "fa-twitter", link: "" },
  { icon: "fa-facebook-square", link: "" },
  { icon: "fa-dribbble", link: "" },
  { icon: "fa-instagram", link: "" },
];