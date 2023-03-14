/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://161.35.73.210/:path*", // replace with your API endpoint
      },
    ];
  },
};

module.exports = nextConfig;
