/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {}, // required by Clerk and Next.js 13+ features
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
