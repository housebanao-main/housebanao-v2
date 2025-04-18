"use client";
import SectionHeading from "@/components/Headings/SectionHeading";
import Wrapper from "@/components/Wrapper";
import React, { useState } from "react";
import Tap from "@/public/quickservice/water-tap.png";
import Electrician from "@/public/quickservice/electrician.png";
import Icon1 from "@/public/quickservice/Icon1.png";
import Icon2 from "@/public/quickservice/Icon2.png";
import Icon3 from "@/public/quickservice/Icon3.png";
import { GiTap } from "react-icons/gi";
import { MdElectricBolt } from "react-icons/md";
import { MdCarpenter } from "react-icons/md";
import { AiFillFormatPainter } from "react-icons/ai";
import { MdPestControl } from "react-icons/md";
import { GiGardeningShears } from "react-icons/gi";
import { BsFillHouseAddFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import Popup from "@/components/Popup";
import axios from "axios";
import plumber from "@/public/quickservice/plumber.jpg";
import painter from "@/public/quickservice/painter.jpg";
import carpenter from "@/public/quickservice/carpenter.jpg";
import pestControl from "@/public/quickservice/pest.jpg";
import gardening from "@/public/quickservice/gardening.jpg";
import housekeeping from "@/public/quickservice/housekeep.jpg";
import electrician from "@/public/quickservice/electrician.jpg";

const QuickService = () => {
  const [selectedService, setSelectedService] = React.useState({
    name: "",
    desc: "",
    PopupImg: null,
    prices: {},
  });
  const [showPopup, setShowPopup] = React.useState(false);

  const services = [
    {
      id: 1,
      name: "Plumber",
      icon: <GiTap />,
      desc: "Plumbing services include fixing leaks, installing fixtures, and ensuring proper drainage. Our skilled plumbers are ready to assist you with any plumbing needs.",
      PopupImg: plumber,
      prices: {
        single: 1200,
        weekly: 4500,
        monthly: 15000,
      },
    },
    {
      id: 2,
      name: "Electrician",
      icon: <MdElectricBolt />,
      desc: "Electrician services cover wiring, lighting installation, and electrical repairs. Our licensed electricians ensure your home is safe and well-lit.",
      PopupImg: electrician,
      prices: {
        single: 1500,
        weekly: 5000,
        monthly: 18000,
      },
    },
    {
      id: 3,
      name: "Carpenter",
      icon: <MdCarpenter />,
      desc: "Carpentry services include furniture making, repairs, and custom woodwork. Our skilled carpenters can create beautiful and functional pieces for your home.",
      PopupImg: carpenter,
      prices: {
        single: 1800,
        weekly: 6000,
        monthly: 22000,
      },
    },
    {
      id: 4,
      name: "Painter",
      icon: <AiFillFormatPainter />,
      desc: "Painting services encompass interior and exterior painting, wallpapering, and touch-ups. Our professional painters will give your space a fresh look.",
      PopupImg: painter,
      prices: {
        single: 2000,
        weekly: 7000,
        monthly: 25000,
      },
    },
    {
      id: 5,
      name: "Pest Control",
      icon: <MdPestControl />,
      desc: "Pest control services include inspections, treatments, and prevention. Our experts will help you keep your home pest-free and comfortable.",
      PopupImg: pestControl,
      prices: {
        single: 1000,
        weekly: 3500,
        monthly: 12000,
      },
    },
    {
      id: 6,
      name: "Gardening",
      icon: <GiGardeningShears />,
      desc: "Gardening services cover landscaping, lawn care, and plant maintenance. Our gardening professionals will help you create a beautiful outdoor space.",
      PopupImg: gardening,
      prices: {
        single: 800,
        weekly: 3000,
        monthly: 10000,
      },
    },
    {
      id: 7,
      name: "Housekeeping",
      icon: <BsFillHouseAddFill />,
      desc: "Housekeeping services include cleaning, organizing, and maintenance. Our housekeeping team will ensure your home is tidy and welcoming.",
      PopupImg: housekeeping,
      prices: {
        single: 1200,
        weekly: 4000,
        monthly: 14000,
      },
    },
  ];

  return (
    <>
      <div className="bg-white w-full lg:w-[90%] mx-auto">
        {/* Heading */}
        <Wrapper>
          <div className="text-center mb-8">
            <SectionHeading className="text-left  font-bold">
              <span className="text-black">QUICK </span>
              <span className="text-[#2A27E8]">SERVICES</span>
            </SectionHeading>
          </div>
          {/* Services and View All Button in Same Line */}
          <div className="flex justify-between sm:justify-center sm:items-center gap-4 md:gap-8 lg:gap-12  2xl:gap-20 flex-wrap">
            {services.map((service) => (
              <div
                onClick={() => {
                  setSelectedService({
                    name: service.name,
                    desc: service.desc,
                    PopupImg: service.PopupImg,
                    prices: service.prices,
                  });
                  setShowPopup(true);
                }}
                key={service.id}
                className="flex flex-col cursor-pointer items-center transition-all duration-300 hover:transform hover:scale-105 p-3 rounded-xl hover:bg-gray-50 hover:shadow-lg"
              >
                <div className="text-5xl bg-blue-400 p-3 rounded-full text-white shadow-md transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-200 hover:shadow-lg">
                  {service.icon}
                </div>
                <p className="mt-2 text-gray-700 text-base font-medium transition-all duration-300 hover:text-blue-600">
                  {service?.name}
                </p>
              </div>
            ))}
          </div>
        </Wrapper>
      </div>

      {showPopup && (
        <ServicePopup
          selectedService={selectedService}
          setShowPopup={setShowPopup}
        />
      )}
    </>
  );
};

function ServicePopup({ setShowPopup, selectedService }) {
  const [nextStep, setNextStep] = React.useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    serviceType: "weekly",
    selectedDate: "",
  });
  const [error, setError] = useState("");

  console.log(selectedService);

  const handleGoToNext = () => {
    if (formData.selectedDate === "") {
      setError("Please select a date.");
      return;
    } else {
      setNextStep(true);
      setError("");
    }
  };

  const handleSubmit = async () => {
    console.log("Form Data:", formData);
    if (!formData.name || !formData.phone || !formData.address) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      // Create a proper payload with all the necessary information
      const payload = {
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
        date: formData.selectedDate,
        service: selectedService.name,
        // Only include serviceType for specific services
        ...(selectedService.name === "Pest Control" ||
        selectedService.name === "Housekeeping" ||
        selectedService.name === "Gardening"
          ? { serviceType: formData.serviceType }
          : {}),
        amount:
          selectedService.prices[formData.serviceType] ||
          selectedService.prices.single,
      };

      const response = await axios.post(
        "https://crm.gomaterial.in/api/queries",
        {
          name: JSON.stringify(payload),
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log(response.data);
      setFormData({
        name: "",
        phone: "",
        address: "",
        serviceType: "weekly",
        selectedDate: "",
      });
      setShowPopup(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      setShowPopup(false);
    }
  };

  return (
    <div
      onClick={(e) => {
        setShowPopup(false);
      }}
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      {!nextStep ? (
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl shadow-lg h-fit max-h-[85vh] overflow-y-scroll p-6 w-full max-w-sm mx-auto relative 
        scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          <div>
            <img
              src={selectedService?.PopupImg.src} // Replace with your image
              alt="Lift Maintenance"
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-4 text-center">
              <div className="flex items-center justify-end">
                <h2 className="text-2xl flex-1 font-semibold">
                  {selectedService.name}
                </h2>
                <IoClose
                  onClick={() => setShowPopup(false)}
                  className="text-2xl cursor-pointer"
                />
              </div>
              <p className="text-gray-500 text-sm mt-1">
                {selectedService.desc}
              </p>

              {/* Service Type Toggle */}
              {(selectedService.name === "Pest Control" ||
                selectedService.name === "Gardening" ||
                selectedService.name === "Housekeeping") && (
                <div className="text-left mt-4">
                  <label className="text-sm font-semibold mb-1 block text-gray-700">
                    Service Type
                  </label>
                  <div className="flex gap-2">
                    {["single", "weekly", "monthly"].map((type) => (
                      <button
                        key={type}
                        onClick={() =>
                          setFormData({ ...formData, serviceType: type })
                        }
                        className={`flex-1 px-3 py-2 text-sm rounded-lg border ${
                          formData.serviceType === type
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Select Date */}
              <div className="text-left mt-4">
                <label className="text-sm font-semibold mb-1 block text-gray-700">
                  Select Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    placeholder="DD/MM/YY"
                    value={formData.selectedDate}
                    onChange={(e) =>
                      setFormData({ ...formData, selectedDate: e.target.value })
                    }
                    className="w-full px-3 py-2 border rounded-lg pr-10 text-sm"
                  />
                  <h2 className="text-base text-red-500">{error}</h2>
                </div>
              </div>

              {/* Footer: Total & Button */}
              <div className="flex items-center justify-between mt-6">
                <span className="font-semibold text-gray-900 text-xl">
                  Total: ₹{" "}
                  {selectedService.prices[
                    formData.serviceType
                  ].toLocaleString()}
                </span>
                <button
                  onClick={handleGoToNext}
                  className="bg-blue-600 text-white px-5 py-2 rounded-full text-base shadow"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          onClick={(e) => e.stopPropagation()}
          className="max-w-2xl w-full mx-auto bg-white rounded-3xl shadow-lg p-6 relative"
        >
          {/* Close Button */}

          {/* Heading */}
          <div className="flex justify-between mb-4">
            <div className="text-center flex-1">
              <h2 className="text-2xl font-semibold">{selectedService.name}</h2>
              <p className="text-gray-500 text-sm mt-1">Address Details</p>
            </div>
            <IoClose
              onClick={() => setShowPopup(false)}
              className="text-2xl cursor-pointer"
            />
          </div>

          {/* Content: Image + Form */}
          <div className="mt-6 flex flex-col md:flex-row gap-6">
            {/* Image */}
            <div className=" w-1/3">
              <img
                src={selectedService.PopupImg.src} // Replace with your image
                alt="Technician"
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>

            {/* Form */}
            <div className="flex-1 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter your name"
                  className="w-full border rounded-lg px-3 py-2 bg-gray-100 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="Enter your phone number"
                  className="w-full border rounded-lg px-3 py-2 bg-gray-100 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <textarea
                  placeholder="Type your address here...."
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  className="w-full border rounded-lg px-3 py-2 bg-gray-100 text-sm h-20"
                />
              </div>
              <h2 className="text-base text-red-500">{error}</h2>
            </div>
          </div>

          {/* Continue Button */}
          <div onClick={handleSubmit} className="mt-6">
            <button className="w-full bg-blue-600 text-white py-3 rounded-full text-sm font-medium">
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuickService;
