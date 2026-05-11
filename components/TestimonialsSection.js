import ParaText from "@/components/Headings/ParaText";
import SectionHeading from "@/components/Headings/SectionHeading";
import SectionSubHeading from "@/components/Headings/SectionSubHeading";
import Wrapper from "@/components/Wrapper";

import React from "react";
import Image from "next/image";

import Customer1 from "@/public/images/Customer1.jpg";
import Customer2 from "@/public/images/Customer2.jpg";
import Customer3 from "@/public/images/Customer3.png";

const CustomerReviews = () => {
  const data = [
    {
      name: "Anil Kapoor",
      image: Customer2,
      description:
        "Building our dream home was something we’d always wanted to do, but we didn’t know where to start. That’s when we found HouseBanao. They took the time to understand our needs and helped us through every stage of the process.",
      city: "Software Engineer",
    },
    {
      name: "Priya Sharma",
      image: Customer1,
      description:
        "I'm so happy to share my experience with HouseBanao. From the first meeting, the team understood our vision and guided us every step of the way. The final result exceeded our expectations.",
      city: "HouseWife",
    },
    {
      name: "Rajesh Verma",
      image: Customer3,
      description:
        "HouseBanao was exactly the reliable partner we needed. Their team listened carefully, offered great advice, and delivered exceptional quality throughout the entire process.",
      city: "Business Man - Shop Owner",
    },
  ];

  return (
    <section className="bg-[#fdf4f1] py-24 min-h-screen w-full">
      <Wrapper className="w-full lg:w-[96%] mx-auto">
        
        {/* Main Heading */}
        <div className="text-center mb-16">
          <SectionHeading  className="text-black font-extrabold text-[80px] md:text-[140px] leading-none mb-8">
            Client Testimonials
          </SectionHeading>

          <ParaText className="text-gray-700 font-bold text-2xl md:text-3xl max-w-5xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from the homeowners and
            businesses we've transformed across Gurgaon and Delhi.
          </ParaText>
        </div>

        {/* Main Parent Card */}
        <div className="bg-[#a46352] rounded-[42px] p-6 md:p-10 shadow-[0_25px_70px_rgba(164,99,82,0.35)]">
          
          {/* Inner Heading Card */}
          <div className="bg-[#fff7f4] rounded-[34px] p-8 md:p-10 shadow-[0_18px_45px_rgba(0,0,0,0.16)] border border-white/70 mb-10 text-center">
            <SectionHeading className="text-black font-extrabold text-4xl md:text-5xl leading-tight mb-4">
              Real Stories from Satisfied Customers
            </SectionHeading>

            <ParaText className="text-gray-700 font-semibold max-w-4xl mx-auto text-lg md:text-xl leading-relaxed">
              Hear from our happy customers who trusted HouseBanao for their
              dream homes and interiors.
            </ParaText>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {data.map((item, index) => (
              <Card
                key={index}
                name={item.name}
                image={item.image}
                description={item.description}
                city={item.city}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

const Card = ({ name, image, description, city }) => {
  return (
    <div className="bg-[#fff7f4] rounded-[34px] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.16)] border border-white/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_65px_rgba(0,0,0,0.22)]">
      
      {/* Image */}
      <div className="h-72 overflow-hidden rounded-[28px] shadow-[0_12px_30px_rgba(0,0,0,0.18)] mb-6">
        <Image
          src={image}
          alt={name}
          className="object-cover w-full h-full rounded-[28px] transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Description */}
      <ParaText className="text-gray-700 leading-relaxed text-justify font-medium text-lg">
        {description}
      </ParaText>

      {/* Bottom */}
      <div className="text-center mt-6 pt-5 border-t border-[#ead4cc]">
        <SectionSubHeading className="font-bold text-black text-2xl">
          {name}
        </SectionSubHeading>

        <SectionSubHeading className="font-bold text-[#a46352] text-xl">
          {city}
        </SectionSubHeading>
      </div>
    </div>
  );
};

export default CustomerReviews;