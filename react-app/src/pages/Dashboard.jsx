import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AQIGauge from '../components/AQIGauge';
import Card from '../components/Card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const [sensorData, setSensorData] = useState({
    temperature: 24,
    humidity: 65,
    pm25: 58,
    pm10: 45,
    aqi: 58,
  });

  // Weekly data for mini chart
  const weeklyData = [
    { day: 'Mon', aqi: 45 },
    { day: 'Tue', aqi: 52 },
    { day: 'Wed', aqi: 48 },
    { day: 'Thu', aqi: 65 },
    { day: 'Fri', aqi: 58 },
    { day: 'Sat', aqi: 42 },
    { day: 'Sun', aqi: 38 },
  ];

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSensorData(prev => ({
        temperature: prev.temperature + (Math.random() - 0.5) * 2,
        humidity: Math.max(30, Math.min(90, prev.humidity + (Math.random() - 0.5) * 5)),
        pm25: Math.max(0, prev.pm25 + (Math.random() - 0.5) * 10),
        pm10: Math.max(0, prev.pm10 + (Math.random() - 0.5) * 8),
        aqi: Math.max(0, prev.aqi + (Math.random() - 0.5) * 5),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <div className="min-h-screen pb-24 px-6 py-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto space-y-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            Air Quality Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Real-time monitoring of your environment
          </p>
        </motion.div>

        {/* AQI Gauge */}
        <motion.div variants={itemVariants}>
          <div className="glass dark:bg-gray-800/20 dark:border-gray-700/20 rounded-3xl p-8">
            <AQIGauge value={Math.round(sensorData.aqi)} size={250} />
          </div>
        </motion.div>

        {/* Sensor Cards Grid */}
        <motion.div variants={itemVariants}>
          <div className="sensor-grid">
            <Card
              title="Temperature"
              value={sensorData.temperature.toFixed(1)}
              unit="°C"
              icon="🌡️"
              trend={sensorData.temperature > 24 ? 'up' : 'down'}
              color="orange"
              animation="temperature"
            />
            
            <Card
              title="Humidity"
              value={sensorData.humidity.toFixed(0)}
              unit="%"
              icon="💧"
              trend={sensorData.humidity > 65 ? 'up' : 'down'}
              color="blue"
              animation="humidity"
            />
            
            <Card
              title="PM2.5"
              value={sensorData.pm25.toFixed(0)}
              unit="µg/m³"
              icon="🫧"
              trend={sensorData.pm25 > 50 ? 'up' : 'stable'}
              color="purple"
            />
            
            <Card
              title="PM10"
              value={sensorData.pm10.toFixed(0)}
              unit="µg/m³"
              icon="💨"
              trend={sensorData.pm10 > 40 ? 'up' : 'stable'}
              color="green"
            />
          </div>
        </motion.div>

        {/* Weekly Trend Chart */}
        <motion.div variants={itemVariants}>
          <div className="glass dark:bg-gray-800/20 dark:border-gray-700/20 rounded-3xl p-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              Weekly AQI Trend
            </h2>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="day" 
                    stroke="#9ca3af"
                    tick={{ fill: '#9ca3af' }}
                  />
                  <YAxis 
                    stroke="#9ca3af"
                    tick={{ fill: '#9ca3af' }}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '12px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="aqi" 
                    stroke="#3b82f6" 
                    strokeWidth={3}
                    dot={{ fill: '#3b82f6', r: 6 }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div variants={itemVariants}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass dark:bg-gray-800/20 dark:border-gray-700/20 rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold text-green-500">45</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Best Day</div>
              <div className="text-xs text-gray-500 dark:text-gray-500">Sunday</div>
            </div>
            
            <div className="glass dark:bg-gray-800/20 dark:border-gray-700/20 rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold text-orange-500">65</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Worst Day</div>
              <div className="text-xs text-gray-500 dark:text-gray-500">Thursday</div>
            </div>
            
            <div className="glass dark:bg-gray-800/20 dark:border-gray-700/20 rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold text-blue-500">52</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Average</div>
              <div className="text-xs text-gray-500 dark:text-gray-500">This Week</div>
            </div>
            
            <div className="glass dark:bg-gray-800/20 dark:border-gray-700/20 rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold text-purple-500">Moderate</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Status</div>
              <div className="text-xs text-gray-500 dark:text-gray-500">Current</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
