"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const PopupContext = createContext();

export function PopupProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Run only on client side and only once
    const hasSeenPopup = sessionStorage.getItem("homepagePopupSeen");
    
    if (!hasSeenPopup) {
      // First visit - show popup
      setIsOpen(true);
      sessionStorage.setItem("homepagePopupSeen", "true");
    }
  }, []); // Empty dependency array - runs once on mount

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <PopupContext.Provider value={{ isOpen, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  );
}

export function usePopup() {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error("usePopup must be used within PopupProvider");
  }
  return context;
}
