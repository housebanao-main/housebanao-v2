import ParaText from '@/components/Headings/ParaText';
import SectionHeading from '@/components/Headings/SectionHeading';
import Wrapper from '@/components/Wrapper';
import Image from 'next/image';
import React from 'react';
import TeamImage from '@/public/team/team.jpeg';

const WhoWeAre = () => {
    return (
        <Wrapper className='flex flex-col md:flex-row w-full lg:w-[90%] mx-auto'>
            <div className='w-full md:w-1/2 p-4'>
                <Image 
                    src={TeamImage} 
                    alt='Our Team' 
                    className='w-full h-[400px] object-cover rounded-lg shadow-lg mb-4' 
                />
            </div>
            <div className='w-full md:w-1/2 p-4 flex items-center'>
                <div>
                    <SectionHeading className='text-[#5D5D5D] text-center font-bold mb-4'>
                        Who We Are
                    </SectionHeading>
                    <ParaText className='text-[#575757] text-2xl leading-relaxed text-center'>
                     House Banao was founded on one belief that everyone deserves a beautiful and well-maintained home. With many years of experience, our passionate team of designers, architects, and builders work tirelessly to provide the best services beyond our client's expectations. We believe that every house tells a story, so here we are committed to assisting our clients in creating their own. One of the main things that sets us apart from others is that we take pride in working one-on-one with our clients to bring their unique vision to life.
                    </ParaText>
                </div>
            </div>
        </Wrapper>
    );
};

export default WhoWeAre;
