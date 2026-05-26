import React from "react";
import Wrapper from "@/components/Wrapper";

import ServicesCard1 from "@/public/images/Follow Us (5).png";
import ServicesCard3 from "@/public/images/ServicesImg2.png";
import ServicesCard2 from "@/public/images/ServicesImg3.png";

import Image from "next/image";

import SectionSubHeading from "@/components/Headings/SectionSubHeading";
import ParaText from "@/components/Headings/ParaText";

function Services() {
  return (
    <section className="bg-[#fdf4f1] py-20">
      <ServicesCard />
    </section>
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
        "Elevate your living space with the latest home interior solutions. Blending modern aesthetics with innovative functionality",
      image: ServicesCard2,
    },
    {
      Number: "03",
      title: "Turnkey Construction",
      description:
        "Complete turnkey construction solutions from foundation to finishing, delivered on time and within budget.",
      image: ServicesCard3,
    },
  ];

  return (
    <Wrapper className="w-full lg:w-[96%] mx-auto">
      <div className="bg-[#a46352] rounded-[42px] p-6 md:p-10 shadow-[0_25px_70px_rgba(164,99,82,0.35)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative bg-[#fff7f4] rounded-[34px] p-6 md:p-7 shadow-[0_18px_45px_rgba(0,0,0,0.16)] border border-white/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_65px_rgba(0,0,0,0.22)]"
            >
              <div className="absolute -top-4 left-8 h-8 w-24 rounded-full bg-white/70 blur-xl"></div>

              <div
                className={`flex h-full flex-col gap-5 ${
                  index === 1 ? "md:flex-col-reverse" : ""
                }`}
              >
                <div className="flex flex-col gap-3">
                  <p className="text-3xl font-extrabold text-[#a46352] tracking-wide">
                    {item.Number}
                  </p>

                  <SectionSubHeading className="font-bold text-black text-2xl leading-tight">
                    {item.title}
                  </SectionSubHeading>

                  <ParaText className="text-gray-700 leading-relaxed">
                    {item.description}
                  </ParaText>
                </div>

                <div className="overflow-hidden rounded-[26px] shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[300px] md:h-[340px] object-cover rounded-[26px] transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default Services;