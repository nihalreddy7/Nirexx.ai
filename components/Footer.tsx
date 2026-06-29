'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  const links = [
    { category: 'Product', items: ['Features', 'Technology', 'Roadmap'] },
    { category: 'Company', items: ['About', 'Press', 'Careers'] },
    { category: 'Legal', items: ['Privacy', 'Terms', 'Contact'] },
    { category: 'Social', items: ['Twitter', 'Instagram', 'LinkedIn'] },
  ];

  return (
    <footer className="relative py-16 px-4 bg-primary border-t border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">N</span>
              </div>
              <span className="text-xl font-bold gradient-text">Nirexx.AI</span>
            </div>
            <p className="text-gray-400 text-sm">
              The future of personal athletic intelligence.
            </p>
          </motion.div>

          {/* Links */}
          {links.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (i + 1) * 0.1 }}
            >
              <h4 className="font-bold text-white mb-4">{group.category}</h4>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm"
        >
          <p>&copy; 2026 Nirexx.AI. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
