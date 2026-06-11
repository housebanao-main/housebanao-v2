import React from "react";
import Wrapper from "@/components/Wrapper";
import ServicesCard1 from "@/public/images/Follow Us (5).png";
import ServicesCard3 from "@/public/images/college-building.jpg";
import ServicesCard2 from "@/public/images/ServicesImg3.png";
import Image from "next/image";

const services = [
  {
    number: "01",
    title: "End-to-end Home Construction",
    description:
      "Discover the latest in Home Construction Solutions: innovative designs and smart technology for a modern lifestyle.",
    image: ServicesCard1,
  },
  {
    number: "02",
    title: "Home Interior",
    description:
      "Elevate your living space with the latest home interior solutions. Blending modern aesthetics with innovative functionality.",
    image: ServicesCard2,
  },
  {
    number: "03",
    title: "Commercial Construction",
    description:
      "Complete commercial construction solutions from foundation to finishing, delivered on time and within budget.",
    image: ServicesCard3,
  },
];

export default function Services() {
  return (
    <section className="bg-white py-12 md:py-24 border-b border-[#e8e4df]">
      <Wrapper className="w-full lg:w-[90%] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#e8e4df]" data-aos="fade-up">
          <div>
            <p className="text-[#c9a07a] text-sm font-semibold tracking-[4px] uppercase mb-3">
              What We Do
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] leading-tight">
              Our Services
            </h2>
          </div>
          <p className="text-[#666] text-lg max-w-sm leading-relaxed">
            Premium construction and interior design services tailored to your vision and budget.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col border border-[#e8e4df] hover:border-[#c9a07a] transition-all duration-300 bg-white"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image */}
              <div className="overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[260px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col gap-3 flex-1">
                <span className="text-[#c9a07a] text-base font-bold tracking-widest">
                  {item.number}
                </span>
                <h3 className="text-[#0f0f0f] font-bold text-2xl leading-snug">
                  {item.title}
                </h3>
                <p className="text-[#666] text-base leading-relaxed flex-1">
                  {item.description}
                </p>
                <div className="pt-3 border-t border-[#e8e4df]">
                  <span className="text-[#0f0f0f] text-sm font-semibold tracking-widest uppercase group-hover:text-[#c9a07a] transition-colors">
                    Learn More →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
