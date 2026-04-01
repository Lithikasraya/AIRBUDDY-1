import React from 'react';
import LottieIcon from './LottieIcon';

const Card = ({ 
  title, 
  value, 
  unit, 
  icon, 
  trend, 
  color = 'blue',
  animation 
}) => {
  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up':
        return '↗️';
      case 'down':
        return '↘️';
      default:
        return '→';
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'up':
        return 'text-red-500';
      case 'down':
        return 'text-green-500';
      default:
        return 'text-gray-500';
    }
  };

  const colorClasses = {
    blue: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
    green: 'from-green-500/20 to-emerald-500/20 border-green-500/30',
    orange: 'from-orange-500/20 to-amber-500/20 border-orange-500/30',
    red: 'from-red-500/20 to-pink-500/20 border-red-500/30',
    purple: 'from-purple-500/20 to-indigo-500/20 border-purple-500/30',
  };

  return (
    <div className={`glass dark:glass-card rounded-3xl p-6 card-hover border ${colorClasses[color]}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          {animation ? (
            <div className="w-8 h-8">
              <LottieIcon animation={animation} />
            </div>
          ) : (
            <div className="text-2xl">{icon}</div>
          )}
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {title}
          </h3>
        </div>
        {trend && (
          <span className={`text-lg ${getTrendColor(trend)}`}>
            {getTrendIcon(trend)}
          </span>
        )}
      </div>
      
      <div className="space-y-1">
        <div className="flex items-baseline space-x-2">
          <span className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            {value}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {unit}
          </span>
        </div>
        
        {trend && (
          <div className={`text-xs ${getTrendColor(trend)}`}>
            {trend === 'up' ? 'Increasing' : trend === 'down' ? 'Decreasing' : 'Stable'}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
