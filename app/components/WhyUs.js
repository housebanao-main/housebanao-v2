"use client";

import React, { useState } from "react";
import Image from "next/image";
import Wrapper from "@/components/Wrapper";
import { whyUsData } from "@/utils/content";
import { IoChevronDownOutline } from "react-icons/io5";

export default function WhyUs() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f5f4f0] py-12 md:py-24 border-b border-[#e8e4df]">
      <Wrapper className="w-full lg:w-[90%] mx-auto">
        {/* Section Header */}
        <div className="mb-14 pb-8 border-b border-[#e8e4df]" data-aos="fade-up">
          <p className="text-[#c9a07a] text-xs font-semibold tracking-[4px] uppercase mb-3">
            Our Promise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] leading-tight">
            Why Choose Us?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left — Image */}
          <div className="relative" data-aos="fade-right">
            <Image
              height={600}
              width={600}
              src="/whyUs/whyUs.svg"
              alt="Why Us"
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* Right — Accordion */}
          <div className="flex flex-col divide-y divide-[#e8e4df]" data-aos="fade-left">
            {whyUsData.map((item, index) => (
              <AccordionItem
                key={index}
                heading={item.heading}
                icon={item.icon}
                descrption={item.description}
                isOpen={openIndex === index}
                onToggle={() => toggle(index)}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

const AccordionItem = ({ heading, descrption, icon, isOpen, onToggle }) => (
  <div className="py-5">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-4 text-left group"
    >
      <div className="flex items-center gap-4">
        <span className="text-[#c9a07a] text-2xl flex-shrink-0">{icon}</span>
        <span className={`font-bold text-2xl transition-colors ${isOpen ? "text-[#c9a07a]" : "text-[#0f0f0f] group-hover:text-[#c9a07a]"}`}>
          {heading}
        </span>
      </div>
      <IoChevronDownOutline
        className={`text-[#c9a07a] text-lg flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
      />
    </button>

    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
    >
      <p className="text-[#666] text-lg leading-relaxed pl-10">
        {descrption}
      </p>
    </div>
  </div>
);
