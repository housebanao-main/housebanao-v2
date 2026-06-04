"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Wrapper from "@/components/Wrapper";

const reviews = [
  {
    name: "Vishal Baliyan",
    badge: "Local Guide · 8 reviews",
    avatar: "V",
    avatarBg: "#5f4e8a",
    time: "a year ago",
    text: "House Banao creative prowess and also excels in client service. They provide excellent services at an affordable price. They understood all I wanted and worked beyond my expectations. I would highly recommend House Banao for interior designing.",
  },
  {
    name: "Suman Lata",
    badge: "1 review · 3 photos",
    avatar: "S",
    avatarBg: "#9c4f9e",
    time: "a year ago",
    text: "I am very impressed by the services provided by House Banao! Their team of experts transformed my living space into a stunning oasis that reflects my personal style and exceeds my expectations. The quality of their work is perfect. I would highly recommend House Banao — best interior and construction company.",
  },
  {
    name: "Sonali Gupta",
    badge: "4 reviews",
    avatar: "S",
    avatarBg: "#9c4f9e",
    time: "a year ago",
    text: "I recently had the pleasure of working with House Banao on a construction project, and I am happier with the results. From the initial consultation to the final walk-through, their team was professional, communicative, and attentive to our needs. The project was completed on time, within budget, and exceeded expectations in quality.",
  },
  {
    name: "Riyansh Takur",
    badge: "5 reviews · 6 photos",
    avatar: "r",
    avatarBg: "#c0345a",
    time: "9 months ago",
    text: "House Banao exceeded my expectations! Their team was professional, efficient, and provided top-notch service. I hired them for construction interior design for the Stilt + 4 Floor — result was amazing. The prices were competitive, and the turnaround time was quick. Highly recommend their services!",
  },
  {
    name: "Hitesh Kushwaha",
    badge: "5 reviews",
    avatar: "H",
    avatarBg: "#3a6ea8",
    time: "4 months ago",
    text: "I must recommend this company — having a great experience working with the HouseBanao team. Cost effective work with good service and on time delivery of project. The knowledge of their senior team is excellent in the construction field. Thank you HouseBanao team!",
  },
  {
    name: "Japneet Kaur",
    badge: "2 reviews",
    avatar: "J",
    avatarBg: "#4a7c59",
    time: "6 months ago",
    text: "I had an amazing experience with House Banao, the best construction company in Gurgaon. Their team delivered my home on time with top-quality materials and transparent pricing. The design and interior work perfectly matched my vision — modern, elegant, and functional. Highly recommend House Banao for home construction or interior design in Delhi NCR.",
  },
];

const StarRating = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4 text-[#fbbc04]" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const GoogleLogo = () => (
  <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [fade, setFade] = useState(true);
  const timerRef = useRef(null);

  const goTo = useCallback((index) => {
    setFade(false);
    setTimeout(() => { setCurrent(index); setFade(true); }, 250);
  }, []);

  const next = useCallback(() => goTo((current + 1) % reviews.length), [current, goTo]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 3500);
    return () => clearInterval(timerRef.current);
  }, [paused, next]);

  const review = reviews[current];

  return (
    <section className="bg-[#0f0f0f] py-24 w-full border-b border-white/10">
      <Wrapper className="w-full lg:w-[90%] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10" data-aos="fade-up">
          <div>
            <p className="text-[#c9a07a] text-sm font-semibold tracking-[4px] uppercase mb-3">
              Google Reviews
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Client Testimonials
            </h2>
          </div>
          <p className="text-white/50 text-lg max-w-xs leading-relaxed">
            Real reviews from real homeowners — verified on Google.
          </p>
        </div>

        {/* Review card */}
        <div
          className="border border-white/10 p-8 md:p-12 cursor-pointer transition-all duration-300 hover:border-[#c9a07a]/40"
          data-aos="fade-up" data-aos-delay="100"
          style={{ opacity: fade ? 1 : 0, transition: "opacity 0.25s ease" }}
          onClick={() => setPaused((p) => !p)}
          title={paused ? "Click to resume" : "Click to pause"}
        >
          {/* Top row */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-base shrink-0"
                style={{ backgroundColor: review.avatarBg }}
              >
                {review.avatar}
              </div>
              <div>
                <p className="font-semibold text-white text-base">{review.name}</p>
                <p className="text-white/40 text-sm mt-0.5">{review.badge}</p>
              </div>
            </div>
            <GoogleLogo />
          </div>

          {/* Stars + time */}
          <div className="flex items-center gap-3 mb-6">
            <StarRating />
            <span className="text-white/40 text-sm">{review.time}</span>
          </div>

          {/* Text */}
          <p className="text-white/70 text-base md:text-lg leading-relaxed min-h-[80px] italic">
            &ldquo;{review.text}&rdquo;
          </p>

          <div className="flex justify-end mt-6">
            <span className="text-sm text-white/30">
              {paused ? "▶ Click to resume" : "⏸ Click to pause"}
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex items-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => { setPaused(true); goTo(i); }}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? "bg-[#c9a07a] w-6 h-2" : "bg-white/20 hover:bg-white/40 w-2 h-2"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => { setPaused(true); goTo((current - 1 + reviews.length) % reviews.length); }}
              className="border border-white/20 hover:border-[#c9a07a] text-white hover:text-[#c9a07a] text-lg w-10 h-10 flex items-center justify-center transition-all"
            >
              ‹
            </button>
            <span className="text-white/30 text-sm tabular-nums">{current + 1} / {reviews.length}</span>
            <button
              onClick={() => { setPaused(true); goTo((current + 1) % reviews.length); }}
              className="border border-white/20 hover:border-[#c9a07a] text-white hover:text-[#c9a07a] text-lg w-10 h-10 flex items-center justify-center transition-all"
            >
              ›
            </button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default TestimonialsSection;
