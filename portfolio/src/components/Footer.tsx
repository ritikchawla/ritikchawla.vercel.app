import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FiGithub size={18} />, url: 'https://github.com/ritikchawla', label: 'GitHub' },
    { icon: <FiLinkedin size={18} />, url: 'https://linkedin.com/in/ritikchawla', label: 'LinkedIn' },
    { icon: <FiTwitter size={18} />, url: 'https://x.com/ritikchawla_', label: 'Twitter' },
    { icon: <FiMail size={18} />, url: 'mailto:chawlaritik@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="py-10 bg-gradient-to-b from-transparent to-gray-50/50 dark:to-gray-900/50">
      <div className="container mx-auto px-4">
        {/* Divider */}
        <div className="section-divider mb-10" />

        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="text-2xl font-bold mb-6">
            <span className="gradient-text">Ritik Chawla</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gradient-to-br hover:from-indigo-500 hover:to-purple-500 hover:text-white transition-all"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 dark:text-gray-600 text-sm">
              © {currentYear} Ritik Chawla. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
