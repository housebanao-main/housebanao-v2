import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Wrapper from '@/components/Wrapper';
import Image from 'next/image';

const BestConstructionCompanyGurgaon = () => {
    return (
        <>
            {/* Navbar with background for readability */}
            <Navbar className="bg-white shadow-md fixed top-0 left-0 w-full z-10" />

            {/* Banner Image Behind Navbar */}
            <div className="relative w-full h-[400px]">
                <Image 
                    src="/blog/blog1/building.png" 
                    alt="Best Construction Company in Gurgaon" 
                    layout="fill" 
                    objectFit="cover" 
                    className="absolute top-0 left-0"
                />
            </div>

            {/* Main Content with Padding to Prevent Overlap */}
            <Wrapper className="max-w-7xl mx-auto p-6 w-full">
                <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Finding the Best Construction Company in Gurgaon: A Complete Guide</h1>
                <p className="text-gray-600 mb-4 text-center">Published on: 02 June, 2024</p>

                <p className="text-gray-700 leading-relaxed">
                    Are you looking for the best construction company in Gurgaon? If you are constructing a dream home, renovating a space, or commencing something commercial, picking the right team is important. A good construction partner can make everything smoother & less stressful. In this blog, we will explore what makes a construction company shine & why House Banao should be on your list.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6">Why Choosing the Right Construction Company Matters</h2>
                <p className="text-gray-700 leading-relaxed">
                    Think about your construction project like a big puzzle. Each piece must fit perfectly to create something charming & useful. So, selecting a construction company in Gurgaon is like choosing the master craftsmen to put that puzzle together.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6">What Factors Set the Best Construction Companies in Gurgaon Apart?</h2>
                <ul className="list-disc list-inside text-gray-700 mt-4">
                    <li><strong>Experience Matters:</strong> A company with lots of projects under its belt is likely to handle tricky issues better than others.</li>
                    <li><strong>Reputation:</strong> Companies with strong praise from past clients are usually solid choices.</li>
                    <li><strong>Range of Services:</strong> The top companies in Gurgaon do not just build; they also offer design & planning help.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6">Why "House Banao" is Your Go-To Construction Company in Gurgaon</h2>
                <ul className="list-disc list-inside text-gray-700 mt-4">
                    <li><strong>Expertise in Diverse Projects:</strong> Whether it is a comfy home or a modern office, House Banao knows how to do it all!</li>
                    <li><strong>Comprehensive Services:</strong> From start to finish, they cover everything—no need for multiple contractors.</li>
                    <li><strong>Customer-Centric Approach:</strong> At House Banao, what you want matters most.</li>
                    <li><strong>Transparency and Communication:</strong> They keep you updated throughout the project—no surprises or hidden fees.</li>
                    <li><strong>Quality Craftsmanship:</strong> Their work shines because they use high-quality materials and real industry best practices!</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6">Key Tips for Choosing the Best Construction Company in Gurgaon</h2>
                <ul className="list-disc list-inside text-gray-700 mt-4">
                    <li><strong>Do Your Research:</strong> Check out the company's online presence and reviews.</li>
                    <li><strong>Check Credentials:</strong> Make sure they are licensed and insured—it protects you too!</li>
                    <li><strong>Discuss Your Vision:</strong> Confirm that they get what you're looking for.</li>
                    <li><strong>Review Contracts Carefully:</strong> Look over contracts closely—check that all details like costs and timelines are clear.</li>
                </ul>
            </Wrapper>

            <Footer />
        </>
    );
};

export default BestConstructionCompanyGurgaon;
