import React from 'react';
import { AlertTriangle, Info, AlertCircle, Clock, MapPin, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';
import { useSensor } from '../contexts/SensorContext';

const Alerts = () => {
  const { alerts } = useSensor();

  const getAlertIcon = (type) => {
    switch (type) {
      case 'critical':
        return <AlertTriangle className="text-red-400" size={24} />;
      case 'warning':
        return <AlertCircle className="text-yellow-400" size={24} />;
      default:
        return <Info className="text-blue-400" size={24} />;
    }
  };

  const getAlertBg = (type) => {
    switch (type) {
      case 'critical':
        return 'bg-red-500/10 border-red-500/30';
      case 'warning':
        return 'bg-yellow-500/10 border-yellow-500/30';
      default:
        return 'bg-blue-500/10 border-blue-500/30';
    }
  };

  const formatTime = (date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);

    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return date.toLocaleDateString();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      {/* Header */}
      <motion.div initial={{ y: -20 }} animate={{ y: 0 }}>
        <h1 className="text-4xl font-bold text-white mb-2">Alerts</h1>
        <p className="text-gray-400">
          {alerts.length} alert{alerts.length !== 1 ? 's' : ''} detected
        </p>
      </motion.div>

      {/* Alerts List */}
      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <motion.div
            key={alert.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <GlassCard
              className={`p-6 border ${getAlertBg(alert.type)}`}
              hover={false}
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">{getAlertIcon(alert.type)}</div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {alert.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{alert.description}</p>

                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      {formatTime(alert.timestamp)}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {alert.location}
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg hover:bg-dark-700/50 transition-colors text-gray-500 hover:text-red-400"
                >
                  <Trash2 size={18} />
                </motion.button>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {alerts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <Info size={48} className="mx-auto text-gray-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-400 mb-2">No Active Alerts</h3>
          <p className="text-gray-500">All systems are operating normally</p>
        </motion.div>
      )}

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex gap-3 pt-6 border-t border-dark-700/50"
      >
        <Button variant="secondary">Clear All</Button>
        <Button variant="secondary">Export Report</Button>
      </motion.div>
    </motion.div>
  );
};

export default Alerts;
