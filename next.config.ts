/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    styledComponents: {
      ssr: false,
    },
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
    ];
  },
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
