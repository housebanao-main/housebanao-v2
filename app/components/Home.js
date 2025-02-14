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
            backgroundImage: `url(${isMobile ? "/MobileBanner.jpg" : "/Hero.jpg"})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Content */}
          <Wrapper className="relative z-10 w-full lg:w-[90%] m-auto space-y-8 lg:space-y-0 lg:flex justify-between items-center pt-12 sm:pt-24 md:pt-0 pb-[14vh]">
            {/* Left Section */}
            <div className="flex flex-col w-full lg:w-1/2 text-left lg:pt-24">
              <div className="max-w-lg mb-8">
                {/* Hero Heading */}
                <h1 className="text-5xl font-extrabold leading-tight mb-4">
                  <span className="text-xl md:text-2xl lg:text-4xl xl:text-8xl 2xl:text-7xl">Build</span>
                  <span className="text-lg lg:text-2xl xl:text-4xl 2xl:text-5xl"> Better,</span> <br className="hidden md:block" />
                  <span className="text-lg lg:text-2xl xl:text-4xl 2xl:text-5xl">Live</span>
                  <span className="text-xl md:text-2xl lg:text-4xl xl:text-6xl 2xl:text-7xl"> Beautifully</span>
                </h1>

                {/* Paragraph - Hidden on Mobile */}
                <p className="hidden sm:block text-sm sm:text-lg leading-relaxed">
                  HouseBanao transforms ordinary spaces into extraordinary homes with exceptional home construction and personalized cost estimation with unmatched expertise.
                </p>
              </div>

              {/* Feature Boxes */}
              <div className="sm:flex space-y-4 sm:space-y-0 items-center gap-4">
                <ParaText>Popular : </ParaText>
                <div className="flex items-center justify-center mx-auto md:mx-0 gap-4">
                  <BlueButton className="!bg-transparent !border !border-white !rounded-lg !cursor-default !text-base !font-normal !min-w-32">
                    Interior Design
                  </BlueButton>
                  <BlueButton className="!bg-transparent !border !border-white !rounded-lg !cursor-default !text-base !font-normal !min-w-32">
                    End to End Construction
                  </BlueButton>
                </div>
              </div>
            </div>

            {/* Right Section: Form */}
            <div>
              <Form />
            </div>
          </Wrapper>
        </section>
      </div>

      {/* Card Section with Background */}
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
      desc: "At HouseBanao, we offer professional expertise in home construction services, home interior services, and office interiors. Our experienced team includes highly qualified architects, interior designers, and site engineers.",
    },
    {
      title: "Reliable Services",
      icon: BiSolidLike,
      desc: "At HouseBanao, we provide reliable home construction services with transparency, top-brand collaborations, and high-quality materials.",
    },
    {
      title: "Quality Assurance",
      icon: BsStars,
      desc: "We ensure quality assurance by using top-tier materials and conducting thorough inspections for structural integrity, safety measures, and fixture quality.",
    },
  ];

  return (
    <Wrapper className="grid grid-cols-1 sm:grid-cols-3 justify-center gap-4 sm:gap-6 pt-0 pb-0 w-full lg:w-[90%] m-auto">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-white/70 p-4 sm:p-8 rounded-lg cursor-pointer text-lg sm:text-xl flex flex-col pb-4 gap-2 w-full"
          onClick={() => setShowText(!showText)}
        >
          <item.icon className="text-3xl sm:text-4xl" />
          <ParaText className="font-bold">{item.title}</ParaText>
          {showText && <ParaText>{item.desc}</ParaText>}
        </div>
      ))}
    </Wrapper>
  );
}
