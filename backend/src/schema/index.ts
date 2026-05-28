export const typeDefs = `#graphql
  type CurrentWeather {
    temperature: Float!
    feelsLike: Float!
    humidity: Int!
    windSpeed: Float!
    precipitation: Float!
    weatherCode: Int!
    isDay: Boolean!
  }

  type DailyForecast {
    date: String!
    maxTemp: Float!
    minTemp: Float!
    weatherCode: Int!
  }

  type HourlyForecast {
    time: String!
    temperature: Float!
    weatherCode: Int!
  }

  type WeatherData {
    location: String!
    current: CurrentWeather!
    daily: [DailyForecast!]!
    hourly: [HourlyForecast!]!
  }

  type Query {
    getWeather(
      latitude: Float!
      longitude: Float!
      units: String = "metric"
    ): WeatherData!
  }
`;
