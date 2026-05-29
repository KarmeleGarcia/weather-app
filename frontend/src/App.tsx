// frontend/src/App.tsx
import { UNITS_METRIC, DEFAULT_COORDINATES } from "./constants/index";
import Weather from "./components/Weather";

function WeatherApp() {
  return (
    <div className="weather-app">
      <Weather
        latitude={DEFAULT_COORDINATES.lat}
        longitude={DEFAULT_COORDINATES.lon}
        units={UNITS_METRIC}
      />
    </div>
  );
}

export default WeatherApp;
