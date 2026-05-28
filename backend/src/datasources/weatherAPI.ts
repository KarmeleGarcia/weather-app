import axios from 'axios';
import { OpenMeteoResponse } from '../types/index.js';

const BASE_URL =
  process.env.WEATHER_API_BASE_URL || 'https://api.open-meteo.com/v1';

export async function fetchWeatherData(
  latitude: number,
  longitude: number,
  units: string
) {
  // Determinar unidades según el parámetro
  const temperatureUnit = units === 'metric' ? 'celsius' : 'fahrenheit';
  const windSpeedUnit = units === 'metric' ? 'kmh' : 'mph';

  const url = `${BASE_URL}/forecast`;
  const params = {
    latitude,
    longitude,
    current:
      'temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,precipitation,weather_code,is_day',
    hourly: 'temperature_2m,weather_code',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min',
    timezone: 'auto',
    temperature_unit: temperatureUnit,
    wind_speed_unit: windSpeedUnit,
    forecast_days: 7,
  };

  const response = await axios.get<OpenMeteoResponse>(url, { params });
  return response.data;
}
