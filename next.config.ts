import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  // Next 15+ defaults to SWC minify; remove deprecated flag
  typedRoutes: true,
};

export default nextConfig;
