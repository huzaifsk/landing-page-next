"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { ProjectCard } from "@/components/ui/project-card";

export default function CaseStudy() {
    const projects = [
  {
    title: "Interactive 3D Marquee",
    description: "A stunning 3D image scroll experience for product showcases.",
    image: "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
    link: "#",
  },
  {
    title: "Animated Testimonials",
    description: "Engaging testimonial section with fluid animations.",
    image: "https://assets.aceternity.com/animated-testimonials.webp",
    link: "#",
  },
  {
    title: "GitHub Globe Visualization",
    description: "A 3D globe that visualizes GitHub user activity in real-time.",
    image: "https://assets.aceternity.com/github-globe.png",
    link: "#",
  },
  // Add more as needed
];

 const images = [
  "https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dWklMjBsYXlvdXR8ZW58MHx8MHx8fDA%3D", // team workflow
  "https://images.unsplash.com/photo-1743310815470-d10f22e877c4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVpJTIwbGF5b3V0JTIwb2YlMjBzb2Z0d2FyZXxlbnwwfHwwfHx8MA%3D%3D", // mobile UX
  "https://images.unsplash.com/photo-1642132652803-01f9738d0446?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWluaW1hbCUyMHdlYiUyMGFwcCUyMHVpfGVufDB8fDB8fHww", // minimalist web UI
  "https://images.unsplash.com/photo-1642132652935-d750e2014719?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1pbmltYWwlMjB3ZWIlMjBhcHAlMjB1aXxlbnwwfHwwfHx8MA%3D%3D", // developer console
  "https://images.unsplash.com/photo-1642132652860-603f4e3c19b7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D", // charts and analytics
  "https://images.unsplash.com/photo-1648134859177-66e35b61e106?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D", // dashboard app
  "https://images.unsplash.com/photo-1648134859179-ed0c98f54519?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8", // team collaboration
  "https://images.unsplash.com/photo-1642132652860-471b4228023e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8", // 9. Mobile App UI/UX
  "https://images.unsplash.com/photo-1642132652798-ae887edb9e9d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",                 // 10. Responsive Design Mockup
  "https://images.unsplash.com/photo-1648134859187-71dadc9f815a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8",                           // 11. Code on Screen
  "https://images.unsplash.com/photo-1625296276188-1d149bdaf560?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8",                                   // 12. Developer Console/IDE
  "https://images.unsplash.com/photo-1642132652866-6fa262d3161f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",                     // 13. API/Backend Style (Abstract Tech)
  "https://images.unsplash.com/photo-1648134859187-71dadc9f815a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",                           // 14. Modern Startup Desk
  "https://images.unsplash.com/photo-1648134859186-a05fb609f41e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8", // 15. Touch Interface/Futuristic Tech
  "https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dWklMjBsYXlvdXR8ZW58MHx8MHx8fDA%3D", // team workflow
  "https://images.unsplash.com/photo-1743310815470-d10f22e877c4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVpJTIwbGF5b3V0JTIwb2YlMjBzb2Z0d2FyZXxlbnwwfHwwfHx8MA%3D%3D", // mobile UX
  "https://images.unsplash.com/photo-1642132652803-01f9738d0446?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWluaW1hbCUyMHdlYiUyMGFwcCUyMHVpfGVufDB8fDB8fHww", // minimalist web UI
  "https://images.unsplash.com/photo-1642132652935-d750e2014719?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1pbmltYWwlMjB3ZWIlMjBhcHAlMjB1aXxlbnwwfHwwfHx8MA%3D%3D", // developer console
  "https://images.unsplash.com/photo-1642132652860-603f4e3c19b7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D", // charts and analytics
  "https://images.unsplash.com/photo-1648134859177-66e35b61e106?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D", // dashboard app
  "https://images.unsplash.com/photo-1648134859179-ed0c98f54519?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8", // team collaboration
  "https://images.unsplash.com/photo-1642132652860-471b4228023e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8", // 9. Mobile App UI/UX
  "https://images.unsplash.com/photo-1642132652798-ae887edb9e9d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",                 // 10. Responsive Design Mockup
  "https://images.unsplash.com/photo-1648134859187-71dadc9f815a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8",                           // 11. Code on Screen
  "https://images.unsplash.com/photo-1625296276188-1d149bdaf560?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8",                                   // 12. Developer Console/IDE
  "https://images.unsplash.com/photo-1642132652866-6fa262d3161f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",                     // 13. API/Backend Style (Abstract Tech)
  "https://images.unsplash.com/photo-1648134859187-71dadc9f815a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",                           // 14. Modern Startup Desk
  "https://images.unsplash.com/photo-1648134859186-a05fb609f41e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8", // 15. Touch Interface/Futuristic Tech
  "https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dWklMjBsYXlvdXR8ZW58MHx8MHx8fDA%3D", // team workflow
  "https://images.unsplash.com/photo-1743310815470-d10f22e877c4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVpJTIwbGF5b3V0JTIwb2YlMjBzb2Z0d2FyZXxlbnwwfHwwfHx8MA%3D%3D", // mobile UX
  "https://images.unsplash.com/photo-1642132652803-01f9738d0446?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWluaW1hbCUyMHdlYiUyMGFwcCUyMHVpfGVufDB8fDB8fHww", // minimalist web UI
  "https://images.unsplash.com/photo-1642132652935-d750e2014719?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1pbmltYWwlMjB3ZWIlMjBhcHAlMjB1aXxlbnwwfHwwfHx8MA%3D%3D", // developer console
  "https://images.unsplash.com/photo-1642132652860-603f4e3c19b7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D", // charts and analytics
  "https://images.unsplash.com/photo-1648134859177-66e35b61e106?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D", // dashboard app
  "https://images.unsplash.com/photo-1648134859179-ed0c98f54519?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8", // team collaboration
  "https://images.unsplash.com/photo-1642132652860-471b4228023e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8", // 9. Mobile App UI/UX
  "https://images.unsplash.com/photo-1642132652798-ae887edb9e9d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",                 // 10. Responsive Design Mockup
  "https://images.unsplash.com/photo-1648134859187-71dadc9f815a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8",                           // 11. Code on Screen
  "https://images.unsplash.com/photo-1625296276188-1d149bdaf560?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8",                                   // 12. Developer Console/IDE
  "https://images.unsplash.com/photo-1642132652866-6fa262d3161f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",                     // 13. API/Backend Style (Abstract Tech)
  "https://images.unsplash.com/photo-1648134859187-71dadc9f815a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",                           // 14. Modern Startup Desk
  "https://images.unsplash.com/photo-1648134859186-a05fb609f41e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8" // 15. Touch Interface/Futuristic Tech
  
];

  return (
    <>
    <div className="relative  flex h-screen w-full flex-col items-center justify-center overflow-hidden">
     <h2 className="relative z-20 text-center text-4xl font-bold text-white md:text-5xl lg:text-6xl">
    Projects We’ve <span className="text-teal-400">Brought to Life</span>
  </h2>
  <p className="relative z-20 mt-4 max-w-2xl text-center text-base text-neutral-200 md:text-lg">
    Here are some of the standout projects we’ve successfully executed for our clients.
  </p>

      {/* overlay */}
      <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40" />
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images}
      />
    </div>

<div className="min-h-screen bg-white px-4 py-16">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
    </>
  );
}
