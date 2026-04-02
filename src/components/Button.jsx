import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseStyles = 'font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:shadow-glow',
    secondary: 'bg-gray-200 dark:bg-dark-700 text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-dark-600 hover:bg-gray-300 dark:hover:bg-dark-600',
    outline: 'border-2 border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-500/10',
    ghost: 'hover:bg-gray-200 dark:hover:bg-dark-700/50 text-gray-700 dark:text-gray-300',
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
