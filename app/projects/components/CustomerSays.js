import Wrapper from '@/components/Wrapper'
import Image from 'next/image'
import React from 'react'

export default function CustomerSays() {
  return (
    <section className="bg-[#f5f4f0] py-20 border-b border-[#e8e4df]">
      <Wrapper className="w-full lg:w-[90%] mx-auto">
        <div className="mb-14 pb-8 border-b border-[#e8e4df]" data-aos="fade-up">
          <p className="text-[#c9a07a] text-sm font-semibold tracking-[4px] uppercase mb-3">
            Client Story
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] leading-tight">
            What Our Customer Says
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[#e8e4df] overflow-hidden bg-white" data-aos="fade-up">
          <div className="relative h-80 lg:h-auto">
            <Image
              src="/images/customer-1.jpg"
              alt="Mrs. Priya Sharma"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <span className="text-[#c9a07a] text-4xl font-bold leading-none mb-4">&ldquo;</span>
            <p className="text-[#666] text-base md:text-lg leading-relaxed mb-8">
              I, Priya Sharma, chose House Banao to build my dream house. Their professional team got my house
              built on time and within my budget — with complete transparency and quality from pre-construction
              to post-construction.
              <br /><br />
              <span className="text-[#0f0f0f] font-semibold">Pre-construction:</span> A clear plan was made keeping
              all my needs and budget in mind.{' '}
              <span className="text-[#0f0f0f] font-semibold">Construction phase:</span> Complete transparency and
              quality was maintained throughout.{' '}
              <span className="text-[#0f0f0f] font-semibold">Post-construction:</span> I was given all the
              information related to facilities and maintenance of the house.
            </p>
            <p className="text-[#c9a07a] font-semibold tracking-wide uppercase text-sm">
              — Mrs. Priya Sharma
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}
