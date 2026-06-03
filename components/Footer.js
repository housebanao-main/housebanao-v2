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
    <footer className="w-full bg-[#0a0a0a] border-t border-white/10">
      <Wrapper className="w-full lg:w-[90%] mx-auto">
        {/* Top row — logo + tagline */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-12 border-b border-white/10">
          <Link href="/">
            <Image src="/logo/1-crop.svg" alt="HouseBanao" width={120} height={36} />
          </Link>
          <p className="text-white/40 text-sm max-w-sm">
            Premium home construction and interior design — transforming spaces across Delhi NCR.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-14 border-b border-white/10" data-aos="fade-up">
          {/* Site Map */}
          <div>
            <span className="text-[#c9a07a] text-xs font-semibold tracking-[3px] uppercase mb-6 block">
              Site Map
            </span>
            <ul className="flex flex-col gap-3">
              {siteMapMenus.map((menu, index) => (
                <li key={index}>
                  <Link
                    href={menu.link}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <span className="text-[#c9a07a] text-xs font-semibold tracking-[3px] uppercase mb-6 block">
              Information
            </span>
            <ul className="flex flex-col gap-3">
              {informationMenus.map((menu, index) => (
                <li key={index}>
                  <Link
                    href={menu.link}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <span className="text-[#c9a07a] text-xs font-semibold tracking-[3px] uppercase mb-6 block">
              Contact Us
            </span>
            <div className="flex flex-col gap-4">
              <a href="tel:+919810432124" className="flex items-start gap-3 text-white/60 hover:text-white text-sm transition-colors">
                <FaPhone className="mt-0.5 shrink-0 text-[#c9a07a]" />
                +91 981-0432-124
              </a>
              <a href="mailto:support@housebanao.com" className="flex items-start gap-3 text-white/60 hover:text-white text-sm transition-colors">
                <MdEmail className="mt-0.5 shrink-0 text-[#c9a07a]" />
                support@housebanao.com
              </a>
              <div className="flex items-start gap-3 text-white/60 text-sm">
                <FaMapPin className="mt-0.5 shrink-0 text-[#c9a07a]" />
                <span>7th Floor, JMD MEGAPOLIS, 746A, Badshahpur Sohna Rd Hwy, Sector 48, Gurugram, Haryana 122018</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-8">
              {socialIcons.map(({ icon, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 border border-white/20 hover:border-[#c9a07a] flex items-center justify-center transition-all duration-300 group"
                >
                  <FontAwesomeIcon
                    icon={icon}
                    className="w-3.5 h-3.5 text-white/50 group-hover:text-[#c9a07a] transition-colors"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-white/30 text-xs">
          <span>© 2026 Vive HouseBanao Technologies Pvt. Ltd. All rights reserved.</span>
          <span className="text-white/20">Designed for excellence.</span>
        </div>
      </Wrapper>
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
  { icon: faFacebookF, url: "https://www.facebook.com/profile.php?id=61556675355596" },
  { icon: faInstagram, url: "https://www.instagram.com/house_banao" },
  { icon: faLinkedinIn, url: "https://www.linkedin.com/company/housebanao2/" },
  { icon: faYoutube, url: "https://www.youtube.com/@HouseBanaoo" },
  { icon: faPinterestP, url: "https://in.pinterest.com/house_banao/" },
  { icon: faSquareTwitter, url: "https://x.com/HouseBanao" },
];

export default Footer;
