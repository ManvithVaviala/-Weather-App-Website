import { 
  Sun, 
  Cloud, 
  CloudRain, 
  CloudSnow, 
  Zap, 
  CloudDrizzle,
  Wind,
  Eye,
  Droplets,
  Thermometer
} from 'lucide-react';

export const getWeatherIcon = (condition: string) => {
  const conditionLower = condition.toLowerCase();
  
  if (conditionLower.includes('sun') || conditionLower.includes('clear')) {
    return Sun;
  } else if (conditionLower.includes('rain') || conditionLower.includes('shower')) {
    return CloudRain;
  } else if (conditionLower.includes('drizzle')) {
    return CloudDrizzle;
  } else if (conditionLower.includes('snow')) {
    return CloudSnow;
  } else if (conditionLower.includes('thunder') || conditionLower.includes('storm')) {
    return Zap;
  } else {
    return Cloud;
  }
};

export const getBackgroundGradient = (condition: string) => {
  const conditionLower = condition.toLowerCase();
  
  if (conditionLower.includes('sun') || conditionLower.includes('clear')) {
    return 'from-blue-400 via-blue-500 to-orange-400';
  } else if (conditionLower.includes('rain') || conditionLower.includes('shower')) {
    return 'from-gray-500 via-gray-600 to-blue-700';
  } else if (conditionLower.includes('snow')) {
    return 'from-gray-200 via-gray-300 to-blue-300';
  } else if (conditionLower.includes('thunder') || conditionLower.includes('storm')) {
    return 'from-gray-800 via-gray-900 to-purple-900';
  } else {
    return 'from-blue-400 via-gray-500 to-gray-600';
  }
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });
};

export const formatTime = (date: Date) => {
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });
};