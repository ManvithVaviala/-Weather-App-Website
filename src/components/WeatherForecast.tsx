import React from 'react';
import { CloudRain } from 'lucide-react';
import { getWeatherIcon, formatDate } from '../utils/weatherIcons';
import type { ForecastDay } from '../types/weather';

interface WeatherForecastProps {
  forecast: ForecastDay[];
  unit: 'C' | 'F';
}

export const WeatherForecast: React.FC<WeatherForecastProps> = ({ forecast, unit }) => {
  const convertTemp = (temp: number) => {
    return unit === 'F' ? Math.round((temp * 9/5) + 32) : temp;
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
      <h2 className="text-2xl font-semibold text-white mb-6">5-Day Forecast</h2>
      
      <div className="space-y-4">
        {forecast.map((day, index) => {
          const WeatherIcon = getWeatherIcon(day.day.condition);
          
          return (
            <div 
              key={index}
              className="bg-white/5 rounded-2xl p-4 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-white/90 group-hover:scale-110 transition-transform duration-300">
                    <WeatherIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-white font-medium">
                      {formatDate(day.date)}
                    </div>
                    <div className="text-white/60 text-sm">
                      {day.day.condition}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-blue-300">
                    <CloudRain className="w-4 h-4" />
                    <span className="text-sm">{day.day.chanceOfRain}%</span>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-white font-semibold">
                      {convertTemp(day.day.maxTemp)}°
                    </div>
                    <div className="text-white/60 text-sm">
                      {convertTemp(day.day.minTemp)}°
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};