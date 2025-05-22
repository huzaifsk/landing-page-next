"use client";

import {  useEffect, useState } from "react";
import { Hero } from "../components/hero";
import Statistics from "../components/Statistics";
import { Services } from '../components/Services';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../components/resizable-navbar";
import WhyUs from "@/components/why-us";
import LogoMarquee from "@/components/logo-marquee";
import { PopupModal } from "react-calendly";
import { ContactUs } from '../components/contact';
import { Industries } from "@/components/industries";
import Review from '../components/review';
import { Footer } from '../components/Footer';


export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const el = document.getElementById("root");
    setRootElement(el);
  }, []);


  const navItems = [
    { name: "Home", link: "#hero" },
    { name: "Service", link: "#service" },
    { name: "Industries", link: "#industries" },
    {name: "Testimonials", link: "#testimonials"}
  ];

  const handleMobileClick =()=>{
    setIsMobileMenuOpen(false);
    setIsOpen(true)
  }



  return (
    <main className="flex flex-col min-h-screen  text-white">
      {/* --- Navbar --- */}
      <Navbar>
        {/* Desktop Nav */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
          <button onClick={() => setIsOpen(true)} className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px  text-xs font-semibold leading-6  text-white inline-block">
  <span className="absolute inset-0 overflow-hidden rounded-full">
    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
  </span>
  <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-6 ring-1 ring-white/10 ">

    <span>
      Book a call
    </span>
  </div>
  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
</button>
          </div>
        </NavBody>

        {/* Mobile Nav */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-black hover:text-gray-700 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col gap-4 pt-4">
              <NavbarButton
                onClick={handleMobileClick}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* --- Hero Section --- */}
      <Hero />

      <LogoMarquee />

      {/* --- Statistics Section --- */}
      <Statistics />

      {/* --- Service Section --- */}
      <Services />

      <Industries />

      <WhyUs />

      <Review />

      <ContactUs />

      <Footer />

      {rootElement && (
        <PopupModal
          url="https://calendly.com/huzaifsk12"
          pageSettings={{
            backgroundColor: "ffffff",
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: "00a2ff",
            textColor: "4d5055",
          }}
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={rootElement}
        />
      )}
    </main>
  );
}
