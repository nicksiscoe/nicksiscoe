/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ghchart.rshah.org',
        port: '',
        pathname: '/nicksiscoe',
      },
    ],
  },
}

module.exports = nextConfig
