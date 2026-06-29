'use client';

import { motion } from 'framer-motion';

const Technology = () => {
  const steps = [
    { title: 'Sensors', description: 'Advanced biometric sensors' },
    { title: 'AI Engine', description: 'Machine learning algorithms' },
    { title: 'Cloud Intelligence', description: 'Real-time data processing' },
    { title: 'Personalization', description: 'Custom recommendations' },
    { title: 'Learning', description: 'Continuous improvement' },
  ];

  return (
    <section id="tech" className="relative py-20 px-4 bg-secondary overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Technology Stack</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Cutting-edge technology powering next-generation athletic intelligence.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex-1 text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="glass-dark p-6 rounded-xl border border-white/10 hover:border-cyan-500/50 transition h-full"
              >
                <div className="text-3xl mb-3">⚙️</div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.description}</p>
              </motion.div>
              {i < steps.length - 1 && (
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="hidden md:block text-cyan-400 text-2xl mx-2"
                >
                  →
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
