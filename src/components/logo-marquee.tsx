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
  const allLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="slider">
      <div className="slide-track">
        {allLogos.map((logo, idx) => (
          <div
            key={idx}
            className="slide flex items-center justify-center h-[80px]"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              height={72}
              width={144} // fixed aspect ratio
              className="object-contain max-h-[90px]"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
