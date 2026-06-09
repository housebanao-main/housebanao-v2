import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedBlogCard = ({ title, excerpt, image, date, category, readTime, link }) => {
    return (
        <Link href={link} className='group block' data-aos='fade-up'>
            <article className='grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#e8e4df] overflow-hidden'>
                <div className='relative w-full h-72 md:h-full overflow-hidden'>
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className='object-cover transition-transform duration-700 group-hover:scale-105'
                    />
                    {category && (
                        <span className='absolute top-5 left-5 bg-[#0f0f0f] text-white text-xs font-semibold tracking-[3px] uppercase px-4 py-2'>
                            {category}
                        </span>
                    )}
                </div>
                <div className='flex flex-col justify-center p-8 md:p-12 bg-[#f5f4f0]'>
                    <span className='text-[#c9a07a] text-sm font-bold tracking-[4px] uppercase mb-4'>
                        Featured Post
                    </span>
                    <h3 className='text-2xl md:text-3xl font-bold text-[#0f0f0f] leading-snug mb-4 group-hover:text-[#c9a07a] transition-colors duration-300'>
                        {title}
                    </h3>
                    {excerpt && (
                        <p className='text-[#666] text-base leading-relaxed mb-6'>
                            {excerpt}
                        </p>
                    )}
                    <div className='flex items-center gap-3 text-[#666] text-sm mb-8'>
                        <span>{date}</span>
                        {readTime && (
                            <>
                                <span className='w-1 h-1 rounded-full bg-[#c9a07a]'></span>
                                <span>{readTime}</span>
                            </>
                        )}
                    </div>
                    <span className='inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-[#0f0f0f] border border-[#0f0f0f] px-6 py-3 group-hover:bg-[#0f0f0f] group-hover:text-white transition-all duration-300 w-fit'>
                        Read Article
                        <span className='transition-transform duration-300 group-hover:translate-x-1'>&rarr;</span>
                    </span>
                </div>
            </article>
        </Link>
    );
};

export default FeaturedBlogCard;
