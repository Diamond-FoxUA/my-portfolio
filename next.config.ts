import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cloudinary.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
