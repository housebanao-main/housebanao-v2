"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Wrapper from "./Wrapper";
import SectionHeading from "@/components/Headings/SectionHeading";
import SectionSubHeading from "@/components/Headings/SectionSubHeading";

export const CollabsSection = () => {
  const icons = [
    "/images/bosch.svg",
    "/images/asianpaints.svg",
    "/images/hettich.svg",
    "/images/dorset.svg",
    "/images/dewalt.svg",
  ];

  return (
    <div className="l">
      <Wrapper
        className={" mx-auto w-full lg:w-[90%] mx-auto flex flex-col gap-4"}
      >
        <div>
        <SectionHeading className="text-left  font-bold">
          Our Trusted Partners
        </SectionHeading>
        <SectionSubHeading className="mt-2  text-gray-600">
          Great collaborations that produce great designs
        </SectionSubHeading>
        </div>
        <div className="w-full h-auto relative flex items-center justify-center overflow-hidden">
          {/* Marquee Container */}
          <div className="marquee w-full">
            {/* <div className="marquee-content flex animate-marquee"> */}
            {/* First set of images */}
            <Marquee autoFill={true}>
              {icons.map((icon, index) => (
                <div
                  key={`partner-${index}`}
                  className="flex-shrink-0 mx-4 sm:mx-[30px]"
                >
                  <Image
                    src={icon}
                    alt={`Partner ${index + 1}`}
                    className="h-[100px] object-contain w-[100px] "
                    // style={{mixBlendMode: 'multiply'}}
                    width={100}
                    height={100}
                    priority={true}
                  />
                </div>
              ))}
            </Marquee>
            {/* Second set of images (to create the seamless loop) */}
            {/* {icons.map((icon, index) => (
              <div key={`partner-duplicate-${index}`} className="flex-shrink-0 mx-[30px]">
                <Image
                  src={icon}
                  alt={`Partner Duplicate ${index + 1}`}
                  className="h-[100px] object-contain w-[100px]"
                  width={100}
                  height={100}
                  priority={true}
                />
              </div>
            ))} */}
            {/* </div> */}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
