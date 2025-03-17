// "use client";

import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CollabsSection } from "@/components/CollabSection";
import Popup from "../components/Popup";
import "../styles/globals.css";
import Home from "./components/Home";
import GetInTouch from "@/components/GetInTouch";
import Faqs from "@/components/Faqs";
import CustomerReviews from "@/components/CustomerReviews";
import ViewProjects from "./projects/components/ViewProjects";
import Services from "./components/Services";
import Inspiration from "./components/Inspiration";
import WhyUs from "./components/WhyUs";
import Construction from "./components/Construction";



export default function IndexPage() {
  return (
    <div className="bg-gray-50 w-full overflow-x-hidden">
      {/* Meta Data */}
      {/* <Head>
        <title>Craft Your Dream Home with House Banao</title>
        <meta
          name="description"
          content="Change your space with House Banao! We are the best construction & interior design experts in Gurgaon. Offering easy solutions, we help with homes & businesses. Our high-quality work and personal touch make your dreams come true. Check out our services & see amazing results from beginning to end."
        />
        <meta
          name="keywords"
          content="House Banao, construction, interior design, Gurgaon, home improvement, renovation, commercial spaces, best builders, home decor"
        />
        <meta name="author" content="House Banao" />
        <meta
          property="og:title"
          content="Craft Your Dream Home with House Banao"
        />
        <meta
          property="og:description"
          content="Transform your home or business with House Banao's expert construction and interior design services in Gurgaon."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.housebanao.com" />
        <meta
          property="og:image"
          content="https://www.housebanao.com/assets/preview-image.jpg"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head> */}

      {/* Navbar for Home Page */}
      <Navbar />

      {/* Sections */}
      <Home />
      <Services />
      <Inspiration />
      <WhyUs />
      <Construction />
      <ViewProjects />
      <CustomerReviews />
      <Faqs />
      <GetInTouch />
      <CollabsSection />
      <Footer />
    </div>
  );
}
