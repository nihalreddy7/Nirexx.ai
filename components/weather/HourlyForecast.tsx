'use client';

import { motion } from 'framer-motion';
import { getWeatherIcon } from '@/lib/weather/utils';

export default function HourlyForecast({ data }: { data: any[] }) {
  if (!data || data.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="glass-dark p-6 rounded-2xl border border-white/10"
    >
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl font-bold text-white mb-6"
      >
        Hourly Forecast
      </motion.h3>
      <div className="overflow-x-auto pb-4">
        <div className="flex gap-4 min-w-max">
          {data.slice(0, 24).map((hour, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ y: -5 }}
              className="glass-bg p-4 rounded-lg border border-white/10 hover:border-cyan-500/50 transition min-w-fit text-center"
            >
              <p className="text-gray-400 text-xs mb-2">
                {new Date(hour.time).toLocaleTimeString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-2xl mb-2"
              >
                {getWeatherIcon(hour.icon)}
              </motion.div>
              <p className="text-lg font-bold text-white">{Math.round(hour.temp)}°</p>
              <p className="text-xs text-gray-500 mt-1">💧 {hour.humidity}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
