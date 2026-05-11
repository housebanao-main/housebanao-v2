"use client";

import { useEffect, useState } from "react";
import Form from "./Form";
import Wrapper from "@/components/Wrapper";

import BlueButton from "@/components/Buttons/BlueButton";
import ParaText from "@/components/Headings/ParaText";

const BRAND_COLOR = "#faece7";

/* Big Parent Card */
const MAIN_CARD_COLOR = "#a46352";

/* Inner Cards - Lighter Shade */
const INNER_CARD_COLOR = "#f8ebe6";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        className="relative min-h-screen w-full"
        style={{ backgroundColor: BRAND_COLOR }}
      >
        {/* Hero Section */}
        <section
          className="bg-cover bg-center text-white relative h-[85vh] md:h-[90vh] w-full"
          style={{
            backgroundImage: `url(${
              isMobile ? "/MobileBanner.jpg" : "/Hero.jpg"
            })`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Hero Content */}
          <Wrapper className="relative z-10 w-full lg:w-[92%] m-auto space-y-8 lg:space-y-0 lg:flex justify-between items-center pt-12 sm:pt-24 md:pt-0 pb-[10vh]">
            {/* Left Content */}
            <div className="flex flex-col w-full lg:w-1/2 text-left lg:pt-24">
              <div className="max-w-lg mb-8 mt-32 md:mt-0">
                <h1 className="text-5xl font-extrabold leading-tight mb-4">
                  <span className="text-6xl">Build</span>
                  <span className="text-4xl"> Better,</span>

                  <br className="hidden md:block" />

                  <span className="text-4xl">Live </span>
                  <span className="text-6xl">Beautifully</span>
                </h1>

                <p className="text-sm sm:text-lg leading-relaxed text-white/90">
                  HouseBanao transforms ordinary spaces into
                  <br />
                  extraordinary homes with exceptional Home
                  <br />
                  construction and personalized cost estimation with
                  <br />
                  unmatched expertise.
                </p>
              </div>

              {/* Buttons */}
              <div className="sm:flex space-y-4 sm:space-y-0 items-center gap-4">
                <ParaText className="text-white">
                  Popular :
                </ParaText>

                <div className="flex items-center justify-center mx-auto md:mx-0 gap-4">
                  <BlueButton className="bg-[#a46352] hover:bg-[#8a4f40] !rounded-lg !cursor-default !text-base !font-normal !min-w-32 transition-all duration-300 border border-white/30">
                    Interior Designing
                  </BlueButton>

                  <BlueButton className="!bg-transparent !border !border-white !rounded-lg !cursor-default !text-base !font-normal !min-w-32 hover:!bg-white hover:!text-black transition-all duration-300">
                    End to End Construction
                  </BlueButton>
                </div>
              </div>
            </div>

            {/* Form */}
            {!isMobile && (
              <div>
                <Form />
              </div>
            )}
          </Wrapper>
        </section>

        {/* Main Content Section */}
        <section className="relative z-20 w-full -mt-[10vh] pt-16 pb-20">
          {/* Bigger Parent Card */}
          <Wrapper className="w-full lg:w-[96%] m-auto">
            <div className="bg-[#a46352] shadow-2xl rounded-[40px] p-8 md:p-12">
              
              {/* Feature Cards */}
              <FeatureCards />

              {/* Solution Box */}
              <div className="mt-10">
                <SolutionBox />
              </div>

            </div>
          </Wrapper>
        </section>
      </div>
    </>
  );
}

/* Feature Cards */
function FeatureCards() {
  const data = [
    {
      title: "Professional Expertise",
      image:
        "https://cdn-icons-png.flaticon.com/128/4995/4995049.png",
      desc: "At House Banao, we offer professional expertise in home construction, home interiors, and office interiors. Our experienced team includes highly qualified architects, interior designers, execution teams, and professional site and civil engineers.",
    },
    {
      title: "Reliable Services",
      image:
        "https://cdn-icons-png.flaticon.com/128/12516/12516132.png",
      desc: "At House Banao, we provide reliable home construction services with transparency, top-brand collaborations (UltraTech, Jindal, Tata Steel), and quality materials. Our commitment guarantees your project will be handled with care.",
    },
    {
      title: "Quality Assurance",
      image:
        "https://cdn-icons-png.flaticon.com/128/11125/11125966.png",
      desc: "House Banao ensures quality assurance through thorough inspections and top-tier materials. We check structural integrity, safety measures, concrete mix quality, wall thickness, plastering, and fitting fixtures.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 items-stretch justify-center gap-8 w-full">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-[#f8ebe6] shadow-xl p-7 rounded-3xl flex flex-col gap-5 w-full transition-all duration-300 ease-in-out min-h-[320px] hover:scale-[1.02]"
        >
          {/* Icon + Title */}
          <div className="flex items-center gap-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-12 h-12 object-contain"
            />

            <h3 className="font-bold text-black text-2xl leading-tight">
              {item.title}
            </h3>
          </div>

          {/* Description */}
          <ParaText className="text-gray-700 leading-relaxed text-base">
            {item.desc}
          </ParaText>
        </div>
      ))}
    </div>
  );
}

/* Solution Box */
function SolutionBox() {
  return (
    <div className="w-full">
      <div className="bg-[#f8ebe6] shadow-xl rounded-3xl px-6 py-10 md:px-14 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
          One - Stop Solutions For Home Construction, Home Interior and Office
          Interior
        </h2>

        <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto">
          We provide comprehensive solutions for end-to-end construction,
          including complete home construction, home interior design and a wide
          selection of furniture and decor. From start to finish, we make sure
          your venue is completely covered.
        </p>
      </div>
    </div>
  );
}