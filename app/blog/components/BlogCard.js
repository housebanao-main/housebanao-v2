import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ title, image, date, link }) => {
    return (
        <Link href={link} passHref>
            <div className='border rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform duration-300'>
                <div className='relative w-full h-64'>
                    <Image 
                        src={image} 
                        alt={title} 
                        layout='fill' 
                        objectFit='cover' 
                    />
                </div>
                <div className='p-4 space-y-2'>
                    <p className='text-[#2A27E8] text-sm'>{date}</p>
                    <h2 className='text-[#575757] text-xl font-semibold'>{title}</h2>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
