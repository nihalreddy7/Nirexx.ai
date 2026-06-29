'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CurrentWeather from './CurrentWeather';
import ForecastCards from './ForecastCards';
import HourlyForecast from './HourlyForecast';
import WeatherAlerts from './WeatherAlerts';
import { fetchWeatherData } from '@/lib/weather/api';

interface WeatherData {
  current: any;
  forecast: any[];
  hourly: any[];
  alerts: any[];
}

export default function WeatherDashboard({ city }: { city: string }) {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadWeather = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchWeatherData(city);
        setWeatherData(data);
      } catch (err) {
        setError('Failed to fetch weather data. Please try again.');
        console.error('Weather fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    loadWeather();
  }, [city]);

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center h-96"
      >
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading weather data...</p>
        </div>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-dark p-8 rounded-2xl border border-red-500/30 text-center"
      >
        <p className="text-red-400">{error}</p>
      </motion.div>
    );
  }

  if (!weatherData) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ staggerChildren: 0.1 }}
      className="space-y-8"
    >
      {/* Weather Alerts */}
      {weatherData.alerts && weatherData.alerts.length > 0 && (
        <WeatherAlerts alerts={weatherData.alerts} />
      )}

      {/* Current Weather */}
      <CurrentWeather data={weatherData.current} />

      {/* Hourly Forecast */}
      <HourlyForecast data={weatherData.hourly} />

      {/* 5-Day Forecast */}
      <div>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-white mb-6"
        >
          5-Day Forecast
        </motion.h2>
        <ForecastCards data={weatherData.forecast} />
      </div>
    </motion.div>
  );
}
