import React from "react";
import { CardSpotlight } from "./ui/card-spotlight";


export default function WhyUs() {
  const reasons = [
    {
      title: "Expertise Across Stack",
      description:
        "From UI/UX to scalable backend systems, we bring deep technical knowledge and modern best practices to every layer of your product.",
      color: "#6366f1", // Indigo
    },
    {
      title: "Client-Centric Approach",
      description:
        "We align our process with your business goals, ensuring clear communication, transparency, and solutions that make an impact.",
      color: "#10b981", // Emerald
    },
    {
      title: "Rapid Delivery",
      description:
        "Our agile workflow and reusable components enable fast iterations and quicker time to market—without sacrificing quality.",
      color: "#f59e0b", // Amber
    },
    {
      title: "Custom-Built Solutions",
      description:
        "We don’t believe in one-size-fits-all. Every product we build is tailored specifically to your unique challenges and users.",
      color: "#ec4899", // Pink
    },
  ];

  return (
    <section id="why-us" className="w-full py-24 md:py-56 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            We blend creativity, strategy, and technology to build outstanding digital experiences tailored to your goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <CardSpotlight
              key={index}
              color={reason.color}

              className="h-full"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-4">
                  {reason.title}
                </h3>
                <p className="text-neutral-300">{reason.description}</p>
              </div>
            </CardSpotlight>
          ))}
        </div>
      </div>
    </section>
  );
}
