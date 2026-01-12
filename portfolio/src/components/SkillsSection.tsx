import React from 'react';
import { motion } from 'framer-motion';

interface SkillCategory {
  name: string;
  skills: string[];
  color: string;
  bgColor: string;
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['Golang', 'Python', 'C++', 'SQL'],
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'from-indigo-500/10 to-blue-500/10'
  },
  {
    name: 'Backend & Systems',
    skills: ['Microservices', 'gRPC', 'REST APIs', 'Event-Driven Architecture', 'Distributed Systems'],
    color: 'from-purple-500 to-pink-500',
    bgColor: 'from-purple-500/10 to-pink-500/10'
  },
  {
    name: 'Infrastructure',
    skills: ['Kubernetes', 'Docker', 'Terraform', 'AWS', 'GCP'],
    color: 'from-orange-500 to-red-500',
    bgColor: 'from-orange-500/10 to-red-500/10'
  },
  {
    name: 'Data & Tools',
    skills: ['PostgreSQL', 'Redis', 'Kafka', 'Elasticsearch'],
    color: 'from-green-500 to-teal-500',
    bgColor: 'from-green-500/10 to-teal-500/10'
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Animated Background */}
      <div className="animated-gradient-bg opacity-30" />

      {/* Floating Shapes */}
      <motion.div
        className="absolute top-1/4 -right-20 w-80 h-80 border border-indigo-100 dark:border-indigo-900/50 rounded-full opacity-30"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/4 -left-20 w-60 h-60 border border-purple-100 dark:border-purple-900/50 rounded-full opacity-30"
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
            The tools I use to build and understand systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="glass-card p-8 relative overflow-hidden"
              initial={{ opacity: 0, y: 50, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Background Gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-0`}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <motion.div
                  className={`w-1.5 h-10 rounded-full bg-gradient-to-b ${category.color}`}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                  style={{ transformOrigin: 'top' }}
                />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {category.name}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1 + i * 0.08,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                      boxShadow: '0 10px 20px rgba(99, 102, 241, 0.2)'
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.p
            className="text-gray-500 dark:text-gray-500 text-sm"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Currently exploring: Machine Learning, Rust, and understanding how things work at a deeper level.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
