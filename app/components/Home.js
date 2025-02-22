"use client";

import { useEffect, useState } from "react";
import FeatureBoxes from "./FeatureBoxes";
import Form from "./Form";
import Wrapper from "@/components/Wrapper";

import BlueBg from "@/public/images/blueBg.svg";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { BiSolidLike } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
import BlueButton from "@/components/Buttons/BlueButton";
import ParaText from "@/components/Headings/ParaText";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="bg-gray-50 relative min-h-screen w-full">
        {/* Hero Section */}
        <section
          className="bg-cover bg-center text-white relative min-h-screen w-full"
          style={{
            backgroundImage: `url(${
              isMobile ? "/MobileBanner.jpg" : "/Hero.jpg"
            })`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Content */}
          <Wrapper className="relative z-10 w-full lg:w-[90%] m-auto space-y-8 lg:space-y-0 lg:flex justify-between items-center pt-12 sm:pt-24 md:pt-0 pb-[14vh]">
            {/* Left Section: Hero Heading, Paragraph, and Feature Boxes */}
            <div className="flex flex-col w-full lg:w-1/2 text-left lg:pt-24 ">
              {/* Hero Heading */}
              <div className="max-w-lg mb-8 mt-48 md:mt-0">
              <h1 className="text-5xl font-extrabold leading-tight mb-4">
              <span className="text-6xl">Build</span>
              <span className="text-5xl"> Better,</span> <br className="hidden md:block" />
              <span className="text-5xl">Live</span>
              <span className="text-6xl"> Beautifully</span>
              </h1>
                <p className="text-sm sm:text-lg leading-relaxed ">
                  HouseBanao transforms ordinary spaces into extraordinary homes
                  with exceptional home construction and personalized cost
                  estimation with unmatched expertise.
                </p>
              </div>

              {/* Feature Boxes */}
              <div className=" sm:flex space-y-4 sm:space-y-0 items-center gap-4">
                <ParaText>Popular : </ParaText>
                <div className="flex items-center justify-center  mx-auto md:mx-0 gap-4">
                  <BlueButton
                    className={
                      "!bg-transparent !border !border-white !rounded-lg !cursor-default !text-base !font-normal !min-w-32"
                    }
                  >
                    Interior Design
                  </BlueButton>
                  <BlueButton
                    className={
                      "!bg-transparent !border !border-white !rounded-lg !cursor-default !text-base !font-normal !min-w-32"
                    }
                  >
                    End to End Construction
                  </BlueButton>
                </div>
              </div>
            </div>

            {/* Right Section: Form positioned above the background image */}
            {!isMobile && (
              <div className="">
                <Form />
              </div>
            )}
          </Wrapper>
        </section>
      </div>
      <div
        style={{
          backgroundImage: `url(${BlueBg.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full -translate-y-[10vh] absolute"
      >
        <Card />
      </div>
    </>
  );
}

function Card() {
  const [showText, setShowText] = useState(false);
  const data = [
    {
      title: "Professional Expertise",
      icon: IoShieldCheckmarkSharp,
      desc: "At House Banao We offer professional Expertise in Home Construction service, home interior service, and office interiors. Our experienced team of highly qualified architecture, interior designers</span>, an execution team, and a highly professional site engineers and Civil engineers team etc",
    },
    {
      title: "Reliable Services",
      icon: BiSolidLike,
      desc: "At House Banao we provide Home construction needs. Our experienced team is dedicated to maintaining transparency, and top brand collaborations with ultra tech, Jindal, tata steel, and quality materials, our commitment to reliability guarantees that your project will be handled with care.",
    },
    {
      title: "Quality Assurance",
      icon: BsStars,
      desc: "House Banao checks Home construction quality assurance by conducting a thorough inspection and using top-tier materials and our commitment to quality ensures step-by-step - The quality of the materials, structural integrity safety measures, quality of the concrete mix, wall thickness plastering, quality of fitting fixtures etc.",
    },
  ];

  return (
    <Wrapper
      className={
        "grid grid-cols-1 sm:grid-cols-3 justify-center gap-6 pt-0 pb-0 w-full lg:w-[90%] m-auto"
      }
    >
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-white/70 p-6 rounded-lg cursor-pointer text-xl flex flex-col pb-4 gap-2 w-full"
          onClick={() => setShowText(!showText)}
        >
          <item.icon className="text-4xl" />
          <ParaText className="font-bold">{item.title}</ParaText>
          {showText && <ParaText className="">{item.desc}</ParaText>}
        </div>
      ))}
    </Wrapper>
  );
}