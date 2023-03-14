/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: process.env.NEXT_PUBLIC_API_HOST + "/:path*", // replace with your API endpoint
      },
    ];
  },
};

module.exports = nextConfig;
