"use client";

import SectionHeading from "@/components/Headings/SectionHeading";
import Wrapper from "@/components/Wrapper";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";

export default function DifferentStages() {
  return (
    <div className="bg-[#F5F5F7] w-full lg:w-[90%] mx-auto">
      <Wrapper>
        <SectionHeading className={"font-bold mb-8"}>
          The different stages of journey
        </SectionHeading>
        <Carasouel />
      </Wrapper>
    </div>
  );
}

const imageList = Array.from({ length: 17 }, (_, idx) => ({
  src: `/images/${idx + 4}.png`,
  step: `Step ${idx + 1}`
}));

const Carasouel = () => {
  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 854,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 548,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="relative w-[90%] mx-auto">
      {imageList.map((image, idx) => (
        <div key={idx} className="overflow-hidden px-2 h-72 relative">
          <img
            src={image.src}
            alt={image.step}
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-4 py-2 rounded">
            {image.step}
          </div>
        </div>
      ))}
    </Slider>
  );
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className={`border border-black text-black absolute -right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white`}
      onClick={onClick}
    >
      <IoIosArrowForward />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className={
        "border border-black text-black absolute -left-4 z-10 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white rotate-180"
      }
      onClick={onClick}
    >
      <IoIosArrowForward />
    </div>
  );
};
