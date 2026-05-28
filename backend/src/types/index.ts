export interface OpenMeteoCurrent {
  temperature_2m: number;
  apparent_temperature: number;
  relative_humidity_2m: number;
  wind_speed_10m: number;
  precipitation: number;
  weather_code: number;
  is_day: number;
}

export interface OpenMeteoDaily {
  time: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  weather_code: number[];
}

export interface OpenMeteoHourly {
  time: string[];
  temperature_2m: number[];
  weather_code: number[];
}

export interface OpenMeteoResponse {
  current: OpenMeteoCurrent;
  daily: OpenMeteoDaily;
  hourly: OpenMeteoHourly;
}

export interface WeatherArgs {
  latitude: number;
  longitude: number;
  units: string;
}
