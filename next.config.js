/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.spektrum-holding.de',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
