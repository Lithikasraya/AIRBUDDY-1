import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', hover = true, ...props }) => {
  const content = (
    <div
      className={`backdrop-blur-lg bg-white/40 dark:bg-dark-800/50 border border-gray-200 dark:border-dark-700/50 rounded-3xl shadow-glass hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 ${
        hover ? 'hover:shadow-glow' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );

  if (hover) {
    return (
      <motion.div whileHover={{ y: -4 }}>
        {content}
      </motion.div>
    );
  }

  return content;
};

export default GlassCard;
