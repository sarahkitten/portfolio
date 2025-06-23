import { Project, Experience, Skill, SocialLink } from '@/types';

export const personalInfo = {
  name: "Sarah Kitten",
  title: "Frontend Developer",
  email: "sarahnkitten@gmail.com",
  location: "Your Location", // Update this
  bio: "Passionate frontend developer with experience building user-centric applications using React, TypeScript, and modern web technologies. I love creating intuitive, accessible, and performant web experiences.",
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/sarahkitten",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sarah-kitten/",
    icon: "linkedin",
  },
  {
    name: "SoundCloud",
    url: "https://soundcloud.com/sarah-kitten-140422036",
    icon: "soundcloud",
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "Tailwind CSS", level: 85, category: "frontend" },
  
  // Backend
  { name: "Node.js", level: 70, category: "backend" },
  { name: "Elixir", level: 75, category: "backend" },
  
  // Tools
  { name: "Git", level: 85, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
  { name: "Figma", level: 70, category: "design" },
];

export const experiences: Experience[] = [
  {
    id: "newrelic",
    company: "New Relic",
    position: "Frontend Developer",
    startDate: "2020-01-01", // Update with actual dates
    endDate: "2023-12-31", // Update with actual dates
    description: "Developed and maintained key user-facing applications using React and TypeScript in a micro-frontend architecture.",
    achievements: [
      "Fully overhauled the Integrations and Agents marketplace UI, resulting in faster load times and increased user engagement",
      "Implemented a new 'Installed' tab for better navigation through already-installed agents",
      "Developed and maintained New Relic's onboarding flow using React and TypeScript",
      "Maintained an Elixir service with 99.99% uptime SLA",
      "Collaboratively engineered a declarative UI framework to convert YAML configurations into dynamic installation instructions",
      "Framework is used in 200+ workflows with 32,000 monthly active users"
    ],
    technologies: ["React", "TypeScript", "Elixir", "Micro-frontends", "YAML"],
  },
];

export const projects: Project[] = [
  {
    id: "webcam-eye-tracker",
    title: "Webcam Eye Tracker",
    description: "Web-based eye tracking screen magnifier using JavaScript, HTML, and CSS. Designed and conducted two experiments for evaluating usability for people with low vision. Winner of REU's 'Best Project Visual' award.",
    image: "/projects/eye-tracker.png", // Add actual image
    technologies: ["JavaScript", "HTML", "CSS", "Computer Vision"],
    githubUrl: "https://github.com/sarahkitten/webcam-gaze-magnifier",
    featured: true,
  },
  {
    id: "bring-recycling",
    title: "BRING Recycling Donation App",
    description: "Winner of 2020 Hack for a Cause hackathon. React.js web application for a local nonprofit that allows them to receive photos of prospective donations and quickly send custom or pre-written email/text responses to the donor.",
    image: "/projects/bring-app.png", // Add actual image
    technologies: ["React.js", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/alecspringel/bring-client",
    featured: true,
  },
  {
    id: "future-crypt",
    title: "Future Crypt",
    description: "3D fighting adventure game using Unity and C#. Documented progress on 4 builds and implemented game systems for currency, upgrades, mana, speedrun timing, health, combat, and progression. Selected for SIMMER.IO Founder's Club.",
    image: "/projects/future-crypt.png", // Add actual image
    technologies: ["Unity", "C#", "Game Development"],
    liveUrl: "https://simmer.io/@sarahkitten/future-crypt", // Update with actual URL if available
    featured: false,
  },
  {
    id: "galaxy-laser",
    title: "Galaxy Laser",
    description: "An interactive space-themed game showcasing creative game development and visual design skills.",
    image: "/projects/galaxy-laser.png", // Add actual image
    technologies: ["Unity", "C#", "Game Development"],
    featured: false,
  },
];
