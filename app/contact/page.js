"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CollabsSection } from "@/components/CollabSection";
import axios from "axios";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactPage = () => {
  const [activeOffice, setActiveOffice] = useState(0);

  const offices = [
    {
      label: "Gurugram",
      address: "7th Floor, JMD MEGAPOLIS, 746A, Badshahpur Sohna Rd Hwy, Sector 48, Gurugram, Haryana 122018",
      mapSrc: "https://maps.google.com/maps?q=JMD+Megapolis+Sector+48+Gurugram+Haryana+122018&t=&z=15&ie=UTF8&iwloc=B&output=embed",
    },
    {
      label: "Noida",
      address: "5th Floor, Iconic Corenthum, Sector 62, Near Noida Electronic City Metro Station",
      mapSrc: "https://maps.google.com/maps?q=Iconic+Corenthum+Sector+62+Noida+Near+Electronic+City+Metro&t=&z=15&ie=UTF8&iwloc=B&output=embed",
    },
  ];

  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", service: "", city: "", message: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const services = [
    "End-to-end Home Construction",
    "Turnkey Construction",
    "Home Interior Design",
    "Duplex House Construction",
    "Custom Home Building",
    "Commercial Interior",
    "Other",
  ];

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const validate = () => {
    if (formData.name.trim().length < 3) { setErrorMessage("Name must be at least 3 characters."); return false; }
    if (!/^[0-9]{10}$/.test(formData.phone)) { setErrorMessage("Enter a valid 10-digit phone number."); return false; }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { setErrorMessage("Enter a valid email address."); return false; }
    setErrorMessage(""); return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setSuccessMessage("");
    try {
      await axios.post(
        "https://api.gomaterial.in/api/queries",
        {
          name: formData.name, number: formData.phone,
          type: formData.service || "General Inquiry",
          city: formData.city || "Not provided",
          country: "India", state: "Haryana",
          priority: "WARM", status: "NEW",
          budget: "", area: formData.message || "",
        },
        { headers: { "Content-Type": "application/json" } }
      );
      setSuccessMessage("Thank you! We'll get back to you within 24 hours.");
      setFormData({ name: "", phone: "", email: "", service: "", city: "", message: "" });
    } catch (err) {
      setErrorMessage(err.response?.data?.error || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full overflow-x-hidden bg-white">
      <Navbar isWhite={false} />

      {/* Hero */}
      <div
        className="relative min-h-[55vh] flex flex-col items-center justify-center text-center"
        style={{ backgroundImage: 'url("/Hero.jpg")', backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/65"></div>
        <div className="relative z-10 px-4 pt-24 pb-16">
          <div className="w-12 h-[2px] bg-[#c9a07a] mx-auto mb-5"></div>
          <p className="text-[#c9a07a] text-xs font-semibold tracking-[4px] uppercase mb-4">
            Contact Us
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Get In Touch
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            Let's build your dream together. Our team will respond within 24 hours.
          </p>
        </div>
      </div>

      {/* Quick contact bar */}
      <div className="bg-[#0f0f0f] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { icon: <FaPhone />, label: "Call Us", value: "+91 981-0432-124", href: "tel:+919810432124" },
              { icon: <FaEnvelope />, label: "Email", value: "support@housebanao.com", href: "mailto:support@housebanao.com" },
              { icon: <FaClock />, label: "Working Hours", value: "Mon – Sat: 9 AM – 7 PM", href: null },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 px-8 py-6">
                <span className="text-[#c9a07a] text-lg">{item.icon}</span>
                <div>
                  <p className="text-white/40 text-xs tracking-widest uppercase mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-white text-sm font-semibold hover:text-[#c9a07a] transition-colors">{item.value}</a>
                  ) : (
                    <p className="text-white text-sm font-semibold">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="bg-[#f5f4f0] py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* LEFT — Info + Map */}
            <div className="flex flex-col gap-6">

              {/* Contact Details */}
              <div className="bg-white border border-[#e8e4df] p-8">
                <p className="text-[#c9a07a] text-xs font-semibold tracking-[4px] uppercase mb-2">
                  Our Offices
                </p>
                <h2 className="text-2xl font-bold text-[#0f0f0f] mb-8">
                  Contact Information
                </h2>

                <div className="flex flex-col divide-y divide-[#e8e4df]">
                  <div className="flex items-start gap-5 py-5">
                    <div className="w-10 h-10 border border-[#c9a07a]/30 flex items-center justify-center shrink-0">
                      <FaPhone className="text-[#c9a07a] text-sm" />
                    </div>
                    <div>
                      <p className="text-xs text-[#666] tracking-widest uppercase mb-1">Phone</p>
                      <a href="tel:+919810432124" className="text-[#0f0f0f] font-semibold hover:text-[#c9a07a] transition-colors">
                        +91 981-0432-124
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 py-5">
                    <div className="w-10 h-10 border border-[#c9a07a]/30 flex items-center justify-center shrink-0">
                      <FaEnvelope className="text-[#c9a07a] text-sm" />
                    </div>
                    <div>
                      <p className="text-xs text-[#666] tracking-widest uppercase mb-1">Email</p>
                      <a href="mailto:support@housebanao.com" className="text-[#0f0f0f] font-semibold hover:text-[#c9a07a] transition-colors">
                        support@housebanao.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 py-5">
                    <div className="w-10 h-10 border border-[#c9a07a]/30 flex items-center justify-center shrink-0 mt-1">
                      <FaMapMarkerAlt className="text-[#c9a07a] text-sm" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="text-xs text-[#666] tracking-widest uppercase">Our Offices</p>
                      {offices.map((o, i) => (
                        <div key={i}>
                          <p className="text-xs font-bold text-[#c9a07a] mb-0.5">{o.label}</p>
                          <p className="text-[#444] text-sm leading-relaxed">{o.address}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-5 py-5">
                    <div className="w-10 h-10 border border-[#c9a07a]/30 flex items-center justify-center shrink-0">
                      <FaClock className="text-[#c9a07a] text-sm" />
                    </div>
                    <div>
                      <p className="text-xs text-[#666] tracking-widest uppercase mb-1">Hours</p>
                      <p className="text-[#0f0f0f] font-semibold text-sm">Mon – Sat: 9:00 AM – 7:00 PM</p>
                      <p className="text-[#999] text-sm">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <a
                  href="https://api.whatsapp.com/send?phone=9810432124"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe59] text-white font-semibold py-3.5 px-6 text-sm tracking-wide transition-all duration-300"
                >
                  <img src="/service/whatsapp-logo.png" alt="WhatsApp" className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Map */}
              <div className="bg-white border border-[#e8e4df] overflow-hidden">
                {/* Office tabs */}
                <div className="flex border-b border-[#e8e4df]">
                  {offices.map((office, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveOffice(i)}
                      className={`flex-1 py-3.5 px-4 text-xs font-semibold tracking-widest uppercase transition-all duration-200 ${
                        activeOffice === i
                          ? "bg-[#0f0f0f] text-white"
                          : "text-[#666] hover:text-[#0f0f0f] bg-white"
                      }`}
                    >
                      {office.label}
                    </button>
                  ))}
                </div>
                <div className="flex items-start gap-3 px-5 py-3 border-b border-[#e8e4df]">
                  <FaMapMarkerAlt className="text-[#c9a07a] mt-1 shrink-0 text-sm" />
                  <p className="text-sm text-[#444] leading-relaxed">{offices[activeOffice].address}</p>
                </div>
                <iframe
                  key={activeOffice}
                  title={offices[activeOffice].label}
                  src={offices[activeOffice].mapSrc}
                  width="100%"
                  height="280"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* RIGHT — Form */}
            <div className="bg-white border border-[#e8e4df] p-8 md:p-10">
              <p className="text-[#c9a07a] text-xs font-semibold tracking-[4px] uppercase mb-2">
                Enquire Now
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0f0f0f] mb-2">
                Send Us a Message
              </h2>
              <p className="text-[#666] text-sm mb-8 leading-relaxed">
                Fill in the details below and our team will connect with you shortly.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-[#0f0f0f] tracking-widest uppercase mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="w-full border border-[#e8e4df] px-4 py-3.5 text-sm outline-none focus:border-[#c9a07a] bg-white transition-colors placeholder:text-[#bbb]"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-[#0f0f0f] tracking-widest uppercase mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    required
                    className="w-full border border-[#e8e4df] px-4 py-3.5 text-sm outline-none focus:border-[#c9a07a] bg-white transition-colors placeholder:text-[#bbb]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-[#0f0f0f] tracking-widest uppercase mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full border border-[#e8e4df] px-4 py-3.5 text-sm outline-none focus:border-[#c9a07a] bg-white transition-colors placeholder:text-[#bbb]"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-xs font-semibold text-[#0f0f0f] tracking-widest uppercase mb-2">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full border border-[#e8e4df] px-4 py-3.5 text-sm outline-none focus:border-[#c9a07a] bg-white transition-colors text-[#444]"
                  >
                    <option value="">Select a service</option>
                    {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
                  </select>
                </div>

                {/* City */}
                <div>
                  <label className="block text-xs font-semibold text-[#0f0f0f] tracking-widest uppercase mb-2">
                    City / Plot Location
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Sector 48, Gurgaon"
                    className="w-full border border-[#e8e4df] px-4 py-3.5 text-sm outline-none focus:border-[#c9a07a] bg-white transition-colors placeholder:text-[#bbb]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-[#0f0f0f] tracking-widest uppercase mb-2">
                    Message / Requirements
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project — budget, size, timeline, etc."
                    rows={4}
                    className="w-full border border-[#e8e4df] px-4 py-3.5 text-sm outline-none focus:border-[#c9a07a] bg-white transition-colors resize-none placeholder:text-[#bbb]"
                  />
                </div>

                {/* Feedback */}
                {successMessage && (
                  <p className="text-green-700 text-sm font-medium border border-green-200 bg-green-50 px-4 py-3">
                    {successMessage}
                  </p>
                )}
                {errorMessage && (
                  <p className="text-red-600 text-sm font-medium border border-red-200 bg-red-50 px-4 py-3">
                    {errorMessage}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#0f0f0f] hover:bg-[#c9a07a] text-white hover:text-black font-semibold py-4 text-sm tracking-widest uppercase transition-all duration-300 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                <p className="text-center text-xs text-[#999]">
                  By submitting, you agree to our privacy policy and terms of use.
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>

      <CollabsSection />
      <Footer />
    </div>
  );
};

export default ContactPage;
