"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

export function Hero() {
  return (
    <div id="hero" className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-full mx-auto p-4">
        <div className="max-w-full m-auto p-4">
          <h1 className="relative py-2 z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
            Empowering Your Business Ideas
            <br />
            with Cutting-Edge Technology
          </h1>

          <p className="text-neutral-500 max-w-xl mx-auto my-4 text-sm text-center relative z-10">
            We are a team of professionals dedicated to transforming your ideas
            into successful businesses, helping you establish a strong presence
            in the marketplace.
          </p>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
