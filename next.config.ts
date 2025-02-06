import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
      "instagram.com",
      "inkedin.com",
      "x.com",
      "github.com",
    ],
  },
};

export default nextConfig;
