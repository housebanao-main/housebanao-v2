import SectionHeading from "@/components/Headings/SectionHeading";
import SectionSubHeading from "@/components/Headings/SectionSubHeading";
import Wrapper from "@/components/Wrapper";
import React from "react";

import Image from "next/image";
import { dreamHomeData } from "@/utils/content";

const DreamHome = () => {

  return (
    <div className="bg-[#f5f5f7] w-full lg:w-[90%] mx-auto text-black">
      <Wrapper className={""}>
        <SectionHeading className={"text-center font-bold mb-2 sm:mb-4"}>
          Your dream home in 5 steps!
        </SectionHeading>
        <SectionSubHeading className={"text-[#575757] text-center "}>
          Looking at home construction and home interior design? Here's how you can get started?
        </SectionSubHeading>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 mt-4">
          {dreamHomeData.map((item, index) => (
            <Card key={index} head={item.head} icon={item.icon} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

const Card = ({ head, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Image src={icon} alt="icon" />
      <SectionSubHeading>{head}</SectionSubHeading>
    </div>
  );
};

export default DreamHome;
