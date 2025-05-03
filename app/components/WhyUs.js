import React from "react";
import WhyUsImage from "@/public/images/WhyUsImg.png";
import Image from "next/image";
import Wrapper from "@/components/Wrapper";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { HiEyeOff } from "react-icons/hi";
import { FaCheckCircle } from "react-icons/fa";
import SectionHeading from "@/components/Headings/SectionHeading";
import { whyUsData } from "@/utils/content";
import SectionSubHeading from "@/components/Headings/SectionSubHeading";
import ParaText from "@/components/Headings/ParaText";
import LargeHeading from "@/components/Headings/LargeHeading";

function WhyUs() {
  return (
    <Wrapper className={"md:flex w-full lg:w-[90%] space-y-4 md:space-y-0 gap-8"}>
      <div className="basis-1/2">
        <Image height={200} width={160} src={"whyUs/whyUs.svg"} alt="Why Us Image" className="w-full"/>
      </div>
      <div className="basis-1/2 flex flex-col justify-center gap-5 sm:gap-8 text-[#222222]">
        <LargeHeading className=" font-bold">Why Us ?</LargeHeading>
        <div className=" space-y-3 sm:space-y-8" >
        {whyUsData.map((v,idx)=> <Content key={idx} heading={v.heading} icon={v.icon} descrption={v.description}/>)}
      </div>
      </div>
   
    </Wrapper>
  );
}

const Content = ({heading, descrption, icon}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-4 text-2xl">
        {icon}
        <SectionHeading className="">{heading}</SectionHeading>
      </div>
      <ParaText className={"text-[#222222]"}>
       {descrption}
      </ParaText>
    </div>
  );
};

export default WhyUs;
