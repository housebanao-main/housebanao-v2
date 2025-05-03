'use client';
import React from 'react';
import { usePopup } from '@/context/PopupContext';
import HomeInteriorCard from './Homeinteriorcard';
import Wrapper from '@/components/Wrapper';
import SectionHeading from '@/components/Headings/SectionHeading';

const ServicesSection = () => {
  const { openPopup } = usePopup(); // Get openPopup function from context

  return (
    <div className="bg-[#F5F5F7] w-full lg:w-[90%] mx-auto">
      <Wrapper>
        {/* Heading */}
        <div className="mb-8">
          <SectionHeading className="text-left font-bold text-[#2A27E8] mb-2">SERVICE,</SectionHeading>
          <SectionHeading className="text-left font-bold text-black">YOU WON'T GET ANYWHERE</SectionHeading>
        </div>

        {/* Service Boxes */}
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          <HomeInteriorCard
            logo="/service/service1.png"
            heading="Home Interior"
            description="Elevate the aesthetic appeal and functionality of your living spaces with our bespoke home interior design solutions."
            bgColor="bg-[#FFFFFF]"
            onBookNow={openPopup} // Pass openPopup function
            animationClass="hover:scale-105 hover:shadow-2xl transition duration-500"
          />
          <HomeInteriorCard
            logo="/service/service2.png"
            heading="Renovation"
            description="Transform your outdated or worn-out interiors into vibrant and revitalized spaces with our renovation services."
            bgColor="bg-[#E2E7F1]"
            onBookNow={openPopup} // Pass openPopup function
            animationClass="hover:scale-105 hover:shadow-2xl transition duration-500"
          />
          <HomeInteriorCard
            logo="/service/service3.png"
            heading="Office Interior"
            description="Create inspiring and functional work environments with our office interior design and build services."
            bgColor="bg-[#FFFFFF]"
            onBookNow={openPopup} // Pass openPopup function
            animationClass="hover:scale-105 hover:shadow-2xl transition duration-500"
          />
          <HomeInteriorCard
            logo="/service/service4.png"
            heading="Home Construction"
            description="At House Banao, we specialize in providing comprehensive home construction services aimed at bringing your dream home to life."
            bgColor="bg-[#E2E7F1]"
            onBookNow={openPopup} // Pass openPopup function
            animationClass="hover:scale-105 hover:shadow-2xl transition duration-500"
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default ServicesSection;
