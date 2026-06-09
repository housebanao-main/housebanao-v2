"use client";

import React, { useEffect, useState } from "react";

export default function HomepagePopup({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
  });

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thanks! We will contact you soon.");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">

      <div className="bg-[#0f172a] text-white w-full max-w-md rounded-2xl shadow-2xl p-6 relative border border-white/10">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-xl text-white/70 hover:text-white"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-1">
          Get your cost estimate for free
        </h2>

        <p className="text-sm text-gray-400 mb-5">
          Fill in your details & our team will contact you shortly
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full bg-white/10 border border-white/20 p-3 rounded-full outline-none focus:border-white"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full bg-white/10 border border-white/20 p-3 rounded-full outline-none focus:border-white"
          />

          <input
            type="text"
            name="location"
            placeholder="Plot location"
            value={form.location}
            onChange={handleChange}
            className="w-full bg-white/10 border border-white/20 p-3 rounded-full outline-none focus:border-white"
          />

          <button
            type="submit"
            className="w-full bg-[#8B4513] hover:bg-[#6B3410] transition py-3 rounded-full font-medium"
          >
            Get your cost estimate
          </button>

          <a
            href={`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(
              `Hi, I'm interested in home construction.
Name: ${form.name}
Phone: ${form.phone}
Location: ${form.location}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center w-full bg-green-500 hover:bg-green-600 transition py-3 rounded-full font-medium"
          >
            Chat on WhatsApp
          </a>

        </form>

        <p className="text-[11px] text-gray-500 mt-4 text-center">
          By submitting this form, you agree to our privacy policy.
        </p>
      </div>
    </div>
  );
}