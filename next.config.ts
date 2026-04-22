import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/clubinmobiliario",
        destination: "/club-inmobiliario",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
