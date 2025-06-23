# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages with automatic deployment.

## Prerequisites

1. A GitHub account
2. Your portfolio code in a GitHub repository

## Setup Instructions

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `portfolio` or `your-username.github.io`
3. Make it public (required for free GitHub Pages)
4. Don't initialize with README (we already have one)

### 2. Connect Your Local Repository

```bash
# Add your GitHub repository as the remote origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# Or if you already have a remote, update it
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
```

### 3. Push Your Code

```bash
# Add all files
git add .

# Commit your changes
git commit -m "Initial portfolio setup with GitHub Pages deployment"

# Push to GitHub
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically run and deploy your site

### 5. Access Your Live Site

Your site will be available at:
- If your repo is named `your-username.github.io`: `https://your-username.github.io`
- For other repo names: `https://your-username.github.io/repository-name`

## Automatic Deployment

The GitHub Action is configured to:

- ✅ Automatically deploy when you push to the `main` branch
- ✅ Use Node.js 20 for building
- ✅ Cache dependencies for faster builds
- ✅ Generate static files optimized for GitHub Pages
- ✅ Deploy to the `gh-pages` branch automatically

## Making Updates

After the initial setup, updating your site is simple:

```bash
# Make your changes to the code
# Then commit and push
git add .
git commit -m "Update portfolio content"
git push
```

The GitHub Action will automatically:
1. Build your updated site
2. Deploy it to GitHub Pages
3. Your live site will update in a few minutes

## Troubleshooting

### Build Fails
- Check the **Actions** tab in your GitHub repository
- Look at the build logs for specific error messages
- Common issues:
  - Missing dependencies (check package.json)
  - TypeScript errors (run `npm run lint` locally)
  - Build errors (run `npm run build` locally to test)

### Site Not Loading
- Ensure GitHub Pages is enabled in repository settings
- Check that the workflow completed successfully
- Wait a few minutes for DNS propagation

### Custom Domain (Optional)
1. Add a `CNAME` file to the `public/` directory with your domain
2. Configure your domain's DNS to point to GitHub Pages
3. Enable custom domain in repository settings

## Development Workflow

```bash
# Local development
npm run dev

# Test production build locally
npm run build
npm run start

# Format code
npm run format

# Check for issues
npm run lint
```

## File Structure for Deployment

```
.github/
└── workflows/
    └── deploy.yml          # GitHub Actions workflow
public/
└── .nojekyll              # Prevents Jekyll processing
next.config.ts             # Configured for static export
package.json               # Includes build scripts
```

Your portfolio is now set up for professional deployment with automatic updates! 🚀
