'use client';
import ParaText from '@/components/Headings/ParaText';
import SectionSubHeading from '@/components/Headings/SectionSubHeading';
import React, { useEffect, useState } from 'react';

const HomeInteriorCard = ({ logo, heading, description, bgColor, onBookNow, animationClass }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className={`relative p-4 rounded-lg shadow-lg w-full ${bgColor} mx-auto ${animationClass}`}>
      <div className="flex items-center justify-center mx-auto mb-4">
        <img src={logo} alt="Logo" className="w-26 h-20" />
      </div>
      <SectionSubHeading className="uppercase font-bold mb-2 text-center">{heading}</SectionSubHeading>
      <ParaText className="text-gray-600 text-center mb-6 text-sm sm:text-base">{description}</ParaText>
      {isClient && (
        <button
          onClick={onBookNow}
          className="absolute bottom-[-30px] left-0 right-0 mx-auto w-[150px] bg-black text-white text-sm sm:text-lg font-bold rounded-lg px-4 py-3 hover:bg-gray-800 transition duration-300"
        >
          Book Now
        </button>
      )}
    </div>
  );
};

export default HomeInteriorCard;
