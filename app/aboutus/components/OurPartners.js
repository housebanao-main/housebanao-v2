import React from 'react';
import Image from 'next/image';
import OfferingIMG1 from '@/public/aboutUs/offering1.png';
import OfferingIMG2 from '@/public/aboutUs/offering2.png';
import OfferingIMG3 from '@/public/aboutUs/offering3.png';
import OfferingIMG4 from '@/public/aboutUs/offering4.png';

const partners = [
    { src: OfferingIMG1, alt: 'Partner 1' },
    { src: OfferingIMG2, alt: 'Partner 2' },
    { src: OfferingIMG3, alt: 'Partner 3' },
    { src: OfferingIMG4, alt: 'Partner 4' },
];

const OurPartners = () => {
    return (
        <div className='bg-gray-100 p-5 text-center m-4 my-8'>
            <h2 className='text-3xl font-bold mb-4 text-[#5D5D5D]'>Our Partners</h2>
            <div className='flex flex-wrap justify-center gap-4'>
                {partners.map((partner, index) => (
                    <div key={index} className='w-full max-w-xs'>
                        <Image className='w-full h-48 object-cover' src={partner.src} alt={partner.alt} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurPartners;
