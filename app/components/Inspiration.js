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
      "/inspiration/Bedroom/1.png",
      "/inspiration/Bathroom/1.png",
      "/inspiration/Kitchen/1.png",
      "/inspiration/Living-Room/1.png",
      "/inspiration/Bedroom/3.png",
    ],
    bottom: [
      "/inspiration/Bedroom/2.png",
      "/inspiration/Bathroom/2.png",
      "/inspiration/Kitchen/2.png",
      "/inspiration/Living-Room/2.png",
      "/inspiration/Bathroom/3.png",
    ],
  },
  Bedroom: {
    top: Array.from({ length: 5 }, (_, i) => `/inspiration/Bedroom/${i + 1}.png`),
    bottom: Array.from({ length: 5 }, (_, i) => `/inspiration/Bedroom/${i + 6}.png`),
  },
  Bathroom: {
    top: Array.from({ length: 5 }, (_, i) => `/inspiration/Bathroom/${i + 1}.png`),
    bottom: Array.from({ length: 5 }, (_, i) => `/inspiration/Bathroom/${i + 6}.png`),
  },
  Kitchen: {
    top: Array.from({ length: 5 }, (_, i) => `/inspiration/Kitchen/${i + 1}.png`),
    bottom: Array.from({ length: 5 }, (_, i) => `/inspiration/Kitchen/${i + 6}.png`),
  },
  "Living Room": {
    top: Array.from({ length: 5 }, (_, i) => `/inspiration/Living-Room/${i + 1}.png`),
    bottom: Array.from({ length: 5 }, (_, i) => `/inspiration/Living-Room/${i + 6}.png`),
  },
};

function Inspiration() {
  const [selectedRoom, setSelectedRoom] = useState("All");

  return (
    <div className="py-16">
      <Menu selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} />
      <Carousel images={roomImages[selectedRoom]} />
    </div>
  );
}

function Menu({ selectedRoom, setSelectedRoom }) {
  const rooms = [
    { name: "All" },
    { name: "Bedroom", icon: <FaBed /> },
    { name: "Bathroom", icon: <GiBathtub /> },
    { name: "Kitchen", icon: <FaSink /> },
    { name: "Living Room", icon: <FaCouch style={{ fontSize: "1.5rem" }} /> },
  ];

  return (
    <Wrapper className="py-10 w-full lg:w-[90%] mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          Inspiration for Home Interior Designs & More
        </h1>
        <p className="text-lg w-[70%] mx-auto text-[#767676]">
          Refresh your home with curated interior design ideas tailored to your style.
        </p>
        <div className="flex gap-7 mt-10 justify-start overflow-x-auto lg:overflow-visible">
          {rooms.map((room, index) => (
            <div
              key={index}
              className={`py-3 px-6 border rounded-lg flex gap-3 cursor-pointer items-center transition ${
                selectedRoom === room.name ? "bg-black text-white" : "border-black"
              }`}
              onClick={() => setSelectedRoom(room.name)}
            >
              {room.icon && room.icon}
              <p className="font-semibold">{room.name}</p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
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
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-[#2A27E8] w-[90%] mx-auto relative py-16">
      <Wrapper>
        <Slider {...settings}>
          {images.top.map((image, index) => (
            <div key={index} className="px-2">
              <Image
                src={image}
                width={500}
                height={300}
                className="rounded-xl object-cover w-full"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
        <div className="flex justify-between mt-10">
          {images.bottom.map((image, index) => (
            <Image
              key={index}
              className="w-[15%]"
              src={image}
              width={200}
              height={150}
              alt="service"
            />
          ))}
        </div>
      </Wrapper>
    </div>
  );
}

// Custom Navigation Arrows
const NextArrow = ({ onClick }) => (
  <div className="absolute cursor-pointer lg:right-0 right-2 top-1/2 -translate-y-1/2 z-40" onClick={onClick}>
    <Icon icon="mi:chevron-right" className="text-4xl text-white/70" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="absolute cursor-pointer lg:left-0 left-2 top-1/2 -translate-y-1/2 z-40" onClick={onClick}>
    <Icon icon="mi:chevron-left" className="text-4xl text-white/70" />
  </div>
);

export default Inspiration;
