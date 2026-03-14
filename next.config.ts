import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Notice there are NO slashes before basePath and assetPrefix now!
  basePath: '/ItzFizz-Digital',
  assetPrefix: '/ItzFizz-Digital/',
};

export default nextConfig;
