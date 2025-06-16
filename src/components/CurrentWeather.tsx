import React from 'react';
import { MapPin, Thermometer, Droplets, Wind, Eye, Gauge } from 'lucide-react';
import { getWeatherIcon } from '../utils/weatherIcons';
import type { WeatherData } from '../types/weather';

interface CurrentWeatherProps {
  data: WeatherData;
  unit: 'C' | 'F';
  onUnitToggle: () => void;
}

export const CurrentWeather: React.FC<CurrentWeatherProps> = ({ data, unit, onUnitToggle }) => {
  const WeatherIcon = getWeatherIcon(data.current.condition);
  
  const convertTemp = (temp: number) => {
    return unit === 'F' ? Math.round((temp * 9/5) + 32) : temp;
  };

  const formatTime = () => {
    return new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2 text-white/80">
          <MapPin className="w-5 h-5" />
          <span className="text-lg">{data.location.name}</span>
        </div>
        <div className="text-white/60 text-sm">
          {formatTime()}
        </div>
      </div>

      {/* Main Weather Display */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <span className="text-6xl font-light text-white">
              {convertTemp(data.current.temperature)}°
            </span>
            <button
              onClick={onUnitToggle}
              className="text-2xl text-white/60 hover:text-white transition-colors duration-200 bg-white/10 rounded-lg px-3 py-1"
            >
              {unit}
            </button>
          </div>
          <div className="text-white/80 text-lg mb-1">{data.current.condition}</div>
          <div className="text-white/60">
            Feels like {convertTemp(data.current.feelsLike)}°{unit}
          </div>
        </div>
        <div className="text-white/90">
          <WeatherIcon className="w-24 h-24" />
        </div>
      </div>

      {/* Weather Details Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white/5 rounded-2xl p-4 backdrop-blur-sm border border-white/10">
          <div className="flex items-center gap-2 mb-2">
            <Droplets className="w-4 h-4 text-blue-300" />
            <span className="text-white/60 text-sm">Humidity</span>
          </div>
          <div className="text-white text-xl font-semibold">{data.current.humidity}%</div>
        </div>

        <div className="bg-white/5 rounded-2xl p-4 backdrop-blur-sm border border-white/10">
          <div className="flex items-center gap-2 mb-2">
            <Wind className="w-4 h-4 text-gray-300" />
            <span className="text-white/60 text-sm">Wind</span>
          </div>
          <div className="text-white text-xl font-semibold">
            {data.current.windSpeed} {unit === 'C' ? 'km/h' : 'mph'}
          </div>
        </div>

        <div className="bg-white/5 rounded-2xl p-4 backdrop-blur-sm border border-white/10">
          <div className="flex items-center gap-2 mb-2">
            <Eye className="w-4 h-4 text-green-300" />
            <span className="text-white/60 text-sm">Visibility</span>
          </div>
          <div className="text-white text-xl font-semibold">
            {data.current.visibility} {unit === 'C' ? 'km' : 'mi'}
          </div>
        </div>

        <div className="bg-white/5 rounded-2xl p-4 backdrop-blur-sm border border-white/10">
          <div className="flex items-center gap-2 mb-2">
            <Gauge className="w-4 h-4 text-yellow-300" />
            <span className="text-white/60 text-sm">Pressure</span>
          </div>
          <div className="text-white text-xl font-semibold">{data.current.pressure} mb</div>
        </div>

        <div className="bg-white/5 rounded-2xl p-4 backdrop-blur-sm border border-white/10">
          <div className="flex items-center gap-2 mb-2">
            <Thermometer className="w-4 h-4 text-orange-300" />
            <span className="text-white/60 text-sm">UV Index</span>
          </div>
          <div className="text-white text-xl font-semibold">{data.current.uvIndex}</div>
        </div>

        <div className="bg-white/5 rounded-2xl p-4 backdrop-blur-sm border border-white/10">
          <div className="flex items-center gap-2 mb-2">
            <Wind className="w-4 h-4 text-purple-300" />
            <span className="text-white/60 text-sm">Direction</span>
          </div>
          <div className="text-white text-xl font-semibold">{data.current.windDirection}</div>
        </div>
      </div>
    </div>
  );
};