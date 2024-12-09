import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["https://my-strapi-9n2k.onrender.com"], // Add the domain from which you're fetching images
  },
};

export default nextConfig;
