/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["thecocktaildb.com", "www.thecocktaildb.com"],
  },
  experimental: {
    serverActions: true,
  }
};

module.exports = nextConfig
