"use client";

import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "UI/UX Design",
    description:
      "We craft visually stunning and user-centric designs. From wireframes to high-fidelity prototypes, we ensure your product is intuitive, engaging, and optimized for conversion.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-500 to-emerald-500 text-white rounded-xl shadow-md">
        <Image
          src="/ux.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-xl"
          alt="UI/UX design preview"
          loading="lazy" // <-- Lazy loading
        priority={false} // Optional: ensure it's not loaded eagerly
        />
      </div>
    ),
  },
  {
    title: "Web Development",
    description:
      "We build fast, secure, and scalable websites using the latest web technologies. From static landing pages to full-stack applications, we turn your vision into reality.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-xl shadow-md">
        <Image
          src="/web.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-xl"
          alt="Web development preview"
          loading="lazy" // <-- Lazy loading
        priority={false} // Optional: ensure it's not loaded eagerly
        />
      </div>
    ),
  },
  {
    title: "Mobile App Development",
    description:
      "Launch high-performance mobile apps on iOS and Android. We specialize in cross-platform solutions that deliver seamless experiences and native-like performance.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-xl shadow-md">
        <Image
          src="/mob-dev.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-xl"
          alt="Mobile app development preview"
          loading="lazy" // <-- Lazy loading
        priority={false} // Optional: ensure it's not loaded eagerly
        />
      </div>
    ),
  },
  {
    title: "Custom Software Solutions",
    description:
      "Need something unique? We design and develop tailored software solutions to meet your specific business needs — whether it's automation, dashboards, or internal tools.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-500 to-emerald-600 text-white rounded-xl shadow-md">
        <Image
          src="/custom-dev.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-xl"
          alt="Custom software development preview"
          loading="lazy" // <-- Lazy loading
        priority={false} // Optional: ensure it's not loaded eagerly
        />
      </div>
    ),
  },
];

export function Services() {
  return (
    <section id="service" className="w-full px-4 py-16 md:py-56 bg-gray-50 dark:bg-neutral-950">

        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            We offer full-stack digital solutions designed to elevate your business and empower your product.
          </p>
        </div>
        <StickyScroll content={content} />
    </section>
  );
}
