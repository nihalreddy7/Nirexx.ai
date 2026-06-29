'use client';

import { motion } from 'framer-motion';

const AdaptiveTraining = () => {
  const phases = [
    { phase: 1, title: 'Assessment', description: 'AI analyzes your current fitness level and goals' },
    { phase: 2, title: 'Planning', description: 'Creates personalized training program' },
    { phase: 3, title: 'Execution', description: 'Real-time coaching during workouts' },
    { phase: 4, title: 'Adaptation', description: 'AI adjusts based on your performance' },
  ];

  return (
    <section className="relative py-20 px-4 bg-primary overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Adaptive Training</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            AI learns from every workout and continuously optimizes your training.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {phases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/50 cursor-pointer"
              >
                {item.phase}
              </motion.div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdaptiveTraining;
