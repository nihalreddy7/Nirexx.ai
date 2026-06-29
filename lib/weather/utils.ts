export function getWeatherIcon(iconCode: string): string {
  const iconMap: { [key: string]: string } = {
    '01d': '☀️',  // Clear sky day
    '01n': '🌙',  // Clear sky night
    '02d': '⛅',  // Few clouds day
    '02n': '☁️',  // Few clouds night
    '03d': '☁️',  // Scattered clouds day
    '03n': '☁️',  // Scattered clouds night
    '04d': '☁️',  // Broken clouds day
    '04n': '☁️',  // Broken clouds night
    '09d': '🌧️',  // Shower rain day
    '09n': '🌧️',  // Shower rain night
    '10d': '🌧️',  // Rain day
    '10n': '🌧️',  // Rain night
    '11d': '⛈️',  // Thunderstorm day
    '11n': '⛈️',  // Thunderstorm night
    '13d': '❄️',  // Snow day
    '13n': '❄️',  // Snow night
    '50d': '🌫️',  // Mist day
    '50n': '🌫️',  // Mist night
  };

  return iconMap[iconCode] || '🌤️';
}

export function getWeatherDescription(temp: number): string {
  if (temp > 30) return 'Very Hot';
  if (temp > 25) return 'Warm';
  if (temp > 15) return 'Pleasant';
  if (temp > 5) return 'Cool';
  return 'Cold';
}

export function getWeatherColor(description: string): string {
  const desc = description.toLowerCase();
  if (desc.includes('rain') || desc.includes('drizzle')) return 'from-blue-500 to-blue-600';
  if (desc.includes('cloud') || desc.includes('overcast')) return 'from-gray-500 to-gray-600';
  if (desc.includes('clear') || desc.includes('sunny')) return 'from-yellow-500 to-orange-500';
  if (desc.includes('snow')) return 'from-cyan-500 to-blue-500';
  if (desc.includes('thunder') || desc.includes('storm')) return 'from-purple-600 to-gray-700';
  return 'from-cyan-500 to-blue-600';
}
