import React, { useState, useEffect } from 'react';
import { SearchBar } from './components/SearchBar';
import { CurrentWeather } from './components/CurrentWeather';
import { WeatherForecast } from './components/WeatherForecast';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { getWeatherData } from './services/weatherApi';
import { getBackgroundGradient } from './utils/weatherIcons';
import type { WeatherData } from './types/weather';

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [unit, setUnit] = useState<'C' | 'F'>('C');

  // Load default weather data on mount
  useEffect(() => {
    handleSearch('New York');
  }, []);

  const handleSearch = async (city: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await getWeatherData(city);
      setWeatherData(data);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
      console.error('Weather fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const toggleUnit = () => {
    setUnit(prev => prev === 'C' ? 'F' : 'C');
  };

  const handleRetry = () => {
    if (weatherData) {
      handleSearch(weatherData.location.name);
    } else {
      handleSearch('New York');
    }
  };

  const backgroundGradient = weatherData 
    ? getBackgroundGradient(weatherData.current.condition)
    : 'from-blue-400 via-blue-500 to-purple-600';

  if (error) {
    return (
      <div className={`min-h-screen bg-gradient-to-br ${backgroundGradient} transition-all duration-1000`}>
        <ErrorMessage message={error} onRetry={handleRetry} />
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${backgroundGradient} transition-all duration-1000`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 p-4 md:p-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-light text-white mb-4 tracking-wide">
            Weather
          </h1>
          <p className="text-white/70 text-lg md:text-xl">
            Beautiful weather, beautifully presented
          </p>
        </header>

        {/* Search Bar */}
        <div className="mb-12">
          <SearchBar onSearch={handleSearch} isLoading={loading} />
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : weatherData ? (
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Current Weather */}
            <CurrentWeather 
              data={weatherData} 
              unit={unit} 
              onUnitToggle={toggleUnit} 
            />

            {/* Forecast */}
            <WeatherForecast 
              forecast={weatherData.forecast} 
              unit={unit} 
            />
          </div>
        ) : null}

        {/* Footer */}
        <footer className="text-center mt-16 pb-8">
          <p className="text-white/50 text-sm">
            Weather data updates in real-time • Built with modern web technologies
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;