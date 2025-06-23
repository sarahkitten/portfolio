"use client";

import { motion } from "framer-motion";
import { personalInfo, socialLinks } from "@/lib/data";

const iconMap = {
  github: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  linkedin: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  soundcloud: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.255-2.154c-.009-.054-.049-.1-.099-.1zm1.249.05c-.048 0-.087.034-.094.082l-.196 2.104.196 2.067c.007.048.046.082.094.082.047 0 .086-.034.093-.082l.214-2.067-.214-2.104c-.007-.048-.046-.082-.093-.082zm1.22.087c-.044 0-.08.032-.087.078l-.189 2.017.189 2.019c.007.046.043.078.087.078.043 0 .08-.032.086-.078l.207-2.019-.207-2.017c-.006-.046-.043-.078-.086-.078zm1.193.078c-.041 0-.074.03-.081.074l-.18 1.939.18 1.94c.007.043.04.074.081.074.04 0 .073-.031.08-.074l.196-1.94-.196-1.939c-.007-.043-.04-.074-.08-.074zm1.167.074c-.037 0-.067.027-.074.066l-.17 1.865.17 1.867c.007.039.037.066.074.066.036 0 .066-.027.073-.066l.185-1.867-.185-1.865c-.007-.039-.037-.066-.073-.066zm1.14.066c-.033 0-.06.024-.066.058l-.159 1.799.159 1.801c.006.034.033.058.066.058.032 0 .059-.024.065-.058l.174-1.801-.174-1.799c-.006-.034-.033-.058-.065-.058zm1.114.058c-.029 0-.053.021-.058.05l-.149 1.741.149 1.743c.005.029.029.05.058.05.028 0 .052-.021.057-.05l.163-1.743-.163-1.741c-.005-.029-.029-.05-.057-.05zm1.087.05c-.025 0-.045.018-.05.042l-.138 1.691.138 1.693c.005.024.025.042.05.042.024 0 .044-.018.049-.042l.152-1.693-.152-1.691c-.005-.024-.025-.042-.049-.042zm1.061.042c-.021 0-.038.015-.042.037l-.127 1.649.127 1.651c.004.022.021.037.042.037.02 0 .037-.015.041-.037l.141-1.651-.141-1.649c-.004-.022-.021-.037-.041-.037zm1.035.037c-.017 0-.031.012-.035.029l-.116 1.612.116 1.614c.004.017.018.029.035.029.016 0 .03-.012.034-.029l.13-1.614-.13-1.612c-.004-.017-.018-.029-.034-.029zm1.009.029c-.013 0-.024.009-.027.022l-.105 1.583.105 1.585c.003.013.014.022.027.022.012 0 .023-.009.026-.022l.119-1.585-.119-1.583c-.003-.013-.014-.022-.026-.022zm.983.022c-.009 0-.017.006-.019.015l-.094 1.561.094 1.563c.002.009.01.015.019.015.008 0 .016-.006.018-.015l.108-1.563-.108-1.561c-.002-.009-.01-.015-.018-.015zm.956.015c-.005 0-.009.003-.01.008l-.083 1.546.083 1.548c.001.005.005.008.01.008.004 0 .008-.003.009-.008l.097-1.548-.097-1.546c-.001-.005-.005-.008-.009-.008zm.929.008c-.001 0-.002 0-.002.001l-.072 1.537.072 1.539c0 .001.001.001.002.001s.001 0 .002-.001l.086-1.539-.086-1.537c-.001-.001-.001-.001-.002-.001zm8.786 5.018c1.155 0 2.09-.935 2.09-2.09v-6.817c0-1.155-.935-2.09-2.09-2.09H8.979c-.034.628-.264 1.194-.681 1.612.681.418 1.155 1.155 1.155 2.019v5.276c0 1.155.935 2.09 2.09 2.09h10.444z"/>
    </svg>
  ),
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-blue-400 mb-2"
            >
              {personalInfo.name}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-400"
            >
              {personalInfo.title}
            </motion.p>
          </div>

          {/* Center Section - Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {iconMap[link.icon as keyof typeof iconMap]}
              </motion.a>
            ))}
          </motion.div>

          {/* Right Section */}
          <div className="text-center md:text-right">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              onClick={scrollToTop}
              className="inline-flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              <span className="mr-2">Back to top</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
