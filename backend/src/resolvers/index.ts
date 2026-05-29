import { fetchWeatherData } from '../datasources/weatherAPI.js';
import { WeatherArgs } from '../types/index.js';
import {
  UNITS_METRIC,
  UNITS_IMPERIAL,
  UnitSystem,
  ERROR_UNITS,
} from '../constants/index.js';

export const resolvers = {
  Query: {
    getWeather: async (_: unknown, args: WeatherArgs) => {
      const { latitude, longitude } = args;

      // Type validation and conversion
      const units = args.units as UnitSystem;
      if (units !== UNITS_METRIC && units !== UNITS_IMPERIAL) {
        throw new Error(ERROR_UNITS);
      }

      // Getting data from external API
      const data = await fetchWeatherData(latitude, longitude, units);

      // Converting data from external API to GraphQL squeme
      const current = {
        temperature: data.current.temperature_2m,
        feelsLike: data.current.apparent_temperature,
        humidity: data.current.relative_humidity_2m,
        windSpeed: data.current.wind_speed_10m,
        precipitation: data.current.precipitation,
        weatherCode: data.current.weather_code,
        isDay: data.current.is_day === 1,
      };

      // Daily forecast (7 days)
      const daily = data.daily.time.map((time, index) => ({
        date: time,
        maxTemp: data.daily.temperature_2m_max[index],
        minTemp: data.daily.temperature_2m_min[index],
        weatherCode: data.daily.weather_code[index],
      }));

      // Hourly forecast (first 24h)
      const hourly = data.hourly.time.slice(0, 24).map((time, index) => ({
        time,
        temperature: data.hourly.temperature_2m[index],
        weatherCode: data.hourly.weather_code[index],
      }));

      // By now, using coordenates as location (improvement: geodecode)
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
