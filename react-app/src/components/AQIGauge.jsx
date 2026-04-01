import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const AQIGauge = ({ value = 58, size = 200 }) => {
  const getAQIColor = (aqi) => {
    if (aqi <= 50) return '#10b981'; // Green
    if (aqi <= 100) return '#f59e0b'; // Yellow
    if (aqi <= 150) return '#f97316'; // Orange
    if (aqi <= 200) return '#ef4444'; // Red
    if (aqi <= 300) return '#8b5cf6'; // Purple
    return '#7c3aed'; // Dark Purple
  };

  const getAQILevel = (aqi) => {
    if (aqi <= 50) return 'Good';
    if (aqi <= 100) return 'Moderate';
    if (aqi <= 150) return 'Unhealthy for Sensitive';
    if (aqi <= 200) return 'Unhealthy';
    if (aqi <= 300) return 'Very Unhealthy';
    return 'Hazardous';
  };

  const getAQIDescription = (aqi) => {
    if (aqi <= 50) return 'Air quality is satisfactory';
    if (aqi <= 100) return 'Acceptable for most people';
    if (aqi <= 150) return 'Sensitive groups may experience health effects';
    if (aqi <= 200) return 'Everyone may experience health effects';
    if (aqi <= 300) return 'Health warnings of emergency conditions';
    return 'Emergency conditions: everyone affected';
  };

  const color = getAQIColor(value);
  const level = getAQILevel(value);
  const description = getAQIDescription(value);

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative">
        <div className="absolute inset-0 animate-pulse-slow">
          <div 
            className="w-full h-full rounded-full opacity-20"
            style={{ backgroundColor: color }}
          />
        </div>
        <div style={{ width: size, height: size }}>
          <CircularProgressbar
            value={Math.min((value / 300) * 100, 100)}
            text={`${value}`}
            styles={buildStyles({
              textColor: color,
              pathColor: color,
              trailColor: 'rgba(255, 255, 255, 0.1)',
              textSize: '32px',
              fontWeight: 'bold',
            })}
          />
        </div>
      </div>
      
      <div className="text-center space-y-2">
        <h3 
          className="text-2xl font-bold"
          style={{ color }}
        >
          {level}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AQIGauge;
