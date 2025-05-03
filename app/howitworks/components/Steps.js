// "use client" tells Next.js that this component needs to be rendered on the client side
"use client";

import React, { useState } from "react";
import ParaText from "@/components/Headings/ParaText";
import SectionHeading from "@/components/Headings/SectionHeading";
import SectionSubHeading from "@/components/Headings/SectionSubHeading";
import Wrapper from "@/components/Wrapper";
import { IMG_PLACEHOLDER, steps } from "@/utils/content";
import Image from "next/image";

const Steps = () => {
  // Set initial active step to 1 to show the first description by default
  const [activeStep, setActiveStep] = useState(1);

  // Function to handle step click
  const handleStepClick = (stepNumber) => {
    setActiveStep((prev) => (prev === stepNumber ? null : stepNumber)); // Toggle visibility
  };

  return (
    <Wrapper>
      <div className="w-full lg:w-[90%] mx-auto">
        <SectionHeading className="font-bold mb-8">6 steps to construct your home</SectionHeading>
        
        <div className="relative flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Image */}
          <div className="w-full md:w-1/2 flex items-center justify-center order-1 md:order-2">
            <div className="relative w-full">
              <Image
                src={"/images/house.jpeg"}
                alt=""
                width={500}
                height={500}
                className="mx-auto md:ml-auto"
              />
            </div>
          </div>
          
          {/* Timeline */}
          <div className="flex-1 order-2 md:order-1">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-6 top-0 w-0.5 h-full bg-[#2A26CE]" />
              
              {/* Steps */}
              <div className="space-y-4 sm:space-y-6 md:space-y-12">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="relative flex gap-8 cursor-pointer"
                    onClick={() => handleStepClick(step.number)} // Toggle on click
                  >
                    {/* Circle with number */}
                    <div className="relative z-10">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#2A26CE] text-white font-bold">
                        {step.number}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pt-1.5">
                      <SectionSubHeading className="font-bold mb-2">{step.title}</SectionSubHeading>
                      
                      {/* Only show description if the step is active */}
                      {activeStep === step.number && step.description && (
                        <ParaText className="text-gray-600">{step.description}</ParaText>
                      )}
                      {activeStep === step.number && step.additionalInfo && (
                        <ParaText className="text-gray-600 mt-2">{step.additionalInfo}</ParaText>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Steps;
