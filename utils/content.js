import { FaClockRotateLeft } from "react-icons/fa6";
import img1 from "@/public/dreamHome/1.svg";
import img2 from "@/public/dreamHome/2.svg";
import img3 from "@/public/dreamHome/3.svg";
import img4 from "@/public/dreamHome/4.svg";
import img5 from "@/public/dreamHome/5.svg";
import { SiTicktick } from "react-icons/si";
import ProjectImg1 from "@/public/images/home1.png";
import ProjectImg2 from "@/public/images/home2.png";
import ProjectImg3 from "@/public/images/home3.png";
import ProjectImg4 from "@/public/images/home4.png";

export const IMG_PLACEHOLDER = "https://placehold.jp/500x500.png";

export const faqData = [
  {
    name: "What services do you offer?",
    answer: `At House Banao, we specialize in comprehensive house construction, residential design, and
office interior design. Whether you’re building a new home, renovating your space, or designing
a stylish office, we handle it all with precision and creativity. Our services include architectural
planning, interior design, space optimization, and project management`,
    icon: <FaClockRotateLeft color="#9ca3af" />,
  },
  {
    name: "How much experience does your team have?",
    answer: `Our team boasts over 10 years of experience in the construction and design industry. We bring
a wealth of knowledge and a track record of successful projects to ensure your vision is brought
to life with expertise and care.`,
    icon: <FaClockRotateLeft color="#9ca3af" />,
  },
  {
    name: "Can I see examples of your past work?",
    answer: `Absolutely! We’re proud of our portfolio and would love to show you examples of our completed
projects. You can explore our gallery on the website or request a personalized showcase during
a consultation`,
    icon: <FaClockRotateLeft color="#9ca3af" />,
  },
  {
    name: "Do you offer consultations?",
    answer: `Yes, we offer free initial consultations to discuss your ideas and project needs. This helps us
understand your vision and provide you with expert advice and a tailored plan.`,
    icon: <FaClockRotateLeft color="#9ca3af" />,
  },
  {
    name: "What is your process for project development?",
    answer: `Our process starts with understanding your goals through detailed consultations. We then move
to architectural and interior designs, providing you with detailed drawings, front evaluation, 2D
and 3D with comprehensive layouts. After this we proceed to construction and execution.
Throughout the project, we ensure constant communication and quality control to deliver
exceptional results.`,
    icon: <FaClockRotateLeft color="#9ca3af" />,
  },
  {
    name: "How long does a typical project take?",
    answer: `The timeline of a typical project depends on its scope and complexity. On average residential
projects take 10-12 months from start to finish, while larger commercial projects might require
additional time. Interior designing projects generally take about 2-4 months (Office/Residential
Interior). We’ll provide a clear timeline after assessing your specific needs.`,
    icon: <FaClockRotateLeft color="#9ca3af" />,
  },
  {
    name: "What Makes Your Company Special?",
    answer: `At House Banao, our entire team is committed to excellence, this enables us to offer end-to-end
solutions to provide seamless, hassle-free experiences for our clients. We blend innovative
design with practical solutions which ensures that every project is unique and personalized as per
your needs. Our dedication to quality and client satisfaction is evident in our thorough approach,
including over 300 quality checks throughout each project.`,
    icon: <FaClockRotateLeft color="#9ca3af" />,
  },
];

export const steps = [
  {
    number: 1,
    title: "Raise a request",
    description:
      "Raise a house construction service request or call us at +91 99xxxxxxx. Our team will get in touch with you to understand your requirements in more detail.",
    additionalInfo: "They will arrange the meeting with our technical expert.",
  },
  {
    number: 2,
    title: "Meet our expert",
    description:
      "Our technical expert will visit your site to assess the requirements and offer personalized advice on the best construction options based on your needs.",
    additionalInfo: "The expert will discuss the details of your project and answer any questions you may have.",
  },
  {
    number: 3,
    title: "Book with us",
    description:
      "Once you are ready, you can book the service by confirming the plans and selecting the desired package that fits your budget and needs.",
    additionalInfo: "Our team will send you a formal agreement and schedule the start date for construction.",
  },
  {
    number: 4,
    title: "Receive detailed plan",
    description:
      "We will provide you with a detailed blueprint and construction plan that outlines the timeline, materials, and key milestones for your project.",
    additionalInfo: "This will help you visualize the project and ensure all aspects are covered before work begins.",
  },
  {
    number: 5,
    title: "Track & Transact",
    description:
      "Throughout the construction process, you will be able to track the progress and stay updated on key milestones. Payments can also be made easily through our online system.",
    additionalInfo: "You’ll receive real-time notifications and reports about the ongoing construction and finances.",
  },
  {
    number: 6,
    title: "Settle In",
    description:
      "Once construction is complete, we will hand over your home to you. You can now move in and start enjoying your new living space.",
    additionalInfo: "We will also provide a post-construction review and support for any minor adjustments or issues that may arise.",
  },
];

