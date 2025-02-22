import Head from "next/head";
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

export default function Services() {
  return (
    <div>
      {/* Meta Data */}
      <Head>
        <title>Home Construction | Home Interior & Office Interior | House Banao</title>
        <meta 
          name="description" 
          content="Check out what House Banao has for your construction & design needs in Gurgaon! Whether its for homes or businesses, our team delivers excellent craftsmanship & unique solutions. Learn how we can bring your dream to life with care and skill!" 
        />
        <meta name="keywords" content="home construction, interior design, office interior, renovation, Gurgaon, House Banao, home improvement, remodeling, architecture" />
        <meta name="author" content="House Banao" />
        <meta property="og:title" content="Home Construction | Home Interior & Office Interior | House Banao" />
        <meta property="og:description" content="Explore House Banao's top-tier home and office construction & interior design services in Gurgaon. We bring your vision to life with expertise and dedication." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.housebanao.com/services" />
        <meta property="og:image" content="https://www.housebanao.com/assets/services-preview.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Page Content */}
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
}
