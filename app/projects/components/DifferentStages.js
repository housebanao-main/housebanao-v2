"use client";

import Wrapper from "@/components/Wrapper";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";

export default function DifferentStages() {
  return (
    <section className="bg-white py-20 border-b border-[#e8e4df]">
      <Wrapper className="w-full lg:w-[90%] mx-auto">
        <div className="mb-14 pb-8 border-b border-[#e8e4df]" data-aos="fade-up">
          <p className="text-[#c9a07a] text-sm font-semibold tracking-[4px] uppercase mb-3">
            Behind The Scenes
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] leading-tight">
            The Different Stages of the Journey
          </h2>
        </div>
        <Carasouel />
      </Wrapper>
    </section>
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
        <div key={idx} className="group overflow-hidden px-2 h-72 relative">
          <img
            src={image.src}
            alt={image.step}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute bottom-4 left-4 bg-[#0f0f0f]/85 text-white text-xs font-semibold tracking-[3px] uppercase px-3 py-1.5">
            {image.step}
          </span>
        </div>
      ))}
    </Slider>
  );
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="border border-[#e8e4df] text-[#0f0f0f] absolute -right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white hover:border-[#c9a07a] hover:text-[#c9a07a] transition-colors duration-300 cursor-pointer"
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
      className="border border-[#e8e4df] text-[#0f0f0f] absolute -left-4 z-10 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white rotate-180 hover:border-[#c9a07a] hover:text-[#c9a07a] transition-colors duration-300 cursor-pointer"
      onClick={onClick}
    >
      <IoIosArrowForward />
    </div>
  );
};
