import React from 'react';
import { Cloud, Sun, CloudRain } from 'lucide-react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="flex items-center justify-center gap-4 animate-pulse">
            <Sun className="w-12 h-12 text-yellow-300 animate-spin" style={{ animationDuration: '3s' }} />
            <Cloud className="w-16 h-16 text-white animate-bounce" style={{ animationDelay: '0.5s' }} />
            <CloudRain className="w-12 h-12 text-blue-300 animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }} />
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="text-white text-xl font-semibold">
            Loading Weather Data
          </div>
          <div className="text-white/60">
            Please wait while we fetch the latest information...
          </div>
        </div>
        
        <div className="mt-8 flex justify-center">
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
            <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
            <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};