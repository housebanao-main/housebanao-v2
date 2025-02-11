'use client';
import React from 'react';
import { usePopup } from '../context/PopupContext';
import Wrapper from './Wrapper';
import BlackBtn from './Buttons/BlackBtn';
import SectionSubHeading from './Headings/SectionSubHeading';
import Image from 'next/image';

const GetInTouch = () => {
  const { openPopup } = usePopup(); // Get openPopup function from context

  return (
    <Wrapper>
      <Wrapper className="py-6 border-gray-400 border rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 w-full lg:w-[90%] mx-auto">
        <div className="flex items-center gap-4">
          <div>
            <Image
              src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
              alt="icon"
              width={100}
              height={100}
              className="w-16"
            />
          </div>
          <div>
            <SectionSubHeading className="font-bold">Still have questions?</SectionSubHeading>
            <SectionSubHeading className="text-slate-400">
              Can not find the answer you are looking for? Please connect with our friendly team.
            </SectionSubHeading>
          </div>
        </div>
        <BlackBtn className="text-nowrap" onClick={openPopup}> {/* Call openPopup on click */}
          Get In Touch
        </BlackBtn>
      </Wrapper>
    </Wrapper>
  );
};

export default GetInTouch;
