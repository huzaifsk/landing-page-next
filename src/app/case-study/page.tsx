"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import images from "@/lib/images.json";
import khalidImg from "../../../public/khalid_lp.png";
import equityImg from "../../../public/equity.png";
import Image from "next/image";

// Country to flag emoji mapping
const countryFlagMap: Record<string, string> = {
  "Saudi Arabia": "🇸🇦",
  India: "🇮🇳",
  "United States": "🇺🇸",
  // Add more as needed
};

export default function CaseStudy() {
  const projects = [
    {
      title: "Khalid Travels & Tradelinks",
      description:
        "Khalid Travels & Tradelinks is a leading travel agency based in Saudi Arabia, specializing in global travel solutions. We provide seamless flight bookings, personalized holiday packages, expert visa assistance, and 24/7 customer support. Our commitment is to transform every journey into a memorable and hassle-free experience for our clients.",
      image: khalidImg,
      country: "Saudi Arabia",
      categories: ["Travel", "Tourism", "Hospitality"],
      link: "#",
    },
    {
      title: "Golden Gymnasium Admin Panel",
      description:
        "The Golden Gymnasium Admin Panel is a robust management platform developed for fitness centers in India. It streamlines member registration, attendance tracking, class scheduling, payment processing, and staff coordination. With an intuitive dashboard and advanced analytics, gym administrators can efficiently manage daily operations and boost member engagement.",
      image: "https://assets.aceternity.com/animated-testimonials.webp",
      country: "India",
      categories: ["Fitness", "Admin Panel", "SaaS"],
      link: "#",
    },
    {
      title: "Golden Gymnasium Landing Page",
      description:
        "A visually striking and conversion-focused landing page for Golden Gymnasium, designed to attract new members in India. The page features a dynamic hero section, interactive visuals, compelling calls-to-action, and comprehensive details about services, trainers, and membership plans. Optimized for all devices, it delivers a seamless and engaging user experience.",
      image: "https://assets.aceternity.com/github-globe.png",
      country: "India",
      categories: ["Fitness", "Web Design", "Marketing"],
      link: "#",
    },
    {
      title: "Equity Management App",
      description:
        "A secure and scalable equity management application built for a confidential client in the United States. The platform automates equity distribution, cap table management, and compliance workflows. Due to NDA restrictions, specific details are confidential, but the solution leverages best-in-class security and user experience practices.",
      image: equityImg,
      country: "United States",
      categories: ["Fintech", "Equity Management", "Confidential"],
      link: "#",
    },
    // Add more as needed
  ];

  // const images = [
  //   "https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dWklMjBsYXlvdXR8ZW58MHx8MHx8fDA%3D", // team workflow
  //   "https://images.unsplash.com/photo-1743310815470-d10f22e877c4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVpJTIwbGF5b3V0JTIwb2YlMjBzb2Z0d2FyZXxlbnwwfHwwfHx8MA%3D%3D", // mobile UX
  //   "https://images.unsplash.com/photo-1642132652803-01f9738d0446?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWluaW1hbCUyMHdlYiUyMGFwcCUyMHVpfGVufDB8fDB8fHww", // minimalist web UI
  //   "https://images.unsplash.com/photo-1642132652935-d750e2014719?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1pbmltYWwlMjB3ZWIlMjBhcHAlMjB1aXxlbnwwfHwwfHx8MA%3D%3D", // developer console
  //   "https://images.unsplash.com/photo-1642132652860-603f4e3c19b7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D", // charts and analytics
  //   "https://images.unsplash.com/photo-1648134859177-66e35b61e106?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D", // dashboard app
  //   "https://images.unsplash.com/photo-1648134859179-ed0c98f54519?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8", // team collaboration
  //   "https://images.unsplash.com/photo-1642132652860-471b4228023e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8", // 9. Mobile App UI/UX
  //   "https://images.unsplash.com/photo-1642132652798-ae887edb9e9d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8", // 10. Responsive Design Mockup
  //   "https://images.unsplash.com/photo-1648134859187-71dadc9f815a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8", // 11. Code on Screen
  //   "https://images.unsplash.com/photo-1625296276188-1d149bdaf560?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8", // 12. Developer Console/IDE
  //   "https://images.unsplash.com/photo-1642132652866-6fa262d3161f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D", // 13. API/Backend Style (Abstract Tech)
  //   "https://images.unsplash.com/photo-1648134859187-71dadc9f815a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D", // 14. Modern Startup Desk
  //   "https://images.unsplash.com/photo-1648134859186-a05fb609f41e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8", // 15. Touch Interface/Futuristic Tech
  //   "https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dWklMjBsYXlvdXR8ZW58MHx8MHx8fDA%3D", // team workflow
  //   "https://images.unsplash.com/photo-1743310815470-d10f22e877c4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVpJTIwbGF5b3V0JTIwb2YlMjBzb2Z0d2FyZXxlbnwwfHwwfHx8MA%3D%3D", // mobile UX
  //   "https://images.unsplash.com/photo-1642132652803-01f9738d0446?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWluaW1hbCUyMHdlYiUyMGFwcCUyMHVpfGVufDB8fDB8fHww", // minimalist web UI
  //   "https://images.unsplash.com/photo-1642132652935-d750e2014719?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1pbmltYWwlMjB3ZWIlMjBhcHAlMjB1aXxlbnwwfHwwfHx8MA%3D%3D", // developer console
  //   "https://images.unsplash.com/photo-1642132652860-603f4e3c19b7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D", // charts and analytics
  //   "https://images.unsplash.com/photo-1648134859177-66e35b61e106?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D", // dashboard app
  //   "https://images.unsplash.com/photo-1648134859179-ed0c98f54519?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8", // team collaboration
  //   "https://images.unsplash.com/photo-1642132652860-471b4228023e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8", // 9. Mobile App UI/UX
  //   "https://images.unsplash.com/photo-1642132652798-ae887edb9e9d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8", // 10. Responsive Design Mockup
  //   "https://images.unsplash.com/photo-1648134859187-71dadc9f815a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8", // 11. Code on Screen
  //   "https://images.unsplash.com/photo-1625296276188-1d149bdaf560?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8", // 12. Developer Console/IDE
  //   "https://images.unsplash.com/photo-1642132652866-6fa262d3161f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D", // 13. API/Backend Style (Abstract Tech)
  //   "https://images.unsplash.com/photo-1648134859187-71dadc9f815a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D", // 14. Modern Startup Desk
  //   "https://images.unsplash.com/photo-1648134859186-a05fb609f41e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8", // 15. Touch Interface/Futuristic Tech
  // ];

  return (
    <>
      <div className="relative  flex h-screen w-full flex-col items-center justify-center overflow-hidden">
        <h2 className="relative z-20 text-center text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Projects We’ve <span className="text-teal-400">Brought to Life</span>
        </h2>
        <p className="relative z-20 mt-4 max-w-2xl text-center text-base text-neutral-200 md:text-lg">
          Here are some of the standout projects we’ve successfully executed for
          our clients.
        </p>

        {/* overlay */}
        <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40" />
        <ThreeDMarquee
          className="pointer-events-none absolute inset-0 h-full w-full"
          images={images}
        />
      </div>

      <div className="min-h-screen bg-white px-4 py-16">
        <div className="justify-items-center">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </>
  );
}

