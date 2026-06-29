'use client';

import { useState, useEffect } from 'react';
import WeatherDashboard from '@/components/weather/WeatherDashboard';
import LocationSearch from '@/components/weather/LocationSearch';
import { motion } from 'framer-motion';

export default function WeatherPage() {
  const [city, setCity] = useState<string>('New York');
  const [loading, setLoading] = useState(false);

  const handleLocationSelect = (newCity: string) => {
    setCity(newCity);
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-primary via-secondary to-primary pt-24 pb-12 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Weather Dashboard</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Real-time weather updates and forecasts powered by AI insights
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <LocationSearch onLocationSelect={handleLocationSelect} />
        </motion.div>

        {loading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center h-96"
          >
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4" />
              <p className="text-gray-400">Fetching weather data...</p>
            </div>
          </motion.div>
        ) : (
          <WeatherDashboard city={city} />
        )}
      </div>
    </motion.main>
  );
}
