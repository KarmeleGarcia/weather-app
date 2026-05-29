import axios from 'axios';
import { OpenMeteoResponse } from '../types/index.js';

import {
  OPEN_METEO_BASE_URL,
  UNITS_MAP,
  CURRENT_FIELDS,
  HOURLY_FIELDS,
  DAILY_FIELDS,
  DEFAULT_FORECAST_DAYS,
  UnitSystem,
} from '../constants/index.js';

export async function fetchWeatherData(
  latitude: number,
  longitude: number,
  units: UnitSystem
) {
  const url = `${OPEN_METEO_BASE_URL}/forecast`;
  const params = {
    latitude,
    longitude,
    current: CURRENT_FIELDS.join(','),
    hourly: HOURLY_FIELDS.join(','),
    daily: DAILY_FIELDS.join(','),
    temperature_unit: UNITS_MAP[units].name,
    wind_speed_unit: UNITS_MAP[units].wind,
    forecast_days: DEFAULT_FORECAST_DAYS,
  };

  const response = await axios.get<OpenMeteoResponse>(url, { params });
  return response.data;
}
