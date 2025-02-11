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
    Worked with Team House Banao on my home near Electronic City, and they exceeded my expectations. They stayed on schedule and beautifully integrated modern design with nature. The lush landscape, covering 75% of the plot, includes mature trees and a serene pond, creating a tranquil atmosphere.<br/>
The house uses eco-friendly materials and sustainable technologies. The interior design, with ample natural light and earthy tones, seamlessly connects with the outdoors. Outdoor spaces like the deck and fire pit are perfect for relaxation.<br/>
I highly recommend Team House Banao for their professionalism, craftsmanship, and dedication to creating a harmonious living space.
    </ParaText>
    <div>
        <ParaText className={"text-[#3D6EA6] pb-4"}>-Mr. Sajal Gupta</ParaText>
    </div>
    </div>
</div>
    </Wrapper>
  )
}
