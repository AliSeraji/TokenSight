import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dexscreener.com",
        port: "",
        pathname: "/cms/images/**",
      },
      {
        protocol: "https",
        hostname: "dd.dexscreener.com",
        port: "",
        pathname: "/ds-data/**",
      },
    ],
  },
};

export default nextConfig;
