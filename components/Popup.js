"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { usePopup } from "@/context/PopupContext";

export default function Popup() {
  const { isOpen, closePopup } = usePopup();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const validateForm = () => {
    const nameRegex = /^[a-zA-Z\s]{3,}$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!form.name.trim()) {
      setErrorMessage("Name is required.");
      return false;
    }
    if (!nameRegex.test(form.name)) {
      setErrorMessage("Name must contain at least 3 letters.");
      return false;
    }
    if (!form.phone.trim()) {
      setErrorMessage("Phone number is required.");
      return false;
    }
    if (!phoneRegex.test(form.phone)) {
      setErrorMessage("Phone number must be exactly 10 digits.");
      return false;
    }
    if (!form.location.trim()) {
      setErrorMessage("Location is required.");
      return false;
    }

    setErrorMessage("");
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "phone") {
      if (/^\d*$/.test(value) && value.length <= 10) {
        setForm({ ...form, [name]: value });
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    setErrorMessage("");

    try {
      const payload = {
        name: form.name,
        number: form.phone,
        type: "Construction",
        city: form.location,
        country: "India",
        state: "",
        priority: "WARM",
        status: "NEW",
      };

      console.log("📤 Popup Form Submitted:", payload);

      const response = await axios.post("https://api.gomaterial.in/api/queries", payload, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200 || response.status === 201) {
        setSuccessMessage("✅ Thank you! We'll contact you soon.");
        setTimeout(() => {
          setForm({ name: "", phone: "", location: "" });
          setSuccessMessage("");
          closePopup();
        }, 1500);
      }
    } catch (error) {
      console.error("🔥 API Error:", error.response?.data || error.message);
      setErrorMessage(error.response?.data?.error || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 py-6">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md max-h-[90vh] overflow-y-auto relative">
        {/* Close Button - Only if no loading */}
        <button
          onClick={closePopup}
          disabled={loading}
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700 transition disabled:opacity-50"
        >
          ✕
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Get Your Free Estimate
          </h2>
          <p className="text-gray-600 text-sm">
            Fill in your details and our team will contact you within 24 hours
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent text-gray-900 placeholder-gray-400"
            />
          </div>

          {/* Phone Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="9876543210"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent text-gray-900 placeholder-gray-400"
            />
          </div>

          {/* Location Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Plot Location / City
            </label>
            <input
              type="text"
              name="location"
              placeholder="Gurgaon, Delhi"
              value={form.location}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent text-gray-900 placeholder-gray-400"
            />
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg text-sm">
              {errorMessage}
            </div>
          )}

          {/* Success Message */}
          {successMessage && (
            <div className="bg-green-50 border border-green-300 text-green-700 px-4 py-3 rounded-lg text-sm text-center font-medium">
              {successMessage}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#8B4513] hover:bg-[#6B3410] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition transform hover:scale-105 active:scale-95"
          >
            {loading ? "Submitting..." : "Get Free Estimate"}
          </button>

          {/* WhatsApp Link */}
          <a
            href={`https://wa.me/919876543210?text=${encodeURIComponent(
              `Hi, I'm interested in home construction.\nName: ${form.name}\nPhone: ${form.phone}\nLocation: ${form.location}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            💬 Chat on WhatsApp
          </a>
        </form>

        {/* Footer Text */}
        <p className="text-center text-xs text-gray-500 mt-4">
          By submitting, you agree to our privacy policy
        </p>
      </div>
    </div>
  );
}
