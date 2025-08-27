/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.abacus.ai', 'placehold.co']
  }
}

module.exports = nextConfig