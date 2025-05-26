"use client";
import { motion } from "motion/react";;
import { Cover } from "./ui/cover";

import Globe from "./globe";
import ContactForm from "./contact-form";

export function ContactUs() {

  return (
  <div className="flex items-center justify-center py-20 md:py-40 min-h-screen bg-white dark:bg-black w-full">
  <div className="w-full max-w-7xl px-4 md:px-32 mx-auto">
    {/* Title & Subtitle */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="mb-12 text-center"
    >
      <h2 className="text-xl md:text-4xl font-bold text-black dark:text-white">
        We Build Globally. Let's <Cover className="cursor-pointer">Scale</Cover> Together.
      </h2>
      <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-200 max-w-2xl mx-auto mt-3">
        Whether you're looking to expand your reach, accelerate your growth, or collaborate with a global-first team — we're here to make it happen. Our impact spans continents, and so can yours.
      </p>
    </motion.div>

    {/* Content Row */}
    <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-12 md:gap-20">
      <ContactForm />
      <Globe />
    </div>
  </div>
</div>


  );
}