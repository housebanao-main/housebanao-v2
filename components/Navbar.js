"use client";

import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

export default function Navbar({ isWhite }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Services dropdown states
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isServicesLocked, setIsServicesLocked] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsServicesLocked(false);
  };

  // lock scroll when mobile menu opens
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    if (!isMenuOpen) {
      setIsServicesOpen(false);
      setIsServicesLocked(false);
    }
  }, [isMenuOpen]);

  return (
    <>
      <Wrapper
        className={`absolute left-1/2 -translate-x-1/2 w-full lg:w-[90%] z-50 ${
          isWhite ? "text-black" : "text-white"
        } flex justify-between items-center !pt-4 !pb-4`}
      >
        {/* LOGO */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="/">
            <Image src="/logo/1-crop.svg" alt="Logo" width={100} height={30} />
          </Link>

          <button
            className={`md:hidden text-2xl ${
              isWhite ? "text-black" : "text-white"
            }`}
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8 font-semibold">
          <Menu
            isServicesOpen={isServicesOpen}
            setIsServicesOpen={setIsServicesOpen}
            isServicesLocked={isServicesLocked}
            setIsServicesLocked={setIsServicesLocked}
            closeMenu={closeMenu}
          />

          {/* ✅ CLEAN BUTTON (NO POPUP SYSTEM) */}
          <Link
            href="/contact"
            className="flex items-center gap-2 hover:underline"
          >
            Get in Touch <MdArrowOutward />
          </Link>
        </div>
      </Wrapper>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/80 z-40 flex flex-col items-center justify-center gap-6 text-white text-xl md:hidden">
          <Menu
            isServicesOpen={isServicesOpen}
            setIsServicesOpen={setIsServicesOpen}
            isServicesLocked={isServicesLocked}
            setIsServicesLocked={setIsServicesLocked}
            closeMenu={closeMenu}
          />

          <Link href="/contact" onClick={closeMenu}>
            Get in Touch
          </Link>

          <button onClick={toggleMenu} className="mt-4 text-sm underline">
            Close
          </button>
        </div>
      )}
    </>
  );
}

/* ================= MENU ================= */

const Menu = ({
  isServicesOpen,
  setIsServicesOpen,
  isServicesLocked,
  setIsServicesLocked,
  closeMenu,
}) => (
  <ul className="flex flex-col md:flex-row md:space-x-8 font-semibold">

    <li>
      <Link href="/" onClick={closeMenu}>Home</Link>
    </li>

    {/* SERVICES DROPDOWN */}
    <li
      className="relative"
      onMouseEnter={() => {
        if (!isServicesLocked) setIsServicesOpen(true);
      }}
      onMouseLeave={() => {
        if (!isServicesLocked) setIsServicesOpen(false);
      }}
    >
      <button
        className="font-bold"
        onClick={() => {
          const newState = !isServicesLocked;
          setIsServicesLocked(newState);
          setIsServicesOpen(newState);
        }}
      >
        Services
      </button>

      {(isServicesOpen || isServicesLocked) && (
        <ul className="mt-2 md:absolute md:left-0 w-72 bg-black/40 backdrop-blur-md border border-white/20 rounded-md shadow-lg">

          <li>
            <Link className="block px-4 py-2 hover:bg-white/10" href="/services/turnkey-construction" onClick={closeMenu}>
              Turnkey Construction
            </Link>
          </li>

          <li>
            <Link className="block px-4 py-2 hover:bg-white/10" href="/services/custom-home-building" onClick={closeMenu}>
              Custom Home Building
            </Link>
          </li>

          <li>
            <Link className="block px-4 py-2 hover:bg-white/10" href="/services/duplex-house-construction" onClick={closeMenu}>
              Duplex House Construction
            </Link>
          </li>

          <li>
            <Link className="block px-4 py-2 hover:bg-white/10" href="/services/interior-design" onClick={closeMenu}>
              Interior Design
            </Link>
          </li>


          <li>
            <Link className="block px-4 py-2 hover:bg-white/10" href="/services/commercial" onClick={closeMenu}>
              Commercial
            </Link>
          </li>

        </ul>
      )}
    </li>

    <li><Link href="/projects" onClick={closeMenu}>Our Projects</Link></li>
    <li><Link href="/howitworks" onClick={closeMenu}>How it works</Link></li>
    <li><Link href="/aboutus" onClick={closeMenu}>About Us</Link></li>
    <li><Link href="/testimonials" onClick={closeMenu}>Testimonials</Link></li>
    <li><Link href="/blog" onClick={closeMenu}>Blog</Link></li>

  </ul>
);