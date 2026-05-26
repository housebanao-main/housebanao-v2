"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import Wrapper from "./Wrapper";
import BlackBtn from "./Buttons/BlackBtn";
import SectionSubHeading from "./Headings/SectionSubHeading";

const GetInTouch = () => {
  return (
    <section className="bg-[#fdf4f1] py-16">
      <Wrapper className="w-full lg:w-[96%] mx-auto">
        <div className="bg-[#a46352] rounded-[42px] p-6 md:p-10 shadow-[0_25px_70px_rgba(164,99,82,0.35)]">
          <div className="bg-[#fff7f4] rounded-[34px] p-6 md:p-10 shadow-[0_18px_45px_rgba(0,0,0,0.16)] border border-white/70 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              <div className="w-20 h-20 rounded-2xl bg-[#a46352]/10 flex items-center justify-center shadow-md overflow-hidden">
                <Image
                  src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                  alt="Support icon"
                  width={100}
                  height={100}
                  className="w-16 h-16 object-cover rounded-xl"
                />
              </div>

              <div>
                <SectionSubHeading className="font-extrabold text-black text-3xl md:text-4xl leading-tight">
                  Still have questions?
                </SectionSubHeading>

                <SectionSubHeading className="text-gray-700 font-semibold text-lg md:text-xl mt-2 leading-relaxed">
                  Can not find the answer you are looking for? Please connect
                  with our friendly team.
                </SectionSubHeading>
              </div>
            </div>

            <Link href="/contact">
              <BlackBtn className="!bg-[#a46352] hover:!bg-[#8a4f40] !text-white !rounded-2xl !px-8 !py-4 !text-lg !font-bold transition-all duration-300 shadow-lg text-nowrap">
                Get In Touch
              </BlackBtn>
            </Link>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default GetInTouch;
