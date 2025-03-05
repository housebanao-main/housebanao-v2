"use client";
import React, { useState, useEffect } from "react";
import { usePopup } from "../context/PopupContext";
import Wrapper from "./Wrapper";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

export default function Navbar({ isWhite }) {
  const { openPopup } = usePopup();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <>
      <Wrapper
        className={`absolute left-1/2 -translate-x-1/2 w-full lg:w-[90%] m-auto z-50 ${
          isWhite ? "text-black" : "text-white"
        } !pt-4 !pb-4 !sm:pt-4 !sm:pb-4  md:flex md:justify-between md:items-center `}
      >
        <div className="flex justify-between items-center">
          <div className={`text-lg font-bold ${isWhite && "text-[#2A27E8]"}`}>
            <Link href="/">
              <Image
                src={"/logo/1-crop.svg"} // Update the paths here
                alt="HouseBanao Logo"
                width={100} // Adjust the width as needed
                height={30} // Adjust the height as needed
              />
            </Link>
          </div>

          <div className="block md:hidden">
            <button className="text-3xl" onClick={toggleMenu}>
              {isWhite ? (
                <Image
                  src={
                    !isMenuOpen
                      ? "https://img.icons8.com/?size=100&id=3096&format=png&color=000000"
                      : "https://img.icons8.com/?size=100&id=6483&format=png&color=000000"
                  }
                  alt="menu-icon"
                  width={25}
                  height={10}
                />
              ) : (
                <Image
                  src={
                    !isMenuOpen
                      ? "https://img.icons8.com/?size=100&id=3096&format=png&color=ffffff"
                      : "https://img.icons8.com/?size=100&id=6483&format=png&color=ffffff"
                  }
                  alt="menu-icon"
                  width={25}
                  height={10}
                />
              )}
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <Menu closeMenu={closeMenu} openPopup={openPopup} />
        </div>
        <div className="hidden md:flex items-center space-x-2 pr-2 hover:underline">
          <button onClick={openPopup} className=" flex items-center gap-2">
            Get in Touch <MdArrowOutward />
          </button>
        </div>
      </Wrapper>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white text-black shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={closeMenu}>
            <Image
              src="https://img.icons8.com/?size=100&id=6483&format=png&color=000000"
              alt="close-icon"
              width={25}
              height={10}
            />
          </button>
        </div>
        <Menu closeMenu={closeMenu} openPopup={openPopup} />
      </div>
    </>
  );
}

const Menu = ({ closeMenu, openPopup }) => (
  <ul className="mt-4 md:mt-auto text-center md:text-left md:bg-transparent md:flex md:space-x-6 lg:space-x-10">
    <li className="px-4 py-2">
      <Link
        href="/"
        className="hover:underline hover:underline-offset-1"
        onClick={closeMenu}
      >
        Home
      </Link>
    </li>
    <li className="px-4 py-2">
      <Link
        href="/services"
        className="hover:underline hover:underline-offset-1"
        onClick={closeMenu}
      >
        Services
      </Link>
    </li>
    <li className="px-4 py-2">
      <Link
        href="/projects"
        className="hover:underline hover:underline-offset-1"
        onClick={closeMenu}
      >
        Our Projects
      </Link>
    </li>
    <li className="px-4 py-2">
      <Link
        href="/howitworks"
        className="hover:underline hover:underline-offset-1"
        onClick={closeMenu}
      >
        How it works
      </Link>
    </li>
    <li className="px-4 py-2">
      <Link
        href="/aboutus"
        className="hover:underline hover:underline-offset-1"
        onClick={closeMenu}
      >
        About Us
      </Link>
    </li>
    {/* <li className="px-4 py-2">
      <Link href="/blog" className="hover:underline hover:underline-offset-1" onClick={closeMenu}>
        Blog
      </Link>
    </li> */}
    <li className="px-4 py-2 flex md:hidden items-center space-x-2">
      <button
        onClick={() => {
          openPopup();
          closeMenu();
        }}
        className="hover:underline text-center w-full md:w-auto md:text-left"
      >
        Get in Touch
      </button>
    </li>
  </ul>
);
