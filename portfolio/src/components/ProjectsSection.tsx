import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: 'completed' | 'in-progress' | 'planned';
  icon: string;
}

const projects: Project[] = [
  {
    title: 'MiniDB: SQL Database Engine',
    description: 'A SQL database built from scratch',
    longDescription: 'A complete SQL database implementation featuring a B+ tree storage engine for efficient range queries and O(log n) lookups. Includes a SQL parser supporting CRUD operations with WHERE clauses and JOINs, plus MVCC-based transactions with snapshot isolation.',
    technologies: ['Golang', 'B+ Tree', 'SQL Parser', 'MVCC', 'WAL'],
    githubUrl: 'https://github.com/ritikchawla/minidb',
    status: 'in-progress',
    icon: '🗄️'
  },
  {
    title: 'DNS Server from Scratch',
    description: 'A recursive DNS resolver implementing RFC 1035',
    longDescription: 'Built a recursive DNS resolver that implements the DNS protocol from the ground up. Features iterative resolution starting from root nameservers, response caching with TTL-based expiration, and concurrent query handling.',
    technologies: ['Golang', 'RFC 1035', 'UDP', 'Caching', 'Concurrency'],
    githubUrl: 'https://github.com/ritikchawla/dns-server',
    status: 'in-progress',
    icon: '🌐'
  },
  {
    title: 'Kubernetes Secrets Controller',
    description: 'K8s controller that syncs secrets from HashiCorp Vault',
    longDescription: 'A Kubernetes controller that automatically syncs secrets from HashiCorp Vault to Kubernetes Secrets. Features custom CRD with reconciliation loop, secret rotation, and automatic workload restarts.',
    technologies: ['Golang', 'Kubernetes', 'Vault', 'CRD'],
    githubUrl: 'https://github.com/ritikchawla/kube-secrets-sync',
    status: 'planned',
    icon: '🔐'
  }
];

const statusColors = {
  'completed': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800',
  'in-progress': 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800',
  'planned': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800'
};

const statusLabels = {
  'completed': '✓ Completed',
  'in-progress': '🔨 Building Now',
  'planned': '📋 Coming Soon'
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Animated Background */}
      <div className="animated-gradient-bg opacity-30" />

      {/* Floating Code Symbols */}
      <motion.div
        className="absolute top-20 left-10 text-6xl opacity-10 dark:opacity-5"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        {'</>'}
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-6xl opacity-10 dark:opacity-5"
        animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        {'{ }'}
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
            Systems I&apos;m building to understand how things really work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-card overflow-hidden group relative"
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ y: -12 }}
            >
              {/* Animated Gradient Top Bar */}
              <motion.div
                className="h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                style={{ transformOrigin: 'left' }}
              />

              <div className="p-6">
                {/* Icon & Header */}
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    className="text-4xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.icon}
                  </motion.div>
                  <motion.span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[project.status]}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.4 }}
                  >
                    {statusLabels[project.status]}
                  </motion.span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 gradient-underline inline-block">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-sm">
                  {project.longDescription}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <motion.span
                      key={i}
                      className="skill-tag text-xs"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 + 0.5 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all font-medium text-sm group/link"
                    whileHover={{ x: 5 }}
                  >
                    <FiGithub size={16} />
                    <span className="gradient-underline">View Source</span>
                    <motion.span
                      initial={{ x: 0, opacity: 0 }}
                      whileHover={{ x: 5, opacity: 1 }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                )}
              </div>

              {/* Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-purple-500/0 to-pink-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Check out my GitHub for more experiments and contributions.
          </p>
          <motion.a
            href="https://github.com/ritikchawla"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub size={20} />
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
