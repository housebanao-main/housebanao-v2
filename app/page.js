import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CollabsSection } from "@/components/CollabSection";
import "../styles/globals.css";
import Home from "./components/Home";
import GetInTouch from "@/components/GetInTouch";
import ViewProjects from "./projects/components/ViewProjects";
import Services from "./components/Services";
import Inspiration from "./components/Inspiration";
import WhyUs from "./components/WhyUs";
import Construction from "./components/Construction";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata = {
  title: "Craft Your Dream Home with House Banao",
  description:
    "Change your space with House Banao! We are the best construction & interior design experts in Gurgaon. Offering easy solutions, we help with homes & businesses. Our high-quality work and personal touch make your dreams come true. Check out our services & see amazing results from beginning to end.",
  keywords:
    "House Banao, construction, interior design, Gurgaon, home improvement, renovation, commercial spaces, best builders, home decor",
  authors: [{ name: "House Banao" }],
  openGraph: {
    title: "Craft Your Dream Home with House Banao",
    description:
      "Transform your home or business with House Banao's expert construction and interior design services in Gurgaon.",
    type: "website",
    url: "https://www.housebanao.com",
    images: ["https://www.housebanao.com/assets/preview-image.jpg"],
  },
  alternates: {
    canonical: "https://www.housebanao.com",
  },
};

export default function IndexPage() {
  return (
    <div className="bg-gray-50 w-full overflow-x-hidden">
      {/* Navbar for Home Page */}
      <Navbar />

      {/* Sections */}
      <Home />
      <Services />
      <Inspiration />
      <WhyUs />
      <Construction />
      <ViewProjects />
      <TestimonialsSection />
         <CollabsSection />
      <GetInTouch />
   
      <Footer />
    </div>
  );
}
