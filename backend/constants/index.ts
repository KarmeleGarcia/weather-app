// API externa
export const OPEN_METEO_BASE_URL = 'https://api.open-meteo.com/v1';

// Valores por defecto
export const DEFAULT_UNITS = 'metric';
export const DEFAULT_FORECAST_DAYS = 7;

// Mapeo de unidades
export const UNIT_MAP = {
  metric: { temp: 'celsius', wind: 'kmh', precip: 'mm' },
  imperial: { temp: 'fahrenheit', wind: 'mph', precip: 'in' },
} as const;

// Parámetros de la API (campos a solicitar)
export const CURRENT_FIELDS = [
  'temperature_2m',
  'apparent_temperature',
  'relative_humidity_2m',
  'wind_speed_10m',
  'precipitation',
  'weather_code',
  'is_day',
] as const;

export const HOURLY_FIELDS = ['temperature_2m', 'weather_code'] as const;
export const DAILY_FIELDS = [
  'weather_code',
  'temperature_2m_max',
  'temperature_2m_min',
] as const;

// Configuración de red
export const API_TIMEOUT_MS = 10000;
export const MAX_RETRIES = 3;
