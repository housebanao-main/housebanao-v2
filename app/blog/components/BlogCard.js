import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ title, excerpt, image, date, category, readTime, link, index = 0 }) => {
    return (
        <Link href={link} className='group block' data-aos='fade-up' data-aos-delay={index * 100}>
            <article className='h-full flex flex-col bg-white border border-[#e8e4df] overflow-hidden transition-shadow duration-300 hover:shadow-xl'>
                <div className='relative w-full h-60 overflow-hidden'>
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className='object-cover transition-transform duration-700 group-hover:scale-105'
                    />
                    {category && (
                        <span className='absolute top-4 left-4 bg-[#0f0f0f]/85 text-white text-xs font-semibold tracking-[3px] uppercase px-3 py-1.5'>
                            {category}
                        </span>
                    )}
                </div>
                <div className='flex flex-col flex-grow p-6'>
                    <div className='flex items-center gap-2 text-[#c9a07a] text-xs font-semibold tracking-[3px] uppercase mb-3'>
                        <span>{date}</span>
                        {readTime && (
                            <>
                                <span className='w-1 h-1 rounded-full bg-[#c9a07a]'></span>
                                <span className='text-[#999] tracking-normal normal-case font-medium'>{readTime}</span>
                            </>
                        )}
                    </div>
                    <h3 className='text-[#0f0f0f] text-xl font-bold leading-snug mb-3 group-hover:text-[#c9a07a] transition-colors duration-300'>
                        {title}
                    </h3>
                    {excerpt && (
                        <p className='text-[#666] text-sm leading-relaxed mb-6 flex-grow'>
                            {excerpt}
                        </p>
                    )}
                    <span className='inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-[#0f0f0f] group-hover:text-[#c9a07a] transition-colors duration-300 mt-auto'>
                        Read More
                        <span className='transition-transform duration-300 group-hover:translate-x-1'>&rarr;</span>
                    </span>
                </div>
            </article>
        </Link>
    );
};

export default BlogCard;
