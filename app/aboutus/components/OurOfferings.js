import React from 'react';
import Image from 'next/image';
import OfferingIMG1 from '@/public/aboutUs/offering1.png';
import OfferingIMG2 from '@/public/aboutUs/offering2.png';
import OfferingIMG3 from '@/public/aboutUs/offering3.png';
import OfferingIMG4 from '@/public/aboutUs/offering4.png';
import Wrapper from '@/components/Wrapper';
import SectionHeading from '@/components/Headings/SectionHeading';
import ParaText from '@/components/Headings/ParaText';

const offerings = [
    {
        img: OfferingIMG1,
        alt: 'Offering 1',
        title: 'End-To-End Construction',
        description: 'We offer comprehensive end-to-end construction services, managing every phase from initial planning and design to final completion. Our team ensures seamless execution, delivering high-quality results on time and within budget.'
    },
    {
        img: OfferingIMG2,
        alt: 'Offering 2',
        title: 'Interior Designing',
        description: 'Our interior design services transform spaces into stylish, functional, and personalized environments. From concept to completion, we tailor every detail to reflect your unique taste and lifestyle, creating spaces that inspire and delight.'
    },
    {
        img: OfferingIMG3,
        alt: 'Offering 3',
        title: 'Construction + Interior',
        description: 'We offer integrated interior design and construction services, providing seamless solutions from concept to completion. Our team transforms your vision into reality, creating beautiful, functional spaces with impeccable craftsmanship and attention to detail.'
    },
    {
        img: OfferingIMG4,
        alt: 'Offering 4',
        title: 'Office Interior',
        description: 'We specialize in creating dynamic and efficient office interiors that enhance productivity and reflect your brand’s identity. Our designs blend functionality with aesthetic appeal, crafting workspaces that inspire and support your team’s success.'
    }
];

const OurOfferings = () => {
    return (
        <Wrapper className='w-full lg:w-[90%] mx-auto'>
            {offerings.map((offering, index) => (
                <div key={index} className={`flex flex-col md:flex-row mb-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className='w-full md:w-1/2 p-4'>
                        <Image src={offering.img} alt={offering.alt} className='w-full md:w-3/4 rounded-t-full shadow-lg mx-auto' />
                    </div>
                    <div className='w-full md:w-1/2 p-4 flex items-center'>
                        <div className='text-center'>
                            <SectionHeading className='text-[#5D5D5D]  font-bold mb-4'>{offering.title}</SectionHeading>
                            <ParaText className='text-[#575757]  leading-relaxed'>{offering.description}</ParaText>
                        </div>
                    </div>
                </div>
            ))}
        </Wrapper>
    );
};

export default OurOfferings;
