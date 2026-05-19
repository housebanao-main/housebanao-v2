"use client";

import React from "react";
import Image from "next/image";

import BlueButton from "@/components/Buttons/BlueButton";
import LargeHeading from "@/components/Headings/LargeHeading";
import SectionSubHeading from "@/components/Headings/SectionSubHeading";
import Wrapper from "@/components/Wrapper";

import { usePopup } from "@/context/PopupContext";
import ConstructionImg from "@/public/images/ConstructionImg.png";

export default function Construction() {
  const { openPopup } = usePopup();

  return (
    <section className="bg-[#fdf4f1] py-20">
      <Wrapper className="w-full lg:w-[96%] mx-auto">
        <div className="bg-[#a46352] rounded-[42px] p-6 md:p-10 shadow-[0_25px_70px_rgba(164,99,82,0.35)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Card */}
            <div className="bg-[#fff7f4] rounded-[34px] p-6 md:p-10 shadow-[0_18px_45px_rgba(0,0,0,0.16)] border border-white/70">
              <LargeHeading className="leading-tight font-extrabold text-start text-black">
                Home Construction <br />
                starts from <br />
                <span className="text-[#a46352]">RS 1100/-</span>
              </LargeHeading>

              <SectionSubHeading className="mt-6 text-gray-700 font-semibold leading-relaxed text-lg">
                Seamless Home Interior & Home Construction: Start To Finish,
                Hassle-Free. Effortless Home Interior & Home Construction
                Solutions: From Concept to Completion.
              </SectionSubHeading>

              <div className="mt-8 flex justify-start">
                <BlueButton
                  onClick={openPopup}
                  className="!bg-[#a46352] hover:!bg-[#8a4f40] !text-white !rounded-xl !px-8 !py-4 !text-lg !font-bold transition-all duration-300 shadow-lg"
                >
                  Book Consultation Now
                </BlueButton>
              </div>
            </div>

            {/* Right Card */}
            <div className="bg-[#fff7f4] rounded-[34px] p-4 md:p-6 shadow-[0_18px_45px_rgba(0,0,0,0.16)] border border-white/70">
              <div className="overflow-hidden rounded-[28px] shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
                <Image
                  src={ConstructionImg}
                  alt="Construction Process"
                  className="w-full h-[320px] md:h-[430px] object-cover rounded-[28px] transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}