"use client";

import { useEffect, useState } from "react";
import HomepagePopup from "./HomepagePopup";

export default function ServicesPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const seenPopup = sessionStorage.getItem("seenPopup");

    if (!seenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    sessionStorage.setItem("seenPopup", "true");
  };

  return <HomepagePopup isOpen={showPopup} onClose={handleClosePopup} />;
}
