import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Blogs from './components/Blogs';
import Faqs from '@/components/Faqs';
import GetInTouch from '@/components/GetInTouch';
import ProjectForm from '@/components/ProjectForm';
import { CollabsSection } from '@/components/CollabSection';

const Blog1 = () => {
    return (
        <div className='relative h-screen'>
            <Navbar />
            <div 
                className='pt-16 relative flex items-center justify-center text-white text-4xl font-semibold' 
                style={{ 
                    height: '80vh', 
                    backgroundImage: 'url("/Hero.jpg")', 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center', 
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <h1 className='relative z-10'>Blog Page</h1>
            </div>
            <Blogs />
            <Faqs />
            <GetInTouch />
            <ProjectForm />
            <CollabsSection />
            <Footer />
        </div>
    );
};

export default Blog1;
