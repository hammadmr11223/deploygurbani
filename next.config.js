/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ Allow external images
  images: {
    domains: ["backend.searchgurbani.com"],
  },

  // ✅ Ignore ESLint errors during build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ Ignore TypeScript errors (if you're using TS)
  typescript: {
    ignoreBuildErrors: true,
  },

  // Optional: You can enable experimental features if needed
  // experimental: {
  //   appDir: true,
  // },
};

module.exports = nextConfig;
