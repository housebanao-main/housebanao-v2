"use client";

import BlueButton from "@/components/Buttons/BlueButton";
import Wrapper from "@/components/Wrapper";
import { usePopup } from "@/context/PopupContext";

export default function StartCTA() {
  const { openPopup } = usePopup();

  return (
    <section
      className="relative bg-cover bg-center py-28"
      style={{ backgroundImage: "url(/images/ConstructionImg.png)" }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <Wrapper className="relative z-10 w-full lg:w-[90%] mx-auto text-center">
        <div className="w-12 h-[2px] bg-[#c9a07a] mx-auto mb-5" />
        <p className="text-[#c9a07a] text-xs font-semibold tracking-[4px] uppercase mb-4">
          Ready When You Are
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
          Your Dream Home Is Just a Few Steps Away
        </h2>
        <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-8">
          Book a free consultation today and let our team guide you through every step — from the first call to handover.
        </p>
        <BlueButton onClick={openPopup}>
          Start your home construction
        </BlueButton>
      </Wrapper>
    </section>
  );
}
