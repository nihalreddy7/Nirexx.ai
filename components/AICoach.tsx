'use client';

import { motion } from 'framer-motion';

const AICoach = () => {
  const features = [
    {
      title: 'Real-Time Coaching',
      description: 'AI analyzes your form and provides instant feedback during workouts.',
      icon: '⚡',
    },
    {
      title: 'Personalized Plans',
      description: 'Dynamic training routines that adapt to your performance and goals.',
      icon: '🎯',
    },
    {
      title: 'Recovery Optimization',
      description: 'Intelligent rest periods and recovery strategies for peak performance.',
      icon: '🔄',
    },
    {
      title: 'Mental Coaching',
      description: 'AI guides you through mental preparation and stress management.',
      icon: '🧠',
    },
  ];

  return (
    <section id="features" className="relative py-20 px-4 bg-secondary overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">AI Personal Coach</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Your dedicated AI coach that learns from every workout and adapts to your unique physiology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)' }}
              className="glass-dark p-6 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition cursor-pointer"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AICoach;
