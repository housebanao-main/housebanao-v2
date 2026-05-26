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
    {
      label: "Delhi",
      address: "Office No. 212, 2nd Floor, D Mall, Netaji Subhash Place, Pitampura, New Delhi 110034",
      mapSrc: "https://maps.google.com/maps?q=D+Mall+Netaji+Subhash+Place+Pitampura+New+Delhi+110034&t=&z=15&ie=UTF8&iwloc=B&output=embed",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    city: "",
    message: "",
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (formData.name.trim().length < 3) {
      setErrorMessage("Name must be at least 3 characters.");
      return false;
    }
    if (!/^[0-9]{10}$/.test(formData.phone)) {
      setErrorMessage("Enter a valid 10-digit phone number.");
      return false;
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage("Enter a valid email address.");
      return false;
    }
    setErrorMessage("");
    return true;
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
          name: formData.name,
          number: formData.phone,
          type: formData.service || "General Inquiry",
          city: formData.city || "Not provided",
          country: "India",
          state: "Haryana",
          priority: "WARM",
          status: "NEW",
          budget: "",
          area: formData.message || "",
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
    <div className="w-full overflow-x-hidden">
      <Navbar isWhite={false} />

      {/* Hero */}
      <div
        className="relative min-h-[60vh] flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: 'url("/Hero.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="relative z-10 px-4 pt-24 pb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-xl mx-auto">
            Let's build your dream together. Reach out and our team will respond within 24 hours.
          </p>
        </div>
      </div>

      {/* Contact Info + Form */}
      <section className="bg-[#fdf4f1] py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-[#a46352] rounded-[42px] p-3 md:p-5 shadow-[0_25px_70px_rgba(164,99,82,0.35)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">

              {/* LEFT — Info + Map */}
              <div className="flex flex-col gap-3">

                {/* Info Card */}
                <div className="bg-[#fff7f4] rounded-[34px] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.16)] border border-white/70">
                  <h2 className="text-xl md:text-2xl font-extrabold text-black mb-4">
                    Contact Information
                  </h2>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#a46352]/10 flex items-center justify-center shrink-0">
                        <FaPhone className="text-[#a46352] text-sm" />
                      </div>
                      <div>
                        <p className="font-semibold text-black text-sm">Phone</p>
                        <a href="tel:+919810432124" className="text-gray-700 hover:text-[#a46352] transition-colors">
                          +91 981-0432-124
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#a46352]/10 flex items-center justify-center shrink-0">
                        <FaEnvelope className="text-[#a46352] text-sm" />
                      </div>
                      <div>
                        <p className="font-semibold text-black text-sm">Email</p>
                        <a href="mailto:support@housebanao.com" className="text-gray-700 hover:text-[#a46352] transition-colors">
                          support@housebanao.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#a46352]/10 flex items-center justify-center shrink-0 mt-1">
                        <FaMapMarkerAlt className="text-[#a46352] text-sm" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="font-semibold text-black text-sm">Our Offices</p>
                        {offices.map((o, i) => (
                          <div key={i}>
                            <p className="text-xs font-bold text-[#a46352]">{o.label}</p>
                            <p className="text-gray-700 text-xs leading-relaxed">{o.address}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#a46352]/10 flex items-center justify-center shrink-0">
                        <FaClock className="text-[#a46352] text-sm" />
                      </div>
                      <div>
                        <p className="font-semibold text-black text-sm">Working Hours</p>
                        <p className="text-gray-700 text-sm">Mon – Sat: 9:00 AM – 7:00 PM</p>
                        <p className="text-gray-500 text-sm">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <a
                    href="https://api.whatsapp.com/send?phone=9810432124"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-2xl transition-all duration-300 shadow-md"
                  >
                    <img src="/service/whatsapp-logo.png" alt="WhatsApp" className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                </div>

                {/* Map Carousel */}
                <div className="bg-[#fff7f4] rounded-[34px] overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.16)] border border-white/70 flex flex-col">
                  {/* Tabs */}
                  <div className="flex border-b border-[#e8d5cf]">
                    {offices.map((office, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveOffice(i)}
                        className={`flex-1 py-3 px-2 text-xs font-semibold transition-all duration-200 ${
                          activeOffice === i
                            ? "bg-[#a46352] text-white"
                            : "text-gray-600 hover:bg-[#fdf0eb]"
                        } ${i === 0 ? "rounded-tl-[34px]" : ""} ${i === offices.length - 1 ? "rounded-tr-[34px]" : ""}`}
                      >
                        {office.label}
                      </button>
                    ))}
                  </div>
                  {/* Address */}
                  <div className="px-5 py-3 flex items-start gap-3">
                    <FaMapMarkerAlt className="text-[#a46352] mt-1 shrink-0" />
                    <p className="text-sm text-gray-700 leading-relaxed">{offices[activeOffice].address}</p>
                  </div>
                  {/* Map */}
                  <iframe
                    key={activeOffice}
                    title={offices[activeOffice].label}
                    src={offices[activeOffice].mapSrc}
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* RIGHT — Form */}
              <div className="bg-[#fff7f4] rounded-[34px] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.16)] border border-white/70">
                <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-4 text-sm">
                  Fill in the details below and our team will connect with you shortly.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="w-full border border-[#e8d5cf] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#a46352] bg-white transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      maxLength={10}
                      required
                      className="w-full border border-[#e8d5cf] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#a46352] bg-white transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full border border-[#e8d5cf] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#a46352] bg-white transition-colors"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Service Interested In</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full border border-[#e8d5cf] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#a46352] bg-white transition-colors text-gray-700"
                    >
                      <option value="">Select a service</option>
                      {services.map((s, i) => (
                        <option key={i} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Your City / Plot Location</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g. Sector 48, Gurgaon"
                      className="w-full border border-[#e8d5cf] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#a46352] bg-white transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Message / Requirements</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project — budget, size, timeline, etc."
                      rows={4}
                      className="w-full border border-[#e8d5cf] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#a46352] bg-white transition-colors resize-none"
                    />
                  </div>

                  {/* Feedback */}
                  {successMessage && (
                    <p className="text-green-600 text-sm font-semibold bg-green-50 rounded-xl px-4 py-3">{successMessage}</p>
                  )}
                  {errorMessage && (
                    <p className="text-red-500 text-sm font-semibold bg-red-50 rounded-xl px-4 py-3">{errorMessage}</p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#a46352] hover:bg-[#8a4f40] text-white font-bold py-4 rounded-2xl text-base transition-all duration-300 shadow-lg disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    By submitting, you agree to our privacy policy and terms of use.
                  </p>
                </form>
              </div>

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
