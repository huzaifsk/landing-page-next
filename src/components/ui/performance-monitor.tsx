"use client";

import { useEffect } from "react";

export function PerformanceMonitor() {
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      process.env.NODE_ENV === "production"
    ) {
      return;
    }

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === "largest-contentful-paint") {
          console.log("🎨 LCP:", entry.startTime.toFixed(2), "ms");
        }
        if (entry.entryType === "first-input") {
          console.log("⚡ FID:", entry.processingStart - entry.startTime, "ms");
        }
        if (entry.entryType === "layout-shift") {
          if (!(entry as any).hadRecentInput) {
            console.log("📐 CLS:", (entry as any).value.toFixed(4));
          }
        }
      }
    });

    observer.observe({
      entryTypes: ["largest-contentful-paint", "first-input", "layout-shift"],
    });

    // Monitor image loading performance
    const imageObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name.includes("/_next/image")) {
          console.log(
            "🖼️ Image load time:",
            entry.duration.toFixed(2),
            "ms -",
            entry.name
          );
        }
      }
    });

    imageObserver.observe({ entryTypes: ["resource"] });

    // Monitor bundle sizes
    const resourceObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name.includes("/_next/static/chunks/")) {
          const size = (entry as any).transferSize || 0;
          if (size > 100000) {
            // Files larger than 100KB
            console.log(
              "📦 Large bundle:",
              entry.name,
              "-",
              (size / 1024).toFixed(1),
              "KB"
            );
          }
        }
      }
    });

    resourceObserver.observe({ entryTypes: ["resource"] });

    return () => {
      observer.disconnect();
      imageObserver.disconnect();
      resourceObserver.disconnect();
    };
  }, []);

  return null;
}
