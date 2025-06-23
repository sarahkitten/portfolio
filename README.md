# Modern Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features smooth animations, professional design, and excellent performance.

## 🚀 Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- **Smooth Animations**: Framer Motion for scroll-triggered animations and transitions
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Performance Optimized**: Server components, image optimization, and minimal JavaScript
- **Accessibility**: Semantic HTML and ARIA labels throughout
- **Professional Sections**:
  - Hero section with animated introduction
  - About section with skills showcase
  - Experience timeline with work history
  - Projects gallery with live demos and GitHub links
  - Contact form with validation
  - Social media links and footer

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Code Quality**: ESLint, Prettier
- **Utilities**: clsx, tailwind-merge

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main portfolio page
│   └── globals.css     # Global styles and animations
├── components/         # Reusable UI components
│   ├── Navigation.tsx  # Navigation with smooth scrolling
│   ├── Hero.tsx        # Hero section with animations
│   ├── About.tsx       # About section with skills
│   ├── Experience.tsx  # Experience timeline
│   ├── Projects.tsx    # Projects showcase
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer with social links
├── lib/               # Utility functions
│   ├── data.ts        # Portfolio data and content
│   └── utils.ts       # Helper functions
└── types/             # TypeScript type definitions
    └── index.ts       # Project interfaces
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000) to see the portfolio

## 📝 Customization

### Personal Information
Update your personal information in `src/lib/data.ts`:
- Personal details (name, title, description)
- Social media links
- Skills and technologies
- Work experience
- Projects with descriptions and links

### Styling
- Modify colors and themes in `tailwind.config.ts`
- Add custom animations in `src/app/globals.css`
- Adjust component styles using Tailwind classes

### Content Sections
- Add new sections by creating components in `src/components/`
- Update the main page layout in `src/app/page.tsx`
- Extend TypeScript interfaces in `src/types/index.ts`

## 🎨 Design Features

- **Smooth Scrolling**: Navigation links smoothly scroll to sections
- **Scroll Animations**: Elements animate into view as you scroll
- **Responsive Grid**: Projects and skills adapt to screen size
- **Interactive Elements**: Hover effects and transitions
- **Professional Typography**: Clean, readable font hierarchy
- **Consistent Spacing**: Uniform padding and margins throughout

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: 320px and up
- Tablet: 768px and up
- Desktop: 1024px and up
- Large Desktop: 1280px and up

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms
```bash
npm run build
npm start
```

## 📄 Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🔧 Development

### Code Quality
- ESLint configuration for Next.js and TypeScript
- Prettier for consistent code formatting
- TypeScript for type safety
- Tailwind CSS IntelliSense support

### Performance
- Server Components by default
- Optimized images with Next.js Image component
- Minimal client-side JavaScript
- Efficient bundle splitting

## 📋 TODO

- [ ] Add dark/light mode toggle
- [ ] Implement blog section
- [ ] Add testimonials section
- [ ] Create project detail pages
- [ ] Add contact form backend integration
- [ ] Implement analytics
- [ ] Add sitemap and robots.txt

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
