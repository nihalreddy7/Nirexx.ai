'use client';

import { motion } from 'framer-motion';

const HealthMonitor = () => {
  const metrics = [
    { name: 'Heart Rate', value: '72', unit: 'bpm', gradient: 'from-red-500 to-pink-500' },
    { name: 'Sleep', value: '8.2', unit: 'hrs', gradient: 'from-blue-500 to-purple-500' },
    { name: 'Stress', value: '32%', unit: 'level', gradient: 'from-yellow-500 to-orange-500' },
    { name: 'Recovery', value: '94%', unit: 'ready', gradient: 'from-green-500 to-emerald-500' },
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
            <span className="gradient-text">Smart Health Monitoring</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Advanced biometric sensors track 100+ health metrics in real-time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-dark p-8 rounded-2xl border border-white/10 text-center"
            >
              <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${metric.gradient} opacity-20 flex items-center justify-center`}>
                <div className="w-16 h-16 rounded-full border-2 border-white/30" />
              </div>
              <h3 className="text-gray-400 text-sm mb-2">{metric.name}</h3>
              <p className="text-3xl font-bold text-white mb-1">{metric.value}</p>
              <p className="text-xs text-gray-500">{metric.unit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthMonitor;
