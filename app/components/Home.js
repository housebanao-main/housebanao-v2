"use client";

import { useEffect, useState } from "react";
import Form from "./Form";
import Wrapper from "@/components/Wrapper";
import BlueButton from "@/components/Buttons/BlueButton";
import ParaText from "@/components/Headings/ParaText";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-white relative min-h-screen w-full flex flex-col"
        style={{
          backgroundImage: `url(${isMobile ? "/MobileBanner.jpg" : "/Hero.jpg"})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Content */}
        <Wrapper className="relative z-10 w-full lg:w-[90%] m-auto flex-1 flex flex-col lg:flex-row justify-between items-center gap-8 !pt-32 !pb-16">
          {/* Left Content */}
          <div className="flex flex-col w-full lg:w-1/2 text-left">
            {/* Gold line accent */}
            <div className="w-12 h-[2px] bg-[#c9a07a] mb-6" data-aos="fade-right"></div>

            <p className="text-[#c9a07a] text-base font-semibold tracking-[4px] uppercase mb-4" data-aos="fade-up" data-aos-delay="100">
              Premium Home Construction
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 tracking-tight" data-aos="fade-up" data-aos-delay="200">
              Build Better,
              <br />
              <span className="text-[#c9a07a]">Live Beautifully</span>
            </h1>

            <p className="text-lg sm:text-xl leading-relaxed text-white/75 max-w-md mb-10" data-aos="fade-up" data-aos-delay="300">
              HouseBanao transforms ordinary spaces into extraordinary homes
              with exceptional construction and personalized cost estimation.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4" data-aos="fade-up" data-aos-delay="400">
              <span className="text-white/50 text-base">Popular:</span>
              <BlueButton className="bg-[#c9a07a] hover:bg-[#b8906a] text-black rounded-sm font-semibold px-6 py-3 text-sm tracking-wide border-0 transition-all duration-300">
                Interior Designing
              </BlueButton>
              <BlueButton className="bg-transparent border border-white/50 text-white rounded-sm font-semibold px-6 py-3 text-sm tracking-wide hover:border-[#c9a07a] hover:text-[#c9a07a] transition-all duration-300">
                End to End Construction
              </BlueButton>
            </div>
          </div>

          {/* Form */}
          {!isMobile && (
            <div className="w-full lg:w-auto">
              <Form />
            </div>
          )}
        </Wrapper>
      </section>

      {/* Feature Strip */}
      <section className="bg-[#0f0f0f] w-full">
        <Wrapper className="w-full lg:w-[90%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10" data-aos="fade-up">
            {[
              {
                number: "10+",
                title: "Years Experience",
                desc: "Qualified architects, designers & engineers build your dream.",
              },
              {
                number: "500+",
                title: "Projects Delivered",
                desc: "Top-brand materials, full transparency, every project handled carefully.",
              },
              {
                number: "300+",
                title: "Quality Checks",
                desc: "Thorough inspections ensure structural integrity and top-tier quality.",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-2 px-8 py-10">
                <span className="text-4xl font-bold text-[#c9a07a]">{item.number}</span>
                <span className="text-white font-semibold text-xl">{item.title}</span>
                <p className="text-white/50 text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Wrapper>
      </section>

      {/* Solution Banner */}
      <section className="bg-white border-b border-[#e8e4df] w-full">
        <Wrapper className="w-full lg:w-[90%] mx-auto !py-10">
          <p className="text-center text-[#0f0f0f] text-lg md:text-xl font-medium leading-relaxed max-w-4xl mx-auto">
            One-Stop Solutions for{" "}
            <span className="text-[#c9a07a] font-semibold">Home Construction</span>,{" "}
            <span className="text-[#c9a07a] font-semibold">Home Interior</span> and{" "}
            <span className="text-[#c9a07a] font-semibold">Office Interior</span> —
            from concept to completion, seamlessly.
          </p>
        </Wrapper>
      </section>
    </div>
  );
}
