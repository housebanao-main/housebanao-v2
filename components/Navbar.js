"use client";

import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

export default function Navbar({ isWhite }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isServicesLocked, setIsServicesLocked] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsServicesLocked(false);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    if (!isMenuOpen) {
      setIsServicesOpen(false);
      setIsServicesLocked(false);
    }
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#0f0f0f] border-b border-white/10">
        <Wrapper className="w-full lg:w-[90%] mx-auto flex justify-between items-center !py-4">
          {/* LOGO */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="/">
              <Image
                id="hb-navbar-logo"
                src="/logo/1-crop.svg"
                alt="Logo"
                width={110}
                height={32}
              />
            </Link>
            <button
              className="md:hidden text-white text-2xl"
              onClick={toggleMenu}
            >
              ☰
            </button>
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8 text-white text-sm font-medium tracking-wide">
            <Menu
              isServicesOpen={isServicesOpen}
              setIsServicesOpen={setIsServicesOpen}
              isServicesLocked={isServicesLocked}
              setIsServicesLocked={setIsServicesLocked}
              closeMenu={closeMenu}
            />
            <Link
              href="/contact"
              className="flex items-center gap-1 border border-[#c9a07a] text-[#c9a07a] px-5 py-2 text-sm font-semibold hover:bg-[#c9a07a] hover:text-black transition-all duration-300 rounded-sm"
            >
              Get in Touch <MdArrowOutward />
            </Link>
          </nav>
        </Wrapper>
      </header>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#0f0f0f] z-40 flex flex-col items-center justify-center gap-8 text-white text-xl md:hidden">
          <Menu
            isServicesOpen={isServicesOpen}
            setIsServicesOpen={setIsServicesOpen}
            isServicesLocked={isServicesLocked}
            setIsServicesLocked={setIsServicesLocked}
            closeMenu={closeMenu}
          />
          <Link href="/contact" onClick={closeMenu} className="text-[#c9a07a]">
            Get in Touch
          </Link>
          <button onClick={toggleMenu} className="mt-4 text-sm text-white/40 underline">
            Close
          </button>
        </div>
      )}
    </>
  );
}

const Menu = ({
  isServicesOpen,
  setIsServicesOpen,
  isServicesLocked,
  setIsServicesLocked,
  closeMenu,
}) => (
  <ul className="flex flex-col md:flex-row md:gap-8 gap-6">
    <li>
      <Link href="/" className="hover:text-[#c9a07a] transition-colors" onClick={closeMenu}>
        Home
      </Link>
    </li>

    <li
      className="relative"
      onMouseEnter={() => { if (!isServicesLocked) setIsServicesOpen(true); }}
      onMouseLeave={() => { if (!isServicesLocked) setIsServicesOpen(false); }}
    >
      <button
        className="hover:text-[#c9a07a] transition-colors"
        onClick={() => {
          const newState = !isServicesLocked;
          setIsServicesLocked(newState);
          setIsServicesOpen(newState);
        }}
      >
        Services
      </button>

      {(isServicesOpen || isServicesLocked) && (
        <ul className="mt-2 md:absolute md:left-0 w-64 bg-[#0f0f0f] border border-white/10 shadow-xl">
          {[
            ["Turnkey Construction", "/services/turnkey-construction"],
            ["Custom Home Building", "/services/custom-home-building"],
            ["Duplex House Construction", "/services/duplex-house-construction"],
            ["Interior Design", "/services/interior-design"],
            ["Commercial", "/services/commercial"],
          ].map(([label, href]) => (
            <li key={href}>
              <Link
                className="block px-4 py-3 text-sm text-white/80 hover:text-[#c9a07a] hover:bg-white/5 border-b border-white/5 last:border-0 transition-colors"
                href={href}
                onClick={closeMenu}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>

    <li><Link href="/projects" className="hover:text-[#c9a07a] transition-colors" onClick={closeMenu}>Our Projects</Link></li>
    <li><Link href="/howitworks" className="hover:text-[#c9a07a] transition-colors" onClick={closeMenu}>How it works</Link></li>
    <li><Link href="/aboutus" className="hover:text-[#c9a07a] transition-colors" onClick={closeMenu}>About Us</Link></li>
    <li><Link href="/testimonials" className="hover:text-[#c9a07a] transition-colors" onClick={closeMenu}>Testimonials</Link></li>
    <li><Link href="/blog" className="hover:text-[#c9a07a] transition-colors" onClick={closeMenu}>Blog</Link></li>
  </ul>
);
