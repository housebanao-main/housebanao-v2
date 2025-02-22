import Head from "next/head";
import Navbar from "@/components/Navbar";
import React from "react";
import Banner from "./components/Banner";
import DreamHome from "./components/DreamHome";
import Steps from "./components/Steps";
import CustomerReviews from "../../components/CustomerReviews";
import Faqs from "@/components/Faqs";
import GetInTouch from "@/components/GetInTouch";
import Footer from "@/components/Footer";
import { CollabsSection } from "@/components/CollabSection";
import ProjectForm from "@/components/ProjectForm";

const HowItWorks = () => {
  return (
    <div>
      {/* Meta Data */}
      <Head>
        <title>House Banao | How It Works</title>
        <meta 
          name="description" 
          content="Want to know how House Banao makes construction & design easy? We have a step-by-step way that ensures clear talks & amazing results from start to finish. Find out how!" 
        />
        <meta name="keywords" content="House Banao, how it works, construction process, home renovation, interior design, Gurgaon, home building steps" />
        <meta name="author" content="House Banao" />
        <meta property="og:title" content="House Banao | How It Works" />
        <meta property="og:description" content="Understand our step-by-step construction & design process. House Banao makes your dream home a reality with a structured approach." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.housebanao.com/how-it-works" />
        <meta property="og:image" content="https://www.housebanao.com/assets/how-it-works-preview.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Navbar */}
      <Navbar />
      <Banner />
      <DreamHome />
      <Steps />
      <CustomerReviews />
      <Faqs />
      <GetInTouch />
      <ProjectForm />
      <CollabsSection />
      <Footer />
    </div>
  );
};

export default HowItWorks;
