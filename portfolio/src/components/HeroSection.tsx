import React, { useEffect, useState } from 'react';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

const roles = ["Software Engineer", "Systems Builder", "Curious Mind", "Lifelong Learner"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16">
      {/* Simple Gradient Background */}
      <div className="animated-gradient-bg" />

      {/* Simple Decorative Circles */}
      <div className="absolute top-20 -left-32 w-64 h-64 rounded-full bg-indigo-500/10 dark:bg-indigo-500/5" />
      <div className="absolute bottom-20 -right-32 w-80 h-80 rounded-full bg-purple-500/10 dark:bg-purple-500/5" />
      <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-pink-500/5 dark:bg-pink-500/3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="text-lg font-medium text-indigo-500 dark:text-indigo-400 mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-5 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="gradient-text">Ritik Chawla</span>
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-5 h-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="font-serif italic">{displayText}</span>
              <span className="text-indigo-500 animate-pulse">|</span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 mb-3 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              From a shy, introverted kid who found solace in books and computers,
              to an engineer building distributed systems at scale.
            </motion.p>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              I build systems, explore philosophy, and never stop learning.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn-primary cursor-pointer"
              >
                Let&apos;s Connect
              </ScrollLink>
              <a
                href="/Ritik_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View Resume
              </a>
            </motion.div>

            <motion.div
              className="flex gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[
                { icon: FiGithub, href: "https://github.com/ritikchawla", label: "GitHub" },
                { icon: FiLinkedin, href: "https://linkedin.com/in/ritikchawla", label: "LinkedIn" },
                { icon: FiMail, href: "mailto:chawlaritik@gmail.com", label: "Email" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-indigo-500 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="profile-image-container">
              <div className="absolute inset-1 rounded-full overflow-hidden z-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/pic.jpg"
                  alt="Ritik Chawla"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <ScrollLink
            to="story"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex flex-col items-center cursor-pointer group"
          >
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-2 group-hover:text-indigo-500 transition-colors">
              Discover My Story
            </span>
            <FiArrowDown className="text-indigo-500 animate-bounce" size={20} />
          </ScrollLink>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
