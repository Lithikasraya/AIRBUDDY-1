import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AQIGauge from '../components/AQIGauge';
import Card from '../components/Card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const Dashboard = () => {
  const [sensorData, setSensorData] = useState({
    temperature: 24.7,
    humidity: 63,
    pm25: 51,
    pm10: 50,
    aqi: 55,
  });

  // Enhanced weekly data with more realistic values
  const weeklyData = [
    { day: 'Mon', aqi: 45, pm25: 22, pm10: 35, temp: 22.1, humidity: 68 },
    { day: 'Tue', aqi: 52, pm25: 28, pm10: 42, temp: 23.5, humidity: 65 },
    { day: 'Wed', aqi: 48, pm25: 25, pm10: 38, temp: 24.8, humidity: 62 },
    { day: 'Thu', aqi: 65, pm25: 45, pm10: 58, temp: 26.2, humidity: 58 },
    { day: 'Fri', aqi: 55, pm25: 35, pm10: 47, temp: 25.1, humidity: 61 },
    { day: 'Sat', aqi: 42, pm25: 18, pm10: 32, temp: 23.8, humidity: 64 },
    { day: 'Sun', aqi: 38, pm25: 15, pm10: 28, temp: 22.9, humidity: 67 },
  ];

  // Today's detailed hourly data
  const hourlyData = [
    { time: '12AM', aqi: 42, pm25: 18, pm10: 28 },
    { time: '4AM', aqi: 38, pm25: 15, pm10: 25 },
    { time: '8AM', aqi: 48, pm25: 25, pm10: 38 },
    { time: '12PM', aqi: 58, pm25: 35, pm10: 50 },
    { time: '4PM', aqi: 55, pm25: 32, pm10: 45 },
    { time: '8PM', aqi: 51, pm25: 28, pm10: 40 },
    { time: '11PM', aqi: 47, pm25: 24, pm10: 35 },
  ];

  // Simulate real-time updates with more realistic changes
  useEffect(() => {
    const interval = setInterval(() => {
      setSensorData(prev => ({
        temperature: prev.temperature + (Math.random() - 0.5) * 1.5,
        humidity: Math.max(30, Math.min(90, prev.humidity + (Math.random() - 0.5) * 3)),
        pm25: Math.max(5, prev.pm25 + (Math.random() - 0.5) * 8),
        pm10: Math.max(10, prev.pm10 + (Math.random() - 0.5) * 6),
        aqi: Math.max(0, prev.aqi + (Math.random() - 0.5) * 4),
      }));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const getAQIStatus = (aqi) => {
    if (aqi <= 50) return { level: 'Good', color: '#10b981', emoji: '✅' };
    if (aqi <= 100) return { level: 'Moderate', color: '#f59e0b', emoji: '⚠️' };
    if (aqi <= 150) return { level: 'Unhealthy for Sensitive', color: '#f97316', emoji: '😷' };
    if (aqi <= 200) return { level: 'Unhealthy', color: '#ef4444', emoji: '😷' };
    return { level: 'Very Unhealthy', color: '#8b5cf6', emoji: '🚫' };
  };

  const currentStatus = getAQIStatus(sensorData.aqi);

  return (
    <div className="min-h-screen pb-20 xs:pb-20 sm:pb-24 px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 py-3 xs:py-4 sm:py-6 md:py-8 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 overflow-x-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto w-full space-y-4 xs:space-y-6 sm:space-y-8"
      >
        {/* Enhanced Header - Fully Responsive */}
        <motion.div variants={itemVariants} className="text-center">
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2 xs:mb-3"
          >
            🌬️
          </motion.div>
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-1 xs:mb-2">
            Air Quality Dashboard
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300">
              Real-time monitoring of your environment
            </p>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </motion.div>

        {/* Enhanced AQI Gauge - Responsive Container */}
        <motion.div variants={itemVariants}>
          <div className="glass dark:bg-gray-800/20 dark:border-gray-700/20 rounded-xl xs:rounded-2xl sm:rounded-3xl p-3 xs:p-4 sm:p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-50"></div>
            <div className="flex flex-col items-center">
              <AQIGauge value={Math.round(sensorData.aqi)} size={120} />
              <div className="mt-3 xs:mt-4 text-center">
                <div className="inline-flex items-center space-x-1 xs:space-x-2 px-2 xs:px-3 py-1 rounded-full" style={{ backgroundColor: currentStatus.color + '20' }}>
                  <span className="text-base xs:text-lg md:text-xl">{currentStatus.emoji}</span>
                  <span className="text-xs xs:text-sm font-medium" style={{ color: currentStatus.color }}>
                    {currentStatus.level}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Sensor Cards - Responsive Grid */}
        <motion.div variants={itemVariants}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-6">
            <motion.div
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="min-h-[44px] w-full"
            >
              <Card
                title="Temperature"
                value={sensorData.temperature.toFixed(1)}
                unit="°C"
                icon="🌡️"
                trend={sensorData.temperature > 24.5 ? 'up' : 'down'}
                color="orange"
              />
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="min-h-[44px] w-full"
            >
              <Card
                title="Humidity"
                value={sensorData.humidity.toFixed(0)}
                unit="%"
                icon="💧"
                trend={sensorData.humidity > 63 ? 'up' : 'down'}
                color="blue"
              />
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="min-h-[44px] w-full"
            >
              <Card
                title="PM2.5"
                value={sensorData.pm25.toFixed(0)}
                unit="µg/m³"
                icon="🫧"
                trend={sensorData.pm25 > 40 ? 'up' : 'stable'}
                color="purple"
              />
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="min-h-[44px] w-full"
            >
              <Card
                title="PM10"
                value={sensorData.pm10.toFixed(0)}
                unit="µg/m³"
                icon="💨"
                trend={sensorData.pm10 > 45 ? 'up' : 'stable'}
                color="green"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Weekly Trend Chart - Fully Responsive */}
        <motion.div variants={itemVariants}>
          <div className="glass dark:bg-gray-800/20 dark:border-gray-700/20 rounded-xl xs:rounded-2xl sm:rounded-3xl p-3 xs:p-4 sm:p-6 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 xs:mb-4 sm:mb-6 space-y-2 sm:space-y-0">
              <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100">
                📈 Weekly AQI Trend
              </h2>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-xs xs:text-sm px-2 py-1 bg-green-500/20 text-green-600 dark:text-green-400 rounded-full w-fit"
              >
                Live Data
              </motion.div>
            </div>
            <div className="h-32 xs:h-40 sm:h-48 md:h-56 lg:h-64 w-full min-w-0">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={weeklyData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                  <defs>
                    <linearGradient id="colorAqi" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="day" 
                    stroke="#9ca3af"
                    tick={{ fill: '#9ca3af', fontSize: 10 }}
                    tickLine={false}
                  />
                  <YAxis 
                    stroke="#9ca3af"
                    tick={{ fill: '#9ca3af', fontSize: 10 }}
                    tickLine={false}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '12px',
                      fontSize: 12
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="aqi" 
                    stroke="#3b82f6" 
                    strokeWidth={2}
                    fill="url(#colorAqi)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Quick Stats with Animations - Responsive Grid */}
        <motion.div variants={itemVariants}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="glass dark:bg-gray-800/20 dark:border-gray-700/20 rounded-lg xs:rounded-xl sm:rounded-2xl p-3 xs:p-4 text-center relative overflow-hidden min-h-[44px] w-full"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500 opacity-50"></div>
              <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-green-500 mb-1">45</div>
              <div className="text-xs xs:text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">Best Day</div>
              <div className="text-xs text-gray-500 dark:text-gray-500">Sunday</div>
              <div className="text-green-500 text-xs mt-1">📉</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="glass dark:bg-gray-800/20 dark:border-gray-700/20 rounded-lg xs:rounded-xl sm:rounded-2xl p-3 xs:p-4 text-center relative overflow-hidden min-h-[44px] w-full"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500 opacity-50"></div>
              <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-orange-500 mb-1">65</div>
              <div className="text-xs xs:text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">Worst Day</div>
              <div className="text-xs text-gray-500 dark:text-gray-500">Thursday</div>
              <div className="text-orange-500 text-xs mt-1">⚠️</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="glass dark:bg-gray-800/20 dark:border-gray-700/20 rounded-lg xs:rounded-xl sm:rounded-2xl p-3 xs:p-4 text-center relative overflow-hidden min-h-[44px] w-full"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-50"></div>
              <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-blue-500 mb-1">52</div>
              <div className="text-xs xs:text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">Average</div>
              <div className="text-xs text-gray-500 dark:text-gray-500">This Week</div>
              <div className="text-blue-500 text-xs mt-1">📊</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="glass dark:bg-gray-800/20 dark:border-gray-700/20 rounded-lg xs:rounded-xl sm:rounded-2xl p-3 xs:p-4 text-center relative overflow-hidden min-h-[44px] w-full"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-50"></div>
              <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-purple-500 mb-1">Moderate</div>
              <div className="text-xs xs:text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">Status</div>
              <div className="text-xs text-gray-500 dark:text-gray-500">Current</div>
              <div className="text-purple-500 text-xs mt-1">🎯</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Today's Hourly Breakdown - Fully Responsive */}
        <motion.div variants={itemVariants}>
          <div className="glass dark:bg-gray-800/20 dark:border-gray-700/20 rounded-xl xs:rounded-2xl sm:rounded-3xl p-3 xs:p-4 sm:p-6 w-full">
            <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 xs:mb-4 sm:mb-6">
              🕐 Today's Hourly Breakdown
            </h2>
            <div className="h-28 xs:h-32 sm:h-40 md:h-48 lg:h-56 w-full min-w-0">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={hourlyData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="time" 
                    stroke="#9ca3af"
                    tick={{ fill: '#9ca3af', fontSize: 9 }}
                    tickLine={false}
                  />
                  <YAxis 
                    stroke="#9ca3af"
                    tick={{ fill: '#9ca3af', fontSize: 9 }}
                    tickLine={false}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '12px',
                      fontSize: 12
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="aqi" 
                    stroke="#3b82f6" 
                    strokeWidth={2}
                    dot={{ fill: '#3b82f6', r: 3 }}
                    activeDot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
