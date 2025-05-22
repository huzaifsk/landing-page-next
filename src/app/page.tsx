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
            <NavbarButton variant="primary" onClick={()=> setIsOpen(true)}>Book a call</NavbarButton>
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
                rootElement={document.getElementById("root")}
              />
    </main>
  );
}
