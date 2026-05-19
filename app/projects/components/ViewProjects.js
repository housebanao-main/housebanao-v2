import TransparentBtn from "@/components/Buttons/TransparentBtn";
import ParaText from "@/components/Headings/ParaText";
import SectionHeading from "@/components/Headings/SectionHeading";
import Wrapper from "@/components/Wrapper";
import { projectData } from "@/utils/content";
import Image from "next/image";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function ViewProjects() {
  return (
    <section className="bg-[#fdf4f1] py-20">
      <Wrapper className="w-full lg:w-[96%] mx-auto">
        <div className="bg-[#a46352] rounded-[42px] p-6 md:p-10 shadow-[0_25px_70px_rgba(164,99,82,0.35)]">
          {/* Heading Card */}
          <div className="bg-[#fff7f4] rounded-[34px] p-6 md:p-10 shadow-[0_18px_45px_rgba(0,0,0,0.16)] border border-white/70 mb-10 text-center">
            <SectionHeading className="text-black font-extrabold text-4xl md:text-5xl leading-tight mb-4">
              View More Projects
            </SectionHeading>

            <ParaText className="text-gray-700 font-semibold text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              From a couple to a large Indian family, we have houses built with
              emotions for everyone.
            </ParaText>
          </div>

          {/* Project Cards */}
          <div className="space-y-10">
            {projectData.map(
              (
                {
                  PropertyId,
                  PropertySize,
                  ApartmentType,
                  Specification,
                  image,
                  link,
                },
                index
              ) => (
                <ProjectCard
                  key={index}
                  PropertyId={PropertyId}
                  PropertySize={PropertySize}
                  ApartmentType={ApartmentType}
                  Specification={Specification}
                  image={image}
                  link={link}
                  index={index}
                />
              )
            )}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

const ProjectCard = ({
  PropertyId,
  PropertySize,
  ApartmentType,
  Specification,
  image,
  link,
  index,
}) => {
  return (
    <div
      className={`bg-[#fff7f4] rounded-[34px] p-6 md:p-8 shadow-[0_18px_45px_rgba(0,0,0,0.16)] border border-white/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_65px_rgba(0,0,0,0.22)] flex gap-8 items-center ${
        index % 2 === 0 ? "flex-col-reverse md:flex-row" : "flex-col-reverse md:flex-row-reverse"
      }`}
    >
      {/* Text */}
      <div className="w-full md:w-1/2">
        <div className="inline-flex items-center rounded-full bg-[#a46352]/10 px-4 py-2 mb-5">
          <span className="text-[#a46352] font-bold text-sm tracking-wide">
            PROPERTY DETAILS
          </span>
        </div>

        <h3 className="text-black font-extrabold text-3xl md:text-4xl leading-tight mb-6">
          Property Id: {PropertyId}
        </h3>

        <div className="space-y-4 mb-8">
          <InfoRow label="Property Size" value={PropertySize} />
          <InfoRow label="Specification" value={Specification} />
          <InfoRow label="Apartment Type" value={ApartmentType} />
        </div>

        <TransparentBtn className="!border-[#a46352] !text-[#a46352] hover:!bg-[#a46352] hover:!text-white flex items-center justify-between gap-6 !rounded-xl !px-6 !py-3 !font-bold transition-all duration-300">
          View Project <IoIosArrowForward />
        </TransparentBtn>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2">
        <StackImage image={image} />
      </div>
    </div>
  );
};

const InfoRow = ({ label, value }) => {
  return (
    <div className="bg-white border border-[#ead4cc] rounded-2xl px-5 py-4 shadow-sm">
      <p className="text-sm font-bold text-[#a46352] mb-1">{label}</p>
      <p className="text-lg font-semibold text-gray-800">{value}</p>
    </div>
  );
};

const StackImage = ({ image }) => {
  return (
    <div className="relative mx-auto md:mx-0">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 h-3 w-[78%] bg-[#ead4cc] rounded-t-2xl"></div>
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 h-3 w-[66%] bg-[#d7b0a3] rounded-t-2xl"></div>

      <div className="overflow-hidden rounded-[30px] shadow-[0_15px_40px_rgba(0,0,0,0.18)]">
        <Image
          src={image}
          alt="project"
          width={600}
          height={500}
          className="w-full h-[360px] object-cover rounded-[30px] transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
};
