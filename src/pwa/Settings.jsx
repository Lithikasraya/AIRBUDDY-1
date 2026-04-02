import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';
import PWABottomNav from '../components/PWABottomNav';

const Settings = () => {
  const { isDark, toggleTheme } = useTheme();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(true);
  const [location, setLocation] = useState('San Francisco, CA');
  const [email, setEmail] = useState('user@example.com');
  const [phone, setPhone] = useState('+1 234 567 8900');

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

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/pwa/login');
  };

  const handleSaveSettings = () => {
    toast.success('Settings saved successfully');
  };

  const handleResetSettings = () => {
    setLocation('San Francisco, CA');
    setEmail('user@example.com');
    setPhone('+1 234 567 8900');
    setNotifications(true);
    toast.success('Settings reset to default');
  };

  return (
    <>
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
              Settings
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage your preferences and account
            </p>
        </motion.div>

        {/* User Profile Card */}
        <motion.div variants={itemVariants}>
          <div className="glass dark:bg-gray-800/20 dark:border-gray-700/20 rounded-3xl p-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold">
                JD
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  John Doe
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Premium Member
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-glass w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="input-glass w-full"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Location Settings */}
        <motion.div variants={itemVariants}>
          <div className="glass dark:bg-gray-800/20 dark:border-gray-700/20 rounded-3xl p-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              📍 Location
            </h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Current Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="input-glass w-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Notification Settings */}
        <motion.div variants={itemVariants}>
          <div className="glass dark:bg-gray-800/20 dark:border-gray-700/20 rounded-3xl p-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              🔔 Notifications
            </h3>
            <div className="space-y-4">
              <label className="flex items-center justify-between p-3 rounded-xl hover:bg-white/10 dark:hover:bg-gray-700/10 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <span className="text-xl">📱</span>
                  <span className="text-gray-800 dark:text-gray-100">
                    Push Notifications
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={notifications}
                  onChange={(e) => setNotifications(e.target.checked)}
                  className="w-5 h-5 rounded-lg text-blue-500 focus:ring-blue-500 focus:ring-2"
                />
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl hover:bg-white/10 dark:hover:bg-gray-700/10 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <span className="text-xl">📧</span>
                  <span className="text-gray-800 dark:text-gray-100">
                    Email Alerts
                  </span>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 rounded-lg text-blue-500 focus:ring-blue-500 focus:ring-2"
                />
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl hover:bg-white/10 dark:hover:bg-gray-700/10 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <span className="text-xl">🌙</span>
                  <span className="text-gray-800 dark:text-gray-100">
                    Night Mode Alerts
                  </span>
                </div>
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded-lg text-blue-500 focus:ring-blue-500 focus:ring-2"
                />
              </label>
            </div>
          </div>
        </motion.div>

        {/* Theme Settings */}
        <motion.div variants={itemVariants}>
          <div className="glass dark:bg-gray-800/20 dark:border-gray-700/20 rounded-3xl p-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              🎨 Theme
            </h3>
            <div className="space-y-4">
              <label className="flex items-center justify-between p-3 rounded-xl hover:bg-white/10 dark:hover:bg-gray-700/10 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <span className="text-xl">{isDark ? '🌙' : '☀️'}</span>
                  <span className="text-gray-800 dark:text-gray-100">
                    {isDark ? 'Dark Mode' : 'Light Mode'}
                  </span>
                </div>
                <button
                  onClick={toggleTheme}
                  className="w-14 h-8 bg-gray-300 dark:bg-gray-600 rounded-full relative transition-colors duration-300"
                >
                  <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${isDark ? 'translate-x-7' : 'translate-x-1'}`}></div>
                </button>
              </label>
            </div>
          </div>
        </motion.div>

        {/* App Information */}
        <motion.div variants={itemVariants}>
          <div className="glass dark:bg-gray-800/20 dark:border-gray-700/20 rounded-3xl p-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              ℹ️ App Information
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Version</span>
                <span className="text-gray-800 dark:text-gray-100">1.0.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Build</span>
                <span className="text-gray-800 dark:text-gray-100">2024.03.15</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Developer</span>
                <span className="text-gray-800 dark:text-gray-100">Air Quality Labs</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Help & Support */}
        <motion.div variants={itemVariants}>
          <div className="glass dark:bg-gray-800/20 dark:border-gray-700/20 rounded-3xl p-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              🤝 Help & Support
            </h3>
            <div className="space-y-3">
              <button
                onClick={() => toast('Opening help center...')}
                className="w-full text-left p-3 rounded-xl hover:bg-white/10 dark:hover:bg-gray-700/10 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xl">📚</span>
                  <span className="text-gray-800 dark:text-gray-100">Help Center</span>
                </div>
                <span className="text-gray-400">→</span>
              </button>
              
              <button
                onClick={() => toast('Opening contact form...')}
                className="w-full text-left p-3 rounded-xl hover:bg-white/10 dark:hover:bg-gray-700/10 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xl">💬</span>
                  <span className="text-gray-800 dark:text-gray-100">Contact Support</span>
                </div>
                <span className="text-gray-400">→</span>
              </button>
              
              <button
                onClick={() => toast('Opening privacy policy...')}
                className="w-full text-left p-3 rounded-xl hover:bg-white/10 dark:hover:bg-gray-700/10 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xl">🔒</span>
                  <span className="text-gray-800 dark:text-gray-100">Privacy Policy</span>
                </div>
                <span className="text-gray-400">→</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex space-x-4">
            <button
              onClick={handleSaveSettings}
              className="btn-primary flex-1"
            >
              💾 Save Settings
            </button>
            <button
              onClick={handleResetSettings}
              className="btn-secondary flex-1"
            >
              🔄 Reset
            </button>
          </div>
          
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            🚪 Logout
          </button>
        </motion.div>
      </motion.div>
      </div>
      <PWABottomNav />
    </>
  );
};

export default Settings;
