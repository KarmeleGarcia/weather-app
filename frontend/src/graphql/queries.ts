// frontend/src/graphql/queries.ts
import { gql } from '@apollo/client';

export const GET_WEATHER = gql`
  query GetWeather($latitude: Float!, $longitude: Float!, $units: String!) {
    getWeather(latitude: $latitude, longitude: $longitude, units: $units) {
      location
      current {
        temperature
        feelsLike
        humidity
        windSpeed
        precipitation
        weatherCode
        isDay
      }
      daily {
        date
        maxTemp
        minTemp
        weatherCode
      }
      hourly {
        time
        temperature
        weatherCode
      }
    }
  }
`;