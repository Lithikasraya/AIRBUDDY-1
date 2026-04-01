import React from 'react';

const Card = ({ 
  title, 
  value, 
  unit, 
  icon, 
  trend, 
  color = 'blue'
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
    <div className={`glass dark:bg-gray-800/20 dark:border-gray-700/20 rounded-lg xs:rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-6 card-hover border ${colorClasses[color]} w-full`}>
      <div className="flex items-start justify-between mb-2 xs:mb-3 sm:mb-4">
        <div className="flex items-center space-x-2 xs:space-x-3">
          <div className="text-xl xs:text-2xl">{icon}</div>
          <h3 className="text-xs xs:text-sm sm:text-base font-medium text-gray-600 dark:text-gray-400">
            {title}
          </h3>
        </div>
        {trend && (
          <span className={`text-base xs:text-lg ${getTrendColor(trend)}`}>
            {getTrendIcon(trend)}
          </span>
        )}
      </div>
      
      <div className="space-y-1">
        <div className="flex items-baseline space-x-1 xs:space-x-2">
          <span className="text-2xl xs:text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100">
            {value}
          </span>
          <span className="text-xs xs:text-sm sm:text-base text-gray-500 dark:text-gray-400">
            {unit}
          </span>
        </div>
        
        {trend && (
          <div className={`text-xs xs:text-sm ${getTrendColor(trend)}`}>
            {trend === 'up' ? 'Increasing' : trend === 'down' ? 'Decreasing' : 'Stable'}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
