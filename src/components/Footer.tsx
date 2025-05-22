import Link from "next/link";
import { SparklesCore } from "./ui/sparkles";

export function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Column 1: Branding / Copyright */}
        <div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} WAC. All rights reserved.
          </p>
        </div>

        {/* Column 2: Pages */}
        <div>
          <h4 className="text-lg font-medium text-white mb-3">Pages</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#hero" className="hover:underline">Home</Link></li>
            <li><Link href="#service" className="hover:underline">Services</Link></li>
            <li><Link href="#industries" className="hover:underline">Industries</Link></li>
            <li><Link href="#testimonials" className="hover:underline">Testimonials</Link></li>
          </ul>
        </div>

        {/* Column 3: Legal */}
        <div>
          <h4 className="text-lg font-medium text-white mb-3">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/terms" className="hover:underline">Terms & Conditions</Link></li>
            <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/cookies" className="hover:underline">Cookie Policy</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 className="text-lg font-medium text-white mb-3">Contact</h4>
          <p className="text-sm">📧 <a href="mailto:hello@isad.digital" className="hover:underline">info@wolvesandcompany.in</a></p>
          <p className="text-sm mt-2">📍 Remote & Global</p>
        </div>
      </div>

      <div className="h-[20rem] mt-40 w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        Wolves & Company
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
    </footer>
  );
}
