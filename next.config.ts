import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "my-strapi-9n2k.onrender.com",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
