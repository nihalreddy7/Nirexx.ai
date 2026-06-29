'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LocationSearchProps {
  onLocationSelect: (city: string) => void;
}

export default function LocationSearch({ onLocationSelect }: LocationSearchProps) {
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const popularCities = [
    'New York',
    'London',
    'Tokyo',
    'Paris',
    'Sydney',
    'Dubai',
    'Singapore',
    'Mumbai',
  ];

  useEffect(() => {
    if (search.length > 0) {
      const filtered = popularCities.filter((city) =>
        city.toLowerCase().includes(search.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [search]);

  const handleSelect = (city: string) => {
    setSearch('');
    setSuggestions([]);
    setShowSuggestions(false);
    onLocationSelect(city);
  };

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        // In a real app, you'd reverse geocode to get city name
        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
          .then((res) => res.json())
          .then((data) => {
            const city = data.address?.city || data.address?.town || 'Current Location';
            handleSelect(city);
          })
          .catch(() => handleSelect('New York')); // Fallback
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative"
    >
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            placeholder="Search for a city..."
            className="w-full px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition"
          />
          {showSuggestions && suggestions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-full left-0 right-0 mt-2 glass-dark rounded-lg border border-white/10 overflow-hidden z-10"
            >
              {suggestions.map((city) => (
                <motion.button
                  key={city}
                  whileHover={{ backgroundColor: 'rgba(0, 212, 255, 0.1)' }}
                  onClick={() => handleSelect(city)}
                  className="w-full px-6 py-3 text-left text-white hover:bg-cyan-500/10 transition border-b border-white/5 last:border-b-0"
                >
                  📍 {city}
                </motion.button>
              ))}
            </motion.div>
          )}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCurrentLocation}
          className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/50 transition"
        >
          📍 Current
        </motion.button>
      </div>
    </motion.div>
  );
}
