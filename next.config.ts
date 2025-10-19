import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize images
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year for better caching
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Enable modern JavaScript output
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Optimize bundle
  experimental: {
    optimizePackageImports: [
      "motion",
      "lucide-react",
      "@radix-ui/react-popover",
      "@radix-ui/react-scroll-area",
    ],
    optimizeCss: true,
  },

  // Production optimizations
  reactStrictMode: true,
  compress: true,
};

export default nextConfig;
