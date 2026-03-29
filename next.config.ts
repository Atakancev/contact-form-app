import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path+",
        destination: "https://kurzai.com",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
