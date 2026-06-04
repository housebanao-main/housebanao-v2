"use client";

import { PopupProvider } from "@/context/PopupContext";

export default function ClientWrapper({ children }) {
  return (
    <PopupProvider>
      {children}
    </PopupProvider>
  );
}
