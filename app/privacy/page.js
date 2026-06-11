import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lastUpdated = "June 4, 2026";

const sections = [
  {
    title: "1. Who We Are",
    content: (
      <>
        <p>
          This Privacy Policy applies to <strong>Vive HouseBanao Technologies Pvt. Ltd.</strong>{" "}
          (&ldquo;HouseBanao&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), a company registered in India,
          operating from 7th Floor, JMD Megapolis, Sector 48, Gurugram, Haryana 122018.
        </p>
        <p className="mt-3">
          We provide home construction, interior design, and commercial construction services
          across Delhi NCR. This policy explains how we collect, use, and protect your personal
          information when you visit <strong>www.housebanao.com</strong> or contact us for our services.
        </p>
      </>
    ),
  },
  {
    title: "2. Information We Collect",
    content: (
      <>
        <p className="font-semibold text-[#0f0f0f] mb-2">A. Information you provide directly:</p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Full name</li>
          <li>Phone number (mobile)</li>
          <li>Email address</li>
          <li>Plot location / city</li>
          <li>Project type and budget (if shared)</li>
          <li>Any other details shared via our contact or consultation forms</li>
        </ul>
        <p className="font-semibold text-[#0f0f0f] mb-2">B. Information collected automatically:</p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>IP address and device information</li>
          <li>Browser type and version</li>
          <li>Pages visited, time spent, and click behaviour</li>
          <li>Referral source (UTM parameters — utm_source, utm_medium, utm_campaign, etc.)</li>
          <li>Google Analytics data (via GA4 tag G-RRHNPC8S6W)</li>
          <li>Facebook/Meta Pixel data (for ad campaign measurement)</li>
          <li>Google Tag Manager events</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. How We Use Your Information",
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>To call or message you about your construction or interior design inquiry</li>
        <li>To prepare and share cost estimates, project plans, and proposals</li>
        <li>To schedule free site visits and consultations</li>
        <li>To send updates about your ongoing project</li>
        <li>To send promotional offers, new services, or project showcases (you may opt out at any time)</li>
        <li>To measure the effectiveness of our advertising campaigns (Google Ads, Meta Ads)</li>
        <li>To improve our website experience based on usage analytics</li>
        <li>To comply with legal and regulatory requirements</li>
      </ul>
    ),
  },
  {
    title: "4. Cookies and Tracking Technologies",
    content: (
      <>
        <p className="mb-3">
          Our website uses cookies and tracking technologies for analytics and advertising. These include:
        </p>
        <div className="space-y-3">
          {[
            { name: "Google Analytics (GA4)", purpose: "Tracks visitor behaviour, page views, session duration, and conversion events." },
            { name: "Google Tag Manager", purpose: "Manages and fires tracking scripts across the website." },
            { name: "Meta Pixel", purpose: "Tracks ad performance for Facebook and Instagram campaigns." },
            { name: "UTM Parameters", purpose: "Captures ad source data (source, medium, campaign) passed through URLs to measure which campaigns generate leads." },
          ].map((c) => (
            <div key={c.name} className="border-l-2 border-[#c9a07a] pl-4">
              <p className="font-semibold text-[#0f0f0f] text-sm">{c.name}</p>
              <p className="text-[#666] text-sm">{c.purpose}</p>
            </div>
          ))}
        </div>
        <p className="mt-4">
          You can disable cookies through your browser settings. Note that disabling cookies may
          affect some website functionality.
        </p>
      </>
    ),
  },
  {
    title: "5. Sharing Your Information",
    content: (
      <>
        <p className="mb-3">We do <strong>not</strong> sell your personal information. We may share it with:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Our CRM system</strong> (api.gomaterial.in) — to manage and follow up on your inquiry</li>
          <li><strong>Our internal sales and project teams</strong> — to process your consultation request</li>
          <li><strong>Trusted construction partners or vendors</strong> — only when required to execute your project, under confidentiality agreements</li>
          <li><strong>Analytics and advertising platforms</strong> (Google, Meta) — in anonymised or aggregated form for campaign performance measurement</li>
          <li><strong>Legal authorities</strong> — if required by law, court order, or government regulation</li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Data Retention",
    content: (
      <p>
        We retain your personal data for as long as necessary to provide our services and maintain
        our business records — typically up to <strong>3 years</strong> from your last interaction
        with us, or as required by applicable Indian laws. Lead inquiry data is retained for follow-up
        and project management purposes. You may request deletion at any time (see Section 8).
      </p>
    ),
  },
  {
    title: "7. Data Security",
    content: (
      <p>
        We implement industry-standard security measures to protect your personal information,
        including HTTPS encryption, access controls, and secure data storage. However, no method
        of transmission over the internet is 100% secure. We cannot guarantee absolute security
        but are committed to protecting your data to the best of our ability.
      </p>
    ),
  },
  {
    title: "8. Your Rights",
    content: (
      <>
        <p className="mb-3">You have the right to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Access</strong> — request a copy of the personal data we hold about you</li>
          <li><strong>Correction</strong> — request correction of inaccurate or incomplete data</li>
          <li><strong>Deletion</strong> — request that we delete your personal data</li>
          <li><strong>Opt-out</strong> — unsubscribe from marketing communications at any time</li>
          <li><strong>Portability</strong> — request your data in a structured, machine-readable format</li>
        </ul>
        <p className="mt-3">
          To exercise any of these rights, contact us at{" "}
          <a href="mailto:support@housebanao.com" className="text-[#c9a07a] underline">
            support@housebanao.com
          </a>.
        </p>
      </>
    ),
  },
  {
    title: "9. Third-Party Links",
    content: (
      <p>
        Our website may contain links to third-party websites (e.g. social media profiles, partner
        sites). We are not responsible for the privacy practices of those websites. We encourage you
        to read their privacy policies before sharing any personal information.
      </p>
    ),
  },
  {
    title: "10. Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our practices or
        legal requirements. The updated version will be posted on this page with a revised
        &ldquo;Last Updated&rdquo; date. Continued use of our website after changes constitutes your
        acceptance of the updated policy.
      </p>
    ),
  },
  {
    title: "11. Contact Us",
    content: (
      <div className="space-y-1">
        <p>For any questions or requests regarding this Privacy Policy, reach us at:</p>
        <p><strong>Vive HouseBanao Technologies Pvt. Ltd.</strong></p>
        <p>7th Floor, JMD Megapolis, Sector 48, Gurugram, Haryana 122018</p>
        <p>
          Email:{" "}
          <a href="mailto:support@housebanao.com" className="text-[#c9a07a] underline">
            support@housebanao.com
          </a>
        </p>
        <p>
          Phone:{" "}
          <a href="tel:+919810432124" className="text-[#c9a07a] underline">
            +91 981-0432-124
          </a>
        </p>
      </div>
    ),
  },
];

