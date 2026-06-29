'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden aurora-bg"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-block"
          >
            <div className="glass-bg px-4 py-2 rounded-full border border-cyan-500/50 inline-block">
              <span className="text-sm font-medium text-cyan-400">✨ The Future of Wearable AI</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="gradient-text">
              The Future of Personal
            </span>
            <br />
            <span className="text-white">Athletic Intelligence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Meet the world's smartest AI-powered wearable that transforms biometric data into real-time coaching, predictive insights, and elite performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-white transition hover:shadow-lg"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-bg rounded-full font-bold text-white hover:bg-white/10 transition border border-white/20"
            >
              ▶ Watch Demo
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
