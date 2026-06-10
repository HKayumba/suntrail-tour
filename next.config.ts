import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/contact.html",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/demande-devis.html",
        destination: "/demande-devis",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
