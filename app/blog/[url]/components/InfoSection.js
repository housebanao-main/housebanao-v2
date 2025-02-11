import React from 'react'
import Blogs from '@/app/blog/components/Blogs';
import OfferingIMG1 from '@/public/aboutUs/offering1.png';
import OfferingIMG2 from '@/public/aboutUs/offering2.png';
import OfferingIMG3 from '@/public/aboutUs/offering3.png';
import OfferingIMG4 from '@/public/aboutUs/offering4.png';
import BlogIMG1 from '@/public/blog/blog1/blog1.png';
import Image from 'next/image';
import Wrapper from '@/components/Wrapper';
import SectionHeading from '@/components/Headings/SectionHeading';
import ParaText from '@/components/Headings/ParaText';
import { IMG_PLACEHOLDER } from '@/utils/content';

const InfoSection = () => {
  return (
    <Wrapper className='w-[90%] m-auto'>
                <SectionHeading className='font-medium  mb-4'>AFFORDABLE ELEGANCE</SectionHeading>
                <ParaText className='text-[#575757] mb-8'>
                    To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family.
                </ParaText>
                <Image src={BlogIMG1} alt='blog-image' className='mx-auto my-8' />
                <SectionHeading className='font-medium  mb-4'>TIPS FOR LUXE DECOR ON A BUDGET</SectionHeading>
                <ParaText className='text-[#575757] mb-8'>
                    To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple.
                </ParaText>
                <ParaText className='text-[#575757] mb-8'>
                    To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family.
                </ParaText>
               <ImageGrid/>
                <ParaText className='text-[#575757] mb-8'>
                    The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. To achieve this.
                </ParaText>
                <SectionHeading className='py-8 font-medium  text-center'>You may also like</SectionHeading>
                <Blogs numberOfItems={3} />
            </Wrapper>
  )
}


const ImageGrid= ()=> (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 mb-4 gap-4 items-center justify-center place-content-center'>
<div>
    <Image src={IMG_PLACEHOLDER} alt='offering1' width={500} height={500} className=' h-80 w-full object-cover rounded-lg' />
</div>
<div className='grid grid-cols-2 gap-4'>
    <Image src={IMG_PLACEHOLDER} alt='offering1' width={500} height={500} className=' h-80 object-cover rounded-lg' />
    <Image src={IMG_PLACEHOLDER} alt='offering1' width={500} height={500} className=' h-80 object-cover rounded-lg' />

</div>
</div>
<div className='grid grid-cols-1 mb-6 md:grid-cols-2  gap-4'>

<div className='grid grid-cols-2  gap-4'>
    <Image src={IMG_PLACEHOLDER} alt='offering1' width={500} height={500} className=' h-80 object-cover rounded-lg' />
    <Image src={IMG_PLACEHOLDER} alt='offering1' width={500} height={500} className=' h-80 object-cover rounded-lg' />

</div>
<div>
    <Image src={IMG_PLACEHOLDER} alt='offering1' width={500} height={500} className=' h-80 w-full object-cover rounded-lg' />
</div>
</div>
</>
)


export default InfoSection