"use client";

import React from "react";
import { Carousel, Card } from "./ui/apple-cards-carousal";
import Image from "next/image";

export function Industries() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
   <div id="industries" className="w-full h-full md:py-56 py-24 text-center flex flex-col items-center justify-center">
  <div className="max-w-7xl px-4 mx-auto">
    <h2 className="text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans text-center">
      Driving Innovation Across Industries
    </h2>
    <p className="mt-4 text-base md:text-lg text-neutral-600 dark:text-neutral-400 text-center max-w-3xl mx-auto">
      We deliver tailored digital solutions across diverse industries — from healthcare and fintech to logistics and entertainment. Our mission is to innovate, scale, and elevate your business with cutting-edge technology.
    </p>
  </div>

  <Carousel items={cards} />
</div>


  );
}


const data = [
  {
    category: "Healthcare",
    title: "Transforming Healthcare with Digital Solutions.",
    src: "/healthcare.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          We build HIPAA-compliant telemedicine platforms, patient portals, and EHR integrations to streamline workflows and improve patient outcomes. Our solutions prioritize security, scalability, and user-centered care.
        </p>
        <Image
        loading="lazy" // <-- Lazy loading
        priority={false} // Optional: ensure it's not loaded eagerly
          src="/healthcare.jpg"
          alt="Healthcare"
          height="500"
          width="500"
          className="md:w-1/2 mx-auto mt-8 object-contain"
        />
      </div>
    ),
  },
  {
    category: "FinTech",
    title: "Building Smart, Secure Financial Applications.",
    src: "/fintech.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          From mobile banking apps to AI-driven analytics tools and payment gateways, we create FinTech platforms that are fast, secure, and regulatory-compliant.
        </p>
        <Image
        loading="lazy" // <-- Lazy loading
        priority={false} // Optional: ensure it's not loaded eagerly
          src="/fintech.jpg"
          alt="FinTech"
          height="500"
          width="500"
          className="md:w-1/2 mx-auto mt-8 object-contain"
        />
      </div>
    ),
  },
  {
    category: "E-commerce",
    title: "Creating Scalable & Seamless Shopping Experiences.",
    src: "/ecom.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          We develop custom e-commerce platforms and integrations with payment gateways, shipping APIs, and CMS tools to support B2C and B2B commerce at scale.
        </p>
        <Image
        loading="lazy" // <-- Lazy loading
        priority={false} // Optional: ensure it's not loaded eagerly
          src="/ecom.jpg"
          alt="E-commerce"
          height="500"
          width="500"
          className="md:w-1/2 mx-auto mt-8 object-contain"
        />
      </div>
    ),
  },
  {
    category: "EdTech",
    title: "Empowering Education Through Technology.",
    src: "/ed-tech.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          We build e-learning platforms, virtual classrooms, and mobile education apps with features like quizzes, live video, and gamification to engage learners.
        </p>
        <Image
        loading="lazy" // <-- Lazy loading
        priority={false} // Optional: ensure it's not loaded eagerly
          src="/ed-tech.jpg"
          alt="EdTech"
          height="500"
          width="500"
          className="md:w-1/2 mx-auto mt-8 object-contain"
        />
      </div>
    ),
  },
  {
    category: "Real Estate",
    title: "Innovative Tools for Modern Real Estate.",
    src: "/real-estate.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          Showcase listings, enable virtual tours, and simplify property management with intuitive platforms that support real-time data and CRM integrations.
        </p>
        <Image
        loading="lazy" // <-- Lazy loading
        priority={false} // Optional: ensure it's not loaded eagerly
          src="/real-estate.jpg"
          alt="Real Estate"
          height="500"
          width="500"
          className="md:w-1/2 mx-auto mt-8 object-contain"
        />
      </div>
    ),
  },
  {
    category: "Logistics",
    title: "Optimizing Logistics & Supply Chains with Code.",
    src: "/logistics.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          Build real-time tracking systems, delivery management dashboards, and automated inventory tools for maximum supply chain efficiency.
        </p>
        <Image
        loading="lazy" // <-- Lazy loading
        priority={false} // Optional: ensure it's not loaded eagerly
          src="/logistics.jpg"
          alt="Logistics"
          height="500"
          width="500"
          className="md:w-1/2 mx-auto mt-8 object-contain"
        />
      </div>
    ),
  },
  {
    category: "Travel & Hospitality",
    title: "Enhancing Travel Through Digital Products.",
    src: "/travel.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          We build travel booking apps, itinerary planners, and guest experience tools that integrate with maps, calendars, and real-time APIs.
        </p>
        <Image
        loading="lazy" // <-- Lazy loading
        priority={false} // Optional: ensure it's not loaded eagerly
          src="/travel.jpg"
          alt="Travel & Hospitality"
          height="500"
          width="500"
          className="md:w-1/2 mx-auto mt-8 object-contain"
        />
      </div>
    ),
  },
  {
    category: "Manufacturing",
    title: "Smart Software for Smarter Manufacturing.",
    src: "/manufacture.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          Develop ERP tools, automation dashboards, and IoT integrations to streamline operations, track assets, and analyze production data.
        </p>
        <Image
        loading="lazy" // <-- Lazy loading
        priority={false} // Optional: ensure it's not loaded eagerly
          src="/manufacture.jpg"
          alt="Manufacturing"
          height="500"
          width="500"
          className="md:w-1/2 mx-auto mt-8 object-contain"
        />
      </div>
    ),
  },
];

