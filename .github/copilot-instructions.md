# Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a modern portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. The project follows current best practices for React development and modern web standards.

## Development Guidelines

### Code Style
- Use TypeScript for all new code
- Prefer functional components with React hooks
- Use Tailwind CSS for styling (avoid CSS modules or styled-components)
- Follow the Next.js App Router patterns
- Use proper TypeScript interfaces and types

### Component Structure
- Create reusable components in `/src/components`
- Use proper prop typing with TypeScript interfaces
- Implement responsive design patterns with Tailwind
- Follow accessibility best practices (ARIA labels, semantic HTML)

### Animation Guidelines
- Use Framer Motion for smooth animations
- Implement scroll-triggered animations for sections
- Keep animations performant and purposeful
- Use consistent easing and timing

### Performance
- Optimize images using Next.js Image component
- Implement proper SEO with Next.js metadata API
- Use server components where appropriate
- Minimize client-side JavaScript

### File Organization
- `/src/app` - App Router pages and layouts
- `/src/components` - Reusable UI components
- `/src/lib` - Utility functions and configurations
- `/src/types` - TypeScript type definitions
- `/public` - Static assets

### Portfolio-Specific Features
- Hero section with professional introduction
- About section with skills and background
- Projects showcase with live demos and GitHub links
- Experience timeline with work history
- Contact form with validation
- Responsive design for all screen sizes
- Dark/light mode toggle
- Smooth scrolling between sections
