'use client';

import { motion } from 'framer-motion';

const Roadmap = () => {
  const roadmapItems = [
    {
      phase: 'Phase 1',
      title: 'AI Athlete Twin',
      description: 'Your digital clone for predictive analytics',
      status: 'In Progress',
    },
    {
      phase: 'Phase 2',
      title: 'Injury Prediction',
      description: 'AI predicts injuries before they happen',
      status: 'Coming Soon',
    },
    {
      phase: 'Phase 3',
      title: 'Coach Dashboard',
      description: 'Coaches manage team performance in real-time',
      status: 'Coming Soon',
    },
    {
      phase: 'Phase 4',
      title: 'Global Community',
      description: 'Connect with athletes worldwide',
      status: 'Coming Soon',
    },
  ];

  return (
    <section id="roadmap" className="relative py-20 px-4 bg-primary overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The future of athletic intelligence unfolds in phases.
          </p>
        </motion.div>

        <div className="space-y-8">
          {roadmapItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`glass-dark p-8 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition ${i % 2 === 0 ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'} max-w-2xl`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap ${
                  item.status === 'In Progress'
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                    : 'bg-gray-500/20 text-gray-400 border border-gray-500/50'
                }`}>
                  {item.status}
                </span>
              </div>
              <span className="text-sm text-cyan-400 font-bold">{item.phase}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
