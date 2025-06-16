import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  onRetry: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl max-w-md w-full text-center">
        <div className="text-red-300 mb-4">
          <AlertCircle className="w-16 h-16 mx-auto" />
        </div>
        
        <h2 className="text-2xl font-semibold text-white mb-4">
          Something went wrong
        </h2>
        
        <p className="text-white/70 mb-6">
          {message}
        </p>
        
        <button
          onClick={onRetry}
          className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-2xl transition-all duration-300 flex items-center gap-2 mx-auto group"
        >
          <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
          Try Again
        </button>
      </div>
    </div>
  );
};