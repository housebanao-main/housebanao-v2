"use client";

import { useState } from "react";

export default function ServiceDropdown() {
  const [selected, setSelected] = useState("");

  const services = [
    "Turnkey Construction",
    "Custom Home Building",
    "Commercial",
    "Duplex House Construction",
  ];

  return (
    <div className="flex flex-col items-center my-8 px-4">
      <div className="w-full max-w-4xl">
        <select
          className="w-full border-2 border-gray-300 p-4 rounded-lg focus:outline-none focus:border-[#8B4513] font-semibold text-lg"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          <option value="">Select a Service</option>

          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}