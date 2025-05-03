import SectionHeading from '@/components/Headings/SectionHeading'
import Wrapper from '@/components/Wrapper'
import React from 'react'
import FaqQuestions from './FaqQuestions'

const Faqs = () => {
  return (
   <Wrapper className={"w-full lg:w-[90%] mx-auto"}>
    <SectionHeading className={"text-black font-bold text-center mb-8"}>Frequently asked questions</SectionHeading>
    <FaqQuestions/>
   </Wrapper>
  )
}

export default Faqs