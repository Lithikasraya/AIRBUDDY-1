import React, { useState } from 'react';
import { TrendingUp, Download, Calendar, Filter, BarChart3, PieChart, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart as PieChartComponent,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';
import { useSensor } from '../contexts/SensorContext';

const Analytics = () => {
  const { chartData, metrics } = useSensor();
  const [dateRange, setDateRange] = useState('7days');

  // Extended chart data for analytics
  const extendedChartData = Array.from({ length: 30 }, (_, i) => ({
    date: `Day ${i + 1}`,
    pm25: Math.floor(Math.random() * 100) + 20,
    pm10: Math.floor(Math.random() * 150) + 30,
    temperature: Math.floor(Math.random() * 20) + 15,
    humidity: Math.floor(Math.random() * 60) + 30,
    co2: Math.floor(Math.random() * 500) + 300,
  }));

  // Statistics data
  const stats = [
    {
      label: 'Avg Air Quality',
      value: '62',
      unit: '/100',
      trend: '+5.2%',
      color: 'from-blue-500 to-blue-700',
      icon: Activity,
    },
    {
      label: 'Total Readings',
      value: '2,847',
      unit: 'records',
      trend: '+12.4%',
      color: 'from-green-500 to-green-700',
      icon: BarChart3,
    },
    {
      label: 'Avg PM2.5',
      value: '35.8',
      unit: 'µg/m³',
      trend: '-3.2%',
      color: 'from-orange-500 to-orange-700',
      icon: TrendingUp,
    },
    {
      label: 'Critical Events',
      value: '12',
      unit: 'alerts',
      trend: '-8.1%',
      color: 'from-red-500 to-red-700',
      icon: Activity,
    },
  ];

  // Distribution data
  const distributionData = [
    { name: 'Normal', value: 60, color: '#10b981' },
    { name: 'Warning', value: 25, color: '#f59e0b' },
    { name: 'Critical', value: 15, color: '#ef4444' },
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
          <h1 className="text-4xl font-bold text-white mb-2">Analytics</h1>
          <p className="text-gray-400">Track air quality trends and detailed insights</p>
        </div>

        <div className="flex gap-3">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-4 py-2 rounded-lg bg-dark-700/50 border border-dark-600 text-gray-300 hover:border-blue-500/50 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            <option value="7days">Last 7 Days</option>
            <option value="30days">Last 30 Days</option>
            <option value="90days">Last 90 Days</option>
            <option value="1year">Last Year</option>
          </select>

          <Button variant="secondary" size="md">
            <Download size={18} />
            Export
          </Button>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const isPositive = stat.trend.startsWith('+');

          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
            >
              <GlassCard className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-gray-400 text-sm font-medium mb-2">{stat.label}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-white">{stat.value}</span>
                      <span className="text-gray-500 text-sm">{stat.unit}</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${stat.color}`}>
                    <Icon className="text-white" size={20} />
                  </div>
                </div>

                <div className={`text-sm font-medium ${isPositive ? 'text-green-400' : 'text-blue-400'}`}>
                  {stat.trend} from last period
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Detailed Trends */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2"
        >
          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Air Quality Trends</h2>
              <button className="text-gray-500 hover:text-gray-300">
                <Filter size={20} />
              </button>
            </div>

            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={extendedChartData}>
                <defs>
                  <linearGradient id="colorPm25" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis
                  dataKey="date"
                  stroke="rgba(255,255,255,0.5)"
                  style={{ fontSize: '12px' }}
                />
                <YAxis stroke="rgba(255,255,255,0.5)" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(10, 25, 47, 0.95)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    borderRadius: '12px',
                  }}
                  cursor={{ stroke: 'rgba(59, 130, 246, 0.3)' }}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="pm25"
                  stroke="#ef4444"
                  fillOpacity={1}
                  fill="url(#colorPm25)"
                  name="PM2.5"
                />
                <Area
                  type="monotone"
                  dataKey="temperature"
                  stroke="#f59e0b"
                  fillOpacity={1}
                  fill="url(#colorTemp)"
                  name="Temperature"
                />
              </AreaChart>
            </ResponsiveContainer>
          </GlassCard>
        </motion.div>

        {/* Status Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <GlassCard className="p-6">
            <h2 className="text-xl font-bold text-white mb-6">Air Quality Distribution</h2>

            <ResponsiveContainer width="100%" height={300}>
              <PieChartComponent>
                <Pie
                  data={distributionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {distributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(10, 25, 47, 0.95)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    borderRadius: '12px',
                  }}
                />
              </PieChartComponent>
            </ResponsiveContainer>

            <div className="space-y-3 mt-6">
              {distributionData.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-gray-400 text-sm">{item.name}</span>
                  </div>
                  <span className="text-white font-semibold">{item.value}%</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Comparison Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* PM Levels Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <GlassCard className="p-6">
            <h2 className="text-xl font-bold text-white mb-6">PM Levels Comparison</h2>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={extendedChartData.slice(0, 15)}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis
                  dataKey="date"
                  stroke="rgba(255,255,255,0.5)"
                  style={{ fontSize: '12px' }}
                />
                <YAxis stroke="rgba(255,255,255,0.5)" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(10, 25, 47, 0.95)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    borderRadius: '12px',
                  }}
                />
                <Legend />
                <Bar dataKey="pm25" fill="#ef4444" radius={8} name="PM2.5" />
                <Bar dataKey="pm10" fill="#f59e0b" radius={8} name="PM10" />
              </BarChart>
            </ResponsiveContainer>
          </GlassCard>
        </motion.div>

        {/* Environmental Factors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <GlassCard className="p-6">
            <h2 className="text-xl font-bold text-white mb-6">Environmental Factors</h2>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={extendedChartData.slice(0, 15)}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis
                  dataKey="date"
                  stroke="rgba(255,255,255,0.5)"
                  style={{ fontSize: '12px' }}
                />
                <YAxis stroke="rgba(255,255,255,0.5)" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(10, 25, 47, 0.95)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    borderRadius: '12px',
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="temperature"
                  stroke="#f59e0b"
                  strokeWidth={2}
                  dot={false}
                  name="Temperature (°C)"
                />
                <Line
                  type="monotone"
                  dataKey="humidity"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={false}
                  name="Humidity (%)"
                />
                <Line
                  type="monotone"
                  dataKey="co2"
                  stroke="#8b5cf6"
                  strokeWidth={2}
                  dot={false}
                  name="CO₂ (ppm)"
                />
              </LineChart>
            </ResponsiveContainer>
          </GlassCard>
        </motion.div>
      </div>

      {/* Key Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <GlassCard className="p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Key Insights</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Peak Pollution Hours',
                description: 'PM2.5 levels are highest between 6-9 AM and 6-9 PM',
                icon: '📊',
              },
              {
                title: 'Temperature Correlation',
                description: 'Air quality improves by 15% for every 5°C temperature increase',
                icon: '🌡️',
              },
              {
                title: 'Weekly Pattern',
                description: 'Weekday pollution is 22% higher than weekends',
                icon: '📈',
              },
              {
                title: 'Best Air Quality',
                description: 'Early morning hours (3-5 AM) show the cleanest air',
                icon: '✨',
              },
            ].map((insight, index) => (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="p-4 rounded-xl border border-dark-700/50 hover:border-blue-500/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{insight.icon}</span>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{insight.title}</h3>
                    <p className="text-gray-400 text-sm">{insight.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </motion.div>

      {/* Export Options */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex gap-3 pt-6 border-t border-dark-700/50"
      >
        <Button variant="secondary">
          <Download size={18} />
          Download PDF Report
        </Button>
        <Button variant="secondary">
          <Calendar size={18} />
          Schedule Report
        </Button>
        <Button variant="primary">
          <TrendingUp size={18} />
          Generate Custom Report
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default Analytics;
