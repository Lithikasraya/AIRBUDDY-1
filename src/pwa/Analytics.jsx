import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import PWABottomNav from '../components/PWABottomNav';

const Analytics = () => {
  // Daily AQI trend data
  const dailyData = [
    { time: '00:00', aqi: 45, pm25: 20, pm10: 35 },
    { time: '04:00', aqi: 38, pm25: 18, pm10: 30 },
    { time: '08:00', aqi: 65, pm25: 45, pm10: 55 },
    { time: '12:00', aqi: 72, pm25: 52, pm10: 62 },
    { time: '16:00', aqi: 68, pm25: 48, pm10: 58 },
    { time: '20:00', aqi: 52, pm25: 32, pm10: 42 },
    { time: '24:00', aqi: 48, pm25: 28, pm10: 38 },
  ];

  // Monthly average data
  const monthlyData = [
    { month: 'Jan', aqi: 55, days: 31 },
    { month: 'Feb', aqi: 62, days: 28 },
    { month: 'Mar', aqi: 48, days: 31 },
    { month: 'Apr', aqi: 42, days: 30 },
    { month: 'May', aqi: 38, days: 31 },
    { month: 'Jun', aqi: 45, days: 30 },
  ];

  // Weekly comparison data
  const weeklyComparison = [
    { week: 'Week 1', thisYear: 52, lastYear: 58 },
    { week: 'Week 2', thisYear: 48, lastYear: 62 },
    { week: 'Week 3', thisYear: 55, lastYear: 51 },
    { week: 'Week 4', thisYear: 42, lastYear: 48 },
  ];

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

  const getAQIColor = (aqi) => {
    if (aqi <= 50) return '#10b981';
    if (aqi <= 100) return '#f59e0b';
    if (aqi <= 150) return '#f97316';
    if (aqi <= 200) return '#ef4444';
    return '#8b5cf6';
  };

  return (
    <>
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
            Analytics Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Detailed insights and trends
          </p>
        </motion.div>

        {/* Best/Worst Day Cards */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
          <div className="glass dark:bg-gray-800/20 dark:border-gray-700/20 rounded-3xl p-6 text-center card-hover">
            <div className="text-4xl mb-2">🏆</div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Best Day
            </h3>
            <div className="text-3xl font-bold text-green-500 mb-1">35</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Last Friday</div>
            <div className="text-xs text-gray-500 dark:text-gray-500 mt-2">
              Excellent air quality
            </div>
          </div>

          <div className="glass dark:bg-gray-800/20 dark:border-gray-700/20 rounded-3xl p-6 text-center card-hover">
            <div className="text-4xl mb-2">⚠️</div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Worst Day
            </h3>
            <div className="text-3xl font-bold text-red-500 mb-1">87</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Last Monday</div>
            <div className="text-xs text-gray-500 dark:text-gray-500 mt-2">
              Moderate pollution levels
            </div>
          </div>
        </motion.div>

        {/* Daily AQI Trend */}
        <motion.div variants={itemVariants}>
          <div className="glass dark:bg-gray-800/20 dark:border-gray-700/20 rounded-3xl p-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              Daily AQI Trend
            </h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={dailyData}>
                  <defs>
                    <linearGradient id="colorAqi" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="time" 
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
                  <Area 
                    type="monotone" 
                    dataKey="aqi" 
                    stroke="#3b82f6" 
                    strokeWidth={3}
                    fill="url(#colorAqi)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>

        {/* Monthly Average */}
        <motion.div variants={itemVariants}>
          <div className="glass dark:bg-gray-800/20 dark:border-gray-700/20 rounded-3xl p-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              Monthly Average AQI
            </h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="month" 
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
                  <Bar 
                    dataKey="aqi" 
                    fill="#3b82f6"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>

        {/* Weekly Comparison */}
        <motion.div variants={itemVariants}>
          <div className="glass dark:bg-gray-800/20 dark:border-gray-700/20 rounded-3xl p-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              Weekly Comparison
            </h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weeklyComparison}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="week" 
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
                    dataKey="thisYear" 
                    stroke="#10b981" 
                    strokeWidth={3}
                    dot={{ fill: '#10b981', r: 6 }}
                    name="This Year"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="lastYear" 
                    stroke="#f59e0b" 
                    strokeWidth={3}
                    dot={{ fill: '#f59e0b', r: 6 }}
                    name="Last Year"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>

        {/* Statistics Summary */}
        <motion.div variants={itemVariants}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass dark:bg-gray-800/20 dark:border-gray-700/20 rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold text-blue-500">48.5</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Avg AQI</div>
              <div className="text-xs text-gray-500 dark:text-gray-500">30 days</div>
            </div>
            
            <div className="glass dark:bg-gray-800/20 dark:border-gray-700/20 rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold text-green-500">12</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Good Days</div>
              <div className="text-xs text-gray-500 dark:text-gray-500">This month</div>
            </div>
            
            <div className="glass dark:bg-gray-800/20 dark:border-gray-700/20 rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold text-yellow-500">15</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Moderate</div>
              <div className="text-xs text-gray-500 dark:text-gray-500">This month</div>
            </div>
            
            <div className="glass dark:bg-gray-800/20 dark:border-gray-700/20 rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold text-orange-500">3</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Unhealthy</div>
              <div className="text-xs text-gray-500 dark:text-gray-500">This month</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      </div>
      <PWABottomNav />
    </>
  );
};

export default Analytics;
