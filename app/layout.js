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

export const metadata = {
  title: "Craft Your Dream Home with House Banao",
  description:
    "Change your space with House Banao! We are the best construction & interior design experts in Gurgaon. Offering easy solutions, we help with homes & businesses. Our high-quality work and personal touch make your dreams come true. Check out our services & see amazing results from beginning to end.",
  keywords: [
    "House Banao",
    "construction",
    "interior design",
    "Gurgaon",
    "home improvement",
    "renovation",
    "commercial spaces",
    "best builders",
    "home decor",
  ],
  authors: [{ name: "House Banao" }],
  openGraph: {
    title: "Craft Your Dream Home with House Banao",
    description:
      "Transform your home or business with House Banao's expert construction and interior design services in Gurgaon.",
    type: "website",
    url: "https://www.housebanao.com",
    images: [
      {
        url: "https://www.housebanao.com/assets/preview-image.jpg",
        width: 1200,
        height: 630,
        alt: "House Banao Preview",
      },
    ],
  },
  viewport: "width=device-width, initial-scale=1.0",
};

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
