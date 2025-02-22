import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PopupProvider } from "@/context/PopupContext";
import Popup from "@/components/Popup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PopupProvider>
          <Popup />
          {children}
        </PopupProvider>
      </body>
    </html>
  );
}
