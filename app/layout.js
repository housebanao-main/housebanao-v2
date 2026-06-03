import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ClientWrapper from "./ClientWrapper";
import WhatsAppButton from "@/components/WhatsAppButton";
import AOSInit from "@/components/AOSInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "House Banao",
  "url": "https://www.housebanao.com",
  "telephone": "+91-9810432124",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "7th Floor, JMD Megapolis, Sector 48",
    "addressLocality": "Gurugram",
    "addressRegion": "Haryana",
    "postalCode": "122018",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "28.4089",
    "longitude": "77.0378"
  },
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61556675355596",
    "https://www.instagram.com/house_banao",
    "https://www.linkedin.com/company/housebanao2/"
  ]
};

export const metadata = {
  title: "Craft Your Dream Home with House Banao",
  description:
    "Change your space with House Banao! We are the best construction & interior design experts in Gurgaon.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        {/* Meta Pixel */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '994353225715765');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=994353225715765&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* GTM Script */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KDMJ56MS');`,
          }}
        />

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KDMJ56MS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <AOSInit />
        <ClientWrapper>
          {children}
        </ClientWrapper>

        <WhatsAppButton />
      </body>
    </html>
  );
}
