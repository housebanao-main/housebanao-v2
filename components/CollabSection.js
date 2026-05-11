"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import Wrapper from "./Wrapper";

import SectionHeading from "@/components/Headings/SectionHeading";
import SectionSubHeading from "@/components/Headings/SectionSubHeading";

export const CollabsSection = () => {
  const icons = [
    "/images/bosch.svg",
    "/images/asianpaints.svg",
    "/images/hettich.svg",
    "/images/dorset.svg",
    "/images/dewalt.svg",
  ];

  return (
    <section className="bg-[#fdf4f1] py-20">
      <Wrapper className="w-full lg:w-[96%] mx-auto">
        
        {/* Main Parent Card */}
        <div className="bg-[#a46352] rounded-[42px] p-6 md:p-10 shadow-[0_25px_70px_rgba(164,99,82,0.35)]">
          
          {/* Heading Card */}
          <div className="bg-[#fff7f4] rounded-[34px] p-8 md:p-10 shadow-[0_18px_45px_rgba(0,0,0,0.16)] border border-white/70 mb-10 text-center">
            
            <SectionHeading className="text-black text-5xl md:text-6xl font-extrabold leading-tight mb-4">
              Our Trusted Partners
            </SectionHeading>

            <SectionSubHeading className="text-gray-700 font-semibold text-lg md:text-xl leading-relaxed">
              Great collaborations that produce great designs
            </SectionSubHeading>
          </div>

          {/* Marquee Card */}
          <div className="bg-[#fff7f4] rounded-[34px] p-6 md:p-8 shadow-[0_18px_45px_rgba(0,0,0,0.16)] border border-white/70 overflow-hidden">
            
            <Marquee
              autoFill={true}
              speed={45}
              gradient={false}
              pauseOnHover={true}
            >
              {icons.map((icon, index) => (
                <div
                  key={`partner-${index}`}
                  className="mx-4 md:mx-6"
                >
                  <div className="bg-white rounded-[24px] p-6 md:p-8 h-[140px] w-[180px] flex items-center justify-center shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <Image
                      src={icon}
                      alt={`Partner ${index + 1}`}
                      className="object-contain max-h-[70px] w-auto"
                      width={120}
                      height={120}
                      priority
                    />
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};