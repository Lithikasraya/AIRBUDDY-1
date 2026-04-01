import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const AQIGauge = ({ value, size = 180 }) => {
  const getAQIColor = (aqi) => {
    if (aqi <= 50) return '#10b981'; // Good - Green
    if (aqi <= 100) return '#f59e0b'; // Moderate - Yellow
    if (aqi <= 150) return '#f97316'; // Unhealthy for Sensitive - Orange
    if (aqi <= 200) return '#ef4444'; // Unhealthy - Red
    return '#8b5cf6'; // Very Unhealthy - Purple
  };

  const percentage = Math.min((value / 300) * 100, 100);
  const color = getAQIColor(value);

  // Responsive sizing
  const textSize = size <= 120 ? '20px' : size <= 160 ? '24px' : '32px';
  const strokeWidth = size <= 120 ? 6 : size <= 160 ? 8 : 10;

  return (
    <div className="relative flex items-center justify-center">
      <div style={{ width: size, height: size }}>
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            rotation: 0.75,
            strokeLinecap: 'round',
            textSize: textSize,
            pathTransitionDuration: 0.5,
            pathColor: color,
            textColor: '#1f2937',
            trailColor: '#e5e7eb',
            backgroundColor: '#3b82f6',
          })}
          strokeWidth={strokeWidth}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className={`${size <= 120 ? 'text-2xl' : size <= 160 ? 'text-3xl' : 'text-4xl'} font-bold text-gray-800 dark:text-gray-100`}>
            {value}
          </div>
          <div className={`${size <= 120 ? 'text-xs' : size <= 160 ? 'text-sm' : 'text-base'} text-gray-600 dark:text-gray-400 mt-1`}>
            AQI
          </div>
        </div>
      </div>
    </div>
  );
};

export default AQIGauge;
