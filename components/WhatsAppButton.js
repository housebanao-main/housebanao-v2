"use client";

import { FaPhone } from "react-icons/fa";
import { useState } from "react";

export default function FloatingButtons() {
  const [showNumber, setShowNumber] = useState(false);

  return (
    <div className="fixed bottom-7 right-7 z-[9999] flex flex-col items-end gap-3">

      {/* Call Button */}
      <div className="flex items-center gap-3">
        {showNumber && (
          <div className="bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-full shadow-lg border border-gray-100 whitespace-nowrap">
            +91 98104 32124
          </div>
        )}
        <a
          href="tel:+919810432124"
          onMouseEnter={() => setShowNumber(true)}
          onMouseLeave={() => setShowNumber(false)}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(164,99,82,0.5)] hover:scale-110 hover:shadow-[0_6px_28px_rgba(164,99,82,0.7)] transition-all duration-200"
          style={{ backgroundColor: "#a46352" }}
          aria-label="Call HouseBanao"
        >
          <FaPhone className="text-white text-xl" />
        </a>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send?phone=9810432124"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.5)] hover:scale-110 hover:shadow-[0_6px_28px_rgba(37,211,102,0.7)] transition-all duration-200"
        style={{ backgroundColor: "#25D366" }}
        aria-label="Chat on WhatsApp"
      >
        <img
          src="/service/whatsapp-logo.png"
          alt="WhatsApp"
          className="w-7 h-7 object-contain"
        />
      </a>

    </div>
  );
}
