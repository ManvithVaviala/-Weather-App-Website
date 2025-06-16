export interface WeatherData {
  location: {
    name: string;
    country: string;
    region: string;
    lat: number;
    lon: number;
  };
  current: {
    temperature: number;
    condition: string;
    description: string;
    humidity: number;
    windSpeed: number;
    windDirection: string;
    pressure: number;
    visibility: number;
    uvIndex: number;
    feelsLike: number;
    icon: string;
  };
  forecast: ForecastDay[];
}

export interface ForecastDay {
  date: string;
  day: {
    maxTemp: number;
    minTemp: number;
    condition: string;
    description: string;
    icon: string;
    chanceOfRain: number;
  };
}

export interface SearchSuggestion {
  name: string;
  country: string;
  region: string;
}