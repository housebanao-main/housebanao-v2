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
    const locationRegex = /^[a-zA-Z0-9\s,.-]+$/;

    if (!nameRegex.test(formData.name)) {
      setErrorMessage("Name must contain at least 3 letters and spaces.");
      return false;
    }
    if (!phoneRegex.test(formData.phoneNumber)) {
      setErrorMessage("Phone number must be exactly 10 digits.");
      return false;
    }
    if (!locationRegex.test(formData.plotLocation)) {
      setErrorMessage("Plot location contains invalid characters.");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const payload = {
        name: formData.name || "Unknown",
        number: formData.phoneNumber || "",
        type: "Construction",
        area: formData.area || "",
        budget: formData.budget || "",
        city: formData.plotLocation || "Not provided",
        country: "India",
        state: "",
        priority: "WARM",  // ✅ Change to a valid value (HOT, WARM, or COLD)
        status: "NEW",     // ✅ Change to a valid value (NEW, INACTIVE, CONTACTED, etc.)
      };

      console.log("📤 Sending Payload:", payload);

      const response = await axios.post("https://crm.gomaterial.in/api/queries", payload, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200 || response.status === 201) {
        setSuccessMessage("Your consultation request has been submitted successfully!");
        setFormData({ name: "", phoneNumber: "", plotLocation: "" });
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
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                onChange={(e) => setFormData({ ...formData, plotLocation: e.target.value })}
              />
            </div>
          </form>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col items-start justify-center text-white">
          <ParaText className="leading-relaxed mb-8">
            Seamless Home interior & Home construction: Start To Finish,
            Hassle-free. Effortless Home interior & home Construction Solutions:
            From Concept to Completion
          </ParaText>
          <button
            onClick={handleSubmit}
            className="bg-white text-black font-medium py-2 px-6 rounded-lg min-w-80 hover:bg-gray-200 transition"
            disabled={loading}
          >
            <SectionHeading>{loading ? "Submitting..." : "Book consultation now"}</SectionHeading>
          </button>
          {successMessage && <p className="text-green-400 text-sm mt-2">{successMessage}</p>}
          {errorMessage && <p className="text-red-400 text-sm mt-2">{errorMessage}</p>}
        </div>
      </Wrapper>
    </div>
  );
};

export default ProjectForm;
