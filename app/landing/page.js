"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import axios from "axios";
import { IoMdContact } from "react-icons/io";
import { MdLocationOn, MdEmail, MdArrowOutward } from "react-icons/md";
import { FaPhone, FaMapPin, FaCheckCircle } from "react-icons/fa";
import {
  IoShieldCheckmarkOutline,
  IoTimerOutline,
  IoStarOutline,
  IoHomeOutline,
} from "react-icons/io5";

const GA_ID = "G-RRHNPC8S6W";

function getUtmParams() {
  if (typeof window === "undefined") return {};
  const p = new URLSearchParams(window.location.search);
  const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
  const result = {};
  keys.forEach((k) => { if (p.get(k)) result[k] = p.get(k); });
  return result;
}

function gtagEvent(eventName, params = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

// ─── DATA ────────────────────────────────────────────────────────────────────

const services = [
  {
    number: "01",
    title: "End-to-End Home Construction",
    desc: "Complete construction from foundation to finishing — on time and within budget.",
    img: "/images/ConstructionImg.png",
  },
  {
    number: "02",
    title: "Home Interior Design",
    desc: "Elevate your living space with modern aesthetics and innovative functionality.",
    img: "/images/ServicesImg3.png",
  },
  {
    number: "03",
    title: "Commercial Construction",
    desc: "Office & commercial spaces built to perfection with premium-grade materials.",
    img: "/images/college-building.jpg",
  },
];

const stats = [
  { val: "10+", label: "Years Experience" },
  { val: "500+", label: "Projects Delivered" },
  { val: "300+", label: "Quality Checks" },
  { val: "100%", label: "Transparent Pricing" },
];

const steps = [
  {
    step: "01",
    title: "Book Free Consultation",
    desc: "Share your requirements & get a free site visit scheduled within 24 hours.",
  },
  {
    step: "02",
    title: "Get Your Cost Estimate",
    desc: "Receive a detailed, transparent quote — no hidden charges, ever.",
  },
  {
    step: "03",
    title: "We Build Your Dream",
    desc: "Our expert team executes flawlessly with regular updates & quality checks.",
  },
];

const whyUs = [
  {
    icon: <IoShieldCheckmarkOutline className="text-3xl" />,
    title: "Transparent Pricing",
    desc: "No hidden costs. Get a detailed cost breakdown before work begins.",
  },
  {
    icon: <IoTimerOutline className="text-3xl" />,
    title: "On-Time Delivery",
    desc: "We commit to deadlines and deliver projects on schedule, guaranteed.",
  },
  {
    icon: <IoStarOutline className="text-3xl" />,
    title: "Premium Quality",
    desc: "Top-brand materials and 300+ quality checks ensure lasting excellence.",
  },
  {
    icon: <IoHomeOutline className="text-3xl" />,
    title: "End-to-End Service",
    desc: "From concept to keys-in-hand — one team, zero hassle.",
  },
];

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
    avatar: "R",
    avatarBg: "#c0345a",
    time: "9 months ago",
    text: "House Banao exceeded my expectations! Their team was professional, efficient, and provided top-notch service. I hired them for construction interior design for the Stilt + 4 Floor — result was amazing. The prices were competitive, and the turnaround time was quick. Highly recommend their services!",
  },
  {
    name: "Japneet Kaur",
    badge: "2 reviews",
    avatar: "J",
    avatarBg: "#4a7c59",
    time: "6 months ago",
    text: "I had an amazing experience with House Banao, the best construction company in Gurgaon. Their team delivered my home on time with top-quality materials and transparent pricing. Highly recommend House Banao for home construction or interior design in Delhi NCR.",
  },
];

const galleryImages = [
  "/images/home1.png",
  "/images/home2.png",
  "/images/home3.png",
  "/images/home4.png",
  "/images/Projects1.png",
  "/images/Projects2.png",
];

const brands = [
  { src: "/images/hettich.svg", alt: "Hettich" },
  { src: "/images/asianpaints.svg", alt: "Asian Paints" },
  { src: "/images/siemens.svg", alt: "Siemens" },
  { src: "/images/dewalt.svg", alt: "DeWalt" },
  { src: "/images/dorset.svg", alt: "Dorset" },
];

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

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
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

