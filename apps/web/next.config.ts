import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typedRoutes: true,

  async rewrites() {
    const backendUrl = process.env.SERVER_INTERNAL_URL ?? process.env.NEXT_PUBLIC_SERVER_URL ?? 'http://localhost:3000';

    console.log(`[Web] Rewriting API requests to: ${backendUrl}`);

    return [
      {
        source: '/api/verifications/:path*',
        destination: '/api/verifications/:path*',
      },
      {
        source: '/api/:path*',
        destination: `${backendUrl}/api/:path*`,
      },
      {
        source: '/rpc/:path*',
        destination: `${backendUrl}/rpc/:path*`,
      },
    ];
  },
};

export default nextConfig;
