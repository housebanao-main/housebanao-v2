import ParaText from "@/components/Headings/ParaText";
import SectionHeading from "@/components/Headings/SectionHeading";
import Wrapper from "@/components/Wrapper";
import React from "react";

const OurStory = () => {
    return (
        <div className='bg-[#F5F5F7] w-full lg:w-[90%] mx-auto py-10'>
            <Wrapper>
                {/* Our Story Section */}
                <SectionHeading className='text-[#5D5D5D] font-bold mb-6 text-left'>
                    Our Story
                </SectionHeading>
                <ParaText className='text-[#575757] text-lg leading-relaxed mb-4'>
                    Founded in 2016, House Banao began with a mission to provide exceptional construction and interior design services. 
                    Starting with residential projects, we quickly expanded into commercial developments, earning a reputation for quality and innovation.
                </ParaText>
                <ParaText className='text-[#575757] text-lg leading-relaxed mb-4'>
                    Today, as a full-service firm, we handle everything from initial concepts to final execution, ensuring every project exceeds client expectations. 
                    Our commitment to quality, creativity, and customer satisfaction drives us to deliver outstanding results in every space we transform.
                </ParaText>
                <ParaText className='text-[#575757] text-lg leading-relaxed'>
                    At House Banao, we are proud of our journey and excited about the future, continuing to shape the landscape of construction and interior design.
                </ParaText>

        {/* Our Expertise Section */}
        <SectionHeading className="text-[#5D5D5D] font-bold mt-10 mb-6 text-left">
          Our Expertise
        </SectionHeading>
        <ul className="list-disc list-inside text-[#575757] text-lg leading-relaxed mb-6">
          <li>
            <strong>Home Interior Design – </strong> Our experienced designers
            work closely with you to develop a functional and practical living
            area that suits your lifestyle.
          </li>
          <li>
            <strong>Home Construction – </strong> From the foundation to the
            finishing touches, our skilled and experienced team undertakes every
            aspect of building your ideal home.
          </li>
          <li>
            <strong>Office Interior Design – </strong> We provide the design and
            construction of efficient workspaces to enhance your brand and
            foster its success.
          </li>
        </ul>

        {/* Our Approach Section */}
        <SectionHeading className="text-[#5D5D5D] font-bold mt-10 mb-6 text-left">
          Our Approach
        </SectionHeading>
        <ul className="list-disc list-inside text-[#575757] text-lg leading-relaxed mb-6">
          <li>
            <strong>Personalized Services – </strong> We take time to understand
            your needs and preferences.
          </li>
          <li>
            <strong>Quality Craftsmanship – </strong> Attention to detail and
            high-quality results in every project.
          </li>
          <li>
            <strong>Timely Delivery – </strong> Completing projects on time and
            within budget.
          </li>
        </ul>

        {/* Why Choose House Banao Section */}
        <SectionHeading className="text-[#5D5D5D] font-bold mt-10 mb-6 text-left">
          Why Choose House Banao?
        </SectionHeading>
        <ul className="list-disc list-inside text-[#575757] text-lg leading-relaxed">
          <li>
            <strong>One-Stop Solution – </strong> We provide both construction
            and interior design services under one roof, ensuring seamless
            project management.
          </li>
          <li>
            <strong>Experienced Team – </strong> Our skilled professionals have
            years of experience in constructing and designing exceptional
            spaces.
          </li>
          <li>
            <strong>Quality Craftsmanship – </strong> We focus on meticulous
            attention to detail and high-quality standards in every project.
          </li>
          <li>
            <strong>Client-Centric – </strong> Client satisfaction is our top
            priority, and we always strive to exceed expectations.
          </li>
          <li>
            <strong>Innovative Designs – </strong> Our designers stay updated on
            the latest trends and technologies to create modern and stylish
            spaces.
          </li>
          <li>
            <strong>Budget-Friendly – </strong> We offer cost-effective
            solutions without compromising on quality.
          </li>
          <li>
            <strong>Reliability – </strong> We are a trustworthy partner for
            your home construction and interior design needs.
          </li>
        </ul>
      </Wrapper>
    </div>
  );
};

export default OurStory;
