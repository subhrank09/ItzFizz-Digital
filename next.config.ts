import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enables static HTML export (required for GitHub Pages)
  output: 'export',
  
  // Disables Next.js server-side image optimization (GitHub Pages doesn't support it)
  images: {
    unoptimized: true,
  },

  // IMPORTANT: If you are deploying to a project repository 
  // (e.g., https://yourusername.github.io/your-repo-name), 
  // you MUST uncomment the line below and replace 'your-repo-name' with your actual repository name.
  // If you are deploying to a user page (https://yourusername.github.io), leave this commented out.
  
  // basePath: '/your-repo-name',
};

export default nextConfig;