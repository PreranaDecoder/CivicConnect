import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = {
    about: [
      { name: 'About Us', href: '#' },
      { name: 'Our Mission', href: '#' },
      { name: 'Team', href: '#' },
      { name: 'Careers', href: '#' },
    ],
    resources: [
      { name: 'Documentation', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Support', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Data Protection', href: '#' },
    ],
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                CivicConnect
              </span>
            </Link>
            <p className="text-gray-400">
              Empowering communities through digital engagement and
              collaboration.
            </p>
            <div className="flex space-x-4">
              {[FaGithub, FaTwitter, FaLinkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-lg font-semibold mb-4 capitalize">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 CivicConnect. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-sm text-gray-400 mt-4 md:mt-0">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <FaHeart className="text-red-500 h-4 w-4" />
              </motion.div>
              <span>for the community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;