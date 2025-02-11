import Navbar from "@/components/Navbar";
import React from "react";
import ServiceBanner from "./components/Banner";
import ServicesSection from "./components/Service";
import QuickService from "./components/Quickservice";
import CustomerReviews from "../../components/CustomerReviews";
import Faqs from "@/components/Faqs";
import GetInTouch from "@/components/GetInTouch";
import ProjectForm from "@/components/ProjectForm";
import Footer from "@/components/Footer";
import { CollabsSection } from "@/components/CollabSection";
import BookingJourney from "./components/YourJourney";

export const metadata = {
  title: "Services",
  description:
    "HouseBanao is a platform that connects homeowners with professionals to get their home renovation projects done. We provide a wide range of services to cater to all your home renovation needs.",
};

const Services = () => {
  return (
    <div>
      <Navbar isWhite={true} />
      <ServiceBanner />
      <ServicesSection />
      <QuickService />
      <BookingJourney />
      <CustomerReviews />
      <Faqs />
      <GetInTouch />
      <ProjectForm />
      <CollabsSection />
      <Footer />
    </div>
  );
};

export default Services;
