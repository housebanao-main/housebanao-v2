import React from "react";
import Image from "next/image";
import OfferingIMG1 from "@/public/aboutUs/offering1.png";
import OfferingIMG2 from "@/public/aboutUs/offering2.png";
import OfferingIMG3 from "@/public/aboutUs/offering3.png";
import OfferingIMG4 from "@/public/aboutUs/offering4.png";
import Wrapper from "@/components/Wrapper";
import SectionHeading from "@/components/Headings/SectionHeading";
import ParaText from "@/components/Headings/ParaText";

const offerings = [
  {
    img: OfferingIMG1,
    alt: "Offering 1",
    title: "Our Story",
    description:
      "Founded in [Year], House Banao began with a mission to provide exceptional construction and interior design services. Starting with residential projects, we quickly expanded into commercial developments, earning a reputation for quality and innovation.",
  },
  {
    img: OfferingIMG2,
    alt: "Offering 2",
    title: "Our Expertise",
    description:
      "Home Interior Design – Our experienced designers work closely with you to develop a functional and practical living area that suits your lifestyle. Home Construction – From the foundation to the finishing touches, our skilled and experienced team undertakes every aspect of building your ideal home. Office Interior Design – We provide the design and construction of efficient workspaces to enhance your brand and foster its success.",
  },
  {
    img: OfferingIMG3,
    alt: "Offering 3",
    title: "Our Approach",
    description:
      "Personalized Services – We take time to understand your needs and preferences. Quality Craftsmanship – Attention to detail and high-quality results in every project. Timely Delivery – Completing projects on time and within budget.",
  },
  {
    img: OfferingIMG4,
    alt: "Offering 4",
    title: "Why Choose House Banao?",
    description:
      "One-Stop Solution – We provide both construction and interior design services under one roof, ensuring seamless project management. Experienced Team – Our skilled professionals have years of experience in constructing and designing exceptional spaces. Quality Craftsmanship – We focus on meticulous attention to detail and high-quality standards in every project. Client-Centric – Client satisfaction is our top priority, and we always strive to exceed expectations. Innovative Designs – Our designers stay updated on the latest trends and technologies to create modern and stylish spaces. Budget-Friendly – We offer cost-effective solutions without compromising on quality. Reliability – We are a trustworthy partner for your home construction and interior design needs.",
  },
];

const OurOfferings = () => {
  return (
    <Wrapper className="w-full lg:w-[90%] mx-auto">
      {offerings.map((offering, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row mb-8 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="w-full md:w-1/2 p-4">
            <Image
              src={offering.img}
              alt={offering.alt}
              className="w-full md:w-3/4 rounded-t-full shadow-lg mx-auto"
            />
          </div>
          <div className="w-full md:w-1/2 p-4 flex items-center">
            <div className="text-center">
              <SectionHeading className="text-[#5D5D5D]  font-bold mb-4">
                {offering.title}
              </SectionHeading>
              <ParaText className="text-[#575757]  leading-relaxed text-justify">
                {offering.description}
              </ParaText>
            </div>
          </div>
        </div>
      ))}
    </Wrapper>
  );
};

export default OurOfferings;
