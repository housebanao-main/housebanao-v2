import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Wrapper from '@/components/Wrapper';
import Image from 'next/image';

const HomeInteriorDesign = () => {
    return (
        <>
            {/* Navbar with background for readability */}
            <Navbar className="bg-white shadow-md fixed top-0 left-0 w-full z-10" />

            {/* Banner Image Behind Navbar */}
            <div className="relative w-full h-[400px]">
                <Image 
                    src="/blog/blog1/home.png" 
                    alt="Home Interior Design" 
                    layout="fill" 
                    objectFit="cover" 
                    className="absolute top-0 left-0"
                />
            </div>

            {/* Main Content with Padding to Prevent Overlap */}
            <Wrapper className="max-w-7xl mx-auto p-6 w-full">
                <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                    The Ultimate Guide to Home Interior Design: Why House Banao Is Your Go-To Company
                </h1>
                <p className="text-gray-600 mb-4 text-center">Published on: 03 June, 2024</p>

                <p className="text-gray-700 leading-relaxed">
                    Have you ever walked into a room and instantly felt at home, like all the dots connected? That's the wonder of interior home design. It's not just about putting some cute cushions or hanging a pretty painting on the wall; it's about making this place yours.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6">What Is Home Interior Design?</h2>
                <p className="text-gray-700 leading-relaxed">
                    Home interior design is the art and science of enhancing the interior of a space to create a healthier and more aesthetically pleasing environment. It includes color schemes, furniture placement, lighting, and spatial arrangements, ensuring a cohesive look that reflects the homeowner’s personality while maximizing functionality and comfort.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6">The Importance of Interior Design Services</h2>
                <ul className="list-disc list-inside text-gray-700 mt-4">
                    <li><strong>Personalization:</strong> Skilled designers tailor a space to match your unique style and preferences.</li>
                    <li><strong>Functionality:</strong> Expert designers optimize layouts to enhance flow and usability.</li>
                    <li><strong>Aesthetic Appeal:</strong> A well-planned design ensures visual harmony, creating an inviting atmosphere.</li>
                    <li><strong>Value Addition:</strong> A well-designed interior can increase your property value, making it more attractive to potential buyers.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6">How House Banao Excels in Home Interior Design</h2>
                <p className="text-gray-700 leading-relaxed">
                    House Banao is a premier construction and interior design company renowned for its innovation and excellence. Here’s why House Banao should be your first choice:
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-4">
                    <li><strong>Expertise and Experience:</strong> A team of seasoned professionals skilled in diverse design styles.</li>
                    <li><strong>Customized Design Solutions:</strong> Every project is tailored to match your vision and lifestyle.</li>
                    <li><strong>Timely Delivery:</strong> Projects are completed on schedule, ensuring minimal disruption to your routine.</li>
                    <li><strong>End-to-End Solutions:</strong> From concept development to final installation, every phase is handled seamlessly.</li>
                    <li><strong>300+ Quality Checks:</strong> Rigorous quality control ensures exceptional results.</li>
                    <li><strong>Innovative Solutions:</strong> House Banao integrates the latest design trends and functional advancements.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6">Transform Your Space with House Banao</h2>
                <p className="text-gray-700 leading-relaxed">
                    The House Banao design process ensures client satisfaction at every step:
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-4">
                    <li><strong>Initial Consultation:</strong> Understanding your requirements, style preferences, and budget.</li>
                    <li><strong>Concept Development:</strong> Creating mood boards, color schemes, and initial layouts.</li>
                    <li><strong>Design Implementation:</strong> Managing material sourcing, contractor coordination, and execution.</li>
                    <li><strong>Final Touches:</strong> Ensuring every detail aligns with the original vision.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6">The Benefits of Working with House Banao</h2>
                <ul className="list-disc list-inside text-gray-700 mt-4">
                    <li><strong>Stress-Free Experience:</strong> A seamless process from start to finish.</li>
                    <li><strong>Top-Notch Results:</strong> Dedication to quality craftsmanship and superior design.</li>
                    <li><strong>Enhanced Living Environment:</strong> Creating a home that is beautiful, functional, and uniquely yours.</li>
                </ul>
            </Wrapper>

            <Footer />
        </>
    );
};

export default HomeInteriorDesign;
