import type { NextConfig } from "next";

// Get repository name from GitHub Actions environment or default to 'portfolio'
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'portfolio';
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  distDir: 'out',
  // Set the base path for GitHub Pages deployment
  basePath: isGitHubPages ? `/${repoName}` : '',
  assetPrefix: isGitHubPages ? `/${repoName}` : '',
};

export default nextConfig;
