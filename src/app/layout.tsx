import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next";
import { PerformanceMonitor } from "@/components/ui/performance-monitor";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "W.A.C - Your Trusted Digital Partner | Web & App Development, UI/UX Design, Automation, Custom Software",
  description:
    "WAC is your trusted digital partner for web development, app development, UI/UX design, automation, and custom software solutions. We help startups and businesses transform digitally with innovative, scalable, and user-centric products, including business process automation and workflow optimization.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/x-icon", sizes: "any" }],
  },
  keywords: [
    "Web Development",
    "UI/UX Design",
    "Mobile Apps",
    "Custom Software",
    "WAC",
    "Digital Transformation",
    "Startup Solutions",
    "App Development",
    "Website Design",
    "Software Agency",
    "Wolves and Company",
    "India",
    "SaaS",
    "Product Design",
    "Branding",
    "Tech Agency",
    "Automation",
    "Business Automation",
    "Workflow Automation",
    "Process Automation",
    "Business Process Automation",
    "Automation Solutions",
  ],
  authors: [{ name: "WAC Team", url: "https://wolvesandcompany.in/" }],
  creator: "WAC Team",
  publisher: "WAC",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  themeColor: "#0d47a1",
  openGraph: {
    title:
      "W.A.C - Your Trusted Digital Partner | Web & App Development, UI/UX Design, Automation, Custom Software",
    description:
      "WAC is your trusted digital partner for web development, app development, UI/UX design, automation, and custom software solutions. We help startups and businesses transform digitally with innovative, scalable, and user-centric products, including business process automation and workflow optimization.",
    url: "https://wolvesandcompany.in/",
    siteName: "WAC",
    images: [
      {
        url: "https://wolvesandcompany.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "WAC Open Graph Image - Web & App Development, UI/UX Design, Automation, Custom Software",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "W.A.C - Your Trusted Digital Partner | Web & App Development, UI/UX Design, Automation, Custom Software",
    description:
      "WAC is your trusted digital partner for web development, app development, UI/UX design, automation, and custom software solutions. We help startups and businesses transform digitally with innovative, scalable, and user-centric products, including business process automation and workflow optimization.",
    images: ["https://wolvesandcompany.in/og-image.png"],
    creator: "@wolvesandcompany",
    site: "@wolvesandcompany",
  },
  alternates: {
    canonical: "https://wolvesandcompany.in/",
  },
  category: "technology",
  applicationName: "WAC - Wolves and Company",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" prefix="og: http://ogp.me/ns#">
      <head>
        <meta
          name="google-site-verification"
          content="YOUR_GOOGLE_SITE_VERIFICATION_TOKEN"
        />
        <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_TOKEN" />
        <link rel="canonical" href="https://wolvesandcompany.in/" />
        <meta name="author" content="WAC Team" />
        <meta name="copyright" content="WAC Team" />
        <meta name="distribution" content="global" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="WAC" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://wolvesandcompany.in/" />
        <meta
          property="og:image:alt"
          content="WAC Open Graph Image - Web & App Development, UI/UX Design, Automation, Custom Software"
        />
        <meta name="twitter:site" content="@wolvesandcompany" />
        <meta name="twitter:creator" content="@wolvesandcompany" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div id="root"></div>
        <PerformanceMonitor />
        <Analytics />
        <Toaster richColors position="bottom-right" />
        {children}
      </body>
    </html>
  );
}
