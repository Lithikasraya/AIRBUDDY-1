import React from 'react';
import { Bell, Wifi, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="h-20 bg-white dark:bg-dark-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-dark-700/50 sticky top-0 z-30 flex items-center justify-between px-8"
    >
      <div className="flex items-center gap-6">
        <motion.div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-dark-800/50 border border-gray-300 dark:border-dark-700/50">
          <Wifi size={18} className="text-green-400" />
          <span className="text-sm text-gray-700 dark:text-gray-300">Network Online</span>
        </motion.div>
      </div>

      <div className="flex items-center gap-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="p-2 rounded-lg bg-gray-200 dark:bg-dark-700/50 hover:bg-gray-300 dark:hover:bg-dark-600 transition-colors border border-gray-300 dark:border-dark-600 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 relative"
        >
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </motion.button>

        <ThemeToggle />

        <div className="flex items-center gap-3 pl-6 border-l border-gray-200 dark:border-dark-700/50">
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900 dark:text-white">{user?.name || 'User'}</p>
            <p className="text-xs text-gray-500 dark:text-gray-500">{user?.role || 'Admin'}</p>
          </div>
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={user?.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=default'}
            alt={user?.name}
            className="w-10 h-10 rounded-full border-2 border-blue-500"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={logout}
            className="p-2 rounded-lg hover:bg-dark-700/50 transition-colors text-gray-400 hover:text-red-400 ml-2"
          >
            <LogOut size={18} />
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
