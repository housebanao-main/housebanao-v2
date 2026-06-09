import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Blogs from './components/Blogs';
import GetInTouch from '@/components/GetInTouch';
import ProjectForm from '@/components/ProjectForm';
import { CollabsSection } from '@/components/CollabSection';

export const metadata = {
    title: 'Blog | Construction & Interior Design Insights | House Banao',
    description:
        "Explore House Banao's blog for expert tips, trends, and guides on home construction, interior design, and renovation in Gurgaon & Delhi NCR.",
    authors: [{ name: 'House Banao' }],
    openGraph: {
        title: 'Blog | Construction & Interior Design Insights | House Banao',
        description:
            'Expert tips, trends, and guides on home construction and interior design from House Banao.',
        type: 'website',
        url: 'https://www.housebanao.com/blog',
    },
    alternates: {
        canonical: 'https://www.housebanao.com/blog',
    },
};

const BlogPage = () => {
    return (
        <div className='relative w-full overflow-x-hidden bg-white'>
            <Navbar isWhite={false} />

            {/* Hero */}
            <div
                className='relative min-h-[68vh] flex flex-col items-center justify-center text-center'
                style={{
                    backgroundImage: 'url("/Hero.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className='absolute inset-0 bg-black/65'></div>
                <div className='relative z-10 px-4 pt-24 pb-16'>
                    <div className='w-12 h-[2px] bg-[#c9a07a] mx-auto mb-5'></div>
                    <p className='text-[#c9a07a] text-xs font-semibold tracking-[4px] uppercase mb-4'>
                        Insights & Ideas
                    </p>
                    <h1 className='text-4xl md:text-6xl font-bold text-white mb-4 leading-tight'>
                        The House Banao Blog
                    </h1>
                    <p className='text-white/60 text-base md:text-lg max-w-lg mx-auto leading-relaxed'>
                        Practical guides, trends, and expert advice on building and designing your dream home.
                    </p>
                </div>
            </div>

            <Blogs />
            <GetInTouch />
            <ProjectForm />
            <CollabsSection />
            <Footer />
        </div>
    );
};

export default BlogPage;
