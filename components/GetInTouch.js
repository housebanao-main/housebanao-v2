"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "./Wrapper";

const GetInTouch = () => {
  return (
    <section className="bg-[#0f0f0f] py-20 border-b border-white/10">
      <Wrapper className="w-full lg:w-[90%] mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-10" data-aos="fade-up">
          {/* Left */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            <div className="w-16 h-16 border border-[#c9a07a]/40 flex items-center justify-center flex-shrink-0">
              <Image
                src="/icons/support-icon.png"
                alt="Support"
                width={40}
                height={40}
                className="w-9 h-9 object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Still have questions?
              </h3>
              <p className="text-white/50 text-base leading-relaxed max-w-md">
                Cannot find the answer you are looking for? Please connect with our friendly team.
              </p>
            </div>
          </div>

          {/* CTA */}
          <Link href="/contact">
            <button className="border border-[#c9a07a] text-[#c9a07a] hover:bg-[#c9a07a] hover:text-black px-8 py-4 text-base font-semibold tracking-widest uppercase transition-all duration-300 whitespace-nowrap">
              Get In Touch
            </button>
          </Link>
        </div>
      </Wrapper>
    </section>
  );
};

export default GetInTouch;
