import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Wrapper from "@/components/Wrapper";
import CustomerReviews from "@/components/CustomerReviews";
import GetInTouch from "@/components/GetInTouch";
import { CollabsSection } from "@/components/CollabSection";

export const metadata = {
  title: "Customer Testimonials | House Banao",
  description:
    "Read what House Banao's customers say about their construction & interior design experience — real stories from real homeowners across Gurgaon & Delhi NCR.",
  keywords:
    "House Banao testimonials, customer reviews, construction reviews, interior design reviews, Gurgaon, Delhi NCR",
  authors: [{ name: "House Banao" }],
  openGraph: {
    title: "Customer Testimonials | House Banao",
    description:
      "Real stories from real homeowners about their House Banao construction & design experience.",
    type: "website",
    url: "https://www.housebanao.com/testimonials",
  },
  alternates: {
    canonical: "https://www.housebanao.com/testimonials",
  },
};

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "4.8/5", label: "Average Rating" },
  { value: "10+", label: "Years Experience" },
  { value: "300+", label: "Quality Checks" },
];

const TestimonialsPage = () => {
  return (
    <div className="relative w-full overflow-x-hidden bg-white">
      <Navbar isWhite={false} />

      {/* Hero */}
      <div
        className="relative min-h-[55vh] flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: 'url("/Hero.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/65"></div>
        <div className="relative z-10 px-4 pt-24 pb-16">
          <div className="w-12 h-[2px] bg-[#c9a07a] mx-auto mb-5"></div>
          <p className="text-[#c9a07a] text-xs font-semibold tracking-[4px] uppercase mb-4">
            Client Stories
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Client Testimonials
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            Real stories from real homeowners — verified on Google.
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-[#0f0f0f] border-b border-white/10">
        <Wrapper className="w-full lg:w-[90%] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center justify-center py-8 px-4 text-center">
                <span className="text-3xl font-bold text-[#c9a07a] mb-1">{s.value}</span>
                <span className="text-white/50 text-xs tracking-widest uppercase">{s.label}</span>
              </div>
            ))}
          </div>
        </Wrapper>
      </div>

      {/* Reviews Grid */}
      <CustomerReviews />

      {/* Trust section */}
      <section className="bg-white py-20 border-b border-[#e8e4df]">
        <Wrapper className="w-full lg:w-[90%] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-8 border-b border-[#e8e4df]">
            <div>
              <p className="text-[#c9a07a] text-xs font-semibold tracking-[4px] uppercase mb-3">
                Our Promise
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] leading-tight">
                Why Clients Trust House Banao
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#e8e4df] border border-[#e8e4df]">
            {[
              {
                title: "Transparent Pricing",
                desc: "Zero hidden costs. You know exactly what you're paying for — from day one to handover.",
              },
              {
                title: "On-Time Delivery",
                desc: "We commit to deadlines and deliver. Your move-in date is our milestone.",
              },
              {
                title: "Quality Assurance",
                desc: "300+ quality checks per project ensure your home meets the highest standards.",
              },
            ].map((item, i) => (
              <div key={i} className="p-8 md:p-10">
                <div className="w-8 h-[2px] bg-[#c9a07a] mb-6"></div>
                <h3 className="text-[#0f0f0f] font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Wrapper>
      </section>

      <GetInTouch />
      <CollabsSection />
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
