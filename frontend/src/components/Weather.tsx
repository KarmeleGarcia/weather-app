import { useQuery } from "@apollo/client/react";
import { GET_WEATHER } from "@/graphql/queries";
import { UNITS_METRIC } from "@/constants";

import { Heading } from "@/components/atoms/Heading/Heading";

// Interfaz que describe la respuesta de la query
interface WeatherData {
  getWeather: {
    location: string;
    current: {
      temperature: number;
      feelsLike: number;
      humidity: number;
      windSpeed: number;
      precipitation: number;
      weatherCode: number;
      isDay: boolean;
    };
    daily: Array<{
      date: string;
      maxTemp: number;
      minTemp: number;
      weatherCode: number;
    }>;
    hourly: Array<{
      time: string;
      temperature: number;
      weatherCode: number;
    }>;
  };
}

interface WeatherProps {
  latitude: number;
  longitude: number;
  units: string; // "metric" or "imperial"
}

const Weather = ({ latitude, longitude, units }: WeatherProps) => {
  // Tipamos useQuery con WeatherData
  const { loading, error, data } = useQuery<WeatherData>(GET_WEATHER, {
    variables: { latitude, longitude, units },
  });

  if (loading) return <p>Loading weather data...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Ahora TypeScript sabe que data existe y tiene la propiedad getWeather
  const { getWeather } = data!;

  return (
    <div>
      <Heading as="h1" className="text-3xl font-bold text-blue-600">{getWeather.location}</Heading>
      <div>
        <p>
          Temperature: {getWeather.current.temperature}°
          {units === UNITS_METRIC ? "C" : "F"}
        </p>
        <p>
          Feels like: {getWeather.current.feelsLike}°
          {units === UNITS_METRIC ? "C" : "F"}
        </p>
        <p>Humidity: {getWeather.current.humidity}%</p>
        <p>
          Wind: {getWeather.current.windSpeed}{" "}
          {units === UNITS_METRIC ? "km/h" : "mph"}
        </p>
        <p>Precipitation: {getWeather.current.precipitation} mm</p>
      </div>
      <h2>7-Day Forecast</h2>
      <ul>
        {getWeather.daily.map((day) => (
          <li key={day.date}>
            {day.date}: {day.minTemp}° – {day.maxTemp}°
          </li>
        ))}
      </ul>
      <h2>Hourly Forecast</h2>
      <ul>
        {getWeather.hourly.slice(0, 12).map((hour) => (
          <li key={hour.time}>
            {new Date(hour.time).getHours()}:00 → {hour.temperature}°
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Weather;
