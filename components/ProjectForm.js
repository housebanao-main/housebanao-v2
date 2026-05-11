"use client";

import React, { useState } from "react";
import axios from "axios";
import Wrapper from "./Wrapper";
import LargeHeading from "./Headings/LargeHeading";
import ParaText from "./Headings/ParaText";
import SectionHeading from "./Headings/SectionHeading";

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    plotLocation: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = () => {
    const nameRegex = /^[a-zA-Z\s]{3,}$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.name.trim()) {
      setErrorMessage("Name is required.");
      return false;
    }
    if (!nameRegex.test(formData.name)) {
      setErrorMessage("Name must contain at least 3 letters.");
      return false;
    }
    if (!formData.phoneNumber.trim()) {
      setErrorMessage("Phone number is required.");
      return false;
    }
    if (!phoneRegex.test(formData.phoneNumber)) {
      setErrorMessage("Phone number must be exactly 10 digits.");
      return false;
    }
    if (!formData.plotLocation.trim()) {
      setErrorMessage("Plot location is required.");
      return false;
    }

    setErrorMessage("");
    return true;
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setFormData({ ...formData, phoneNumber: value });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    setSuccessMessage("");

    try {
      const payload = {
        name: formData.name,
        number: formData.phoneNumber,
        type: "Construction",
        city: formData.plotLocation,
        country: "India",
        state: "",
        priority: "WARM",
        status: "NEW",
      };

      console.log("📤 Sending Payload:", payload);

      const response = await axios.post("https://crm.gomaterial.in/api/queries", payload, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200 || response.status === 201) {
        setSuccessMessage("Your consultation request has been submitted successfully!");
        setFormData({ name: "", phoneNumber: "", plotLocation: "" });
        setErrorMessage("");
      }
    } catch (error) {
      console.error("🔥 API Error:", error.response?.data || error.message);
      setErrorMessage(error.response?.data?.error || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#2A27E8] w-full lg:w-[90%] mx-auto text-white min-h-[50svh] flex items-center justify-center">
      <Wrapper className="flex flex-col md:flex-row md:items-center md:justify-between gap-16">
        {/* Left Section */}
        <div className="flex-1">
          <LargeHeading className="font-bold mb-8">
            Ready to start your project?
          </LargeHeading>
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                className="w-full border-b-2 border-white bg-transparent focus:outline-none focus:border-gray-300 text-white placeholder-white py-7"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                type="tel"
                name="phoneNumber"
                className="w-full border-b-2 border-white bg-transparent focus:outline-none focus:border-gray-300 text-white placeholder-white py-7"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handlePhoneNumberChange}
              />
              <input
                type="text"
                name="plotLocation"
                className="w-full border-b-2 border-white bg-transparent focus:outline-none focus:border-gray-300 text-white placeholder-white py-7"
                placeholder="Plot Location"
                value={formData.plotLocation}
                onChange={handleInputChange}
              />
            </div>

            {/* Centralized Error Display */}
            {errorMessage && (
              <div className="bg-red-500/20 border border-red-400 text-red-200 px-4 py-3 rounded">
                {errorMessage}
              </div>
            )}

            {/* Centralized Success Display */}
            {successMessage && (
              <div className="bg-green-500/20 border border-green-400 text-green-200 px-4 py-3 rounded">
                {successMessage}
              </div>
            )}

            {/* Submit Button - Inside Form with Fixed Width */}
            <button
              type="submit"
              className="w-80 bg-white text-black font-medium py-3 px-6 rounded-lg hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              <SectionHeading className="text-black">
                {loading ? "Submitting..." : "Book consultation now"}
              </SectionHeading>
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col items-start justify-center text-white">
          <ParaText className="leading-relaxed">
            Seamless Home interior & Home construction: Start To Finish,
            Hassle-free. Effortless Home interior & home Construction Solutions:
            From Concept to Completion
          </ParaText>
        </div>
      </Wrapper>
    </div>
  );
};

export default ProjectForm;
