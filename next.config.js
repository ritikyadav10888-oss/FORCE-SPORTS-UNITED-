/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.forcesportsunited.com',
      },
    ],
  },
  serverExternalPackages: ["sharp"],
}

export default nextConfig;
