import React from "react";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { BiSolidLike } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
import Wrapper from "@/components/Wrapper";
import ServicesCard1 from "@/public/images/Follow Us (5).png";
import ServicesCard3 from "@/public/images/ServicesImg2.png";
import ServicesCard2 from "@/public/images/ServicesImg3.png";
import Image from "next/image";
import BlueBg from "@/public/images/blueBg.svg";
import SectionHeading from "@/components/Headings/SectionHeading";
import SectionSubHeading from "@/components/Headings/SectionSubHeading";
import ParaText from "@/components/Headings/ParaText";

function Services() {
  return (
    <div className="bg-[#2A27E8] rounded-xl">
      <ServicesCard />
    </div>
    // <div
    //   style={{
    //     backgroundImage: `url(${BlueBg.src})`,
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-repeat",
    //   }}
    //   className="relative w-full "
    // >

    // </div>
  );
}

function ServicesCard() {
  const data = [
    {
      Number: "01",
      title: "End-to-end Home construction",
      description:
        "Discover the latest in Home Construction Solutions: innovative designs and smart technology for a modern lifestyle",
      image: ServicesCard1,
    },
    {
      Number: "02",
      title: "Home Interior",
      description:
        " Elevate your living space with the latest home interior solutions. Blending modern aesthetics with innovative functionality",
      image: ServicesCard2,
    },
    {
      Number: "03",
      title: "Office Interior",
      description:
        "Revamp your workspace with modern office interior solutions that boost productivity and inspire creativity.",
      image: ServicesCard3,
    },
  ];
  return (
    <Wrapper className={"flex flex-col gap-16 text-white w-full lg:w-[90%] mx-auto"}>
      <div className="flex flex-col justify-center items-center gap-4">
        <SectionHeading className="font-bold pt-80 sm:pt-28">
          One - Stop Solutions For Home Construction, Home Interior and Office
          Interior
        </SectionHeading>
        <SectionSubHeading className=" w-full sm:w-[70%] text-center">
          We provide comprehensive solutions for end-to-end construction,
          including complete home construction, home interior design and a wide
          selection of furniture and decor. From start to finish, we make sure
          your venue is completely covered.
        </SectionSubHeading>
      </div>
      <div className={"grid grid-cols-1 md:grid-cols-3 gap-10"}>
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col justify-between gap-4  border-white border rounded-xl p-5 ${
              index === 1 ? "md:flex-col-reverse" : ""
            }`}
          >
            <div className="flex flex-col gap-2">
              <p className="font-bold text-2xl">{item.Number}</p>
              <SectionSubHeading className=" font-bold">
                {item.title}
              </SectionSubHeading>
              <ParaText className=" font-thin">{item.description}</ParaText>
            </div>
            <Image src={item.image} alt="service" className="mx-auto" />
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

export default Services;
