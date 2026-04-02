import React from 'react';
import { motion } from 'framer-motion';

const MetricCard = ({ icon: Icon, label, value, unit, status = 'normal' }) => {
  const statusColors = {
    normal: 'text-green-400',
    warning: 'text-yellow-400',
    critical: 'text-red-400',
  };

  const statusBg = {
    normal: 'bg-green-500/10',
    warning: 'bg-yellow-500/10',
    critical: 'bg-red-500/10',
  };

  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 0 30px rgba(14, 165, 233, 0.4)' }}
      className={`col-span-1 backdrop-blur-lg bg-white/40 dark:bg-dark-800/50 border border-gray-300 dark:border-dark-700/50 rounded-3xl p-6 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 shadow-glass`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-2xl ${statusBg[status]}`}>
          <Icon size={24} className={statusColors[status]} />
        </div>
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-2 h-2 rounded-full bg-green-400"
        />
      </div>
      <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">{label}</h3>
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">{value}</span>
        <span className="text-gray-500 dark:text-gray-500 text-sm">{unit}</span>
      </div>
    </motion.div>
  );
};

export default MetricCard;
