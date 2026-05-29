// Backend GraphQL endpoint (puede venir de variables de entorno)
export const GRAPHQL_URI = import.meta.env.VITE_GRAPHQL_URI;

// Opciones de unidades para el selector
export const UNITS_OPTIONS = [
  { value: "metric", label: "°C, km/h, mm" },
  { value: "imperial", label: "°F, mph, in" },
] as const;

// Coordenadas por defecto (Madrid)
export const DEFAULT_COORDINATES = {
  lat: 40.4165,
  lon: -3.7026,
};

// Mensajes de UI
export const UI_MESSAGES = {
  loading: "Loading weather data...",
  error: "Error fetching weather",
  noData: "No data available",
};
