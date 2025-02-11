"use client";
import TransparentBtn from '@/components/Buttons/TransparentBtn';
import ParaText from '@/components/Headings/ParaText';
import SectionSubHeading from '@/components/Headings/SectionSubHeading';
import Wrapper from '@/components/Wrapper';
import { faqData } from '@/utils/content';
import React from 'react'
import { FaClockRotateLeft } from "react-icons/fa6";

const FaqQuestions = () => {
 const [showMore, setShowMore] = React.useState(false)
  return (
    <>
    <Wrapper className='grid grid-cols-1 md:grid-cols-2 gap-y-6 justify-between gap-x-4 relative pt-0 pb-6 pl-0 pr-0' >
        {!showMore && <div className='bg-gradient-to-t from-white/50 from-20%  to-transparent  absolute w-full h-[40%] bottom-0'></div>}
{faqData.map((faq, index) => (
 (!showMore ? index<=5 &&    <FaqCard key={index} index={index} name={faq.name} answer={faq.answer} icon={faq.icon}/>
    : <FaqCard key={index} index={index} name={faq.name} answer={faq.answer} icon={faq.icon}
    />)
 
))}
    </Wrapper>
    <div className='flex items-center justify-center'>

    <TransparentBtn onClick={()=> setShowMore(p=>!p)} className={"mx-auto"}>{!showMore? "Load More" : "See Less"}</TransparentBtn>
    </div>

    </>
  )
}


const FaqCard= ({name, answer, icon, index}) => {
  return (
    <div className='flex items-start text-black'>
      <div className='mr-4 border-gray-400 p-2 px-2 border rounded-xl '>{index+1}</div>
      <div className='space-y-4'>
        <SectionSubHeading className='font-bold'>{name}</SectionSubHeading>
        <ParaText className='text-gray-500'>{answer}</ParaText>
      </div>
    </div>
  )
}

export default FaqQuestions