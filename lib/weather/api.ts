const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY || '6d8fb5b93d4af21d66a2948710284366';
const BASE_URL = 'https://api.openweathermap.org';

export async function fetchWeatherData(city: string) {
  try {
    // Get coordinates from city name
    const geoRes = await fetch(
      `${BASE_URL}/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
    );
    const geoData = await geoRes.json();

    if (!geoData || geoData.length === 0) {
      throw new Error('City not found');
    }

    const { lat, lon } = geoData[0];

    // Get weather data using coordinates
    const weatherRes = await fetch(
      `${BASE_URL}/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    );
    const weatherData = await weatherRes.json();

    if (!weatherData.current) {
      throw new Error('Weather data not available');
    }

    // Format current weather
    const current = {
      temp: weatherData.current.temp,
      feels_like: weatherData.current.feels_like,
      humidity: weatherData.current.humidity,
      pressure: weatherData.current.pressure,
      wind_speed: weatherData.current.wind_speed,
      uvi: weatherData.current.uvi,
      visibility: weatherData.current.visibility || 10000,
      description: weatherData.current.weather?.[0]?.description || 'No data',
      icon: weatherData.current.weather?.[0]?.icon || '01d',
    };

    // Format daily forecast
    const forecast = (weatherData.daily || []).map((day: any) => ({
      date: new Date(day.dt * 1000).toISOString().split('T')[0],
      max_temp: day.temp.max,
      min_temp: day.temp.min,
      humidity: day.humidity,
      description: day.weather?.[0]?.description || 'No data',
      icon: day.weather?.[0]?.icon || '01d',
    }));

    // Format hourly forecast
    const hourly = (weatherData.hourly || []).slice(0, 48).map((hour: any) => ({
      time: new Date(hour.dt * 1000).toISOString(),
      temp: hour.temp,
      humidity: hour.humidity,
      description: hour.weather?.[0]?.description || 'No data',
      icon: hour.weather?.[0]?.icon || '01d',
    }));

    // Format alerts
    const alerts = (weatherData.alerts || []).map((alert: any) => ({
      event: alert.event,
      start: alert.start,
      end: alert.end,
      description: alert.description,
    }));

    return {
      current,
      forecast,
      hourly,
      alerts,
    };
  } catch (error) {
    console.error('Weather API error:', error);
    throw error;
  }
}
