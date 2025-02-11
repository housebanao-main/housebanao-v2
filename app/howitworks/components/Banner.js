// import Wrapper from "./Wrapper";

import BlueButton from "@/components/Buttons/BlueButton";
import LargeHeading from "@/components/Headings/LargeHeading";
import Wrapper from "@/components/Wrapper";

export default function Banner() {
  return (
    <div className="bg-gray-50 relative min-h-[90svh]">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-white relative min-h-[90svh]"
        style={{
          backgroundImage: 'url("/Hero.jpg")',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20 min-h-[90svh]"></div>

        {/* Content */}
        <Wrapper
          className="relative z-10 w-full space-y-8 lg:space-y-0 pt-16 h-full min-h-[90svh] flex flex-col"
        >
          <div className="w-full text-left h-full grow flex flex-col justify-center items-center gap-6 pt-32">
            <LargeHeading className="font-bold">
              The finest choice in modular solution
            </LargeHeading>
            <BlueButton>Start your home construction</BlueButton>
          </div>
        </Wrapper>
      </section>
    </div>
  );
}
