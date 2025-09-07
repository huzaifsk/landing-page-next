"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  buttonVariant: "primary" | "secondary";
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    description:
      "This package is ideal for startups that need essential tools to establish their online presence.",
    price: "$2,999",
    period: "one-time",
    features: [
      "Custom Website Design and Development",
      "Domain Name Registration",
      "Website Hosting (1 year)",
      "Basic Company Logo Design",
      "Business Cards Design",
      "Business Email Setup",
      "Basic SEO Setup",
      "3 Months Support",
    ],
    buttonText: "Contact Us",
    buttonVariant: "secondary",
  },
  {
    name: "Pro",
    description:
      "This package is designed for startups looking to build a strong brand identity and have a more comprehensive online presence.",
    price: "$5,999",
    period: "one-time",
    features: [
      "All features of the Basic plan",
      "Website Maintenance and Support (6 months)",
      "Advanced Company Logo Design",
      "Complete Brand Identity Kit",
      "Company Diary and Stationery",
      "Social Media Setup & Management",
      "Advanced Search Engine Optimization (SEO)",
      "Google Analytics & Search Console Setup",
      "Content Management System Training",
    ],
    isPopular: true,
    buttonText: "Contact Us",
    buttonVariant: "primary",
  },
  {
    name: "Premium",
    description:
      "This package is tailored for startups aiming for a high-impact launch with comprehensive branding, marketing, and support.",
    price: "$9,999",
    period: "one-time",
    features: [
      "All features of the Pro plan",
      "Full UX Optimization and Responsive Design",
      "Advanced E-commerce Functionality",
      "Website Maintenance and Priority Support (12 months)",
      "Premium Company Logo Design",
      "Complete Brand Identity Kit",
      "Company Diary and Stationery",
      "Customer Relationship Management Setup",
      "Social Media Setup and Management",
      "Comprehensive Search Engine Optimization (SEO)",
      "Digital Marketing Services (3 months)",
      "Training and Support (User Training, Ongoing Support)",
      "Performance Analytics Dashboard",
    ],
    buttonText: "Contact Us",
    buttonVariant: "secondary",
  },
];

export default function Pricing() {
  // Handler for "Contact Us" button click
  const handleContactClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // fallback: just change the hash
      window.location.hash = "#contact";
    }
  };

  return (
    <section
      id="pricing"
      className="relative w-full h-full flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-950 py-36"
    >
      {/* Decorative glowing blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-1/2 w-[40rem] h-[40rem] -translate-x-1/2 bg-teal-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/3 w-[30rem] h-[30rem] bg-purple-300/20 rounded-full blur-3xl" />
      </div>

      <div className="flex flex-col items-center justify-center w-full max-w-7xl px-4 space-y-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-10"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-black dark:text-white">
            Choose Your Plan
          </h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300 text-base md:text-lg max-w-3xl mx-auto">
            Select the perfect package for your startup&apos;s digital
            transformation journey. All plans include our commitment to quality
            and ongoing support.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0, delay: 0 }}
              whileHover={{
                y: -18,
                scale: 1.04,
                boxShadow:
                  "0 12px 40px 0 rgba(16, 185, 129, 0.18), 0 2px 8px 0 rgba(0,0,0,0.08)",
                filter: "brightness(1.03)",
              }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "relative group rounded-2xl transition-all duration-300 overflow-visible",
                plan.isPopular
                  ? "border-2 border-transparent bg-white/90 shadow-2xl scale-105 bg-gradient-to-br from-teal-50 to-white"
                  : "border border-gray-200 bg-white dark:bg-neutral-800 shadow-lg hover:shadow-2xl"
              )}
            >
              {/* Popular Badge (always visible) */}
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="bg-gradient-to-r from-teal-500 to-emerald-400 text-white px-6 py-1.5 rounded-full text-xs font-semibold shadow-md">
                    ⭐ Most Popular
                  </div>
                </div>
              )}

              {/* Card Content */}
              <div className="p-8 h-full flex flex-col">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <div className="flex-1 mb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.2 + featureIndex * 0.1,
                        }}
                        className="flex items-start"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-teal-500 to-emerald-400 flex items-center justify-center mr-3 mt-0.5 shadow-sm">
                          <svg
                            className="w-3.5 h-3.5 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <motion.button
                  type="button"
                  whileHover={{
                    scale: 1.07,
                    boxShadow: "0 4px 24px 0 rgba(16, 185, 129, 0.22)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "w-full py-3 px-6 rounded-full font-semibold transition-all duration-200 shadow-md",
                    plan.buttonVariant === "primary"
                      ? "bg-gradient-to-r from-teal-500 to-emerald-400 text-white hover:shadow-lg hover:shadow-teal-500/30"
                      : "bg-white text-teal-600 border-2 border-teal-400 hover:bg-teal-500 hover:text-white"
                  )}
                  onClick={handleContactClick}
                >
                  {plan.buttonText}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            All plans include a{" "}
            <span className="font-semibold text-teal-600">
              30-day money-back guarantee
            </span>
            . Need a custom solution?{" "}
            <a
              href="#contact"
              className="text-teal-500 font-semibold underline underline-offset-2 cursor-pointer hover:text-teal-600"
              onClick={handleContactClick}
            >
              Contact us for a personalized quote.
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
