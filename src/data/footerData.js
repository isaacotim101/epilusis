import bg from "@/images/backgrounds/footer-bg.jpg";
import footerImage from "@/images/resources/footer-logo.jpg";
import { contact } from "./contactData";

const footerData = {
  ...contact,
  link: "Epilusis",
  copyrightYear: new Date().getFullYear(),
  about:
    "To minister to people God's Truth and Love so that they can be transformed in evry area of their lives.",
  bottomLogo: footerImage.src,
  footerBg: bg.src,
  social: [
    {
      id: 1,
      href: "https://www.youtube.com/channel/UCk080HPi00JgHJZUPE589Wg",
      icon: "fa-youtube"
    },
    {
      id: 2,
      href: "https://www.facebook.com/epilusisminstry",
      icon: "fa-facebook-square"
    },
  ],
  exploreList: [
    {
      id: 1,
      href: "#",
      title: "Donate"
    },
    {
      id: 2,
      href: "#",
      title: "Campaigns"
    },
    {
      id: 3,
      href: "#",
      title: "Fundraise"
    },
    {
      id: 4,
      href: "#",
      title: "Volunteers"
    },
    {
      id: 5,
      href: "#",
      title: "Sponsors"
    },
    {
      id: 6,
      href: "#",
      title: "Fundraising"
    },
    {
      id: 7,
      href: "#",
      title: "Contact"
    },
    {
      id: 8,
      href: "#",
      title: "Help"
    },
    {
      id: 9,
      href: "#",
      title: "Faqs"
    }
  ]
};

export default footerData;
