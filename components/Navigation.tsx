'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'Technology', href: '#tech' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 w-full z-50 glass-dark border-b border-white/10 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Nirexx.AI
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ color: '#00d4ff' }}
                className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/50 transition"
          >
            Join Waitlist
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1"
          >
            <span className={`w-6 h-0.5 bg-white transition ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </motion.button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 border-t border-white/10"
          >
            {menuItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="block py-2 text-gray-300 hover:text-cyan-400 transition"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
