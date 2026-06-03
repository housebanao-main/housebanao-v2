"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Wrapper from "./Wrapper";

export const CollabsSection = () => {
  const icons = [
    "/images/bosch.svg",
    "/images/asianpaints.svg",
    "/images/hettich.svg",
    "/images/dorset.svg",
    "/images/dewalt.svg",
  ];

  return (
    <section className="bg-white py-20 border-b border-[#e8e4df]">
      <Wrapper className="w-full lg:w-[90%] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12 pb-8 border-b border-[#e8e4df]" data-aos="fade-up">
          <div>
            <p className="text-[#c9a07a] text-xs font-semibold tracking-[4px] uppercase mb-2">
              Partners
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f0f0f]">
              Our Trusted Partners
            </h2>
          </div>
          <p className="text-[#666] text-sm max-w-xs leading-relaxed">
            Great collaborations that produce great designs and lasting results.
          </p>
        </div>

        {/* Marquee */}
        <div data-aos="fade-up" data-aos-delay="100">
        <Marquee autoFill speed={40} gradient={false} pauseOnHover>
          {icons.map((icon, index) => (
            <div key={index} className="mx-8 flex items-center justify-center">
              <Image
                src={icon}
                alt={`Partner ${index + 1}`}
                width={120}
                height={60}
                className="object-contain h-[48px] w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              />
            </div>
          ))}
        </Marquee>
        </div>
      </Wrapper>
    </section>
  );
};
