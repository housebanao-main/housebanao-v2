'use client';
import React, { useEffect, useState } from "react";
import { usePopup } from "../context/PopupContext";
import { IoMdContact } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import axios from "axios";

const Popup = () => {
  const { isPopupVisible, closePopup } = usePopup();
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    plotLocation: "",
    area: "",
    budget: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = () => {
    const nameRegex = /^[a-zA-Z\s]{3,}$/;
    const phoneRegex = /^[0-9]{10}$/;
    const locationRegex = /^[a-zA-Z0-9\s,.-]+$/;

    if (!nameRegex.test(formData.name)) {
      setErrorMessage("Name must contain only alphabets and spaces (at least 3 characters)."
      );
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

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    const payload = {
      name: formData.name || "Unknown",
      number: formData.phoneNumber || "",
      type: "Construction",
      area: formData.area || "",
      budget: formData.budget || "",
      city: formData.plotLocation || "Not provided",
      country: "India",
      state: "",
      priority: "WARM",
      status: "NEW",
    };

    try {
      console.log("📤 Sending Payload:", payload);
      const response = await axios.post(
        "https://crm.gomaterial.in/api/queries",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200 || response.status === 201) {
        setSuccessMessage("Your estimate request has been submitted successfully!");
        setFormData({ name: "", phoneNumber: "", plotLocation: "", area: "", budget: "" });
      }
    } catch (error) {
      console.error("🔥 API Error:", error.response?.data || error.message);
      setErrorMessage(error.response?.data?.error || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = isPopupVisible ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isPopupVisible]);

  if (!isPopupVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="max-w-lg mx-auto py-8 px-5 space-y-6 bg-white rounded-lg relative shadow-lg">
        <button
          onClick={closePopup}
          className="absolute top-3 right-3 text-gray-700 text-lg font-bold"
          aria-label="Close popup"
        >
          X
        </button>

        <h1 className="text-center text-xl font-bold text-gray-800">
          Get your cost estimate for free
        </h1>

        <div className="w-full space-y-3">
          {[{ name: "name", placeholder: "Name", value: formData.name, type: "text", icon: <IoMdContact /> },
            { name: "phoneNumber", placeholder: "Phone number", value: formData.phoneNumber, type: "tel", icon: <img src="/service/flag.png" alt="India Flag" className="w-5 h-3 object-cover rounded" />, onChange: handlePhoneNumberChange },
            { name: "plotLocation", placeholder: "Plot location", value: formData.plotLocation, type: "text", icon: <MdLocationOn /> },
          ].map((field, index) => (
            <div key={index} className="border border-gray-300 rounded-full flex items-center p-2">
              <span className="pl-2">{field.icon}</span>
              <input
                name={field.name}
                className="bg-transparent w-full placeholder-gray-500 px-3 outline-none text-gray-700"
                placeholder={field.placeholder}
                type={field.type}
                value={field.value}
                onChange={field.onChange || ((e) => setFormData({ ...formData, [e.target.name]: e.target.value }))}
              />
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col items-center gap-3">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-blue-600 text-white w-full py-2 rounded-md shadow-md hover:opacity-90 transition"
          >
            {loading ? "Submitting..." : "Get your cost estimate"}
          </button>
          <a
            href="https://api.whatsapp.com/send?phone=9810432124"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white w-full py-2 flex items-center justify-center rounded-md shadow-md hover:opacity-90 transition gap-2"
          >
            <img src="/service/whatsapp-logo.png" alt="WhatsApp Logo" className="w-4 h-4" />
            Chat on WhatsApp
          </a>
        </div>

        {successMessage && <p className="text-green-500 text-sm text-center">{successMessage}</p>}
        {errorMessage && <p className="text-red-500 text-sm text-center">{errorMessage}</p>}

        <p className="w-full text-center text-xs text-gray-600 mt-3">
          By submitting this form, you agree to the privacy policy and terms of use.
        </p>
      </div>
    </div>
  );
};

export default Popup;