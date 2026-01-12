import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Check localStorage and system preference
    const stored = localStorage.getItem('theme');
    if (stored) {
      setIsDark(stored === 'dark');
      if (stored === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', section: 'hero' },
    { name: 'Story', section: 'story' },
    { name: 'Experience', section: 'experience' },
    { name: 'Skills', section: 'skills' },
    { name: 'Projects', section: 'projects' },
    { name: 'Contact', section: 'contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
        ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl shadow-lg shadow-gray-200/20 dark:shadow-gray-900/30'
        : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold">
            <span className="gradient-text">RC</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.section}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link cursor-pointer text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors font-medium"
                activeClass="text-indigo-500 dark:text-indigo-400"
              >
                {link.name}
              </ScrollLink>
            ))}

            {/* Dark Mode Toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
              </button>
            )}

            <a
              href="/Ritik_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !py-2 !px-4 text-sm"
            >
              Resume
            </a>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            {/* Dark Mode Toggle (Mobile) */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                aria-label="Toggle dark mode"
              >
                {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
              </button>
            )}

            <button
              className="text-gray-700 dark:text-gray-300 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out`}
      >
        <div className="absolute top-4 right-4">
          <button
            onClick={toggleMenu}
            className="text-gray-700 dark:text-gray-300 p-2"
            aria-label="Close menu"
          >
            <FiX size={28} />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.section}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-2xl font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
              onClick={toggleMenu}
            >
              {link.name}
            </ScrollLink>
          ))}
          <a
            href="/Ritik_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            onClick={toggleMenu}
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
