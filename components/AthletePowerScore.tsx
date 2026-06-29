'use client';

import { motion } from 'framer-motion';

const AthletePowerScore = () => {
  return (
    <section className="relative py-20 px-4 bg-secondary overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Athlete Power Score</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              A comprehensive metric that measures your physical and mental readiness, combining science-backed algorithms with AI insights.
            </p>
            <ul className="space-y-4">
              {[
                'Real-time performance metrics',
                'Predictive energy levels',
                'Injury risk assessment',
                'Optimal workout timing',
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-white"
                >
                  <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-80 flex items-center justify-center"
          >
            <div className="relative w-64 h-64">
              <svg className="w-full h-full" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(0, 212, 255, 0.1)" strokeWidth="2" />
                <circle cx="100" cy="100" r="75" fill="none" stroke="rgba(0, 212, 255, 0.2)" strokeWidth="1" />
                <circle cx="100" cy="100" r="50" fill="none" stroke="rgba(0, 212, 255, 0.3)" strokeWidth="1" />
              </svg>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <div className="text-5xl font-bold gradient-text">87</div>
                <div className="text-sm text-gray-400 mt-2">Power Score</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AthletePowerScore;
