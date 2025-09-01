"use client";

import React from "react";
import Image from "next/image";
import business from "../../../public/business.png";
import eco from "../../../public/eco.png";
import healthtech from "../../../public/healthtech.png";
import dentist from "../../../public/dentist.png";
import { SquareArrowOutUpRight } from "lucide-react";

const templates = [
  {
    name: "Business Consultant",
    url: "https://business-consultant-template.vercel.app/",
    image: business,
    description:
      "A modern, professional template for business consultants, agencies, and freelancers. Features a clean layout, service highlights, testimonials, and a strong call-to-action. Perfect for showcasing expertise and building trust with clients.",
    keywords: [
      "Consulting",
      "Business",
      "Agency",
      "Professional",
      "Landing Page",
      "Modern",
      "Responsive",
    ],
  },
  {
    name: "Dental Clinic",
    url: "https://dental-website-template.vercel.app/",
    image: dentist,
    description:
      "A clean and friendly template designed for dental clinics and healthcare professionals. Includes appointment booking, service sections, doctor profiles, and patient testimonials. Built to inspire trust and make booking easy.",
    keywords: [
      "Dental",
      "Healthcare",
      "Clinic",
      "Medical",
      "Booking",
      "Clean",
      "Trustworthy",
    ],
  },
  {
    name: "Eco Stride",
    url: "https://eco-stride-template.vercel.app/",
    image: eco,
    description:
      "A vibrant, eco-friendly template for sustainability startups, green businesses, and environmental initiatives. Features project highlights, impact stats, and a modern, nature-inspired design.",
    keywords: [
      "Eco",
      "Sustainability",
      "Green",
      "Startup",
      "Environment",
      "Modern",
      "Impact",
    ],
  },
  {
    name: "HealthTech",
    url: "https://healthtech-template.vercel.app/",
    image: healthtech,
    description:
      "A cutting-edge template for healthtech companies, SaaS, and digital health products. Includes product features, integrations, testimonials, and a conversion-focused layout. Ideal for showcasing innovative solutions.",
    keywords: [
      "HealthTech",
      "SaaS",
      "Startup",
      "Medical",
      "Technology",
      "Product",
      "Modern",
    ],
  },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block border-1 border-teal-600 bg-teal-100 text-teal-800 text-xs font-medium px-3 py-1 rounded-full mr-2 mb-2">
      {children}
    </span>
  );
}

export default function TemplatesShowcase() {
  return (
    <div className="bg-white min-h-screen py-16 px-4">
      {/* Header Section with styling similar to /team */}
      <div className="max-w-6xl mx-auto py-36 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-teal-900 mb-4">
          Website Template Demos
        </h1>
        <p className="text-gray-600 text-lg">
          Explore our professionally designed templates. Preview each demo and
          discover the perfect fit for your next project. Each template includes
          a live preview, detailed description, and key features.
        </p>
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="grid gap-10 md:grid-cols-2">
          {templates.map((tpl) => (
            <div
              key={tpl.name}
              className="bg-gray-50 rounded-2xl shadow hover:shadow-lg transition-shadow border border-gray-100 flex flex-col"
            >
              <a
                href={tpl.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-t-2xl overflow-hidden group"
              >
                {/* Use Next.js Image for preview images */}
                <Image
                  src={tpl.image}
                  alt={tpl.name + " preview"}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{ width: "100%", height: "224px", objectFit: "cover" }}
                  placeholder="blur"
                  loading="lazy"
                />
              </a>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center mb-2">
                  <h2 className="text-2xl font-semibold text-teal-900 flex-1">
                    {tpl.name}
                  </h2>
                  <a
                    href={tpl.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 ml-2 px-4 py-1 bg-teal-600 text-white text-sm rounded-full font-medium hover:bg-teal-700 transition"
                  >
                    Live Preview <SquareArrowOutUpRight className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-gray-700 mb-4">{tpl.description}</p>
                <div className="flex flex-wrap">
                  {tpl.keywords.map((kw) => (
                    <Pill key={kw}>{kw}</Pill>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
