'use client';

import { motion } from 'framer-motion';
import { getWeatherIcon } from '@/lib/weather/utils';

export default function CurrentWeather({ data }: { data: any }) {
  if (!data) return null;

  const {
    temp,
    feels_like,
    humidity,
    pressure,
    wind_speed,
    uvi,
    visibility,
    description,
    icon,
  } = data;

  const details = [
    { label: 'Feels Like', value: `${Math.round(feels_like)}°`, icon: '🌡️' },
    { label: 'Humidity', value: `${humidity}%`, icon: '💧' },
    { label: 'Wind Speed', value: `${Math.round(wind_speed)} m/s`, icon: '💨' },
    { label: 'Pressure', value: `${pressure} hPa`, icon: '📊' },
    { label: 'UV Index', value: `${Math.round(uvi)}`, icon: '☀️' },
    { label: 'Visibility', value: `${(visibility / 1000).toFixed(1)} km`, icon: '👁️' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-dark p-8 rounded-2xl border border-white/10 overflow-hidden"
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left - Main Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-8xl mb-4"
          >
            {getWeatherIcon(icon)}
          </motion.div>
          <h2 className="text-5xl font-bold text-white mb-2">
            {Math.round(temp)}°C
          </h2>
          <p className="text-2xl text-cyan-400 mb-4 capitalize">{description}</p>
          <p className="text-gray-400">
            Last updated: {new Date().toLocaleTimeString()}
          </p>
        </motion.div>

        {/* Right - Details Grid */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          {details.map((detail, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              whileHover={{ y: -5 }}
              className="glass-bg p-4 rounded-lg border border-white/10 hover:border-cyan-500/50 transition"
            >
              <p className="text-gray-400 text-sm mb-2">{detail.label}</p>
              <p className="text-2xl font-bold text-white flex items-center gap-2">
                {detail.icon} {detail.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
