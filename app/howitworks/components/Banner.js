"use client";

import BlueButton from "@/components/Buttons/BlueButton";
import LargeHeading from "@/components/Headings/LargeHeading";
import Wrapper from "@/components/Wrapper";
import { usePopup } from '@/context/PopupContext';


export default function Banner() {

  const { openPopup } = usePopup(); // Get openPopup function from context


  return (
    <div className="bg-gray-50 relative min-h-[90svh]">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-white relative min-h-[80svh]"
        style={{
          backgroundImage: 'url("/Hero.jpg")',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20 min-h-[80svh]"></div>

        {/* Content */}
        <Wrapper
          className="relative z-10 w-full space-y-8 lg:space-y-0 pt-16 h-full min-h-[90svh] flex flex-col"
        >
          <div className="w-full text-left h-full grow flex flex-col justify-center items-center gap-6 pt-32">
            <LargeHeading className="font-bold">
              The finest choice in modular solution
            </LargeHeading>
            <BlueButton onClick={openPopup}>Start your home construction</BlueButton>
          </div>
        </Wrapper>
      </section>
    </div>
  );
}
