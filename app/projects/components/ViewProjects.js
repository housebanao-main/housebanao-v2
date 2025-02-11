import TransparentBtn from "@/components/Buttons/TransparentBtn";
import ParaText from "@/components/Headings/ParaText";
import SectionHeading from "@/components/Headings/SectionHeading";
import SectionSubHeading from "@/components/Headings/SectionSubHeading";
import Wrapper from "@/components/Wrapper";
import { projectData } from "@/utils/content";
import Image from "next/image";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function ViewProjects() {
  return (
    <Wrapper className={"w-full lg:w-[90%] mx-auto"}>
      <SectionHeading className={"font-bold mb-4"}>
        View More Projects
      </SectionHeading>
      <ParaText className={"text-[#767676]"}>
        From a couple to a large Indian family, we have houses built with
        emotions for everyone.
      </ParaText>
      <div className="mt-8 space-y-6">
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
    </Wrapper>
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
      className={`text-black flex justify-between ${
        index % 2 == 0 ? "flex-wrap-reverse" : "flex-wrap"
      } sm:flex-nowrap gap-4 items-center`}
    >
      {index % 2 != 0 && <StackImage image={image} />}

      <div>
        <SectionHeading className={"font-bold"}>
          Property Id: {PropertyId}
        </SectionHeading>
        <SectionHeading className={"font-bold mt-2 mb-4"}>
          PropertySize: {PropertySize}
        </SectionHeading>
        <SectionHeading className={"font-bold mt-2 mb-4"}>
          Specification: {Specification}
        </SectionHeading>
        <SectionHeading className={"font-bold mt-2 mb-4"}>
          ApartmentType: {ApartmentType}
        </SectionHeading>
        {/* <ParaText className={"mb-4 text-[#767676]"}>
          ApartmentType: {ApartmentType}
        </ParaText> */}
        <TransparentBtn className={"flex items-center justify-between gap-6"}>
          {"View Project  "} <IoIosArrowForward />
        </TransparentBtn>
      </div>
      {index % 2 == 0 && <StackImage image={image} />}
    </div>
  );
};

const StackImage = ({ image }) => {
  return (
    <div className="relative mx-auto md:mx-0">
      <div className="h-1 w-[80%] mx-auto bg-gray-200 rounded-t-full "></div>
      <div className="h-1 w-[90%] mx-auto bg-gray-300 rounded-t-full "></div>

      <Image
        src={image}
        alt="project"
        width={500}
        height={500}
        className="object-cover  rounded-lg "
      />
    </div>
  );
};
