"use client";

import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";

const slugToServiceMap = {
  "turnkey-construction": "Turnkey Construction",
  "custom-home-building": "Custom Home Building",
  commercial: "Commercial",
  "duplex-house-construction": "Duplex House Construction",
  "interior-design": "Interior Design",
  "gurgaon-construction": "Construction Company in Gurgaon",
};

const serviceContent = {
  "duplex-house-construction": {
    heading: "Build Smart & Spacious Duplex Homes in NCR",
    subtitle:
      "End-to-end duplex construction across Gurgaon, Noida, Delhi & Ghaziabad — combining modern design with structural excellence.",
    intro: [
      "Looking to build a modern duplex home? House Banao offers expert duplex house construction in Gurgaon, duplex house construction in Noida, duplex house construction in Delhi, and duplex house construction in Ghaziabad with complete end-to-end solutions.",
      "We specialize in delivering modern duplex house design concepts that combine functionality, space optimization, and aesthetic appeal — perfect for today's lifestyle.",
    ],
    sections: [
      {
        title: "Duplex House Construction in Gurgaon, Noida, Delhi & Ghaziabad",
        preText:
          "As a trusted construction partner, we provide tailored solutions across the NCR region:",
        type: "city-cards",
        items: [
          {
            city: "Gurgaon",
            desc: "Professional duplex house construction in Gurgaon with high-quality materials and timely delivery.",
          },
          {
            city: "Noida",
            desc: "Reliable duplex house construction in Noida tailored to modern urban living.",
          },
          {
            city: "Delhi",
            desc: "Customized duplex house construction in Delhi with efficient space planning.",
          },
          {
            city: "Ghaziabad",
            desc: "Affordable and durable duplex house construction in Ghaziabad for families and investors.",
          },
        ],
        postText:
          "Each project is designed to meet your requirements while maintaining structural strength and long-term durability.",
      },
      {
        title: "Modern Duplex House Design & Planning",
        preText:
          "Our team focuses on creating modern duplex house design layouts that include:",
        type: "bullet-grid",
        items: [
          "Smart floor planning for both levels",
          "Stylish elevation and exterior design",
          "Maximum natural light and ventilation",
          "Functional separation of living and private spaces",
        ],
        postText:
          "We ensure your duplex home is both practical and visually appealing.",
      },
      {
        title: "Duplex Home Construction Cost Per Sq Ft",
        preText:
          "Understanding the duplex home construction cost per sq ft is important before starting your project. The cost depends on:",
        type: "cost-grid",
        items: [
          "Plot size and location",
          "Design complexity",
          "Material selection",
          "Interior finishing level",
        ],
        highlight:
          "Average duplex home construction cost per sq ft ranges from ₹1,700 – ₹2,800 depending on customization and specifications.",
        postText:
          "For an accurate estimate, we recommend a detailed consultation and site visit.",
      },
      {
        title: "Our Duplex Construction Process",
        preText:
          "From concept to completion, we manage everything with precision and transparency.",
        type: "process-steps",
        items: [
          { label: "Requirement Discussion" },
          { label: "Design & Planning" },
          { label: "Cost Estimation" },
          { label: "Construction Execution" },
          { label: "Final Handover" },
        ],
      },
      {
        title: "Why Choose House Banao?",
        preText:
          "We combine local expertise with proven processes to deliver homes you love.",
        type: "checklist",
        items: [
          "Experts in duplex house construction in Gurgaon, Noida, Delhi, and Ghaziabad",
          "Strong focus on modern duplex house design",
          "Transparent pricing and clear cost structure",
          "Quality construction with timely delivery",
          "End-to-end project management",
        ],
      },
    ],
  },

  "custom-home-building": {
    heading: "Build a Home That Truly Reflects You",
    subtitle: null,
    intro: [
      "Every family is different — and your home should reflect that. At House Banao, we specialize in custom home building, where every detail is designed around your lifestyle, preferences, and budget.",
      "As a trusted construction company in Gurgaon, we help you turn your ideas into a well-planned, beautifully executed home — without the usual stress of managing multiple vendors.",
    ],
    sections: [
      {
        title: "What is Custom Home Building?",
        preText:
          "Custom home building means designing and constructing a home from scratch, based entirely on your needs. Instead of using fixed templates, we create:",
        type: "bullet-grid",
        items: [
          "Personalized floor plans",
          "Custom room layouts",
          "Tailored interior and exterior designs",
          "Flexible material and budget options",
        ],
        postText:
          "Whether you want a modern villa, a compact family home, or a luxury residence — everything is built your way.",
      },
      {
        title: "Our Custom Home Building Services",
        preText:
          "We offer reliable and professional services across NCR, including:",
        type: "bullet-grid",
        items: [
          "House construction in Gurgaon",
          "House construction in Noida",
          "House construction in Ghaziabad",
        ],
        postText:
          "Our team understands local building norms, approvals, and site conditions, ensuring a smooth and compliant construction process.",
      },
      {
        title: "Affordable Construction Solutions",
        preText:
          "Building a home doesn't have to be overwhelming or expensive. As an affordable construction contractor in Gurgaon, we focus on:",
        type: "bullet-grid",
        items: [
          "Smart planning to reduce unnecessary costs",
          "Transparent pricing with no hidden charges",
          "Flexible material choices to match your budget",
          "Efficient project execution to avoid delays",
        ],
        postText: null,
      },
      {
        title: "Our Custom Home Building Process",
        preText: null,
        type: "process-steps",
        items: [
          {
            label: "Consultation & Planning",
            sub: "Understanding your vision, budget, and lifestyle needs.",
          },
          {
            label: "Design Development",
            sub: "Floor plans, 2D/3D designs, structural layouts.",
          },
          {
            label: "Cost Estimation",
            sub: "Detailed cost breakdown with full transparency.",
          },
          {
            label: "Construction Execution",
            sub: "Material procurement, skilled labor, site supervision.",
          },
          {
            label: "Final Handover",
            sub: "Fully completed home, ready for you to move in.",
          },
        ],
      },
      {
        title: "Why Choose House Banao?",
        preText:
          "As a growing construction company in Gurgaon, we focus on building homes that are not just strong and durable, but also comfortable and future-ready.",
        type: "checklist",
        items: [
          "Experienced construction professionals",
          "End-to-end project management",
          "Transparent communication",
          "On-time delivery commitment",
          "Quality materials and workmanship",
        ],
      },
    ],
  },

  commercial: {
    heading: "Building Functional & Future-Ready Commercial Spaces",
    subtitle: null,
    intro: [
      "Commercial construction requires more than just building structures — it demands planning, precision, and long-term functionality. At House Banao, we deliver reliable commercial construction services in Delhi, Noida, Gurgaon, and Ghaziabad, designed to meet modern business and institutional needs.",
      "From corporate offices to educational institutions and government buildings, we focus on creating spaces that are efficient, durable, and built to perform.",
    ],
    sections: [
      {
        title: "Our Commercial Construction Expertise",
        preText:
          "We specialize in a wide range of commercial projects, including:",
        type: "feature-cards",
        items: [
          {
            title: "Corporate Office Construction",
            desc: "We design and build professional office environments that enhance productivity and reflect your brand identity. Our team ensures efficient space planning, modern infrastructure, and high-quality finishes.",
          },
          {
            title: "School & College Construction",
            desc: "We create well-planned educational spaces that support learning and safety. From classrooms and labs to auditoriums and administrative blocks, we ensure proper layout, ventilation, and structural strength.",
          },
          {
            title: "Government Building Construction",
            desc: "We undertake government and public sector projects with a strong focus on compliance, durability, and long-term usability. Our team follows all required standards and guidelines for smooth execution.",
          },
        ],
        postText: null,
      },
      {
        title: "Commercial Construction Services Across NCR",
        preText: "We actively deliver projects across:",
        type: "bullet-grid",
        items: [
          "Commercial construction in Delhi",
          "Commercial construction in Noida",
          "Commercial construction in Gurgaon",
          "Commercial construction in Ghaziabad",
        ],
        postText:
          "Our local expertise helps us manage approvals, site conditions, and resources efficiently in each location.",
      },
      {
        title: "Our Project Execution Process",
        preText: null,
        type: "process-steps",
        items: [
          {
            label: "Requirement Analysis",
            sub: "Understanding project scope, functionality, and compliance needs.",
          },
          {
            label: "Design & Planning",
            sub: "Layout planning, structural design, utility planning.",
          },
          {
            label: "Budgeting & Cost Estimation",
            sub: "Clear and detailed project cost estimates with complete transparency.",
          },
          {
            label: "Construction & Execution",
            sub: "Material sourcing, skilled workforce, on-site supervision, quality control.",
          },
          {
            label: "Project Delivery",
            sub: "Timely completion with all required finishing and compliance standards.",
          },
        ],
      },
      {
        title: "Why Choose House Banao for Commercial Projects?",
        preText:
          "We understand that commercial spaces must be functional, efficient, and long-lasting, and we build accordingly.",
        type: "checklist",
        items: [
          "Experienced team for large-scale projects",
          "Strong planning and execution capability",
          "Transparent pricing and project tracking",
          "On-time delivery commitment",
          "Quality construction standards",
        ],
      },
    ],
  },

  "interior-design": {
    heading:
      "Build Your Dream Home with HouseBanao: Premier Construction & Interior Solutions in Delhi NCR",
    subtitle:
      "Transforming Visions into Landmarks across Gurgaon, Noida, and Ghaziabad.",
    intro: [
      "At HouseBanao, we believe that a home is more than just brick and mortar; it is a reflection of your personality and aspirations. As a premier integrated service provider in Delhi NCR, we bridge the gap between structural excellence and aesthetic brilliance.",
      "Whether you are looking to build a luxury villa from scratch or renovate your apartment, our expert team delivers end-to-end solutions under one roof.",
    ],
    sections: [
      {
        title: "End-to-End Home Construction",
        preText:
          "Building a home in a bustling city like Gurgaon or Noida can be overwhelming. HouseBanao simplifies the process — from architectural blueprints and local authority approvals to the final structural casting, we handle everything.",
        type: "bullet-grid",
        items: [
          "Architectural blueprints & planning",
          "Local authority approvals",
          "Structural casting & construction",
          "Quality-checked material procurement",
        ],
        postText:
          "Our construction quality is unmatched, ensuring your home stands the test of time.",
      },
      {
        title: "Bespoke Interior Designing",
        preText:
          "A great structure deserves an equally stunning interior. Our design philosophy combines functionality with luxury. We cater to diverse styles — from minimalist modern apartments in Noida to opulent traditional homes in Ghaziabad.",
        type: "bullet-grid",
        items: [
          "Customized Modular Kitchens",
          "Luxury Living Room Interiors",
          "Space-optimized Wardrobes and Storage",
          "Smart Home Integration",
        ],
        postText: null,
      },
      {
        title: "Turnkey Renovations",
        preText:
          "Looking to upgrade your existing space in Delhi NCR? Our renovation experts specialize in transforming old structures into contemporary masterpieces.",
        type: "bullet-grid",
        items: [
          "Complete structural renovation",
          "Modern interior finishing",
          "Latest construction techniques",
          "End-to-end project management",
        ],
        postText:
          "We integrate the latest construction techniques with trendy interior finishes to breathe new life into your property.",
      },
      {
        title: "Why HouseBanao is the Preferred Choice in Delhi NCR?",
        preText:
          "We combine local expertise with proven processes to deliver homes and interiors you love.",
        type: "feature-cards",
        items: [
          {
            title: "Local Expertise",
            desc: "Deep understanding of the soil, climate, and building norms in Gurgaon, Noida, and Ghaziabad.",
          },
          {
            title: "Quality Assurance",
            desc: "Use of premium grade materials and rigorous 200+ quality checks.",
          },
          {
            title: "Transparency",
            desc: "No hidden costs. Detailed BOQs (Bill of Quantities) provided upfront.",
          },
          {
            title: "Timely Delivery",
            desc: "Advanced project management to ensure you move into your home on schedule.",
          },
        ],
      },
    ],
  },

  "turnkey-construction": {
    heading: "Build Your Dream Home with Complete Turnkey Solutions",
    subtitle: null,
    intro: [
      "Building a home is more than just construction — it's a personal journey. At House Banao, we offer complete turnkey construction services in Gurgaon, Noida, Delhi, and Ghaziabad, taking care of everything from planning to final handover.",
      "You don't need to coordinate with multiple contractors. Our team manages the entire process — design, materials, construction, and finishing — so you can focus on what truly matters.",
    ],
    sections: [
      {
        title: "What is Turnkey Construction?",
        preText:
          "Turnkey construction means a fully managed, ready-to-move solution. You share your vision, budget, and requirements — and we handle the rest. Our services include:",
        type: "bullet-grid",
        items: [
          "Plot evaluation",
          "Architectural planning",
          "2D & 3D designs",
          "Construction execution",
          "Interior finishing",
        ],
        postText:
          "Everything is handled under one roof for a smooth, hassle-free experience.",
      },
      {
        title: "Turnkey Construction Services Across NCR",
        preText: "We provide professional and reliable services across:",
        type: "bullet-grid",
        items: [
          "Turnkey construction in Gurgaon",
          "Turnkey construction in Noida",
          "Turnkey construction in Delhi",
          "Turnkey construction in Ghaziabad",
        ],
        postText:
          "Our local expertise helps us manage approvals, materials, and labor efficiently in each city.",
      },
      {
        title: "Our Turnkey Construction Process",
        preText: null,
        type: "process-steps",
        items: [
          {
            label: "Requirement Consultation",
            sub: "We understand your lifestyle, needs, and budget.",
          },
          {
            label: "Design & Planning",
            sub: "Floor plans, 2D/3D designs, structural layouts.",
          },
          {
            label: "Transparent Costing",
            sub: "Detailed estimates with per sq ft construction cost, ensuring clarity from the start.",
          },
          {
            label: "Execution & Management",
            sub: "Material procurement, site supervision, quality control.",
          },
          {
            label: "Final Handover",
            sub: "Fully completed home, ready for you to move in.",
          },
        ],
      },
      {
        title: "Turnkey Construction Cost in Gurgaon, Noida, Delhi & Ghaziabad",
        preText: "The cost of construction depends on several factors:",
        type: "cost-grid",
        items: [
          "Plot size",
          "Design complexity",
          "Material specifications",
          "Interior requirements",
        ],
        highlight:
          "Estimated range: ₹1,600 – ₹2,500 per sq ft (based on customization)",
        postText:
          "For accurate pricing, we recommend a free consultation and site evaluation.",
      },
      {
        title: "Why Choose House Banao?",
        preText:
          "Our goal is simple — to deliver your dream home without stress or confusion.",
        type: "checklist",
        items: [
          "Single point of contact",
          "On-time project delivery",
          "Quality material assurance",
          "Transparent pricing",
          "Experienced architects & engineers",
        ],
      },
    ],
  },
};

