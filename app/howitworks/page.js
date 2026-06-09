import Navbar from "@/components/Navbar";
import React from "react";
import Banner from "./components/Banner";
import DreamHome from "./components/DreamHome";
import Steps from "./components/Steps";
import StartCTA from "./components/StartCTA";
import CustomerReviews from "../../components/CustomerReviews";
import GetInTouch from "@/components/GetInTouch";
import Footer from "@/components/Footer";
import { CollabsSection } from "@/components/CollabSection";
import ProjectForm from "@/components/ProjectForm";

export const metadata = {
  title: "House Banao | How It Works",
  description:
    "Want to know how House Banao makes construction & design easy? We have a step-by-step way that ensures clear talks & amazing results from start to finish. Find out how!",
  keywords:
    "House Banao, how it works, construction process, home renovation, interior design, Gurgaon, home building steps",
  authors: [{ name: "House Banao" }],
  openGraph: {
    title: "House Banao | How It Works",
    description:
      "Understand our step-by-step construction & design process. House Banao makes your dream home a reality with a structured approach.",
    type: "website",
    url: "https://www.housebanao.com/how-it-works",
    images: ["https://www.housebanao.com/assets/how-it-works-preview.jpg"],
  },
  alternates: {
    canonical: "https://www.housebanao.com/how-it-works",
  },
};

const HowItWorks = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <Banner />
      <DreamHome />
      <Steps />
      <StartCTA />
      <CustomerReviews />
      <GetInTouch />
      <ProjectForm />
      <CollabsSection />
      <Footer />
    </div>
  );
};

export default HowItWorks;
