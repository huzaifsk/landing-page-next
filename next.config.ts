// next.config.js
import bundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ TypeScript & ESLint settings
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ Image optimization
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // ✅ Compression
  compress: true,

  // ✅ Performance optimizations
  poweredByHeader: false,
  generateEtags: false,
  swcMinify: true, // <--- IMPORTANT

  // ✅ Experimental: optimize imports for specific packages
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "motion"],
  },

  // ✅ Webpack customizations
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
          motion: {
            test: /[\\/]node_modules[\\/](framer-motion|motion)[\\/]/,
            name: "motion",
            chunks: "all",
          },
        },
      };
    }
    return config;
  },
};

// ✅ Wrap with bundle analyzer
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(nextConfig);