function renderSection(section, index, total) {
  const isLast = index === total - 1;

  return (
    <div
      key={index}
      className={`mb-14 ${!isLast ? "pb-14 border-b border-gray-100" : ""}`}
    >
      <h2 className="text-3xl font-bold text-black mb-3">{section.title}</h2>

      {section.preText && (
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          {section.preText}
        </p>
      )}

      {section.type === "city-cards" && (
        <div className="grid md:grid-cols-2 gap-4">
          {section.items.map(({ city, desc }) => (
            <div
              key={city}
              className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100"
            >
              <div className="w-9 h-9 shrink-0 rounded-full bg-[#8B4513] flex items-center justify-center">
                <span className="text-white text-sm font-bold">✦</span>
              </div>

              <div>
                <p className="font-semibold text-black mb-1">
                  Duplex in {city}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {section.type === "feature-cards" && (
        <div className="grid md:grid-cols-2 gap-4">
          {section.items.map((item, i, arr) => (
            <div
              key={item.title}
              className={`flex items-start gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100 ${
                i === arr.length - 1 && arr.length % 2 !== 0
                  ? "md:col-span-2"
                  : ""
              }`}
            >
              <div className="w-9 h-9 shrink-0 rounded-full bg-[#8B4513] flex items-center justify-center">
                <span className="text-white text-sm font-bold">✦</span>
              </div>

              <div>
                <p className="font-semibold text-black mb-1">{item.title}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {section.type === "bullet-grid" && (
        <div className="grid md:grid-cols-2 gap-4">
          {section.items.map((item, i, arr) => (
            <div
              key={item}
              className={`flex items-start gap-3 bg-gray-50 rounded-2xl p-5 border border-gray-100 ${
                i === arr.length - 1 && arr.length % 2 !== 0
                  ? "md:col-span-2"
                  : ""
              }`}
            >
              <span className="text-[#8B4513] text-lg font-bold mt-0.5">
                •
              </span>
              <p className="text-gray-700 text-base leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      )}

      {section.type === "cost-grid" && (
        <>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {section.items.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-gray-50 rounded-2xl p-5 border border-gray-100"
              >
                <span className="text-[#8B4513] font-bold text-lg">•</span>
                <p className="text-gray-700 text-base font-medium">{item}</p>
              </div>
            ))}
          </div>

          {section.highlight && (
            <div className="bg-[#fdf4ee] border border-[#e8c9a8] rounded-2xl p-6">
              <p className="text-xl font-semibold text-[#8B4513] leading-relaxed text-center">
                {section.highlight}
              </p>
            </div>
          )}
        </>
      )}

      {section.type === "process-steps" && (
        <div className="flex flex-col md:flex-row gap-3">
          {section.items.map((item, i) => (
            <div
              key={item.label}
              className="flex-1 flex flex-col items-center text-center gap-2 bg-gray-50 rounded-2xl p-5 border border-gray-100"
            >
              <div className="w-10 h-10 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold text-sm shrink-0">
                {i + 1}
              </div>

              <p className="text-sm font-semibold text-black leading-snug">
                {item.label}
              </p>

              {item.sub && (
                <p className="text-xs text-gray-500 leading-relaxed">
                  {item.sub}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {section.type === "checklist" && (
        <div className="grid md:grid-cols-2 gap-4">
          {section.items.map((item, i, arr) => (
            <div
              key={item}
              className={`flex items-start gap-3 bg-[#faf7f4] border border-gray-100 rounded-2xl p-5 ${
                i === arr.length - 1 && arr.length % 2 !== 0
                  ? "md:col-span-2"
                  : ""
              }`}
            >
              <span className="text-green-500 text-lg font-bold mt-0.5 shrink-0">
                ✔
              </span>
              <p className="text-gray-700 text-base leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      )}

      {section.postText && (
        <p className="text-gray-600 text-lg leading-relaxed mt-6">
          {section.postText}
        </p>
      )}
    </div>
  );
}

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params?.slug;

  const serviceName = slugToServiceMap[slug] || "Service";
  const content = serviceContent[slug];

  return (
    <>
      {/* HEADER AREA */}
      <div className="bg-transparent">
        <Navbar isWhite={false} />

        <section className="pt-10 pb-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-black text-[20px] font-bold uppercase tracking-widest pt-10">
              {serviceName}
            </p>
          </div>
        </section>
      </div>

      {/* MAIN SECTION */}
      <section className="bg-[#f8f8f8] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-[30px] shadow-sm border border-gray-100 p-10 md:p-16">
            {content ? (
              <>
                {/* PAGE HEADING */}
                <div className="mb-10">
                  <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-4">
                    {content.heading}
                  </h1>

                  {content.subtitle && (
                    <p className="text-gray-500 text-lg leading-relaxed max-w-3xl">
                      {content.subtitle}
                    </p>
                  )}
                </div>

                {/* INTRO */}
                <div className="space-y-5 mb-14 pb-14 border-b border-gray-100">
                  {content.intro.map((para, i) => (
                    <p
                      key={i}
                      className="text-gray-600 text-lg leading-relaxed"
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {/* SECTIONS */}
                {content.sections.map((section, i) =>
                  renderSection(section, i, content.sections.length)
                )}

                {/* CTA */}
                <div className="flex justify-center mt-14">
                  <button
                    type="button"
                    className="bg-[#8B4513] hover:bg-[#6B3410] transition-all duration-300 text-white font-semibold px-10 py-4 rounded-xl shadow-md text-lg"
                  >
                    Get Free Consultation
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-20">
                <h1 className="text-3xl font-bold text-black mb-4">
                  {serviceName}
                </h1>
                <p className="text-gray-500 text-lg">Content coming soon.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <GetInTouch />
      <Footer />
    </>
  );
}