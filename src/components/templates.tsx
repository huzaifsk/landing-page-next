"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Eye, Telescope } from "lucide-react";

// Template data from the existing templates page
const templates = [
  {
    name: "Business Consultant",
    url: "https://business-consultant-template.vercel.app/",
    image: "/business.png",
    description:
      "A modern, professional template for business consultants, agencies, and freelancers.",
    category: "Business",
    keywords: ["Consulting", "Business", "Agency", "Professional"],
  },
  {
    name: "Dental Clinic",
    url: "https://dental-website-template.vercel.app/",
    image: "/dentist.png", // Changed from /dentist.png to /healthcare.png
    description:
      "A clean and friendly template designed for dental clinics and healthcare professionals.",
    category: "Healthcare",
    keywords: ["Dental", "Healthcare", "Clinic", "Medical"],
  },
  {
    name: "Eco Stride",
    url: "https://eco-stride-template.vercel.app/",
    image: "/eco.png",
    description:
      "A vibrant, eco-friendly template for sustainability startups and green businesses.",
    category: "Eco",
    keywords: ["Eco", "Sustainability", "Green", "Startup"],
  },
  {
    name: "HealthTech",
    url: "https://healthtech-template.vercel.app/",
    image: "/healthtech.png",
    description:
      "A cutting-edge template for healthtech companies and digital health products.",
    category: "Tech",
    keywords: ["HealthTech", "SaaS", "Startup", "Technology"],
  },
  {
    name: "Aura Interior",
    url: "https://aura-interior-nine.vercel.app/",
    image: "/interior.png",
    description:
      "A stylish template for interior design studios and creative agencies.",
    category: "Creative",
    keywords: ["Interior", "Design", "Portfolio", "Creative"],
  },
  {
    name: "Home Services",
    url: "https://home-services-eosin.vercel.app/",
    image: "/homeserv.png",
    description:
      "A clean, conversion-focused template for home service businesses.",
    category: "Services",
    keywords: ["Home Services", "Business", "Booking", "Service"],
  },
];

const categories = [
  "All",
  "Business",
  "Healthcare",
  "Eco",
  "Tech",
  "Creative",
  "Services",
];

export default function ExploreTemplates() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTemplates =
    selectedCategory === "All"
      ? templates
      : templates.filter((template) => template.category === selectedCategory);

  return (
    <section
      id="templates"
      className="w-full h-full flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-neutral-900 dark:to-neutral-950 py-36"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-[30rem] h-[30rem] bg-teal-300/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-[25rem] h-[25rem] bg-purple-300/10 rounded-full blur-3xl" />
      </div>

      <div className="flex flex-col items-center justify-center w-full max-w-7xl px-4 space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-10"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Explore Our Templates
          </h1>
          <p className="text-neutral-600 dark:text-neutral-300 text-base md:text-lg max-w-3xl mx-auto">
            Discover professionally designed templates for every industry. Each
            template is fully responsive, modern, and ready to customize for
            your business needs.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-200",
                selectedCategory === category
                  ? "bg-teal-500 text-white shadow-lg"
                  : "bg-white dark:bg-neutral-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-neutral-700 hover:border-teal-300 hover:text-teal-600"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {filteredTemplates.map((template, index) => (
            <motion.div
              key={template.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-neutral-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-neutral-700"
            >
              {/* Template Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={template.image}
                  alt={`${template.name} preview`}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-3">
                    <a
                      href={template.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm text-teal-600 rounded-full font-medium hover:bg-white transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      Preview
                    </a>
                  </div>
                </div>
              </div>

              {/* Template Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 text-xs font-medium rounded-full">
                    {template.category}
                  </span>
                  <div className="flex items-center text-yellow-500">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
                      4.9
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                  {template.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {template.description}
                </p>

                {/* Keywords */}
                <div className="flex flex-wrap gap-2">
                  {template.keywords.slice(0, 3).map((keyword) => (
                    <span
                      key={keyword}
                      className="px-2 py-1 bg-gray-100 dark:bg-neutral-700 text-gray-600 dark:text-gray-300 text-xs rounded-md"
                    >
                      {keyword}
                    </span>
                  ))}
                  {template.keywords.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-neutral-700 text-gray-600 dark:text-gray-300 text-xs rounded-md">
                      +{template.keywords.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Templates CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="/templates"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-400 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-200"
          >
            <Telescope className="w-5 h-5" />
            View All Templates
          </a>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">
            Explore our complete collection of {templates.length}+ professional
            templates
          </p>
        </motion.div>
      </div>
    </section>
  );
}
