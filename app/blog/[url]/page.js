"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogIMG1 from "@/public/blog/blog1/blog1.png";
import Banner from "./components/Banner";
import InfoSection from "./components/InfoSection";
import Blogging1 from "./components/Blogging1";
import Blogging2 from "./components/Blogging2";
import Blogging3 from "./components/Blogging3";
import { useParams } from "next/navigation";

const BlogContent = () => {
  const { url } = useParams();

  // console.log("url", url);s
  const renderBlogContent = () => {
    if (url === "1") {
      return <Blogging1 />;
    } else if (url === "2") {
      return <Blogging2 />;
    } else if (url === "3") {
      return <Blogging3 />;
    } else {
      return <Blogging1 />;
    }
  };

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
      {renderBlogContent()}
      <Footer />
    </div>
  );
};

export default BlogContent;
