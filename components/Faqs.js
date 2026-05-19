import SectionHeading from "@/components/Headings/SectionHeading";
import Wrapper from "@/components/Wrapper";
import React from "react";

import FaqQuestions from "./FaqQuestions";

const Faqs = () => {
  return (
    <section className="bg-[#fdf4f1] py-20">
      <Wrapper className="w-full lg:w-[96%] mx-auto">
        
        {/* Main Parent Card */}
        <div className="bg-[#a46352] rounded-[42px] p-6 md:p-10 shadow-[0_25px_70px_rgba(164,99,82,0.35)]">
          
          {/* Heading Card */}
          <div className="bg-[#fff7f4] rounded-[34px] p-8 md:p-10 shadow-[0_18px_45px_rgba(0,0,0,0.16)] border border-white/70 mb-10 text-center">
            
            <SectionHeading className="text-black text-5xl md:text-6xl font-extrabold leading-tight mb-4">
              Frequently Asked Questions
            </SectionHeading>

            <p className="text-gray-700 font-semibold text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              Find answers to common questions about home construction,
              interiors, pricing, timelines, and our complete end-to-end
              services.
            </p>
          </div>

          {/* FAQ Section */}
          <div className="bg-[#fff7f4] rounded-[34px] p-6 md:p-8 shadow-[0_18px_45px_rgba(0,0,0,0.16)] border border-white/70">
            <FaqQuestions />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Faqs;