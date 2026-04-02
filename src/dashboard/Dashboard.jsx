import React from 'react';
import { Cloud, Droplets, Wind, Volume2, Activity, Gauge, CheckCircle, AlertCircle, Clock, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import MetricCard from '../components/MetricCard';
import GlassCard from '../components/GlassCard';
import { useSensor } from '../contexts/SensorContext';

const Dashboard = () => {
  const { metrics, chartData } = useSensor();

  const metricsData = [
    {
      icon: Cloud,
      label: 'Temperature',
      value: metrics.temperature.toFixed(1),
      unit: '°C',
      status: 'normal',
    },
    {
      icon: Droplets,
      label: 'Humidity',
      value: metrics.humidity.toFixed(0),
      unit: '%',
      status: metrics.humidity > 70 ? 'warning' : 'normal',
    },
    {
      icon: Wind,
      label: 'PM2.5',
      value: metrics.pm25.toFixed(0),
      unit: 'µg/m³',
      status: metrics.pm25 > 50 ? 'critical' : 'normal',
    },
    {
      icon: Gauge,
      label: 'PM10',
      value: metrics.pm10.toFixed(0),
      unit: 'µg/m³',
      status: metrics.pm10 > 75 ? 'critical' : 'normal',
    },
    {
      icon: Volume2,
      label: 'Sound Level',
      value: metrics.soundLevel.toFixed(0),
      unit: 'dB',
      status: metrics.soundLevel > 70 ? 'warning' : 'normal',
    },
    {
      icon: Activity,
      label: 'CO₂',
      value: metrics.co2.toFixed(0),
      unit: 'ppm',
      status: metrics.co2 > 1000 ? 'warning' : 'normal',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      {/* Header */}
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-gray-400">All systems online</span>
          </div>
        </div>
      </motion.div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metricsData.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <MetricCard {...metric} />
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Air Quality Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <GlassCard className="p-6 h-full">
            <h2 className="text-xl font-bold text-white mb-6">Air Quality Summary</h2>
            
            <div className="space-y-4">
              {/* Overall Quality Score */}
              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-400 font-medium">Overall Quality Score</span>
                  <span className="text-2xl font-bold text-blue-400">72/100</span>
                </div>
                <div className="w-full bg-dark-700/50 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full w-3/4"></div>
                </div>
              </div>

              {/* Status Indicators */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-dark-700/30">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                    <span className="text-gray-300 text-sm">Temperature</span>
                  </div>
                  <span className="text-white font-semibold">{metrics.temperature.toFixed(1)}°C</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-dark-700/30">
                  <div className="flex items-center gap-3">
                    <span className={`w-3 h-3 rounded-full ${metrics.humidity > 70 ? 'bg-yellow-400' : 'bg-green-400'}`}></span>
                    <span className="text-gray-300 text-sm">Humidity</span>
                  </div>
                  <span className="text-white font-semibold">{metrics.humidity.toFixed(0)}%</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-dark-700/30">
                  <div className="flex items-center gap-3">
                    <span className={`w-3 h-3 rounded-full ${metrics.pm25 > 50 ? 'bg-red-400' : 'bg-green-400'}`}></span>
                    <span className="text-gray-300 text-sm">PM2.5 Level</span>
                  </div>
                  <span className="text-white font-semibold">{metrics.pm25.toFixed(0)} µg/m³</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-dark-700/30">
                  <div className="flex items-center gap-3">
                    <span className={`w-3 h-3 rounded-full ${metrics.co2 > 1000 ? 'bg-yellow-400' : 'bg-green-400'}`}></span>
                    <span className="text-gray-300 text-sm">CO₂ Level</span>
                  </div>
                  <span className="text-white font-semibold">{metrics.co2.toFixed(0)} ppm</span>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Recommended Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <GlassCard className="p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <AlertCircle size={24} className="text-blue-400" />
              Recommended Actions
            </h2>
            
            <div className="space-y-3">
              <motion.div
                whileHover={{ x: 4 }}
                className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/30 hover:border-blue-500/50 transition-colors cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium text-sm">Open windows for fresh air</p>
                    <p className="text-gray-500 text-xs mt-1">PM2.5 levels are moderately elevated</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 4 }}
                className="p-3 rounded-lg bg-green-500/10 border border-green-500/30 hover:border-green-500/50 transition-colors cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium text-sm">Humidity levels optimal</p>
                    <p className="text-gray-500 text-xs mt-1">No immediate action required</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 4 }}
                className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/30 hover:border-blue-500/50 transition-colors cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium text-sm">Monitor CO₂ levels</p>
                    <p className="text-gray-500 text-xs mt-1">Increase ventilation if needed</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
