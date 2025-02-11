import React from "react";
import Bg from "@/public/background/serviceBannerBg.svg";
import SectionHeading from "@/components/Headings/SectionHeading";
import LargeHeading from "@/components/Headings/LargeHeading";
import Wrapper from "@/components/Wrapper";
import BlueButton from "@/components/Buttons/BlueButton";
import Image from "next/image";
import { IMG_PLACEHOLDER } from "@/utils/content";
import HomeService from "@/public/service/ServicesHome.png";
const ServiceBanner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Bg})`,
      }}
      className="min-h-[50svh] w-full lg:w-[90%] m-auto text-black pt-16  "
    >
      <Wrapper
        className={
          "flex flex-wrap-reverse sm:flex-nowrap items-center justify-between min-h-[50svh]  gap-4"
        }
      >
        <div className="basis-full sm:basis-3/5 flex sm:block flex-col items-center justify-center">
          <LargeHeading
            className={"font-bold mb-2 sm:mb-8 text-center sm:text-start"}
          >
            Construct your Dream Home with us.
          </LargeHeading>
          <BlueButton className={"text-white translate"}>
            Start your Home construction{" "}
          </BlueButton>
        </div>
        <div className="flex sm:block items-center justify-center basis-full ">
          <Image
            src={HomeService}
            alt=""
            width={500}
            height={500}
            className="rounded-3xl  mx-auto sm:mx-0 sm:ml-auto "
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default ServiceBanner;
