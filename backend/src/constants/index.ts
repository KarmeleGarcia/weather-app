// Open Meteo API

export const OPEN_METEO_BASE_URL = 'https://api.open-meteo.com/v1';

// Default values
export const DEFAULT_UNITS = 'metric';
export const DEFAULT_FORECAST_DAYS = 7;

// Units mapping
export const UNITS_METRIC = 'metric';
export const UNITS_IMPERIAL = 'imperial';

export const UNITS_MAP = {
  metric: { name: 'celsius', wind: 'kmh', precip: 'mm' },
  imperial: { name: 'fahrenheit', wind: 'mph', precip: 'in' },
} as const;

export type UnitSystem = keyof typeof UNITS_MAP; // 'metric' | 'imperial'

// API params (fields to ask for)
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

// Network config
export const API_TIMEOUT_MS = 10000;
export const MAX_RETRIES = 3;

//Error messages
export const ERROR_UNITS = 'Units must be "metric" or "imperial"'
