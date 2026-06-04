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
import Link from "next/link";
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
      "/images/project1.jpg",
      "/images/project2.jpg",
      "/images/project3.jpg",
      "/images/project4.jpg",
    ],
  },
  Bedroom: {
    top: Array.from({ length: 5 }, (_, i) => `/inspiration/bedroom/${i + 1}.png`),
    bottom: Array.from({ length: 5 }, (_, i) => `/inspiration/bedroom/${i + 6}.png`),
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
    top: Array.from({ length: 5 }, (_, i) => `/inspiration/living-room/${i + 1}.png`),
    bottom: Array.from({ length: 5 }, (_, i) => `/inspiration/living-room/${i + 6}.png`),
  },
};

const rooms = [
  { name: "All" },
  { name: "Bedroom", icon: <FaBed /> },
  { name: "Bathroom", icon: <GiBathtub /> },
  { name: "Kitchen", icon: <FaSink /> },
  { name: "Living Room", icon: <FaCouch /> },
];

export default function Inspiration() {
  const [selectedRoom, setSelectedRoom] = useState("All");

  return (
    <section className="bg-white py-24 border-b border-[#e8e4df]">
      <Wrapper className="w-full lg:w-[90%] mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-[#e8e4df]" data-aos="fade-up">
          <div>
            <p className="text-[#c9a07a] text-xs font-semibold tracking-[4px] uppercase mb-3">
              Design Ideas
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] leading-tight">
              Inspiration for Home<br className="hidden md:block" /> Interior Designs
            </h2>
          </div>
          <p className="text-[#666] text-base max-w-sm leading-relaxed">
            Refresh your home with curated interior design ideas tailored to your style.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10" data-aos="fade-up" data-aos-delay="100">
          {rooms.map((room, index) => (
            <button
              key={index}
              onClick={() => setSelectedRoom(room.name)}
              className={`flex items-center gap-2 px-5 py-2.5 text-sm font-semibold border transition-all duration-200 ${
                selectedRoom === room.name
                  ? "bg-[#0f0f0f] text-white border-[#0f0f0f]"
                  : "bg-white text-[#0f0f0f] border-[#e8e4df] hover:border-[#c9a07a] hover:text-[#c9a07a]"
              }`}
            >
              {room.icon && <span className="text-sm">{room.icon}</span>}
              {room.name}
            </button>
          ))}
        </div>

        {/* Slider */}
        <div className="relative mb-10" data-aos="fade-up" data-aos-delay="150">
          <Slider
            infinite
            slidesToShow={3}
            slidesToScroll={1}
            arrows
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
            responsive={[
              { breakpoint: 1024, settings: { slidesToShow: 2 } },
              { breakpoint: 768, settings: { slidesToShow: 1 } },
            ]}
          >
            {roomImages[selectedRoom].top.map((image, index) => (
              <div key={index} className="px-2">
                <div className="overflow-hidden">
                  <Image
                    src={image}
                    width={500}
                    height={380}
                    className="object-cover w-full h-[380px] transition-transform duration-500 hover:scale-105"
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Bottom — Building Elevations (All tab) */}
        {selectedRoom === "All" && (
          <div className="border-t border-[#e8e4df] pt-8" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#c9a07a] inline-block" />
                <p className="text-[#c9a07a] text-xs font-semibold tracking-[4px] uppercase">
                  Building Front Elevations
                </p>
              </div>
              <Link
                href="/projects"
                className="text-xs font-semibold tracking-widest uppercase text-[#0f0f0f] hover:text-[#c9a07a] transition-colors"
              >
                View All Projects →
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {roomImages["All"].bottom.map((image, index) => (
                <div key={index} className="overflow-hidden relative group">
                  <Image
                    src={image}
                    width={400}
                    height={280}
                    className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={`Building ${index + 1}`}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-end p-4 opacity-0 group-hover:opacity-100">
                    <span className="text-white text-xs font-semibold tracking-widest uppercase">
                      View Project →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Grid — other tabs */}
        {selectedRoom !== "All" && (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 border-t border-[#e8e4df] pt-8">
            {roomImages[selectedRoom].bottom.map((image, index) => (
              <div key={index} className="overflow-hidden relative group">
                <Image
                  src={image}
                  width={220}
                  height={180}
                  className="w-full h-[170px] object-cover transition-transform duration-500 hover:scale-105"
                  alt={`Gallery ${index + 1}`}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>
            ))}
          </div>
        )}

      </Wrapper>
    </section>
  );
}

const NextArrow = ({ onClick }) => (
  <div
    className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 z-40 bg-[#0f0f0f] hover:bg-[#c9a07a] text-white w-10 h-10 flex items-center justify-center transition-all duration-300"
    onClick={onClick}
  >
    <Icon icon="mi:chevron-right" className="text-xl" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 z-40 bg-[#0f0f0f] hover:bg-[#c9a07a] text-white w-10 h-10 flex items-center justify-center transition-all duration-300"
    onClick={onClick}
  >
    <Icon icon="mi:chevron-left" className="text-xl" />
  </div>
);