export const metadata = {
  title: "Privacy Policy — HouseBanao",
  description: "Learn how HouseBanao collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-white w-full overflow-x-hidden">
      <Navbar isWhite />

      {/* Hero */}
      <section className="bg-[#0f0f0f] pt-32 pb-16 border-b border-white/10">
        <div className="max-w-screen-2xl mx-auto w-full lg:w-[90%] px-4 md:px-8">
          <div className="w-12 h-[2px] bg-[#c9a07a] mb-6" />
          <p className="text-[#c9a07a] text-sm font-semibold tracking-[4px] uppercase mb-3">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/50 text-base">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-screen-2xl mx-auto w-full lg:w-[90%] px-4 md:px-8">
          <div className="max-w-3xl">

            {/* Intro */}
            <p className="text-[#666] text-lg leading-relaxed mb-12 pb-12 border-b border-[#e8e4df]">
              At HouseBanao, your privacy is important to us. This policy describes what personal
              information we collect, why we collect it, and how we use and protect it. Please read
              this carefully before using our website or services.
            </p>

            {/* Sections */}
            <div className="space-y-12">
              {sections.map((s, i) => (
                <div key={i} className="pb-12 border-b border-[#e8e4df] last:border-0 last:pb-0">
                  <h2 className="text-2xl font-bold text-[#0f0f0f] mb-4">{s.title}</h2>
                  <div className="text-[#666] text-base leading-relaxed">{s.content}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
