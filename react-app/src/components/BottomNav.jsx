import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: '/dashboard', icon: '🏠', label: 'Dashboard' },
    { path: '/analytics', icon: '📊', label: 'Analytics' },
    { path: '/alerts', icon: '🔔', label: 'Alerts' },
    { path: '/settings', icon: '⚙️', label: 'Settings' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 glass dark:bg-gray-800/20 dark:border-gray-700/20 border-t border-white/20 dark:border-gray-700/20 z-50">
      <div className="flex items-center justify-around py-2 px-4">
        {navItems.map((item, index) => (
          <motion.button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center justify-center py-2 px-4 rounded-2xl transition-all duration-300 ${
              isActive(item.path)
                ? 'text-blue-500 dark:text-blue-400 bg-blue-500/20 dark:bg-blue-400/20'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <span className="text-2xl mb-1">{item.icon}</span>
            <span className="text-xs font-medium">{item.label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
