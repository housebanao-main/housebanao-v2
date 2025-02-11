import React from "react";
import Wrapper from "./Wrapper";
import LargeHeading from "./Headings/LargeHeading";
import ParaText from "./Headings/ParaText";
import SectionHeading from "./Headings/SectionHeading";

const ProjectForm = () => {
  return (
    <div className="bg-[#2A27E8] w-full lg:w-[90%] mx-auto text-white min-h-[50svh] flex items-center justify-center">
      <Wrapper className="flex flex-col md:flex-row md:items-center md:justify-between gap-16">
        {/* Left Section */}
        <div className="flex-1">
          <LargeHeading className="font-bold mb-8">
            Ready to start your project?
          </LargeHeading>
          <form className="space-y-8">
            <div className="space-y-4">
              <input
                type="text"
                id="name"
                className="w-full border-b-2 border-white bg-transparent focus:outline-none focus:border-gray-300 text-white placeholder-white py-7"
                placeholder="Name"
              />
              <input
                type="tel"
                id="phone"
                className="w-full border-b-2 border-white bg-transparent focus:outline-none focus:border-gray-300 text-white placeholder-white py-7"
                placeholder="Phone Number"
              />
              <input
                type="text"
                id="location"
                className="w-full border-b-2 border-white bg-transparent focus:outline-none focus:border-gray-300 text-white placeholder-white py-7"
                placeholder="Plot Location"
              />
            </div>
          </form>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col items-start justify-center text-white">
          <ParaText className="leading-relaxed mb-8">
            Seamless Home interior & Home construction: Start To Finish,
            Hassle-free. Effortless Home interior & home Construction Solutions:
            From Concept to Completion
          </ParaText>
          <button className="bg-white text-black font-medium py-2 px-6 rounded-lg min-w-80 hover:bg-gray-200">
            <SectionHeading>Book consultation now</SectionHeading>
          </button>
        </div>
      </Wrapper>
    </div>
  );
};

export default ProjectForm;
