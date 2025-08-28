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
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KDMJ56MS');`,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="a_sHu10jdaVL1HqORQDjBMjlJMg8k2hD5WVEyF2IQsM"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KDMJ56MS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <PopupProvider>
          <Popup />
          {children}
        </PopupProvider>
      </body>
    </html>
  );
}
