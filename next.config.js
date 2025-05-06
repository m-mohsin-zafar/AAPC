const path = require("path");
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const withFonts = require('next-fonts');
module.exports = withFonts();

module.exports = {
  ...nextConfig,
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/cron', // your dynamic sitemap
      },
    ];
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname),
      "@/components": path.resolve(__dirname, "components"),
      "@/public": path.resolve(__dirname, "public"),
    };
    return config;
  },
};
