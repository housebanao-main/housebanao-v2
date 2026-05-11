"use client";

import { PopupProvider } from "@/context/PopupContext";
import Popup from "@/components/Popup";

export default function ClientWrapper({ children }) {
  return (
    <PopupProvider>
      <Popup />
      {children}
    </PopupProvider>
  );
}
