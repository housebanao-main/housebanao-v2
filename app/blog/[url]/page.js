'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogIMG1 from '@/public/blog/blog1/blog1.png';

import Banner from './components/Banner';
import InfoSection from './components/InfoSection';

const BlogContent = () => {
    const searchParams = useSearchParams();
    const [blogData, setBlogData] = useState(null);

    useEffect(() => {
        const data = searchParams.get('data');
        if (data) {
            setBlogData(JSON.parse(data));
            console.log(JSON.parse(data));
        }
    }, [searchParams]);

    return (
        <div className='relative min-h-screen flex flex-col'>
            <Navbar />
            <div className='pt-16 relative flex-grow' style={{ height: '80vh' }}>
                <div className='absolute inset-0 bg-black opacity-95'></div>
                <Image src={BlogIMG1} alt='blog1' layout='fill' objectFit='cover' style={{ opacity: 0.5 }} />
               <Banner/>
            </div>
           <InfoSection/>
            <Footer />
        </div>
    );
};

export default BlogContent;
