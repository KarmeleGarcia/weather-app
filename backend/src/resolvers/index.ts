import { fetchWeatherData } from '../datasources/weatherAPI.js';
import { WeatherArgs } from '../types/index.js';

export const resolvers = {
  Query: {
    getWeather: async (_: unknown, args: WeatherArgs) => {
      const { latitude, longitude, units } = args;

      // Obtener datos de la API externa
      const data = await fetchWeatherData(latitude, longitude, units);

      // Transformar datos de Open-Meteo a nuestro esquema GraphQL
      const current = {
        temperature: data.current.temperature_2m,
        feelsLike: data.current.apparent_temperature,
        humidity: data.current.relative_humidity_2m,
        windSpeed: data.current.wind_speed_10m,
        precipitation: data.current.precipitation,
        weatherCode: data.current.weather_code,
        isDay: data.current.is_day === 1,
      };

      // Pronóstico diario (7 días)
      const daily = data.daily.time.map((time, index) => ({
        date: time,
        maxTemp: data.daily.temperature_2m_max[index],
        minTemp: data.daily.temperature_2m_min[index],
        weatherCode: data.daily.weather_code[index],
      }));

      // Pronóstico por horas (primeras 24 horas para no sobrecargar)
      const hourly = data.hourly.time.slice(0, 24).map((time, index) => ({
        time,
        temperature: data.hourly.temperature_2m[index],
        weatherCode: data.hourly.weather_code[index],
      }));

      // Por ahora, usamos coordenadas como ubicación (después podríamos geocodificar)
      const location = `${latitude},${longitude}`;

      return {
        location,
        current,
        daily,
        hourly,
      };
    },
  },
};
