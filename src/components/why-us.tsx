// import React from "react";
// import { CardSpotlight } from "./ui/card-spotlight";


// export default function WhyUs() {
//   const reasons = [
//     {
//       title: "Expertise Across Stack",
//       description:
//         "From UI/UX to scalable backend systems, we bring deep technical knowledge and modern best practices to every layer of your product.",
//       color: "#6366f1", // Indigo
//     },
//     {
//       title: "Client-Centric Approach",
//       description:
//         "We align our process with your business goals, ensuring clear communication, transparency, and solutions that make an impact.",
//       color: "#10b981", // Emerald
//     },
//     {
//       title: "Rapid Delivery",
//       description:
//         "Our agile workflow and reusable components enable fast iterations and quicker time to market—without sacrificing quality.",
//       color: "#f59e0b", // Amber
//     },
//     {
//       title: "Custom-Built Solutions",
//       description:
//         "We don’t believe in one-size-fits-all. Every product we build is tailored specifically to your unique challenges and users.",
//       color: "#ec4899", // Pink
//     },
//   ];

//   return (
//     <section id="why-us" className="w-full py-24 md:py-56 bg-white text-black">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
//           <p className="text-neutral-400 max-w-2xl mx-auto">
//             We blend creativity, strategy, and technology to build outstanding digital experiences tailored to your goals.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {reasons.map((reason, index) => (
//             <CardSpotlight
//               key={index}
//               color={reason.color}

//               className="h-full"
//             >
//               <div className="relative z-10">
//                 <h3 className="text-2xl font-semibold mb-4">
//                   {reason.title}
//                 </h3>
//                 <p className="text-teal-900">{reason.description}</p>
//               </div>
//             </CardSpotlight>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

export default function WhyUs() {
  const reasons = [
  {
    title: "Full-Stack Excellence",
    description:
      "We excel at both frontend and backend development, delivering seamless, performant applications from database to UI.",
    // link: "#",
  },
  {
    title: "Strategic Product Thinking",
    description:
      "Beyond code, we think deeply about your users and market to craft solutions that actually move your business forward.",
    // link: "#",
  },
  {
    title: "Agile & Adaptable Teams",
    description:
      "We move fast, stay lean, and pivot when needed—perfect for startups or evolving product roadmaps.",
    // link: "#",
  },
  {
    title: "Design-Driven Development",
    description:
      "Great design isn’t just aesthetic—it’s usability. Our designers and developers work in sync to deliver pixel-perfect interfaces.",
    // link: "#",
  },
  {
    title: "Transparent Communication",
    description:
      "Weekly demos, async updates, and a collaborative workflow ensure you’re always in the loop and never guessing.",
    // link: "#",
  },
  {
    title: "Long-Term Partnership",
    description:
      "We don’t disappear after launch. We're in it for the long run—ready to scale, maintain, and improve your product as you grow.",
    // link: "#",
  },
];


  return (
    <section id="why-us" className="w-full py-24 md:py-40 bg-white text-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-neutral-600 md:text-lg  mx-auto">
            We blend creativity, strategy, and technology to build outstanding digital experiences tailored to your goals.
          </p>
        </div>
        <HoverEffect items={reasons} className="gap-6" />
      </div>
    </section>
  );
}
