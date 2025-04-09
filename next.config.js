/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['vercel.com'],
  },
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig 