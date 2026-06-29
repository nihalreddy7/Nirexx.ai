'use client';

import { motion } from 'framer-motion';

interface Alert {
  event: string;
  start: number;
  end: number;
  description: string;
}

export default function WeatherAlerts({ alerts }: { alerts: Alert[] }) {
  if (!alerts || alerts.length === 0) return null;

  const alertTypes: { [key: string]: { icon: string; color: string } } = {
    'Severe Thunderstorm': { icon: '⛈️', color: 'red' },
    'High Wind': { icon: '💨', color: 'orange' },
    'Extreme Heat': { icon: '🔥', color: 'red' },
    'Frost': { icon: '❄️', color: 'blue' },
    'Heavy Rain': { icon: '🌧️', color: 'blue' },
    'Snow': { icon: '❄️', color: 'cyan' },
    'Tornado': { icon: '🌪️', color: 'red' },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-4"
    >
      {alerts.map((alert, i) => {
        const alertInfo = alertTypes[alert.event] || { icon: '⚠️', color: 'yellow' };
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`glass-dark p-4 rounded-lg border-l-4 border-${alertInfo.color}-500/50 bg-${alertInfo.color}-500/10`}
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl">{alertInfo.icon}</span>
              <div className="flex-1">
                <h4 className="font-bold text-white mb-1">{alert.event}</h4>
                <p className="text-sm text-gray-400">{alert.description}</p>
                <p className="text-xs text-gray-500 mt-2">
                  {new Date(alert.start * 1000).toLocaleString()} -
                  {new Date(alert.end * 1000).toLocaleTimeString()}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
