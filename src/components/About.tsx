"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const skillCategories = {
  frontend: "Frontend",
  backend: "Backend", 
  tools: "Tools",
  design: "Design",
};

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6">
              Passionate About Creating Exceptional User Experiences
            </h3>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I&apos;m a frontend developer with a strong focus on building user-centric applications 
              using modern web technologies. My experience at New Relic has given me deep insights 
              into creating scalable, maintainable applications that serve thousands of users.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I love the intersection of design and code – turning complex problems into simple, 
              intuitive interfaces. When I&apos;m not coding, you&apos;ll find me exploring new technologies, 
              contributing to open source projects, or creating music.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-lg">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">React & TypeScript</span>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 px-4 py-2 rounded-lg">
                <span className="text-purple-600 dark:text-purple-400 font-semibold">Micro-frontends</span>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-lg">
                <span className="text-green-600 dark:text-green-400 font-semibold">Performance Optimization</span>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Skills & Technologies
            </h3>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {Object.entries(skillCategories).map(([key, categoryName]) => {
                const categorySkills = skills.filter(skill => skill.category === key);
                
                if (categorySkills.length === 0) return null;

                return (
                  <motion.div key={key} variants={item} className="space-y-3">
                    <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                      {categoryName}
                    </h4>
                    <div className="space-y-3">
                      {categorySkills.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                              {skill.name}
                            </span>
                            <span className="text-gray-500 dark:text-gray-400 text-sm">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <motion.div
                              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1.5, delay: 0.2 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
