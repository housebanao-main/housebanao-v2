"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogIMG1 from "@/public/blog/blog1/blog1.png";

import Banner from "./components/Banner";
import InfoSection from "./components/InfoSection";

const BlogContent = () => {
  const searchParams = useSearchParams();
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const data = searchParams.get("data");
    if (data) {
      setBlogData(JSON.parse(data));
      console.log(JSON.parse(data));
    }
  }, [searchParams]);

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <div
        className="pt-16 relative bg-cover bg-no-repeat bg-center flex-grow"
        style={{
          height: "80vh",
          backgroundImage: `url(${BlogIMG1.src})`,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <Banner />
      </div>
      <InfoSection />
      <Footer />
    </div>
  );
};

export default BlogContent;
