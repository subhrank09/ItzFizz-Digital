import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // ADD YOUR EXACT REPOSITORY NAME HERE
  // For example, if your repo is github.com/subhrank/car-animation
  // This should be basePath: '/car-animation',
  basePath: '/ItzFizz-Digital', 
  assetPrefix: '/ItzFizz-Digital/', // Add this line too to be extra safe
};

export default nextConfig;
