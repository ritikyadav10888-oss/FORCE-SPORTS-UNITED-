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
  serverExternalPackages: ["nodemailer", "sharp"],
}

export default nextConfig;
