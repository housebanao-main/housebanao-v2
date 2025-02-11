import SectionHeading from "@/components/Headings/SectionHeading";
import Wrapper from "@/components/Wrapper";
import React from "react";
import Tap from "@/public/quickservice/water-tap.png";
import Electrician from "@/public/quickservice/electrician.png";
import Icon1 from "@/public/quickservice/Icon1.png";
import Icon2 from "@/public/quickservice/Icon2.png";
import Icon3 from "@/public/quickservice/Icon3.png";
import Image from "next/image";

const QuickService = () => {
  return (
    <div className="bg-white w-full lg:w-[90%] mx-auto">
      {/* Heading */}
      <Wrapper>
        <div className="text-center mb-8">
          <SectionHeading className="text-left  font-bold">
            <span className="text-black">QUICK </span>
            <span className="text-[#2A27E8]">SERVICES</span>
          </SectionHeading>
        </div>
        {/* Services and View All Button in Same Line */}
        <div className="flex justify-between sm:justify-center sm:items-center  gap-4 md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 flex-wrap">
          {/* Service 1 */}

          <div className="flex flex-col items-center">
            <Image
              src={Icon1}
              alt="Plumber"
              className="w-[90px] h-[80px]"
            />
            <p className="mt-2 text-gray-700 text-sm">Plumber</p>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col items-center">
            <Image
              src={Electrician}
              alt="Electrician"
              className="w-[75px] h-[75px]"
            />
            <p className="mt-2 text-gray-700 text-sm">Electrician</p>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col items-center">
            <Image
              src={Tap}
              alt="Carpenter"
              className="w-[75px] h-[75px]"
            />
            <p className="mt-2 text-gray-700 text-sm">Carpenter</p>
          </div>

          {/* Service 4 */}
          <div className="flex flex-col items-center">
            <Image
              src={Icon2}
              alt="Painter"
              className="w-[80px] h-[75px] object-cover"
            />
            <p className="mt-2 text-gray-700 text-sm">Painter</p>
          </div>

          {/* Service 5 */}
          <div className="flex flex-col items-center">
            <Image
              src={Icon3}
              alt="Pest Control"
              className="w-[80px] h-[80px]"
            />
            <p className="mt-2 text-gray-700 text-sm">Pest Control</p>
          </div>

          {/* Service 6 */}
          <div className="flex flex-col items-center">
            <img
              src="/quickservice/gardener.png"
              alt="Gardening"
              className="w-[75px] h-[75px]"
            />
            <p className="mt-2 text-gray-700 text-sm">Gardening</p>
          </div>

          {/* Service 7 */}
          <div className="flex flex-col items-center">
            <img
              src="/quickservice/housekeeping.png"
              alt="Housekeeping"
              className="w-[75px] h-[75px]"
            />
            <p className="mt-2 text-gray-700 text-sm">Housekeeping</p>
          </div>

          {/* View All Button */}
          {/* <div className="flex flex-col items-center">
          <button
            className="w-[130px] h-[130px] bg-[#E2E7F1] text-[#2A27E8] text-sm font-bold rounded-[14.72px] hover:bg-[#2A27E8] hover:text-white flex items-center justify-center"
            style={{
              padding: '18.41px 14.72px',
              gap: '14.72px',
              borderWidth: '3px',
              borderStyle: 'solid',
              borderColor: '#FFFFFF',
              opacity: 1, // Set opacity to 1 for visibility
            }}
          >
            View All
          </button>
        </div> */}
        </div>
      </Wrapper>
    </div>
  );
};

export default QuickService;
