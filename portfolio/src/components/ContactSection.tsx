import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiSend, FiCheck } from 'react-icons/fi';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Animated Background */}
      <div className="animated-gradient-bg opacity-40" />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-3 h-3 bg-indigo-400 rounded-full opacity-60"
        animate={{ y: [0, -30, 0], scale: [1, 1.5, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-4 h-4 bg-purple-400 rounded-full opacity-50"
        animate={{ y: [0, -25, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
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
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
            Looking for Software Engineering opportunities. Open to interesting conversations about
            systems, philosophy, or anything that makes you think.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="glass-card p-8"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">
                Get in Touch
              </h3>

              <div className="space-y-6">
                <motion.a
                  href="mailto:chawlaritik@gmail.com"
                  className="flex items-center gap-4 text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors group"
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <FiMail className="text-white" size={20} />
                  </motion.div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-500">Email</p>
                    <p className="font-medium gradient-underline">chawlaritik@gmail.com</p>
                  </div>
                </motion.a>

                <motion.div
                  className="flex items-center gap-4 text-gray-600 dark:text-gray-400"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <FiMapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-500">Location</p>
                    <p className="font-medium">New Delhi, India</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">Connect on socials</p>
                <div className="flex gap-4">
                  {[
                    { icon: FiGithub, href: "https://github.com/ritikchawla", label: "GitHub" },
                    { icon: FiLinkedin, href: "https://linkedin.com/in/ritikchawla", label: "LinkedIn" },
                    { icon: FiTwitter, href: "https://x.com/ritikchawla_", label: "Twitter" }
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400"
                      aria-label={social.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      whileHover={{
                        scale: 1.1,
                        y: -5,
                        background: 'linear-gradient(135deg, rgb(99, 102, 241), rgb(168, 85, 247))',
                        color: '#fff'
                      }}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="glass-card p-8 flex flex-col justify-between relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              {/* Animated Background Shapes */}
              <motion.div
                className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  Open to Opportunities
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  I&apos;m looking for <span className="text-indigo-500 font-medium">Software Engineering</span> roles
                  where I can work on challenging problems and make an impact.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    'Open to relocation',
                    'Available for full-time roles',
                    'Remote-friendly'
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 text-gray-600 dark:text-gray-400"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                    >
                      <motion.span
                        className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                      >
                        <FiCheck className="text-white" size={12} />
                      </motion.span>
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.a
                href="mailto:chawlaritik@gmail.com?subject=Let's Connect - Job Opportunity"
                className="btn-primary inline-flex items-center justify-center gap-2 w-full relative z-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiSend size={18} />
                Send me a message
              </motion.a>
            </motion.div>
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-16 text-center"
          >
            <motion.p
              className="text-xl text-gray-500 dark:text-gray-500 font-serif italic max-w-2xl mx-auto"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              &ldquo;Work is love made visible.&rdquo;
            </motion.p>
            <motion.p
              className="text-indigo-500 dark:text-indigo-400 mt-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              - Khalil Gibran
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
