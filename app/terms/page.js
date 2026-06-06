import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lastUpdated = "June 4, 2026";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: (
      <p>
        By accessing or using the website <strong>www.housebanao.com</strong> or by contacting
        HouseBanao for any service — including home construction, interior design, or commercial
        construction — you agree to be bound by these Terms and Conditions. If you do not agree
        with any part of these terms, please do not use our website or services.
      </p>
    ),
  },
  {
    title: "2. About Our Services",
    content: (
      <>
        <p className="mb-3">HouseBanao offers the following services:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>End-to-End Home Construction</strong> — complete residential construction from foundation to finishing</li>
          <li><strong>Home Interior Design</strong> — modular kitchens, living rooms, bedrooms, and full interior fit-outs</li>
          <li><strong>Commercial Construction</strong> — office spaces, retail fit-outs, and commercial buildings</li>
          <li><strong>Free Cost Estimation</strong> — preliminary project cost estimates provided at no charge</li>
          <li><strong>Free Site Visit & Consultation</strong> — on-site assessment by our expert team</li>
        </ul>
        <p className="mt-3">
          All services are subject to availability, location, project scope, and a formal signed agreement
          between HouseBanao and the client before work commences.
        </p>
      </>
    ),
  },
  {
    title: "3. Cost Estimates & Quotations",
    content: (
      <>
        <p className="mb-3">
          Any cost estimate provided — whether through our website form, phone call, WhatsApp, or
          in-person consultation — is <strong>preliminary and indicative only</strong>. It is not a
          binding quotation or contract.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Final project costs will be provided in a formal written quotation after a site visit and detailed scope assessment</li>
          <li>Estimates may vary based on actual site conditions, material choices, and design complexity</li>
          <li>Prices are subject to change due to market fluctuations in material or labour costs</li>
          <li>HouseBanao is not liable for any decisions made solely on the basis of a preliminary estimate</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Project Agreements & Payments",
    content: (
      <>
        <p className="mb-3">
          All construction and interior design projects require a formal written agreement signed
          by both parties before work begins. The agreement will outline:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Detailed scope of work</li>
          <li>Project timeline and milestones</li>
          <li>Payment schedule (typically milestone-based)</li>
          <li>Material specifications and brands</li>
          <li>Warranty terms</li>
        </ul>
        <p className="mt-3">
          Payments are made according to the agreed schedule. Delays in payment may result in
          project delays. HouseBanao reserves the right to pause work if payments are overdue by
          more than <strong>7 working days</strong> from the due date.
        </p>
      </>
    ),
  },
  {
    title: "5. Project Timelines",
    content: (
      <>
        <p className="mb-3">
          HouseBanao commits to delivering projects within the agreed timeline specified in the
          signed project agreement. However, timelines may be affected by:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Delayed payments from the client</li>
          <li>Client-requested changes to scope or design after work has begun</li>
          <li>Unforeseen site conditions (e.g. soil issues, structural discoveries)</li>
          <li>Force majeure events (natural disasters, government orders, supply chain disruptions)</li>
          <li>Delays in client approvals or material selections</li>
        </ul>
        <p className="mt-3">
          In such cases, HouseBanao will communicate the revised timeline and work collaboratively
          with the client to minimise delays.
        </p>
      </>
    ),
  },
  {
    title: "6. Client Responsibilities",
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Provide accurate information about the plot, building, and project requirements</li>
        <li>Ensure timely availability of the site for our team and materials</li>
        <li>Make payments on time as per the agreed schedule</li>
        <li>Obtain necessary permissions, NOCs, and approvals from local authorities before construction begins (HouseBanao can assist in an advisory capacity)</li>
        <li>Respond to design and material selection queries within a reasonable timeframe</li>
        <li>Not engage any third-party contractor for work covered under the HouseBanao agreement without prior written consent</li>
      </ul>
    ),
  },
  {
    title: "7. Warranty & After-Sales Support",
    content: (
      <>
        <p className="mb-3">HouseBanao provides the following post-completion warranties:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Civil/Structural work:</strong> 1-year warranty against structural defects caused by workmanship</li>
          <li><strong>Waterproofing:</strong> 1-year warranty</li>
          <li><strong>Electrical & Plumbing:</strong> 6-month warranty on workmanship (materials carry manufacturer warranty)</li>
          <li><strong>Interior fittings & furniture:</strong> As per manufacturer warranty on materials used</li>
        </ul>
        <p className="mt-3">
          Warranty is void in case of misuse, unauthorised modifications, or damage caused by
          third-party contractors after project handover.
        </p>
      </>
    ),
  },
  {
    title: "8. Intellectual Property",
    content: (
      <p>
        All designs, drawings, plans, 3D renders, and documentation prepared by HouseBanao remain
        the intellectual property of HouseBanao until full payment is received. Upon full settlement,
        ownership of project-specific designs transfers to the client. HouseBanao retains the right
        to use project photographs and videos for marketing purposes (portfolio, social media, website)
        unless the client expressly requests otherwise in writing.
      </p>
    ),
  },
  {
    title: "9. Limitation of Liability",
    content: (
      <>
        <p className="mb-3">HouseBanao shall not be held liable for:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Losses arising from inaccurate or incomplete information provided by the client</li>
          <li>Delays or issues caused by third-party suppliers or government authorities</li>
          <li>Indirect, incidental, or consequential damages arising from the use of our website or services</li>
          <li>Any loss or damage resulting from force majeure events beyond our reasonable control</li>
        </ul>
        <p className="mt-3">
          Our maximum liability in any dispute shall not exceed the total amount paid by the client
          for the specific service in question.
        </p>
      </>
    ),
  },
  {
    title: "10. Cancellation & Refund",
    content: (
      <p>
        Cancellations and refunds are governed by our separate{" "}
        <a href="/cancellation-policy" className="text-[#c9a07a] underline">
          Cancellation & Refund Policy
        </a>
        . Please review it before entering into a service agreement.
      </p>
    ),
  },
  {
    title: "11. Website Use",
    content: (
      <>
        <p className="mb-3">When using our website, you agree not to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Use the website for any unlawful purpose</li>
          <li>Reproduce, copy, or redistribute any content without written permission</li>
          <li>Attempt to gain unauthorised access to any part of the website or its servers</li>
          <li>Submit false or misleading information through our forms</li>
          <li>Use any automated tool to scrape or collect data from the website</li>
        </ul>
      </>
    ),
  },
  {
    title: "12. Governing Law & Disputes",
    content: (
      <p>
        These Terms and Conditions are governed by the laws of <strong>India</strong>, and any
        disputes shall be subject to the exclusive jurisdiction of the courts in{" "}
        <strong>Gurugram, Haryana</strong>. In case of a dispute, both parties agree to first
        attempt resolution through mutual discussion. If unresolved within 30 days, the matter
        may be referred to arbitration in accordance with the Arbitration and Conciliation Act, 1996.
      </p>
    ),
  },
  {
    title: "13. Changes to These Terms",
    content: (
      <p>
        HouseBanao reserves the right to update these Terms and Conditions at any time. Changes
        will be posted on this page with a revised &ldquo;Last Updated&rdquo; date. Continued use
        of our website or services after changes are posted constitutes acceptance of the revised
        terms.
      </p>
    ),
  },
  {
    title: "14. Contact Us",
    content: (
      <div className="space-y-1">
        <p>For any questions about these Terms and Conditions, contact us:</p>
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
  title: "Terms & Conditions — HouseBanao",
  description: "Read HouseBanao's terms and conditions for home construction and interior design services.",
};

export default function TermsAndConditions() {
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
            Terms &amp; Conditions
          </h1>
          <p className="text-white/50 text-base">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-2xl mx-auto w-full lg:w-[90%] px-4 md:px-8">
          <div className="max-w-3xl">

            {/* Intro */}
            <p className="text-[#666] text-lg leading-relaxed mb-12 pb-12 border-b border-[#e8e4df]">
              These Terms and Conditions govern your use of the HouseBanao website and the services
              we provide. By engaging with us — online or offline — you agree to the terms set out
              below. Please read them carefully.
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
