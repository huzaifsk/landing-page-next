
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from 'sonner';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata  = {
  title: "WAC - Your Trusted Digital Partner",
  description: "WAC delivers cutting-edge web and app development, UI/UX design, and custom software solutions.",
  keywords: ["Web Development", "UI/UX Design", "Mobile Apps", "Custom Software", "WAC"],
  authors: [{ name: "WAC Team", url: "https://yourdomain.com" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  themeColor: "#0d47a1",
  openGraph: {
    title: "WAC - Your Trusted Digital Partner",
    description: "WAC delivers cutting-edge web and app development, UI/UX design, and custom software solutions.",
    url: "https://yourdomain.com",
    siteName: "WAC",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WAC Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WAC - Your Trusted Digital Partner",
    description: "WAC delivers cutting-edge web and app development, UI/UX design, and custom software solutions.",
    images: ["https://yourdomain.com/og-image.jpg"],
    creator: "@YourTwitterHandle",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body id="root" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Toaster richColors position="bottom-right" />
        {children}
      </body>
    </html>
  );
}
