"use client";

import Head from "next/head";
import React, { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import ServiceBanner from "./components/Banner";
import ServiceDropdown from "./components/ServiceDropdown";
import BookingJourney from "./components/YourJourney";
import CustomerReviews from "../../components/CustomerReviews";
import Faqs from "@/components/Faqs";
import GetInTouch from "@/components/GetInTouch";
import Footer from "@/components/Footer";
import { CollabsSection } from "@/components/CollabSection";
import HomepagePopup from "./components/HomepagePopup";

export default function Services() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const seenPopup = sessionStorage.getItem("seenPopup");

    if (!seenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    sessionStorage.setItem("seenPopup", "true");
  };

  return (
    <>
      {/* SEO */}
      <Head>
        <title>
          Home Construction | Home Interior & Office Interior | House Banao
        </title>

        <meta
          name="description"
          content="Explore professional home construction, interior design, and office interior services with House Banao."
        />

        <meta
          name="keywords"
          content="home construction, interior design, office interiors, turnkey construction, House Banao"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navbar */}
      <Navbar isWhite={true} />

      {/* Banner */}
      <ServiceBanner />

      {/* Dropdown */}
      <ServiceDropdown />

      {/* Journey Section */}
      <BookingJourney />

      {/* Reviews */}
      <CustomerReviews />

      {/* FAQs */}
      <Faqs />

      {/* Contact */}
      <GetInTouch />

      {/* Collaboration */}
      <CollabsSection />

      {/* Footer */}
      <Footer />

      {/* Popup */}
      <HomepagePopup
        isOpen={showPopup}
        onClose={handleClosePopup}
      />
    </>
  );
}