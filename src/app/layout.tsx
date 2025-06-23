import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sarah Kitten - Frontend Developer",
  description: "Frontend developer passionate about creating user-centric applications using React, TypeScript, and modern web technologies.",
  keywords: ["frontend developer", "React", "TypeScript", "JavaScript", "web development"],
  authors: [{ name: "Sarah Kitten" }],
  creator: "Sarah Kitten",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sarahkitten.dev", // Update with your actual domain
    title: "Sarah Kitten - Frontend Developer",
    description: "Frontend developer passionate about creating user-centric applications using React, TypeScript, and modern web technologies.",
    siteName: "Sarah Kitten Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarah Kitten - Frontend Developer",
    description: "Frontend developer passionate about creating user-centric applications using React, TypeScript, and modern web technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}>
        {children}
      </body>
    </html>
  );
}
