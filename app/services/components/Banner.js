"use client";

import React from "react";
import LargeHeading from "@/components/Headings/LargeHeading";
import Wrapper from "@/components/Wrapper";
import BlueButton from "@/components/Buttons/BlueButton";
import { usePopup } from '@/context/PopupContext';

const ServiceBanner = () => {
  const { openPopup } = usePopup();

  return (
    <div
      className="relative min-h-[60vh] w-full flex items-center justify-center"
      style={{
        backgroundImage: 'url("/Hero.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <Wrapper className="relative z-10 w-full text-center text-white !pt-32 !pb-16">
        <LargeHeading className="font-bold text-white mb-4">
          Construct your Dream Home with us.
        </LargeHeading>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          End-to-end construction and interior design services tailored to your vision.
        </p>
        <BlueButton
          onClick={openPopup}
          className="bg-[#a46352] hover:bg-[#8a4f40] text-white rounded-xl px-8 py-3 font-bold shadow-lg"
        >
          Start your Home Construction
        </BlueButton>
      </Wrapper>
    </div>
  );
};

export default ServiceBanner;
