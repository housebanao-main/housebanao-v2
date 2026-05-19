import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Wrapper from '@/components/Wrapper';
import LargeHeading from '@/components/Headings/LargeHeading';
import SectionSubHeading from '@/components/Headings/SectionSubHeading';
import CustomerReviews from '@/components/CustomerReviews';
import GetInTouch from '@/components/GetInTouch';
import { CollabsSection } from '@/components/CollabSection';

const TestimonialsPage = () => {
  return (
    <div className="relative w-full overflow-x-hidden">
      <Navbar isWhite={false} />

      {/* Hero Section */}
      <div
        className="pt-32 relative flex items-center justify-center text-white text-4xl font-semibold"
        style={{
          height: '60vh',
          backgroundImage: 'url("/Hero.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Client Testimonials</h1>
          <p className="text-xl text-gray-200 mt-4">Real stories from our satisfied clients</p>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <Wrapper className="py-16">
        <div className="w-full lg:w-[90%] mx-auto">
          <div className="text-center mb-12">
            <LargeHeading className="font-bold mb-4">What Our Clients Say</LargeHeading>
            <SectionSubHeading className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from the homeowners and businesses we've transformed across Gurgaon and Delhi.
            </SectionSubHeading>
          </div>
          <CustomerReviews />
        </div>
      </Wrapper>

      {/* Trust Section */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <Wrapper className="w-full lg:w-[90%] mx-auto">
          <div className="text-center">
            <LargeHeading className="font-bold text-gray-900 mb-4">Why Clients Trust House Banao</LargeHeading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-[#8B4513] mb-3">500+</div>
                <p className="text-gray-700 font-semibold">Projects Completed</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-[#8B4513] mb-3">4.8/5</div>
                <p className="text-gray-700 font-semibold">Average Rating</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-[#8B4513] mb-3">10+ Years</div>
                <p className="text-gray-700 font-semibold">Industry Experience</p>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>

      {/* CTA Section */}
      <GetInTouch />

      {/* Collaboration Section */}
      <CollabsSection />

      <Footer />
    </div>
  );
};

export default TestimonialsPage;
