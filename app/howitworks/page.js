// import Home from '@/components/Home'
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

const page = () => {
  return (
    <div>
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

export default page;
