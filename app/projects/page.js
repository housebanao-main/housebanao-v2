import Navbar from "@/components/Navbar";
import React from "react";
import ProjectBanner from "./components/ProjectBanner";
import HowItStarted from "./components/HowItStarted";
import DifferentStages from "./components/DifferentStages";
import CustomerSays from "./components/CustomerSays";
import ViewProjects from "./components/ViewProjects";
import GetInTouch from "@/components/GetInTouch";
import ProjectForm from "@/components/ProjectForm";
import { CollabsSection } from "@/components/CollabSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Explore House Banao Successful Projects in Gurgaon & Delhi NCR",
  description:
    "Take a look at House Banao's successful projects in Gurgaon! Our fantastic team shows how different ideas can come to life with great craftsmanship & attention to detail. See our completed projects and get inspired for your next build or makeover.",
  keywords:
    "House Banao projects, home construction, interior design, Gurgaon, Delhi NCR, renovation, best builders, home improvement",
  authors: [{ name: "House Banao" }],
  openGraph: {
    title: "Explore House Banao Successful Projects in Gurgaon & Delhi NCR",
    description:
      "Check out our completed projects showcasing exceptional craftsmanship and unique design solutions.",
    type: "website",
    url: "https://www.housebanao.com/projects",
    images: ["https://www.housebanao.com/assets/projects-preview.jpg"],
  },
  alternates: {
    canonical: "https://www.housebanao.com/projects",
  },
};

export default function Projects() {
  return (
    <div>
      {/* Navbar */}
      <Navbar isWhite={true} />
      <div className="pt-12 lg:pt-8">
        <ProjectBanner />
        <HowItStarted />
        <DifferentStages />
        <CustomerSays />
        <ViewProjects />
        <GetInTouch />
        <ProjectForm />
        <CollabsSection />
        <Footer />
      </div>
    </div>
  );
}
