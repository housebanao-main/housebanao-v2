import React from "react";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faYoutube,
  faPinterestP,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Wrapper from "./Wrapper";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaMapPin } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-[#222222] relative">
      <Wrapper className="w-full lg:w-[90%] m-auto flex flex-col">
        {/* Footer Links */}
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 mb-8">
          {/* Site Map */}
          <div className="text-white">
            <span className="text-lg font-semibold">Site Map</span>
            <ul className="flex flex-col gap-2 mt-2 text-sm">
              {siteMapMenus.map((menu, index) => (
                <li key={index}>
                  <Link href={menu.link}>{menu.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div className="text-white">
            <span className="text-lg font-semibold">Information</span>
            <ul className="flex flex-col gap-2 mt-2 text-sm">
              {informationMenus.map((menu, index) => (
                <li key={index}>
                  <Link href={menu.link}>{menu.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Social Icons */}
          <div className="text-white">
            <span className="text-lg font-semibold">Our Address</span>
            <div className="flex items-center gap-2 mt-2">
              <FaPhone />
              <a href="tel:+919810432124" className="block text-sm">
                +91 981-0432-124
              </a>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <MdEmail />
              <a
                href="mailto:support@housebanao.com"
                className="block text-sm"
              >
                support@housebanao.com
              </a>
            </div>

            <div className="flex flex-col items-start gap-2 mt-2">
              <p className="text-sm flex items-center gap-2 flex-row">
                <FaMapPin />
                7th Floor, JMD MEGAPOLIS, 746A, Badshahpur Sohna Rd Hwy, Sector
                48, Gurugram, Haryana 122018
              </p>
              <p className="text-sm flex items-center gap-2 flex-row">
                <FaMapPin />
                212, 2nd floor, D mall, Netaji Subhash Place, Pitampura, New
                Delhi 110034
              </p>
              <p className="text-sm flex items-center gap-2 flex-row">
                <FaMapPin />
                5th floor, Iconic Chorenthum, Sector 62, Beside Noida Electronic
                City Metro Station
              </p>
            </div>

            <div className="flex gap-4 mt-4">
              {socialIcons.map(({ icon, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={icon}
                    className="w-5 h-5 text-white bg-[#313131] rounded-[4px] cursor-pointer"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-white text-sm">
          © 2025 Vive HouseBanao Technologies Pvt. Ltd. All rights reserved.
        </div>
      </Wrapper>

      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/919810432124"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <Image
          src="/whatsapp-icon.png"
          alt="WhatsApp"
          width={100}
          height={100}
          className="hover:scale-105 transition-transform"
        />
      </a>
    </footer>
  );
};

const siteMapMenus = [
  { name: "Services", link: "/services" },
  { name: "Projects", link: "/projects" },
  { name: "How it works", link: "/howitworks" },
  { name: "About Us", link: "/aboutus" },
  { name: "Blog", link: "/blog" },
];

const informationMenus = [
  { name: "Terms & Conditions", link: "/terms" },
  { name: "Privacy Policy", link: "/privacy" },
  { name: "Cancellation & Refund Policy", link: "/cancellation-policy" },
];

const socialIcons = [
  {
    icon: faFacebookF,
    url: "https://www.facebook.com/profile.php?id=61556675355596",
  },
  { icon: faInstagram, url: "https://www.instagram.com/house_banao" },
  { icon: faLinkedinIn, url: "https://www.linkedin.com/company/housebanao2/" },
  { icon: faYoutube, url: "https://www.youtube.com/@HouseBanaoo" },
  { icon: faPinterestP, url: "https://in.pinterest.com/house_banao/" },
  { icon: faSquareTwitter, url: "https://x.com/HouseBanao" },
];

export default Footer;
