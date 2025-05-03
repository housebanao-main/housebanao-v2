import Head from "next/head";
import Navbar from "@/components/Navbar";
import React from "react";
import ProjectBanner from "./components/ProjectBanner";
import HowItStarted from "./components/HowItStarted";
import DifferentStages from "./components/DifferentStages";
import CustomerSays from "./components/CustomerSays";
import ViewProjects from "./components/ViewProjects";
import Faqs from "@/components/Faqs";
import GetInTouch from "@/components/GetInTouch";
import ProjectForm from "@/components/ProjectForm";
import { CollabsSection } from "@/components/CollabSection";
import Footer from "@/components/Footer";

export default function Projects() {
  return (
    <div>
      {/* Meta Data */}
      <Head>
        <title>
          Explore House Banao Successful Projects in Gurgaon & Delhi NCR
        </title>
        <meta
          name="description"
          content="Take a look at House Banao's successful projects in Gurgaon! Our fantastic team shows how different ideas can come to life with great craftsmanship & attention to detail. See our completed projects and get inspired for your next build or makeover."
        />
        <meta
          name="keywords"
          content="House Banao projects, home construction, interior design, Gurgaon, Delhi NCR, renovation, best builders, home improvement"
        />
        <meta name="author" content="House Banao" />
        <meta
          property="og:title"
          content="Explore House Banao Successful Projects in Gurgaon & Delhi NCR"
        />
        <meta
          property="og:description"
          content="Check out our completed projects showcasing exceptional craftsmanship and unique design solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.housebanao.com/projects" />
        <meta
          property="og:image"
          content="https://www.housebanao.com/assets/projects-preview.jpg"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Navbar */}
      <Navbar isWhite={true} />
      <div className="pt-12 lg:pt-8">
        <ProjectBanner />
        <HowItStarted />
        <DifferentStages />
        <CustomerSays />
        <ViewProjects />
        <Faqs />
        <GetInTouch />
        <ProjectForm />
        <CollabsSection />
        <Footer />
      </div>
    </div>
  );
}
