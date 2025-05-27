"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
// import { ProjectCard } from "@/components/ui/project-card";

export default function CaseStudy() {
    const projects = [
  {
    title: "Khalid Travels & Tradelinks",
    description: "Khalid Travels & Tradelinks is your trusted partner in global travel and tour services, offering seamless flight bookings, customized holiday packages, visa assistance, and exceptional customer support—designed to turn every journey into a memorable experience.",
    image: "/all-devices-black.png",
    country: "Saudi",
    category: "Travel",
    link: "#",
  },
  {
    title: "Golden Gymnasium",
    description: "Engaging testimonial section with fluid animations.",
    image: "https://assets.aceternity.com/animated-testimonials.webp",
    link: "#",
  },
  {
    title: "Golden Gymnasium landing page",
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
      <div className="justify-items-center">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
    </>
  );
}


const ProjectCard = ({
  image,
  country,
  category,
  title,
  description,
}) => {
  const backgroundColors = [
  'bg-blue-50',
  'bg-green-50',
  'bg-yellow-50',
  'bg-purple-50',
  'bg-pink-50',
  'bg-indigo-50',
  'bg-red-50',
  'bg-teal-50',
];

  const randomBgClass = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];

  return (
    <div className="
      flex flex-col md:flex-row
      bg-white 
      rounded-4xl 
      overflow-hidden
      max-w-6xl w-full
      border
      hover:rounded-2xl
      bg-cover
      my-10
      md:h-[460px] 
    ">
      {/* Media Section (Image/Video Mockups) */}
      <div className={`
          md:w-1/2 flex items-center justify-center 
          px-10
          ${randomBgClass}
          border
          rounded-br-4xl
          rounded-tr-4xl
          hover:rounded-br-2xl hover:rounded-tr-2xl
          order-1 md:order-none
      `}>
        {/* Image for the project mockup */}
        <img
          src={image}
          alt={`${title} mockups`}
          className="max-w-full h-auto"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = 'https://placehold.co/600x400/E0F2F7/00796B?text=Image+Not+Found'; // Fallback image
          }}
        />
      </div>

      {/* Content Section */}
      <div className="
          md:w-1/2 p-8 md:p-12 flex flex-col justify-center
          order-2 md:order-none /* Ensures content is second on small screens, then side-by-side */
      ">
        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {country && <span className="
              inline-block px-3 py-1 rounded-full text-sm font-semibold
              bg-neutral-100 text-neutral-700
          ">
            {country}
          </span>}
          {category && <span className="
              inline-block px-3 py-1 rounded-full text-sm font-semibold
              bg-teal-100 text-teal-700
          ">
            {category}
          </span>}
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
          {title}
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
          {description}
        </p>
      </div>
    </div>
  );
};

