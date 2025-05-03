import ParaText from '@/components/Headings/ParaText'
import SectionHeading from '@/components/Headings/SectionHeading'
import Wrapper from '@/components/Wrapper'
import { IMG_PLACEHOLDER } from '@/utils/content'
import Image from 'next/image'
import React from 'react'

export default function CustomerSays() {
  return (
    <Wrapper className={"w-full lg:w-[90%] mx-auto"}>
<SectionHeading className={"font-bold mb-8"}>What Our customer says</SectionHeading>
<div className='md:flex space-y-4 justify-between gap-6 '>
<div className='flex md:block items-center justify-center'>
    <Image src={"/images/customer-1.jpg"} alt='customer-review' width={500} height={500} className='object-cover max-h-80 max-w-80 rounded-lg' />
</div>
<div className='flex flex-col gap-4'>
    <ParaText className={"grow flex items-center justify-center"}>
    I, Priya Sharma, chose “House Banao” Home Construction Company to build my dream house. Their professional team got my house built on time and within my budget with complete transparency and quality from pre-construction to post-construction.
    Pre-construction: Initially a clear plan was made keeping in mind all my needs and budget
    Construction Phase: Complete transparency and quality was maintained in the work. Post-construction: Information related to all the facilities and maintenance of the house was given.
    </ParaText>
    <div>
        <ParaText className={"text-[#3D6EA6] pb-4"}>-Mrs. Priya Sharma</ParaText>
    </div>
    </div>
</div>
    </Wrapper>
  )
}
