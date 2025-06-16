// Weather API service - Using mock data for demonstration
// In production, replace with actual API calls

export const searchCities = async (query: string) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Mock search results
  const mockCities = [
    { name: 'New York', country: 'United States', region: 'New York' },
    { name: 'London', country: 'United Kingdom', region: 'England' },
    { name: 'Tokyo', country: 'Japan', region: 'Tokyo' },
    { name: 'Paris', country: 'France', region: 'Île-de-France' },
    { name: 'Sydney', country: 'Australia', region: 'New South Wales' },
    { name: 'Dubai', country: 'United Arab Emirates', region: 'Dubai' },
    { name: 'Singapore', country: 'Singapore', region: 'Central Singapore' },
    { name: 'Los Angeles', country: 'United States', region: 'California' }
  ];
  
  return mockCities.filter(city => 
    city.name.toLowerCase().includes(query.toLowerCase()) ||
    city.country.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 5);
};

export const getWeatherData = async (cityName: string) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Mock weather data - in production, replace with actual API call
  const mockData = {
    location: {
      name: cityName,
      country: 'United States',
      region: 'New York',
      lat: 40.7128,
      lon: -74.0060
    },
    current: {
      temperature: Math.floor(Math.random() * 30) + 5,
      condition: 'Partly Cloudy',
      description: 'Partly cloudy with a chance of rain',
      humidity: Math.floor(Math.random() * 40) + 40,
      windSpeed: Math.floor(Math.random() * 20) + 5,
      windDirection: 'NW',
      pressure: Math.floor(Math.random() * 50) + 1000,
      visibility: Math.floor(Math.random() * 10) + 5,
      uvIndex: Math.floor(Math.random() * 10) + 1,
      feelsLike: Math.floor(Math.random() * 30) + 5,
      icon: 'partly-cloudy'
    },
    forecast: Array.from({ length: 5 }, (_, i) => ({
      date: new Date(Date.now() + (i + 1) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      day: {
        maxTemp: Math.floor(Math.random() * 25) + 10,
        minTemp: Math.floor(Math.random() * 15) + 0,
        condition: ['Sunny', 'Cloudy', 'Rainy', 'Partly Cloudy'][Math.floor(Math.random() * 4)],
        description: 'Clear skies with moderate temperatures',
        icon: ['sun', 'cloud', 'cloud-rain', 'partly-cloudy'][Math.floor(Math.random() * 4)],
        chanceOfRain: Math.floor(Math.random() * 100)
      }
    }))
  };
  
  return mockData;
};

// In production, add your API key here
// const API_KEY = 'your-openweathermap-api-key';
// const BASE_URL = 'https://api.openweathermap.org/data/2.5';