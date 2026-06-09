import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import { FaRulerCombined, FaBuilding, FaBox } from "react-icons/fa";
import React from "react";

const projectStats = [
  { icon: <FaRulerCombined />, label: "Property Size", value: "3964 sq.ft" },
  { icon: <FaBuilding />, label: "Apartment Type", value: "G+3" },
  { icon: <FaBox />, label: "Specification", value: "Classic Package" },
];

export default function ProjectBanner() {
  return (
    <section className="bg-white py-20 border-b border-[#e8e4df]">
      <Wrapper className="w-full lg:w-[90%] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-8 border-b border-[#e8e4df]" data-aos="fade-up">
          <div>
            <p className="text-[#c9a07a] text-sm font-semibold tracking-[4px] uppercase mb-3">
              Featured Project
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] leading-tight">
              CNR11011
            </h2>
            <p className="text-[#666] text-base mt-2">2, 2nd Cross, Gurgaon, Delhi</p>
          </div>
          <div className="flex flex-wrap gap-8">
            {projectStats.map(({ icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="text-[#c9a07a] text-xl">{icon}</span>
                <div className="flex flex-col">
                  <span className="text-[#999] text-xs uppercase tracking-widest">{label}</span>
                  <span className="text-[#0f0f0f] font-semibold text-base">{value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ImageCard imageSrc="/images/1.png" subHeading="3D Render" index={0} />
          <ImageCard imageSrc="/images/2.png" subHeading="Plot Image" index={1} />
          <ImageCard imageSrc="/images/3.png" subHeading="Actual Image" index={2} />
        </div>
      </Wrapper>
    </section>
  );
}

const ImageCard = ({ imageSrc, subHeading, index }) => (
  <div
    className="group relative h-72 overflow-hidden border border-[#e8e4df]"
    data-aos="fade-up"
    data-aos-delay={index * 100}
  >
    <Image
      src={imageSrc}
      alt={subHeading}
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <span className="absolute top-4 left-4 bg-[#0f0f0f]/85 text-white text-xs font-semibold tracking-[3px] uppercase px-3 py-1.5">
      {subHeading}
    </span>
  </div>
);