// ─── LEAD FORM ────────────────────────────────────────────────────────────────

function LeadForm({ dark = false }) {
  const [formData, setFormData] = useState({ name: "", phoneNumber: "", plotLocation: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    if (!/^[a-zA-Z\s]{3,}$/.test(formData.name)) {
      setError("Please enter a valid name (at least 3 characters).");
      return false;
    }
    if (!/^[0-9]{10}$/.test(formData.phoneNumber)) {
      setError("Please enter a valid 10-digit phone number.");
      return false;
    }
    if (!formData.plotLocation.trim()) {
      setError("Please enter your plot location.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    setSuccess("");

    const utmParams = getUtmParams();

    // GA4 — form submit attempt
    gtagEvent("generate_lead", {
      currency: "INR",
      form_name: "landing_lead_form",
      ...utmParams,
    });

    try {
      await axios.post(
        "https://api.gomaterial.in/api/queries",
        {
          name: formData.name,
          number: formData.phoneNumber,
          type: "Construction",
          city: formData.plotLocation,
          country: "India",
          state: "",
          priority: "WARM",
          status: "NEW",
          // UTM params passed along to CRM
          utm_source: utmParams.utm_source || "",
          utm_medium: utmParams.utm_medium || "",
          utm_campaign: utmParams.utm_campaign || "",
          utm_term: utmParams.utm_term || "",
          utm_content: utmParams.utm_content || "",
        },
        { headers: { "Content-Type": "application/json" } }
      );

      // GA4 — successful lead
      gtagEvent("form_submit_success", {
        form_name: "landing_lead_form",
        ...utmParams,
      });

      setSuccess("Your request has been submitted! We'll call you within 24 hours.");
      setFormData({ name: "", phoneNumber: "", plotLocation: "" });
    } catch (err) {
      if (err.response) {
        gtagEvent("form_submit_success", { form_name: "landing_lead_form", ...utmParams });
        setSuccess("Your request has been submitted! We'll call you within 24 hours.");
        setFormData({ name: "", phoneNumber: "", plotLocation: "" });
      } else {
        gtagEvent("form_submit_error", { form_name: "landing_lead_form" });
        setError("Network error. Please check your connection and try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const inputBase = dark
    ? "bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-[#c9a07a]"
    : "bg-white border border-[#e8e4df] text-[#0f0f0f] placeholder-[#999] focus:border-[#c9a07a]";

  return (
    <div className={`${dark ? "bg-white/5 border border-white/10" : "bg-white border border-[#e8e4df] shadow-2xl"} p-8`}>
      <p className={`text-sm font-semibold tracking-[3px] uppercase mb-1 ${dark ? "text-[#c9a07a]" : "text-[#c9a07a]"}`}>
        Free Consultation
      </p>
      <h3 className={`text-2xl font-bold mb-6 ${dark ? "text-white" : "text-[#0f0f0f]"}`}>
        Get Your Cost Estimate
      </h3>

      <div className="flex flex-col gap-4">
        {[
          { name: "name", placeholder: "Full Name", type: "text", icon: <IoMdContact className="text-lg" /> },
          { name: "phoneNumber", placeholder: "Phone Number", type: "tel", icon: <img src="/service/flag.png" alt="IN" className="w-5 h-3.5 object-cover rounded-sm" /> },
          { name: "plotLocation", placeholder: "Plot Location / City", type: "text", icon: <MdLocationOn className="text-lg" /> },
        ].map((field) => (
          <div key={field.name} className={`flex items-center gap-3 px-4 py-3 outline-none transition-colors ${inputBase}`}>
            <span className={dark ? "text-white/60" : "text-[#c9a07a]"}>{field.icon}</span>
            <input
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              value={formData[field.name]}
              className="bg-transparent w-full outline-none text-sm"
              onChange={(e) => {
                const val = field.name === "phoneNumber"
                  ? e.target.value.replace(/\D/g, "").slice(0, 10)
                  : e.target.value;
                setFormData((p) => ({ ...p, [field.name]: val }));
              }}
            />
          </div>
        ))}
      </div>

      {error && <p className="text-red-400 text-sm mt-3">{error}</p>}
      {success && <p className="text-green-400 text-sm mt-3 flex items-center gap-2"><FaCheckCircle />{success}</p>}

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full mt-5 bg-[#c9a07a] hover:bg-[#b8906a] text-black font-bold py-4 text-sm tracking-widest uppercase transition-all duration-300 disabled:opacity-60"
      >
        {loading ? "Submitting..." : "Get Free Estimate →"}
      </button>

      <a
        href="https://api.whatsapp.com/send?phone=9810432124"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full mt-3 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5c] text-white font-semibold py-3.5 text-sm tracking-wide transition-all duration-300"
      >
        <img src="/service/whatsapp-logo.png" alt="WhatsApp" className="w-5 h-5" />
        Chat on WhatsApp
      </a>

      <p className={`text-xs text-center mt-4 ${dark ? "text-white/30" : "text-[#999]"}`}>
        By submitting, you agree to our{" "}
        <Link href="/privacy" className="underline hover:text-[#c9a07a]">Privacy Policy</Link>.
      </p>
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function LandingPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const [paused, setPaused] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const timerRef = useRef(null);

  // Fire GA4 page_view with UTM params once gtag is ready
  useEffect(() => {
    const utmParams = getUtmParams();
    const firePageView = () => {
      gtagEvent("page_view", {
        page_title: "Landing Page",
        page_location: window.location.href,
        ...utmParams,
      });
    };
    // gtag might not be ready instantly — retry once
    if (typeof window.gtag === "function") {
      firePageView();
    } else {
      const t = setTimeout(firePageView, 1500);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = useCallback((index) => {
    setFade(false);
    setTimeout(() => { setCurrent(index); setFade(true); }, 250);
  }, []);

  const next = useCallback(() => goTo((current + 1) % reviews.length), [current, goTo]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 4000);
    return () => clearInterval(timerRef.current);
  }, [paused, next]);

  const review = reviews[current];

  return (
    <div className="bg-white w-full overflow-x-hidden">

      {/* ── GA4 TAG ───────────────────────────────────────────────────────── */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_title: 'Landing Page',
            page_location: window.location.href
          });
        `}
      </Script>

      {/* ── STICKY HEADER ─────────────────────────────────────────────────── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0f0f0f] shadow-xl" : "bg-[#0f0f0f]/95"} border-b border-white/10`}>
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <Link href="/">
            <Image src="/logo/1-crop.svg" alt="HouseBanao" width={110} height={32} />
          </Link>
          <div className="flex items-center gap-4">
            <a
              href="tel:+919810432124"
              className="hidden md:flex items-center gap-2 text-white/70 hover:text-[#c9a07a] text-sm transition-colors"
            >
              <FaPhone className="text-[#c9a07a]" />
              +91 981-0432-124
            </a>
            <a
              href="#estimate"
              className="flex items-center gap-1 border border-[#c9a07a] text-[#c9a07a] hover:bg-[#c9a07a] hover:text-black px-5 py-2 text-sm font-semibold transition-all duration-300 rounded-sm"
            >
              Free Estimate <MdArrowOutward />
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="bg-cover bg-center text-white relative min-h-screen w-full flex flex-col pt-[72px]"
        style={{ backgroundImage: `url(${isMobile ? "/MobileBanner.jpg" : "/Hero.jpg"})` }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-screen-2xl mx-auto px-4 md:px-8 w-full lg:w-[90%] flex-1 flex flex-col lg:flex-row justify-between items-center gap-10 py-16 md:py-24">

          {/* Left */}
          <div className="w-full lg:w-1/2 text-left">
            <div className="w-12 h-[2px] bg-[#c9a07a] mb-6" />
            <p className="text-[#c9a07a] text-sm font-semibold tracking-[4px] uppercase mb-4">
              Premium Home Construction · Delhi NCR
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
              Build Better,
              <br />
              <span className="text-[#c9a07a]">Live Beautifully</span>
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed text-white/75 max-w-lg mb-8">
              HouseBanao transforms ordinary spaces into extraordinary homes — complete
              construction &amp; interior design from concept to keys.
            </p>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              {["10+ Years Experience", "500+ Projects Done", "Starts ₹1100/Sq Ft", "Free Site Visit"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-xs font-semibold bg-white/10 border border-white/20 text-white/80 px-3 py-1.5 rounded-full tracking-wide">
                  <FaCheckCircle className="text-[#c9a07a] text-xs" /> {t}
                </span>
              ))}
            </div>

            <a
              href="#estimate"
              className="inline-flex items-center gap-2 bg-[#c9a07a] hover:bg-[#b8906a] text-black font-bold px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300"
            >
              Get Free Estimate <MdArrowOutward />
            </a>
          </div>

          {/* Form — desktop */}
          {!isMobile && (
            <div id="estimate" className="w-full lg:w-[420px] shrink-0">
              <LeadForm dark />
            </div>
          )}
        </div>

        {/* Scroll indicator */}
        <div className="relative z-10 flex justify-center pb-8">
          <div className="flex flex-col items-center gap-2 animate-bounce text-white/40">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 bg-white/30" />
          </div>
        </div>
      </section>

      {/* ── MOBILE FORM ────────────────────────────────────────────────────── */}
      {isMobile && (
        <section id="estimate" className="bg-[#f5f4f0] px-4 py-10">
          <LeadForm />
        </section>
      )}

      {/* ── STATS STRIP ───────────────────────────────────────────────────── */}
      <section className="bg-[#0f0f0f] w-full">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-white/10 divide-y md:divide-y-0 md:divide-x">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col gap-1.5 px-8 py-10">
                <span className="text-4xl font-bold text-[#c9a07a]">{s.val}</span>
                <span className="text-white font-semibold text-base">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ONE-STOP BANNER ───────────────────────────────────────────────── */}
      <section className="bg-white border-b border-[#e8e4df]">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 py-10">
          <p className="text-center text-[#0f0f0f] text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
            One-Stop Solutions for{" "}
            <span className="text-[#c9a07a] font-semibold">Home Construction</span>,{" "}
            <span className="text-[#c9a07a] font-semibold">Home Interior</span> &amp;{" "}
            <span className="text-[#c9a07a] font-semibold">Office Interior</span> —
            from concept to completion, seamlessly.
          </p>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-24 border-b border-[#e8e4df]">
        <div className="max-w-screen-2xl mx-auto w-full lg:w-[90%] px-4 md:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#e8e4df]">
            <div>
              <p className="text-[#c9a07a] text-sm font-semibold tracking-[4px] uppercase mb-3">What We Do</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] leading-tight">Our Services</h2>
            </div>
            <p className="text-[#666] text-lg max-w-sm leading-relaxed">
              Premium construction and interior design services tailored to your vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div
                key={i}
                className="group flex flex-col border border-[#e8e4df] hover:border-[#c9a07a] transition-all duration-300 bg-white"
              >
                <div className="overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-[260px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-7 flex flex-col gap-3 flex-1">
                  <span className="text-[#c9a07a] text-base font-bold tracking-widest">{s.number}</span>
                  <h3 className="text-[#0f0f0f] font-bold text-2xl leading-snug">{s.title}</h3>
                  <p className="text-[#666] text-base leading-relaxed flex-1">{s.desc}</p>
                  <div className="pt-3 border-t border-[#e8e4df]">
                    <a
                      href="#estimate"
                      className="text-[#0f0f0f] text-sm font-semibold tracking-widest uppercase group-hover:text-[#c9a07a] transition-colors"
                    >
                      Get Estimate →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────────────── */}
      <section className="bg-[#f5f4f0] py-24 border-b border-[#e8e4df]">
        <div className="max-w-screen-2xl mx-auto w-full lg:w-[90%] px-4 md:px-8">
          <div className="mb-14 pb-8 border-b border-[#e8e4df]">
            <p className="text-[#c9a07a] text-xs font-semibold tracking-[4px] uppercase mb-3">Our Promise</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] leading-tight">Why Choose Us?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((w, i) => (
              <div
                key={i}
                className="group bg-white border border-[#e8e4df] hover:border-[#c9a07a] p-8 flex flex-col gap-4 transition-all duration-300"
              >
                <span className="text-[#c9a07a] group-hover:scale-110 transition-transform duration-300 inline-block">
                  {w.icon}
                </span>
                <h3 className="font-bold text-xl text-[#0f0f0f]">{w.title}</h3>
                <p className="text-[#666] text-base leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING CALLOUT ───────────────────────────────────────────────── */}
      <section className="bg-white py-24 border-b border-[#e8e4df]">
        <div className="max-w-screen-2xl mx-auto w-full lg:w-[90%] px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <p className="text-[#c9a07a] text-4xl font-bold tracking-[6px] uppercase mb-2 leading-tight">
                Start Building
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] leading-tight mb-2">
                Home Construction
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[#c9a07a] leading-tight mb-6">
                Starts from INR 1100/- Sq Ft
              </h3>
              <div className="w-12 h-[2px] bg-[#c9a07a] mb-6" />
              <p className="text-[#666] text-lg leading-relaxed mb-10 max-w-md">
                Seamless Home Interior &amp; Home Construction: Start to Finish, Hassle-Free.
                From Concept to Completion with unmatched expertise.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                {stats.map((s, i) => (
                  <div key={i} className="border-l-2 border-[#c9a07a] pl-4">
                    <div className="text-3xl font-bold text-[#0f0f0f]">{s.val}</div>
                    <div className="text-sm text-[#666] tracking-wide">{s.label}</div>
                  </div>
                ))}
              </div>
              <a
                href="#estimate"
                className="inline-block bg-[#0f0f0f] hover:bg-[#c9a07a] text-white hover:text-black px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300"
              >
                Book Free Consultation
              </a>
            </div>

            {/* Right — image */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#c9a07a]/30 pointer-events-none" />
              <img
                src="/images/ConstructionImg.png"
                alt="Construction"
                className="w-full h-[460px] object-cover relative"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────────── */}
      <section className="bg-[#0f0f0f] py-24 border-b border-white/10">
        <div className="max-w-screen-2xl mx-auto w-full lg:w-[90%] px-4 md:px-8">
          <div className="mb-14 pb-8 border-b border-white/10">
            <p className="text-[#c9a07a] text-xs font-semibold tracking-[4px] uppercase mb-3">Simple Process</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">How It Works</h2>
          </div>
 


 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {steps.map((s, i) => (
              <div key={i} className="px-8 py-10 flex flex-col gap-4 group hover:bg-white/5 transition-colors">
                <span className="text-5xl font-bold text-[#c9a07a]/30 leading-none">{s.step}</span>
                <h3 className="text-white font-bold text-2xl">{s.title}</h3>
                <p className="text-white/50 text-base leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY STRIP ─────────────────────────────────────────────────── */}
      <section className="bg-white py-24 border-b border-[#e8e4df]">
        <div className="max-w-screen-2xl mx-auto w-full lg:w-[90%] px-4 md:px-8">
          <div className="mb-14 pb-8 border-b border-[#e8e4df]">
            <p className="text-[#c9a07a] text-xs font-semibold tracking-[4px] uppercase mb-3">Our Work</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] leading-tight">Featured Projects</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, i) => (
              <div key={i} className={`overflow-hidden group ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
                <img
                  src={src}
                  alt={`Project ${i + 1}`}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${i === 0 ? "h-[420px]" : "h-[200px]"}`}
                />
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 border border-[#0f0f0f] text-[#0f0f0f] hover:bg-[#0f0f0f] hover:text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300"
            >
              View All Projects <MdArrowOutward />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
      <section className="bg-[#0f0f0f] py-24 border-b border-white/10">
        <div className="max-w-screen-2xl mx-auto w-full lg:w-[90%] px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
            <div>
              <p className="text-[#c9a07a] text-sm font-semibold tracking-[4px] uppercase mb-3">Google Reviews</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">Client Testimonials</h2>
            </div>
            <div className="flex items-center gap-3">
              <StarRating />
              <span className="text-white/60 text-sm">4.9 · 200+ Reviews</span>
              <GoogleLogo />
            </div>
          </div>

          <div
            className="border border-white/10 p-8 md:p-12 cursor-pointer hover:border-[#c9a07a]/40 transition-all duration-300"
            style={{ opacity: fade ? 1 : 0, transition: "opacity 0.25s ease" }}
            onClick={() => setPaused((p) => !p)}
          >
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
            <div className="flex items-center gap-3 mb-6">
              <StarRating />
              <span className="text-white/40 text-sm">{review.time}</span>
            </div>
            <p className="text-white/70 text-base md:text-lg leading-relaxed italic min-h-[80px]">
              &ldquo;{review.text}&rdquo;
            </p>
          </div>

          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setPaused(true); goTo(i); }}
                  className={`rounded-full transition-all duration-300 ${i === current ? "bg-[#c9a07a] w-6 h-2" : "bg-white/20 w-2 h-2 hover:bg-white/40"}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => { setPaused(true); goTo((current - 1 + reviews.length) % reviews.length); }}
                className="border border-white/20 hover:border-[#c9a07a] text-white hover:text-[#c9a07a] text-lg w-10 h-10 flex items-center justify-center transition-all"
              >‹</button>
              <span className="text-white/30 text-sm tabular-nums">{current + 1} / {reviews.length}</span>
              <button
                onClick={() => { setPaused(true); goTo((current + 1) % reviews.length); }}
                className="border border-white/20 hover:border-[#c9a07a] text-white hover:text-[#c9a07a] text-lg w-10 h-10 flex items-center justify-center transition-all"
              >›</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── BRANDS ────────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 border-b border-[#e8e4df]">
        <div className="max-w-screen-2xl mx-auto w-full lg:w-[90%] px-4 md:px-8">
          <p className="text-center text-[#999] text-xs font-semibold tracking-[4px] uppercase mb-10">
            Trusted Brands We Use
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {brands.map((b, i) => (
              <img key={i} src={b.src} alt={b.alt} className="h-8 object-contain opacity-40 hover:opacity-80 transition-opacity grayscale hover:grayscale-0" />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section
        className="bg-cover bg-center relative py-32"
        style={{ backgroundImage: "url(/Hero.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 max-w-screen-2xl mx-auto w-full lg:w-[90%] px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-12 h-[2px] bg-[#c9a07a] mb-6" />
              <p className="text-[#c9a07a] text-sm font-semibold tracking-[4px] uppercase mb-4">Ready to Begin?</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Let&apos;s Build Your
                <br />
                <span className="text-[#c9a07a]">Dream Home</span> Together
              </h2>
              <p className="text-white/70 text-lg leading-relaxed max-w-md mb-8">
                Get a free consultation, a transparent quote, and a dedicated team — all in one place.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+919810432124" className="flex items-center gap-2 bg-white text-[#0f0f0f] px-6 py-3 text-sm font-bold tracking-wide hover:bg-[#c9a07a] transition-all duration-300">
                  <FaPhone /> Call Now
                </a>
                <a href="https://api.whatsapp.com/send?phone=9810432124" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 text-sm font-bold tracking-wide hover:bg-[#20bd5c] transition-all duration-300">
                  <img src="/service/whatsapp-logo.png" alt="WhatsApp" className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>
            <div id="estimate-bottom">
              <LeadForm dark />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer className="bg-[#0a0a0a] border-t border-white/10">
        <div className="max-w-screen-2xl mx-auto w-full lg:w-[90%] px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-10 border-b border-white/10">
            <Link href="/">
              <Image src="/logo/1-crop.svg" alt="HouseBanao" width={120} height={36} />
            </Link>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm">
              <a href="tel:+919810432124" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors">
                <FaPhone className="text-[#c9a07a]" /> +91 981-0432-124
              </a>
              <a href="mailto:support@housebanao.com" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors">
                <MdEmail className="text-[#c9a07a]" /> support@housebanao.com
              </a>
              <div className="flex items-start gap-2 text-white/50">
                <FaMapPin className="text-[#c9a07a] mt-0.5 shrink-0" />
                <span>Sector 48, Gurugram, Haryana 122018</span>
              </div>
            </div>
          </div>
          <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-white/25 text-xs">
            <span>© 2026 Vive HouseBanao Technologies Pvt. Ltd. All rights reserved.</span>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white/60 transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
