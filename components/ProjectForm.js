"use client";

import React, { useState } from "react";
import axios from "axios";
import Wrapper from "./Wrapper";

function getUtmParams() {
  if (typeof window === "undefined") return {};
  const p = new URLSearchParams(window.location.search);
  const result = {};
  ["utm_source","utm_medium","utm_campaign","utm_term","utm_content"].forEach((k) => { if (p.get(k)) result[k] = p.get(k); });
  return result;
}
function gtagEvent(name, params = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") window.gtag("event", name, params);
}

const ProjectForm = () => {
  const [formData, setFormData] = useState({ name: "", phoneNumber: "", plotLocation: "" });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = () => {
    if (!formData.name.trim() || formData.name.trim().length < 3) {
      setErrorMessage("Name must contain at least 3 letters."); return false;
    }
    if (!/^[0-9]{10}$/.test(formData.phoneNumber)) {
      setErrorMessage("Phone number must be exactly 10 digits."); return false;
    }
    if (!formData.plotLocation.trim()) {
      setErrorMessage("Plot location is required."); return false;
    }
    setErrorMessage(""); return true;
  };

  const handlePhoneNumberChange = (e) => {
    const v = e.target.value;
    if (/^\d*$/.test(v) && v.length <= 10) setFormData({ ...formData, phoneNumber: v });
  };

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    setSuccessMessage("");

    const utmParams = getUtmParams();
    gtagEvent("generate_lead", { form_name: "project_form", ...utmParams });

    try {
      const res = await axios.post(
        "https://crm.gomaterial.in/api/queries",
        {
          name: formData.name, number: formData.phoneNumber, type: "Construction",
          city: formData.plotLocation, country: "India", state: "",
          priority: "WARM", status: "NEW",
          utm_source: utmParams.utm_source || "",
          utm_medium: utmParams.utm_medium || "",
          utm_campaign: utmParams.utm_campaign || "",
          utm_term: utmParams.utm_term || "",
          utm_content: utmParams.utm_content || "",
        },
        { headers: { "Content-Type": "application/json" } }
      );
      if (res.status === 200 || res.status === 201) {
        gtagEvent("form_submit_success", { form_name: "project_form", ...utmParams });
        setSuccessMessage("Your consultation request has been submitted successfully!");
        setFormData({ name: "", phoneNumber: "", plotLocation: "" });
        setErrorMessage("");
      }
    } catch (err) {
      gtagEvent("form_submit_error", { form_name: "project_form" });
      setErrorMessage(err.response?.data?.error || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const trustPoints = [
    { title: "500+ Projects Delivered", desc: "Successfully completed homes across Delhi NCR" },
    { title: "4.9/5 Client Rating", desc: "Trusted by hundreds of happy homeowners" },
    { title: "End-to-End Service", desc: "Design, construction & interiors — all under one roof" },
    { title: "On-Time Delivery", desc: "Committed timelines with full transparency" },
  ];

  return (
    <section className="w-full bg-[#f5f4f0] py-24 border-b border-[#e8e4df]">
      <Wrapper className="w-full lg:w-[90%] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-8 border-b border-[#e8e4df]" data-aos="fade-up">
          <div>
            <p className="text-[#c9a07a] text-xs font-semibold tracking-[4px] uppercase mb-3">
              Free Consultation
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] leading-tight">
              Ready to Build Your<br className="hidden md:block" />
              <span className="text-[#c9a07a]"> Dream Home?</span>
            </h2>
          </div>
          <p className="text-[#666] text-base max-w-sm leading-relaxed">
            Book a free consultation with our experts — zero commitment, full clarity.
          </p>
        </div>

        {/* 2-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* LEFT — Form */}
          <div className="bg-white border border-[#e8e4df] p-8 md:p-10" data-aos="fade-right">
            <p className="text-[#c9a07a] text-xs font-semibold tracking-[4px] uppercase mb-2">
              Get Started
            </p>
            <h3 className="text-2xl font-bold text-[#0f0f0f] mb-2">
              Book Your Free Consultation
            </h3>
            <p className="text-[#666] text-sm mb-8 leading-relaxed">
              Fill in the details and our team will call you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-xs font-semibold text-[#0f0f0f] tracking-widest uppercase mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full border border-[#e8e4df] px-4 py-3.5 text-sm text-[#0f0f0f] bg-white outline-none focus:border-[#c9a07a] transition-colors placeholder:text-[#bbb]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0f0f0f] tracking-widest uppercase mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handlePhoneNumberChange}
                  placeholder="10-digit mobile number"
                  className="w-full border border-[#e8e4df] px-4 py-3.5 text-sm text-[#0f0f0f] bg-white outline-none focus:border-[#c9a07a] transition-colors placeholder:text-[#bbb]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0f0f0f] tracking-widest uppercase mb-2">
                  Plot Location / City
                </label>
                <input
                  type="text"
                  name="plotLocation"
                  value={formData.plotLocation}
                  onChange={handleInputChange}
                  placeholder="e.g. Sector 48, Gurgaon"
                  className="w-full border border-[#e8e4df] px-4 py-3.5 text-sm text-[#0f0f0f] bg-white outline-none focus:border-[#c9a07a] transition-colors placeholder:text-[#bbb]"
                />
              </div>

              {errorMessage && (
                <p className="text-red-600 text-sm border border-red-200 bg-red-50 px-4 py-3">
                  {errorMessage}
                </p>
              )}
              {successMessage && (
                <p className="text-green-700 text-sm border border-green-200 bg-green-50 px-4 py-3">
                  {successMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0f0f0f] hover:bg-[#c9a07a] text-white hover:text-black font-semibold py-4 text-sm tracking-widest uppercase transition-all duration-300 disabled:opacity-50 mt-1"
              >
                {loading ? "Submitting..." : "Book Free Consultation"}
              </button>

              <p className="text-center text-xs text-[#999]">
                No spam. No charges. We respect your privacy.
              </p>
            </form>
          </div>

          {/* RIGHT — Trust signals */}
          <div className="bg-[#0f0f0f] p-8 md:p-10 flex flex-col justify-between gap-8" data-aos="fade-left">
            <div>
              <div className="w-12 h-[2px] bg-[#c9a07a] mb-6"></div>
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-snug mb-3">
                From Concept to Completion —{" "}
                <span className="text-[#c9a07a]">Hassle-Free.</span>
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                We handle everything so you don't have to. Trusted by 500+ families across Delhi NCR.
              </p>
            </div>

            {/* Trust grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trustPoints.map((point, i) => (
                <div key={i} className="border border-white/10 p-5 hover:border-[#c9a07a]/40 transition-colors duration-300">
                  <div className="w-6 h-[1px] bg-[#c9a07a] mb-4"></div>
                  <p className="text-white font-semibold text-sm mb-1">{point.title}</p>
                  <p className="text-white/45 text-xs leading-relaxed">{point.desc}</p>
                </div>
              ))}
            </div>

            {/* Call CTA */}
            <div className="flex items-center gap-4 border-t border-white/10 pt-6">
              <div className="w-10 h-10 border border-[#c9a07a]/40 flex items-center justify-center shrink-0">
                <span className="text-[#c9a07a] text-base">📞</span>
              </div>
              <div>
                <p className="text-white/40 text-xs tracking-widest uppercase mb-0.5">Call us directly</p>
                <a href="tel:+919810432124" className="text-white font-semibold text-sm hover:text-[#c9a07a] transition-colors">
                  +91 981-0432-124
                </a>
              </div>
            </div>
          </div>

        </div>
      </Wrapper>
    </section>
  );
};

export default ProjectForm;
