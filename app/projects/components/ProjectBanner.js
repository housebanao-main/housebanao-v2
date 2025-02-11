import ParaText from '@/components/Headings/ParaText'
import SectionSubHeading from '@/components/Headings/SectionSubHeading'
import Wrapper from '@/components/Wrapper'
import { IMG_PLACEHOLDER } from '@/utils/content'
import Image from 'next/image'
import { FaRulerCombined, FaBuilding, FaBox } from 'react-icons/fa';
import React from 'react'

export default function ProjectBanner() {
  return (
    <>
    <Wrapper className={" text-black pb-0 "}>
      <div className='grid grid-cols-1 items-center justify-center lg:grid-cols-3 gap-4'>
        <ImageCard imageSrc='/images/1.png' subHeading='3D Render' />
        <ImageCard imageSrc='/images/2.png' subHeading='Plot Image' />
        <ImageCard imageSrc='/images/3.png' subHeading='Actual Image' />
      </div>
    </Wrapper>

    <div className='py-4 border-y-2 border-black'>
      <Wrapper className={"flex justify-around py-0 pt-0 pb-0"}>
        <div className='flex flex-col gap-0 items-center'>
          <ParaText className={"font-bold"}>CNR11011</ParaText>
          <ParaText className={""}>2, 2nd Cross, Gurgoan, Delhi</ParaText>
        </div>

        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-2'><FaRulerCombined /><ParaText>3964 sq.ft</ParaText></div>
          <div className='flex items-center gap-2'><FaBuilding /><ParaText>G+3</ParaText></div>
          <div className='flex items-center gap-2'><FaBox /><ParaText>Classic Package</ParaText></div>
        </div>
      </Wrapper>
    </div>
    </>
  )
}

const ImageCard = ({ imageSrc, subHeading }) => (
  <div className='relative rounded-lg overflow-hidden mx-auto'>
    <Image src={imageSrc} alt='project' width={500} height={500} className='max-h-72 object-cover' />
    <div className='absolute top-0 left-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm rounded-lg px-10 py-2 text-white'>
      <SectionSubHeading>{subHeading}</SectionSubHeading>
    </div>
  </div>
)
