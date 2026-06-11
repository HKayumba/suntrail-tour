/** @type {import('next').NextConfig} */
const nextConfig = {
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

module.exports = nextConfig;