// Category color classes (teal only)
const categoryColorClasses = ["bg-teal-100 text-teal-800"];

const ProjectCard = ({
  image,
  country,
  categories,
  title,
  description,
}: {
  image: any;
  country?: string;
  categories?: string[];
  title: string;
  description: string;
}) => {
  // Use only teal for background
  const tealBgClass = "bg-teal-900";

  // Check if image is an imported static image (object) or a string URL
  const isStaticImage = typeof image === "object" && image?.src;

  // Helper to get flag emoji for country
  const getCountryFlag = (countryName?: string) => {
    if (!countryName) return null;
    return countryFlagMap[countryName] || "";
  };

  // Always return teal for category color
  const getCategoryColor = (_idx: number) => {
    return categoryColorClasses[0];
  };

  return (
    <div
      className="
        flex flex-col md:flex-row
        bg-white 
        rounded-3xl 
        overflow-hidden
        max-w-6xl w-full
        border
        bg-cover
        my-10
        md:h-[420px]
        shadow-sm
      "
    >
      {/* Media Section (Image/Video Mockups) */}
      <div
        className={`
          md:w-1/2 flex items-center justify-center 
          px-8
          ${tealBgClass}
          border-r
          order-1 md:order-none
        `}
        style={{ minHeight: "220px" }}
      >
        {/* Image for the project mockup */}
        {isStaticImage ? (
          <Image
            src={image}
            alt={`${title} mockups`}
            className="max-w-full h-auto rounded-xl"
            style={{ height: "auto", width: "100%" }}
            placeholder="blur"
          />
        ) : (
          <img
            src={image}
            alt={`${title} mockups`}
            className="max-w-full h-auto rounded-xl"
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src =
                "https://placehold.co/600x400/E0F2F7/00796B?text=Image+Not+Found";
            }}
          />
        )}
      </div>

      {/* Content Section */}
      <div
        className="
          md:w-1/2 p-8 md:p-12 flex flex-col justify-center
          order-2 md:order-none
        "
      >
        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {country && (
            <span
              className="
                inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium
                bg-neutral-100 text-neutral-700
              "
            >
              <span>{getCountryFlag(country)}</span>
              <span>{country}</span>
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight mb-3">
          {title}
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          {description}
        </p>

        {/* Categories */}
        {categories && categories.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((cat, idx) => (
              <span
                key={cat}
                className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                  idx
                )}`}
              >
                {cat}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
