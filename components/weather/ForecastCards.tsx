'use client';

import { motion } from 'framer-motion';
import { getWeatherIcon } from '@/lib/weather/utils';

export default function ForecastCards({ data }: { data: any[] }) {
  if (!data || data.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
    >
      {data.slice(0, 5).map((day, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -10, boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)' }}
          className="glass-dark p-6 rounded-xl border border-white/10 hover:border-cyan-500/50 transition text-center cursor-pointer"
        >
          <p className="text-gray-400 text-sm mb-4">
            {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
          </p>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-4xl mb-4"
          >
            {getWeatherIcon(day.icon)}
          </motion.div>
          <p className="text-gray-400 text-xs capitalize mb-3">{day.description}</p>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-500">High</p>
              <p className="text-xl font-bold text-cyan-400">{Math.round(day.max_temp)}°</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Low</p>
              <p className="text-xl font-bold text-blue-400">{Math.round(day.min_temp)}°</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3">💧 {day.humidity}%</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