export const bookingSteps = [
  {
    number: 1,
    title: "Booking",
    duration: "Typically 1 week*",
    payment: "You pay 10%",
    details: [
      {
        title: "Fill form",
        description:
          "Share your basic information and property details in a quiz.",
      },
      {
        title: "Get a call",
        description:
          "Our representative connects with you to understand your requirements.",
      },
      {
        title: "Share your floor plan",
        description: "We match you to a designer as per your requirements.",
      },
      {
        title: "Speak to your designer",
        description: "Your designer takes the time to understand your needs.",
      },
      {
        title: "Design proposal",
        description:
          "A design proposal and quotes are created based on your budget.",
      },
      {
        title: "Revised quote",
        description: "Share your feedback and receive a revised proposal.",
      },
      {
        title: "You pay 10%",
        description: "",
      },
    ],
  },
  {
    number: 2,
    title: "Design Phase",
    duration: "Typically 1 month*",
    payment: "You pay 40%",
  },
  {
    number: 3,
    title: "Manufacturing and Installation",
    duration: "45 days with House banao Move-in Guarantee*",
    payment: "You pay 50%",
  },
  {
    number: 4,
    title: "Move-in",
    duration: "",
    payment: "",
  },
];
export const dreamHomeData = [
  {
    head: "Meet Experts",
    icon: img1,
  },
  {
    head: "Book with us",
    icon: img2,
  },
  {
    head: "Recieved Detailed Plan",
    icon: img3,
  },
  {
    head: "Track and transact",
    icon: img4,
  },
  {
    head: "Move in",
    icon: img5,
  },
];

export const projectData = [
  {
    image: ProjectImg1,
    PropertyId: "HBCON - 015",
    PropertySize: "500 Sq. Yards",
    ApartmentType: "Luxury",
    Specification: "B+S+G+4",
    link: "#",
  },
  {
    image: ProjectImg2,
    PropertyId: "HBCON - 016",
    PropertySize: "375 Sq. Yards",
    ApartmentType: "Luxury",
    Specification: "G+3",
    link: "#",
  },
  {
    image: ProjectImg3,
    PropertyId: "HBCON - 017",
    PropertySize: "125 Sq. Yards",
    ApartmentType: "Luxury",
    Specification: "G+2",
    link: "#",
  },
  {
    image: ProjectImg4,
    PropertyId: "HBCON - 018",
    PropertySize: "67 Sq. Yards",
    ApartmentType: "Luxury",
    Specification: "G+1",
    link: "#",
  },
  // {
  //   image: ProjectImg4,
  //   address1: "C-2/113",
  //   address2: "West Enclave , Pitampura-110034",
  //   description:
  //     "From a couple to a large Indian family, we have houses built with emotions for everyone.",
  //   link: "#",
  // },
];

export const whyUsData = [
  {
    heading: "Regular quality checks",
    icon: <SiTicktick />,
    description:
      "Our commitment to excellence is backed by regular quality checks, ensuring every Home Construction, home interior and office interior project meets the highest standards. We believe in consistent quality assurance, guaranteeing superior results for Your Home Construction need",
  },
  {
    heading: "Zero Hidden costs",
    icon: <SiTicktick />,
    description:
      "Transparency is our promise: Zero hidden costs in every Home construction, home interior and office interior project. We provide clear, upfront pricing to ensure complete trust and satisfaction.",
  },
  {
    heading: "10 years warranty",
    icon: <SiTicktick />,
    description:
      "We pride ourselves on transparency with zero hidden costs, ensuring you know exactly what you're paying for. Our clear, upfront pricing guarantees no surprises, building trust and peace of mind",
  },
];
