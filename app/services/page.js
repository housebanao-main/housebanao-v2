import React from "react";

import Navbar from "@/components/Navbar";
import ServiceBanner from "./components/Banner";
import ServiceDropdown from "./components/ServiceDropdown";
import BookingJourney from "./components/YourJourney";
import CustomerReviews from "../../components/CustomerReviews";
import GetInTouch from "@/components/GetInTouch";
import Footer from "@/components/Footer";
import { CollabsSection } from "@/components/CollabSection";
import ServicesPopup from "./components/ServicesPopup";

export const metadata = {
  title: "Home Construction | Home Interior & Office Interior | House Banao",
  description:
    "Explore professional home construction, interior design, and office interior services with House Banao.",
  keywords:
    "home construction, interior design, office interiors, turnkey construction, House Banao",
  authors: [{ name: "House Banao" }],
  openGraph: {
    title: "Home Construction | Home Interior & Office Interior | House Banao",
    description:
      "Explore professional home construction, interior design, and office interior services with House Banao.",
    type: "website",
    url: "https://www.housebanao.com/services",
  },
  alternates: {
    canonical: "https://www.housebanao.com/services",
  },
};

export default function Services() {
  return (
    <>
      {/* Navbar */}
      <Navbar isWhite={false} />

      {/* Banner */}
      <ServiceBanner />

      {/* Dropdown */}
      <ServiceDropdown />

      {/* Journey Section */}
      <BookingJourney />

      {/* Reviews */}
      <CustomerReviews />

      {/* Contact */}
      <GetInTouch />

      {/* Collaboration */}
      <CollabsSection />

      {/* Footer */}
      <Footer />

      {/* Popup */}
      <ServicesPopup />
    </>
  );
}