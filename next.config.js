/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ⭐ REQUIRED FOR SURGE
  distDir: "out",
  images: {
    unoptimized: true,
  }
};

module.exports = nextConfig;

