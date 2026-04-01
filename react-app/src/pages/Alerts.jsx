import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const Alerts = () => {
  const [alerts] = useState([
    {
      id: 1,
      type: 'moderate',
      icon: '⚠️',
      title: 'Moderate Air Quality',
      description: 'PM2.5 levels are elevated. Sensitive groups should reduce prolonged outdoor exertion.',
      time: '2 hours ago',
      color: 'yellow'
    },
    {
      id: 2,
      type: 'improving',
      icon: '📈',
      title: 'Air Quality Improving',
      description: 'AQI decreased by 15 points in the last 3 hours. Conditions are getting better.',
      time: '5 hours ago',
      color: 'green'
    },
    {
      id: 3,
      type: 'good',
      icon: '✅',
      title: 'Good Air Quality',
      description: 'Perfect conditions for outdoor activities! Air quality is in the healthy range.',
      time: 'Yesterday',
      color: 'green'
    },
    {
      id: 4,
      type: 'unhealthy',
      icon: '🚫',
      title: 'Unhealthy AQI Alert',
      description: 'AQI reached unhealthy levels. Avoid prolonged outdoor activities.',
      time: '2 days ago',
      color: 'red'
    },
    {
      id: 5,
      type: 'moderate',
      icon: '🌡️',
      title: 'High Temperature Alert',
      description: 'Temperature above 30°C may affect air quality. Stay hydrated.',
      time: '3 days ago',
      color: 'orange'
    }
  ]);

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

  const getAlertStyles = (color) => {
    const styles = {
      green: 'aqi-bg-good border-green-500/30',
      yellow: 'aqi-bg-moderate border-yellow-500/30',
      orange: 'aqi-bg-unhealthy-sensitive border-orange-500/30',
      red: 'aqi-bg-unhealthy border-red-500/30'
    };
    return styles[color] || styles.yellow;
  };

  const getIconColor = (color) => {
    const colors = {
      green: 'text-green-500',
      yellow: 'text-yellow-500',
      orange: 'text-orange-500',
      red: 'text-red-500'
    };
    return colors[color] || colors.yellow;
  };

  const handleDismissAlert = (id) => {
    toast.success('Alert dismissed');
  };

  const handleMarkAsRead = (id) => {
    toast.success('Marked as read');
  };

  return (
    <div className="min-h-screen pb-24 px-6 py-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto space-y-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            Air Quality Alerts
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Stay informed about air quality changes
          </p>
        </motion.div>

        {/* Alert Settings */}
        <motion.div variants={itemVariants}>
          <div className="glass dark:bg-gray-800/20 dark:border-gray-700/20 rounded-3xl p-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Alert Preferences
            </h2>
            <div className="space-y-4">
              <label className="flex items-center justify-between p-3 rounded-xl hover:bg-white/10 dark:hover:bg-gray-700/10 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🔔</span>
                  <div>
                    <div className="font-medium text-gray-800 dark:text-gray-100">
                      Push Notifications
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Get alerts on your device
                    </div>
                  </div>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 rounded-lg text-blue-500 focus:ring-blue-500 focus:ring-2"
                />
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl hover:bg-white/10 dark:hover:bg-gray-700/10 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📧</span>
                  <div>
                    <div className="font-medium text-gray-800 dark:text-gray-100">
                      Email Alerts
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Daily summary emails
                    </div>
                  </div>
                </div>
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded-lg text-blue-500 focus:ring-blue-500 focus:ring-2"
                />
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl hover:bg-white/10 dark:hover:bg-gray-700/10 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📱</span>
                  <div>
                    <div className="font-medium text-gray-800 dark:text-gray-100">
                      SMS Alerts
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Critical alerts only
                    </div>
                  </div>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 rounded-lg text-blue-500 focus:ring-blue-500 focus:ring-2"
                />
              </label>
            </div>
          </div>
        </motion.div>

        {/* Alert Statistics */}
        <motion.div variants={itemVariants}>
          <div className="grid grid-cols-3 gap-4">
            <div className="glass dark:bg-gray-800/20 dark:border-gray-700/20 rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold text-green-500">3</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Good</div>
            </div>
            <div className="glass dark:bg-gray-800/20 dark:border-gray-700/20 rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold text-yellow-500">1</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Moderate</div>
            </div>
            <div className="glass dark:bg-gray-800/20 dark:border-gray-700/20 rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold text-red-500">1</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Unhealthy</div>
            </div>
          </div>
        </motion.div>

        {/* Alerts List */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
            Recent Alerts
          </h2>
          
          {alerts.map((alert) => (
            <motion.div
              key={alert.id}
              variants={itemVariants}
              className={`glass dark:bg-gray-800/20 dark:border-gray-700/20 rounded-3xl p-6 border-2 ${getAlertStyles(alert.color)} card-hover`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className={`text-3xl ${getIconColor(alert.color)}`}>
                    {alert.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                      {alert.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {alert.description}
                    </p>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-500 dark:text-gray-500">
                        {alert.time}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${getAlertStyles(alert.color)}`}>
                        {alert.type}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={() => handleMarkAsRead(alert.id)}
                    className="text-sm text-blue-500 hover:text-blue-600 font-medium"
                  >
                    Mark as read
                  </button>
                  <button
                    onClick={() => handleDismissAlert(alert.id)}
                    className="text-sm text-gray-500 hover:text-gray-600 font-medium"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No More Alerts */}
        <motion.div variants={itemVariants} className="text-center py-8">
          <div className="text-gray-400 dark:text-gray-500">
            <div className="text-4xl mb-2">📭</div>
            <p>No more alerts</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Alerts;
