import React from "react";
import Image from "next/image";

import Wrapper from "@/components/Wrapper";
import SectionHeading from "@/components/Headings/SectionHeading";
import ParaText from "@/components/Headings/ParaText";
import LargeHeading from "@/components/Headings/LargeHeading";

import { whyUsData } from "@/utils/content";

function WhyUs() {
  return (
    <section className="bg-[#fdf4f1] py-20">
      <Wrapper className="w-full lg:w-[96%] mx-auto">
        <div className="bg-[#a46352] rounded-[42px] p-6 md:p-10 shadow-[0_25px_70px_rgba(164,99,82,0.35)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image Card */}
            <div className="bg-[#fff7f4] rounded-[34px] p-6 md:p-8 shadow-[0_18px_45px_rgba(0,0,0,0.16)] border border-white/70">
              <div className="overflow-hidden rounded-[28px]">
                <Image
                  height={600}
                  width={600}
                  src="/whyUs/whyUs.svg"
                  alt="Why Us Image"
                  className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>
            </div>

            {/* Content Card */}
            <div className="bg-[#fff7f4] rounded-[34px] p-6 md:p-10 shadow-[0_18px_45px_rgba(0,0,0,0.16)] border border-white/70">
              <LargeHeading className="font-extrabold text-black mb-8 text-5xl md:text-6xl">
                Why Us?
              </LargeHeading>

              <div className="space-y-6">
                {whyUsData.map((item, index) => (
                  <Content
                    key={index}
                    heading={item.heading}
                    icon={item.icon}
                    descrption={item.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

const Content = ({ heading, descrption, icon }) => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-md border border-[#ead4cc] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center gap-4 text-2xl mb-3">
        <span className="text-[#a46352] text-3xl">{icon}</span>

        <SectionHeading className="text-black font-bold text-2xl leading-tight">
          {heading}
        </SectionHeading>
      </div>

      <ParaText className="text-gray-700 font-medium leading-relaxed">
        {descrption}
      </ParaText>
    </div>
  ); 
};

export default WhyUs;