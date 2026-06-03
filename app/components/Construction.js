"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import { usePopup } from "@/context/PopupContext";
import ConstructionImg from "@/public/images/ConstructionImg.png";

export default function Construction() {
  const { openPopup } = usePopup();

  return (
    <section className="bg-white py-24 border-b border-[#e8e4df]">
      <Wrapper className="w-full lg:w-[90%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left — Content */}
          <div data-aos="fade-right">
   <p
  className="text-[#c9a07a] font-semibold uppercase mb-4"
  style={{
    fontSize: "48px",
    letterSpacing: "8px",
    lineHeight: "1.2",
  }}
>
  Start Building
</p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] leading-tight mb-2">
              Home Construction
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#c9a07a] leading-tight mb-6">
              Starts from INR 1100/- Sq Ft
            </h3>

            <div className="w-12 h-[2px] bg-[#c9a07a] mb-6"></div>

            <p className="text-[#666] text-base leading-relaxed mb-10 max-w-md">
              Seamless Home Interior & Home Construction: Start to Finish,
              Hassle-Free. From Concept to Completion with unmatched expertise.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { val: "10+", label: "Years Experience" },
                { val: "500+", label: "Projects Delivered" },
                { val: "300+", label: "Quality Checks" },
                { val: "100%", label: "Transparent Pricing" },
              ].map((s, i) => (
                <div key={i} className="border-l-2 border-[#c9a07a] pl-4">
                  <div className="text-2xl font-bold text-[#0f0f0f]">{s.val}</div>
                  <div className="text-xs text-[#666] tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>

            <button
              onClick={openPopup}
              className="bg-[#0f0f0f] hover:bg-[#c9a07a] text-white hover:text-black px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300"
            >
              Book Consultation Now
            </button>
          </div>

          {/* Right — Image */}
          <div className="relative" data-aos="fade-left">
            <div className="absolute -top-4 -left-4 w-full h-full border border-[#c9a07a]/30 pointer-events-none"></div>
            <Image
              src={ConstructionImg}
              alt="Construction Process"
              className="w-full h-[460px] object-cover"
              priority
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
