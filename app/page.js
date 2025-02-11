// "use client";

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
    <div className="bg-gray-50 w-full overflow-x-hidden ">
      {/* Navbar for Home Page */}
      <Navbar />

      {/* Sections */}
      {/* <section id="home"> */}
        <Home />
      {/* </section> */}
      {/* <div className="-translate-y-[9vh]"> */}

      <Services/>
      <Inspiration/>
      <WhyUs/>
      <Construction/>
      <ViewProjects/>
      <CustomerReviews/>
      <Faqs/>
      <GetInTouch/>
      <CollabsSection />
      <Footer />
      {/* </div> */}

     
    </div>
  );
}
