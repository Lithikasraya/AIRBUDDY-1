import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import PWABottomNav from '../components/PWABottomNav';

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
      green: 'bg-green-900/30 border-green-600/50 dark:bg-green-800/40 dark:border-green-500/60',
      yellow: 'bg-yellow-900/30 border-yellow-600/50 dark:bg-yellow-800/40 dark:border-yellow-500/60',
      orange: 'bg-orange-900/30 border-orange-600/50 dark:bg-orange-800/40 dark:border-orange-500/60',
      red: 'bg-red-900/30 border-red-600/50 dark:bg-red-800/40 dark:border-red-500/60'
    };
    return styles[color] || styles.yellow;
  };

  const getIconColor = (color) => {
    const colors = {
      green: 'text-green-600 dark:text-green-400',
      yellow: 'text-yellow-600 dark:text-yellow-400',
      orange: 'text-orange-600 dark:text-orange-400',
      red: 'text-red-600 dark:text-red-400'
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
    <>
      <div className="min-h-screen pb-20 xs:pb-20 sm:pb-24 px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 py-3 xs:py-4 sm:py-6 md:py-8 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto w-full space-y-4 xs:space-y-6 sm:space-y-8"
        >
          {/* Header */}
        <motion.div variants={itemVariants} className="text-center">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Air Quality Alerts
          </h1>
          <p className="text-sm xs:text-base sm:text-lg text-gray-700 dark:text-gray-300">
            Stay informed about air quality changes
          </p>
        </motion.div>

        {/* Alert Settings */}
        <motion.div variants={itemVariants}>
          <div className="glass dark:bg-gray-800/40 dark:border-gray-700/40 rounded-xl xs:rounded-2xl sm:rounded-3xl p-4 xs:p-6">
            <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 xs:mb-6">
              Alert Preferences
            </h2>
            <div className="space-y-3 xs:space-y-4">
              <label className="flex items-center justify-between p-3 xs:p-4 rounded-xl hover:bg-gray-100/20 dark:hover:bg-gray-700/20 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <span className="text-xl xs:text-2xl">🔔</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-gray-100">
                      Push Notifications
                    </div>
                    <div className="text-sm xs:text-base text-gray-600 dark:text-gray-400">
                      Get alerts on your device
                    </div>
                  </div>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 rounded-lg text-blue-600 focus:ring-blue-600 focus:ring-2 dark:text-blue-500 dark:focus:ring-blue-500"
                />
              </label>

              <label className="flex items-center justify-between p-3 xs:p-4 rounded-xl hover:bg-gray-100/20 dark:hover:bg-gray-700/20 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <span className="text-xl xs:text-2xl">📧</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-gray-100">
                      Email Alerts
                    </div>
                    <div className="text-sm xs:text-base text-gray-600 dark:text-gray-400">
                      Daily summary emails
                    </div>
                  </div>
                </div>
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded-lg text-blue-600 focus:ring-blue-600 focus:ring-2 dark:text-blue-500 dark:focus:ring-blue-500"
                />
              </label>

              <label className="flex items-center justify-between p-3 xs:p-4 rounded-xl hover:bg-gray-100/20 dark:hover:bg-gray-700/20 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <span className="text-xl xs:text-2xl">📱</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-gray-100">
                      SMS Alerts
                    </div>
                    <div className="text-sm xs:text-base text-gray-600 dark:text-gray-400">
                      Critical alerts only
                    </div>
                  </div>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 rounded-lg text-blue-600 focus:ring-blue-600 focus:ring-2 dark:text-blue-500 dark:focus:ring-blue-500"
                />
              </label>
            </div>
          </div>
        </motion.div>

        {/* Alert Statistics */}
        <motion.div variants={itemVariants}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 xs:gap-4">
            <div className="glass dark:bg-gray-800/40 dark:border-gray-700/40 rounded-lg xs:rounded-xl sm:rounded-2xl p-3 xs:p-4 text-center">
              <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-green-600 dark:text-green-400">3</div>
              <div className="text-sm xs:text-base sm:text-lg text-gray-700 dark:text-gray-300">Good</div>
            </div>
            <div className="glass dark:bg-gray-800/40 dark:border-gray-700/40 rounded-lg xs:rounded-xl sm:rounded-2xl p-3 xs:p-4 text-center">
              <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-yellow-600 dark:text-yellow-400">1</div>
              <div className="text-sm xs:text-base sm:text-lg text-gray-700 dark:text-gray-300">Moderate</div>
            </div>
            <div className="glass dark:bg-gray-800/40 dark:border-gray-700/40 rounded-lg xs:rounded-xl sm:rounded-2xl p-3 xs:p-4 text-center">
              <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-red-600 dark:text-red-400">1</div>
              <div className="text-sm xs:text-base sm:text-lg text-gray-700 dark:text-gray-300">Unhealthy</div>
            </div>
          </div>
        </motion.div>

        {/* Alerts List */}
        <motion.div variants={itemVariants} className="space-y-3 xs:space-y-4">
          <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
            Recent Alerts
          </h2>
          
          {alerts.map((alert) => (
            <motion.div
              key={alert.id}
              variants={itemVariants}
              className={`glass dark:bg-gray-800/40 dark:border-gray-700/40 rounded-xl xs:rounded-2xl sm:rounded-3xl p-4 xs:p-6 border-2 ${getAlertStyles(alert.color)} card-hover`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex items-start space-x-4">
                  <div className={`text-2xl xs:text-3xl ${getIconColor(alert.color)}`}>
                    {alert.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      {alert.title}
                    </h3>
                    <p className="text-sm xs:text-base text-gray-700 dark:text-gray-300 mb-3">
                      {alert.description}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <span className="text-sm xs:text-base text-gray-600 dark:text-gray-400">
                        {alert.time}
                      </span>
                      <span className={`text-xs xs:text-sm px-2 py-1 rounded-full font-medium ${getAlertStyles(alert.color)}`}>
                        {alert.type}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => handleMarkAsRead(alert.id)}
                    className="text-sm xs:text-base text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium px-3 py-1 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                  >
                    Mark as read
                  </button>
                  <button
                    onClick={() => handleDismissAlert(alert.id)}
                    className="text-sm xs:text-base text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 font-medium px-3 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No More Alerts */}
        <motion.div variants={itemVariants} className="text-center py-6 xs:py-8">
          <div className="text-gray-500 dark:text-gray-400">
            <div className="text-3xl xs:text-4xl mb-2">📭</div>
            <p className="text-sm xs:text-base">No more alerts</p>
          </div>
        </motion.div>
      </motion.div>
      </div>
      <PWABottomNav />
    </>
  );
};

export default Alerts;
