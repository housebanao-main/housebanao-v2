"use client";
import React from "react";
import Image from "next/image";
import BlueButton from "@/components/Buttons/BlueButton";
import LargeHeading from "@/components/Headings/LargeHeading";
import SectionSubHeading from "@/components/Headings/SectionSubHeading";
import { usePopup } from "@/context/PopupContext";
import Wrapper from "@/components/Wrapper";
import ConstructionImg from "@/public/images/ConstructionImg.png";

export default function Construction() {
  const { openPopup } = usePopup(); // Get openPopup function from context

  return (
    <Wrapper className="flex flex-wrap-reverse md:flex-nowrap gap-6 md:gap-8 w-full lg:w-[90%] mx-auto items-center">
      {/* Left Section */}
      <div className="basis-full md:basis-1/2 space-y-4 md:space-y-6 ">
        <LargeHeading className="leading-snug font-bold text-start ">
          Home Construction starts from <br className="block md:hidden" />
          <span className="text-[#2A27E8] ">RS 1100/-</span>
        </LargeHeading>
        <SectionSubHeading>
          Seamless Home Interior & Home Construction: Start To Finish,
          Hassle-Free. Effortless Home Interior & Home Construction Solutions:
          From Concept to Completion.
        </SectionSubHeading>
        <div className="flex justify-center md:justify-start">
          <BlueButton onClick={openPopup} className="text-white">
            Book Consultation Now
          </BlueButton>
        </div>
      </div>

      {/* Right Section */}
      <div className="basis-full md:basis-1/2">
        <Image
          src={ConstructionImg}
          alt="Construction Process"
          className="mx-auto"
        />
      </div>
    </Wrapper>
  );
}