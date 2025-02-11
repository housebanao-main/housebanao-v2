'use client';
import React, { useState } from "react";
import { IoMdContact } from "react-icons/io";
import { MdLocationOn } from "react-icons/md"; // Location icon
import { AiOutlineCheckCircle } from "react-icons/ai"; // Success icon
import axios from "axios"; // Install axios using `npm install axios`

const RightForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    plotLocation: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false); // Control modal visibility

  const validateForm = () => {
    const nameRegex = /^[a-zA-Z\s]{3,}$/; // Only alphabets and spaces, at least 3 characters
    const phoneRegex = /^[0-9]{10}$/; // Exactly 10 digits
    const locationRegex = /^[a-zA-Z0-9\s,.-]+$/; // Valid address characters

    if (!nameRegex.test(formData.name)) {
      setErrorMessage("Name must contain only alphabets and spaces (at least 3 characters).");
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
  
    try {
      const response = await axios.post("https://uat-crm.gomaterial.in/api/queries", {
        name: formData.name,
        number: formData.phoneNumber, // Match API schema
        type: "Construction", // Default type, modify as needed
        area: formData.area || "NA", // Get from form if added
        city: formData.plotLocation, // Assuming 'plotLocation' is the city
        country: "India", // Default country
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.status === 200 || response.status === 201) {
        setShowModal(true); // Show success modal
        setFormData({ name: "", phoneNumber: "", plotLocation: "", area: "", budget: "" }); // Reset form
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.error || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="basis-full md:basis-1/2 flex flex-col items-center justify-center mb-8">
      <div
        id="container"
        className="mx-auto pb-[3vw] pt-[2vw] space-y-6 bg-transparent bg-opacity-20 rounded-b-full overflow-hidden"
      >
        <div className="flex max-w-2xl flex-col items-center justify-center gap-6 p-2">
          <h1 className="text-center lg:mt-24 text-xl sm:text-2xl font-semibold text-white drop-shadow-md">
            Get your cost estimate for free
          </h1>
          <div className="sm:w-[80%] space-y-4">
            {[{
                name: "name",
                placeholder: "Name",
                value: formData.name,
                type: "text",
                icon: <IoMdContact />,
              },
              {
                name: "phoneNumber",
                placeholder: "Phone number",
                value: formData.phoneNumber,
                type: "tel",
                icon: (
                  <img
                    src="/service/flag.png"
                    alt="India Flag"
                    className="w-6 h-4 object-cover rounded"
                  />
                ),
                onChange: handlePhoneNumberChange,
              },
              {
                name: "plotLocation",
                placeholder: "Plot location",
                value: formData.plotLocation,
                type: "text",
                icon: <MdLocationOn />,
              },
            ].map((field, index) => (
              <div key={index} className="border border-white rounded-full flex items-center p-2">
                <span className="pl-2">{field.icon}</span>
                <input
                  name={field.name} // Use name to identify the field
                  className="bg-transparent w-full placeholder-white p-2 outline-none text-white"
                  placeholder={field.placeholder}
                  type={field.type}
                  value={field.value}
                  onChange={field.onChange || ((e) =>
                    setFormData({ ...formData, [e.target.name]: e.target.value })) }// Use name to update
                />
              </div>
            ))}
          </div>
          <div className="w-full flex flex-col items-center gap-4">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-[#2A27E8] text-white w-[80%] py-2 rounded-md shadow-lg hover:opacity-90 transition"
            >
              {loading ? "Submitting..." : "Get your cost estimate"}
            </button>
            <a
              href="https://api.whatsapp.com/send?phone=9810432124"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white w-[80%] py-2 flex items-center justify-center rounded-md shadow-lg hover:opacity-90 transition gap-2"
            >
              <img src="/service/whatsapp-logo.png" alt="WhatsApp Logo" className="w-5 h-5" />
              Chat with WhatsApp
            </a>
          </div>
          {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
          <p className="w-[50%] sm:w-[60%] text-center mx-auto text-[12px] sm:text-sm text-white opacity-80">
            By submitting this form, you agree to the privacy policy and terms of use.
          </p>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-[80%] sm:w-[400px]">
            <AiOutlineCheckCircle className="text-green-500 text-5xl mx-auto mb-3" />
            <h2 className="text-xl font-semibold">Submission Successful!</h2>
            <p className="text-gray-600">Our team will connect with you soon.</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightForm;
