// components/LogoMarquee.tsx
"use client";
import Image from "next/image";
import React from "react";

const logos = [
  { src: "/dextor.png", alt: "Dextor", height: 72 },
  { src: "/client-glide.png", alt: "Client Glide", height: 72 },
  { src: "/danish-xerox.png", alt: "Danish Xerox", height: 72 },
  { src: "/golden-gymnasium.png", alt: "Golden Gymnasium", height: 64 },
];

export default function LogoMarquee() {
  return (
    <div className="w-full overflow-hidden py-6 bg-white dark:bg-black">
      <div className="flex items-center animate-marquee whitespace-nowrap">
        {[...logos, ...logos].map((logo, idx) => (
          <div key={idx} className="mx-10 flex-shrink-0">
            <Image
              src={logo.src}
              alt={logo.alt}
              height={logo.height}
              width={logo.height * 2}
              loading="lazy"
              className="grayscale hover:grayscale-0 transition duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
