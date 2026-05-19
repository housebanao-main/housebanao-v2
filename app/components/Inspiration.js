"use client";

import Wrapper from "@/components/Wrapper";
import React, { useState } from "react";

import { GiBathtub } from "react-icons/gi";
import { FaBed, FaSink } from "react-icons/fa";
import { FaCouch } from "react-icons/fa6";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
import { Icon } from "@iconify/react";

const roomImages = {
  All: {
    top: [
      "/inspiration/bedroom/1.png",
      "/inspiration/Bathroom/1.png",
      "/inspiration/Kitchen/1.png",
      "/inspiration/living-room/1.png",
      "/inspiration/bedroom/3.png",
    ],
    bottom: [
      "/inspiration/bedroom/2.png",
      "/inspiration/Bathroom/2.png",
      "/inspiration/Kitchen/2.png",
      "/inspiration/living-room/2.png",
      "/inspiration/Bathroom/3.png",
    ],
  },

  Bedroom: {
    top: Array.from(
      { length: 5 },
      (_, i) => `/inspiration/bedroom/${i + 1}.png`
    ),

    bottom: Array.from(
      { length: 5 },
      (_, i) => `/inspiration/bedroom/${i + 6}.png`
    ),
  },

  Bathroom: {
    top: Array.from(
      { length: 5 },
      (_, i) => `/inspiration/Bathroom/${i + 1}.png`
    ),

    bottom: Array.from(
      { length: 5 },
      (_, i) => `/inspiration/Bathroom/${i + 6}.png`
    ),
  },

  Kitchen: {
    top: Array.from(
      { length: 5 },
      (_, i) => `/inspiration/Kitchen/${i + 1}.png`
    ),

    bottom: Array.from(
      { length: 5 },
      (_, i) => `/inspiration/Kitchen/${i + 6}.png`
    ),
  },

  "Living Room": {
    top: Array.from(
      { length: 5 },
      (_, i) => `/inspiration/living-room/${i + 1}.png`
    ),

    bottom: Array.from(
      { length: 5 },
      (_, i) => `/inspiration/living-room/${i + 6}.png`
    ),
  },
};

function Inspiration() {
  const [selectedRoom, setSelectedRoom] = useState("All");

  return (
    <section className="bg-[#fdf4f1] py-24">
      <Wrapper className="w-full lg:w-[96%] mx-auto">
        
        {/* Main Parent Card */}
        <div className="bg-[#a46352] rounded-[42px] p-6 md:p-10 shadow-[0_25px_70px_rgba(164,99,82,0.35)]">
          
          {/* Heading Section */}
          <Menu
            selectedRoom={selectedRoom}
            setSelectedRoom={setSelectedRoom}
          />

          {/* Gallery Section */}
          <Carousel images={roomImages[selectedRoom]} />

        </div>
      </Wrapper>
    </section>
  );
}

function Menu({ selectedRoom, setSelectedRoom }) {
  const rooms = [
    { name: "All" },

    { name: "Bedroom", icon: <FaBed /> },

    { name: "Bathroom", icon: <GiBathtub /> },

    { name: "Kitchen", icon: <FaSink /> },

    {
      name: "Living Room",
      icon: <FaCouch style={{ fontSize: "1.2rem" }} />,
    },
  ];

  return (
    <div className="bg-[#fff7f4] rounded-[34px] p-8 md:p-10 shadow-[0_18px_45px_rgba(0,0,0,0.16)] border border-white/70 mb-10">
      
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
          Inspiration for Home Interior Designs & More
        </h1>

        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 mt-4 leading-relaxed">
          Refresh your home with curated interior design ideas tailored to your
          style.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-5 mt-10 justify-center overflow-x-auto pb-2">
        {rooms.map((room, index) => (
          <button
            key={index}
            onClick={() => setSelectedRoom(room.name)}
            className={`min-w-fit py-4 px-7 rounded-2xl flex gap-3 cursor-pointer items-center transition-all duration-300 border text-lg font-semibold shadow-md hover:-translate-y-1 ${
              selectedRoom === room.name
                ? "bg-black text-white border-black"
                : "bg-white text-black border-[#e6d3cc] hover:bg-[#f7ebe7]"
            }`}
          >
            {room.icon && room.icon}
            <span>{room.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function Carousel({ images }) {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },

      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="bg-[#fff7f4] rounded-[34px] p-6 md:p-8 shadow-[0_18px_45px_rgba(0,0,0,0.16)] border border-white/70">
      
      {/* Top Slider */}
      <Slider {...settings}>
        {images.top.map((image, index) => (
          <div key={index} className="px-3">
            <div className="overflow-hidden rounded-[28px] shadow-[0_10px_30px_rgba(0,0,0,0.16)]">
              <Image
                src={image}
                width={500}
                height={320}
                className="rounded-[28px] object-cover w-full h-[320px] transition-transform duration-500 hover:scale-105"
                alt={`Slide ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </Slider>

      {/* Bottom Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mt-10">
        {images.bottom.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-[22px] shadow-[0_10px_25px_rgba(0,0,0,0.12)]"
          >
            <Image
              className="w-full h-[140px] object-cover transition-transform duration-500 hover:scale-105"
              src={image}
              width={220}
              height={160}
              alt="service"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/* Next Arrow */
const NextArrow = ({ onClick }) => (
  <div
    className="absolute cursor-pointer right-2 md:right-0 top-1/2 -translate-y-1/2 z-40 bg-black/60 hover:bg-black text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 shadow-xl"
    onClick={onClick}
  >
    <Icon icon="mi:chevron-right" className="text-3xl" />
  </div>
);

/* Prev Arrow */
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute cursor-pointer left-2 md:left-0 top-1/2 -translate-y-1/2 z-40 bg-black/60 hover:bg-black text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 shadow-xl"
    onClick={onClick}
  >
    <Icon icon="mi:chevron-left" className="text-3xl" />
  </div>
);

export default Inspiration;
