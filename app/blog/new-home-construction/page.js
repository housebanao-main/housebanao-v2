import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Wrapper from '@/components/Wrapper';
import Image from 'next/image';

const NewHomeConstruction = () => {
    return (
        <>
            <Head>
                <title>New Home Construction: Cost, Financing & Trends | House Banao</title>
                <meta name="description" content="Discover the costs, financing options, and latest trends in new home construction. House Banao ensures quality craftsmanship starting at Rs. 999/sq ft." />
                <meta name="keywords" content="new home construction, home building cost, house construction, financing new home, home design trends" />
                <meta name="author" content="House Banao" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="New Home Construction: Cost, Financing & Trends | House Banao" />
                <meta property="og:description" content="Learn about home construction costs, financing options, and the latest design trends. House Banao offers expert guidance for building your dream home." />
                <meta property="og:image" content="/blog/blog1/blog1.png" />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.housebanao.com/blog/new-home-construction" />
                <link rel="canonical" href="https://www.housebanao.com/blog/new-home-construction" />
            </Head>

            {/* Navbar with background for readability */}
            <Navbar className="bg-white shadow-md fixed top-0 left-0 w-full z-10" />

            {/* Banner Image Behind Navbar */}
            <div className="relative w-full h-[400px]">
                <Image 
                    src="/blog/blog1/blog1.png" 
                    alt="New Home Construction" 
                    layout="fill" 
                    objectFit="cover" 
                    className="absolute top-0 left-0"
                />
            </div>

            {/* Main Content */}
            <Wrapper className="max-w-7xl mx-auto p-6 w-full">
                <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                    Your Ultimate Guide to New Home Construction: Cost, Financing, and Trends
                </h1>
                <p className="text-gray-600 mb-4 text-center">Published on: 01 June, 2024</p>

                <p className="text-gray-700 leading-relaxed">
                    Thinking about building a new home? That is an exciting journey! But it comes with a lot of decisions. Whether you're looking for newly built homes or trying to estimate construction costs per square foot, we are here to simplify the process.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6">Understanding New Home Construction Costs: A Breakdown</h2>
                <p className="text-gray-700 leading-relaxed">
                    Construction costs vary based on several factors like location, materials, and design complexity. Here is a breakdown of key cost elements:
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-4">
                    <li>Site Preparation Costs</li>
                    <li>Framing Costs</li>
                    <li>Exterior and Interior Finishing</li>
                    <li>Inspection and Permit Fees</li>
                    <li>Taxes and Insurance</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6">Why Choose House Banao for Your Construction Needs?</h2>
                <p className="text-gray-700 leading-relaxed">
                    At House Banao, we do not just build houses—we create experiences. With our starting price at just Rs. 999 per square foot, we ensure top-quality craftsmanship and a hassle-free process.
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-4">
                    <li><strong>Expertise & Transparency:</strong> Clear communication throughout the process.</li>
                    <li><strong>High-Quality Construction:</strong> Durable, energy-efficient homes.</li>
                    <li><strong>Flexible Financing:</strong> Assistance in finding the best loan options.</li>
                    <li><strong>Timely Delivery:</strong> Move in on schedule with confidence.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6">Financing Your New Home Construction</h2>
                <p className="text-gray-700 leading-relaxed">
                    A construction loan covers building expenses and transitions into a mortgage once your home is complete. Compare rates from different lenders to get the best deal.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6">Closing on Your New Construction Home</h2>
                <p className="text-gray-700 leading-relaxed">
                    After your home passes the final inspection, closing day marks the moment you receive the keys to your dream home. A final walkthrough ensures everything meets your expectations.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6">Making Your House a Home</h2>
                <p className="text-gray-700 leading-relaxed">
                    Once built, it is time to personalize your home! Choose a color scheme that reflects your style, invest in quality furniture, and add decorative touches to make it truly yours.
                </p>
            </Wrapper>

            <Footer />
        </>
    );
};

export default NewHomeConstruction;
