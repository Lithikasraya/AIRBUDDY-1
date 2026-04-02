import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="p-2 rounded-lg bg-gray-200 dark:bg-dark-700/50 hover:bg-gray-300 dark:hover:bg-dark-600 transition-colors border border-gray-300 dark:border-dark-600 text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </motion.button>
  );
};

export default ThemeToggle;
