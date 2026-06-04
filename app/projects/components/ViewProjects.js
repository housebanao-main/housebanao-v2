import Wrapper from "@/components/Wrapper";
import { projectData } from "@/utils/content";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function ViewProjects() {
  return (
    <section className="bg-[#f5f4f0] py-24 border-b border-[#e8e4df]">
      <Wrapper className="w-full lg:w-[90%] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#e8e4df]" data-aos="fade-up">
          <div>
            <p className="text-[#c9a07a] text-sm font-semibold tracking-[4px] uppercase mb-3">
              Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] leading-tight">
              Our Projects
            </h2>
          </div>
          <p className="text-[#666] text-lg max-w-sm leading-relaxed">
            From a couple to a large Indian family, we have houses built with emotions for everyone.
          </p>
        </div>

        {/* Project List */}
        <div className="flex flex-col gap-0 divide-y divide-[#e8e4df]">
          {projectData.map(({ PropertyId, PropertySize, ApartmentType, Specification, image, link }, index) => (
            <ProjectRow
              key={index}
              PropertyId={PropertyId}
              PropertySize={PropertySize}
              ApartmentType={ApartmentType}
              Specification={Specification}
              image={image}
              link={link}
              index={index}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}

const ProjectRow = ({ PropertyId, PropertySize, ApartmentType, Specification, image, link, index }) => (
  <div
    className={`group grid grid-cols-1 md:grid-cols-2 gap-0 items-center py-12 ${
      index % 2 !== 0 ? "md:[direction:rtl]" : ""
    }`}
    data-aos="fade-up"
    data-aos-delay={index * 100}
  >
    {/* Image */}
    <div className="overflow-hidden md:[direction:ltr]">
      <Image
        src={image}
        alt={PropertyId}
        width={700}
        height={480}
        className="w-full h-[300px] md:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>

    {/* Content */}
    <div className={`md:[direction:ltr] flex flex-col justify-center px-0 md:px-12 py-8 md:py-0`}>
      <span className="text-[#c9a07a] text-sm font-bold tracking-[4px] uppercase mb-4">
        Property Details
      </span>

      <h3 className="text-3xl md:text-4xl font-bold text-[#0f0f0f] mb-8 leading-tight">
        {PropertyId}
      </h3>

      <div className="flex flex-col gap-4 mb-10">
        {[
          ["Property Size", PropertySize],
          ["Specification", Specification],
          ["Apartment Type", ApartmentType],
        ].map(([label, value]) => (
          <div key={label} className="flex justify-between items-center border-b border-[#e8e4df] pb-4">
            <span className="text-[#666] text-base">{label}</span>
            <span className="text-[#0f0f0f] font-semibold text-base">{value}</span>
          </div>
        ))}
      </div>

      <Link
        href={link || "#"}
        className="inline-flex items-center gap-2 text-base font-semibold tracking-widest uppercase text-[#0f0f0f] border border-[#0f0f0f] px-6 py-3 hover:bg-[#0f0f0f] hover:text-white transition-all duration-300 w-fit"
      >
        View Project →
      </Link>
    </div>
  </div>
);
