import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiExternalLink, FiAward } from 'react-icons/fi';

interface ExperienceItem {
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  team?: string;
  description: string[];
  highlight?: string;
}

const experiences: ExperienceItem[] = [
  {
    title: 'Software Engineer 2',
    company: 'GoTo Group (Gojek)',
    companyUrl: 'https://www.gotocompany.com/',
    location: 'Gurugram, India',
    period: 'Aug 2024 - Present',
    team: 'Engineering Platform',
    highlight: '✈️ Flew to Jakarta to deliver DevOps bootcamp to 20+ engineers',
    description: [
      'Built automated SSL certificate management service handling 500+ certificates, reducing manual effort by 90%',
      'Developed Internal Developer Portal serving 200+ engineers with service discovery and documentation',
      'Implemented HashiCorp Vault integrations for secrets management across 50+ services',
      'Built AI-powered chatbots for documentation search and anomaly detection',
      'Led migration of 15+ services from GCP to Tencent Cloud with zero-downtime'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'MAQ Software',
    companyUrl: 'https://maqsoftware.com/',
    location: 'Noida, India',
    period: 'Jul 2022 - Aug 2024',
    description: [
      'Built data ingestion pipelines processing 500K+ records daily from REST/GraphQL APIs',
      'Implemented Redis caching layer reducing API response time by 70%',
      'Designed ETL workflows using Databricks and PySpark, cutting processing time by 50%'
    ]
  },
  {
    title: 'Tech Team Lead',
    company: 'QIndia',
    companyUrl: 'https://qworld.net/qindia/',
    location: 'Remote (Volunteer)',
    period: 'Mar 2022 - Jun 2022',
    highlight: '🎓 Led tech team for 300+ attendee quantum computing workshop',
    description: [
      'Led the tech team for QBronze85 quantum computing workshop',
      'Built automated diploma generation system used across QWorld network'
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 to-white dark:from-gray-900/80 dark:to-gray-950 -z-10" />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-40 right-20 w-40 h-40 border border-indigo-100 dark:border-indigo-900 rounded-full opacity-50"
        animate={{ scale: [1, 1.1, 1], rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
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
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
            Building systems, learning constantly, and growing along the way.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Animated Timeline Line */}
            <motion.div
              className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-orange-500"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ transformOrigin: 'top' }}
            />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="mb-12 relative pl-12 md:pl-20"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
              >
                {/* Animated Timeline Dot */}
                <motion.div
                  className="absolute left-2 md:left-6 w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3, type: "spring" }}
                  style={{ boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)' }}
                />

                <motion.div
                  className="glass-card p-6 md:p-8"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <motion.h3
                        className="text-2xl font-bold text-gray-800 dark:text-white mb-1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.4 }}
                      >
                        {exp.title}
                      </motion.h3>
                      <motion.a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-semibold text-indigo-500 hover:text-indigo-600 transition-colors inline-flex items-center gap-1 gradient-underline"
                        whileHover={{ x: 5 }}
                      >
                        {exp.company}
                        <FiExternalLink size={16} />
                      </motion.a>
                      {exp.team && (
                        <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">{exp.team}</p>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-4 mt-3 md:mt-0">
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <FiCalendar className="mr-2" size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <FiMapPin className="mr-2" size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlight Badge */}
                  {exp.highlight && (
                    <motion.div
                      className="mb-4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
                    >
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium">
                        <FiAward size={14} />
                        {exp.highlight}
                      </span>
                    </motion.div>
                  )}

                  {/* Description */}
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start text-gray-600 dark:text-gray-400"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.1 + 0.5 }}
                      >
                        <motion.span
                          className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 mr-3 flex-shrink-0"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + i * 0.1 + 0.6 }}
                        />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
