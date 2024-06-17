/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'erxes.bto.mn',
      },
    ],
  },
};

export default nextConfig;
