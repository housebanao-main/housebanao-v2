import Wrapper from '@/components/Wrapper';
import React from 'react';

const homeTypes = [
  {
    title: 'Modern Urban Living Spaces',
    desc: 'Sharp design and practical living for the city — open floor plans, big windows, and high-quality finishes that optimize every inch.',
  },
  {
    title: 'Luxurious Suburban Homes',
    desc: 'Roomy interiors, private gardens, gourmet kitchens, and luxurious master suites — built with families in mind.',
  },
  {
    title: 'Classic Traditional Homes',
    desc: 'Timeless architecture and detailed craftsmanship — from grand colonial houses to charming cottages, built to last.',
  },
  {
    title: 'Sustainable & Eco-Friendly Homes',
    desc: 'Solar panels, rainwater systems, and sustainable materials that cut your carbon footprint and create a healthier home.',
  },
  {
    title: 'Innovative Mixed-Use Developments',
    desc: 'Residential spaces combined with commercial and recreational areas — building lively, connected communities.',
  },
];

export default function HowItStarted() {
  return (
    <section className="bg-[#f5f4f0] py-20 border-b border-[#e8e4df]">
      <Wrapper className="w-full lg:w-[90%] mx-auto">
        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20" data-aos="fade-up">
          <div>
            <p className="text-[#c9a07a] text-sm font-semibold tracking-[4px] uppercase mb-3">
              Our Story
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] leading-tight">
              How It All Started
            </h2>
          </div>
          <p className="text-[#666] text-base md:text-lg leading-relaxed">
            Rajesh Verma, a businessman, planned to build a house — and House Banao guided him through every stage,
            on a reasonable budget, starting with a 3D design. From site preparation and foundation to framing,
            roofing, exterior finishing, doors and windows, and interior finishing — we delivered the complete
            home, step by step.
          </p>
        </div>

        {/* What we build */}
        <div className="mb-14 pb-8 border-b border-[#e8e4df]" data-aos="fade-up">
          <p className="text-[#c9a07a] text-sm font-semibold tracking-[4px] uppercase mb-3">
            What We Build
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] leading-tight mb-4">
            A Style For Every Vision
          </h2>
          <p className="text-[#666] text-lg max-w-2xl leading-relaxed">
            Our portfolio blends many styles and ideas to fit what each client likes — from sleek urban apartments
            to cozy traditional homes, every project reflects our commitment to quality, fresh ideas, and happy clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {homeTypes.map((type, i) => (
            <div
              key={type.title}
              className="group bg-white border border-[#e8e4df] hover:border-[#c9a07a] p-8 flex flex-col gap-3 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <span className="text-[#c9a07a] text-base font-bold tracking-widest">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-bold text-xl text-[#0f0f0f]">{type.title}</h3>
              <p className="text-[#666] text-base leading-relaxed">{type.desc}</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
