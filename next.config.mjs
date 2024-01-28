/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: {
    domains: ['www.oyorooms.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.oyorooms.com',
        port: ''
      }
    ]
  },
};

export default nextConfig;
