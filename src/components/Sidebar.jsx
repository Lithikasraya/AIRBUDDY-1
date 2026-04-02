import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Cloud, AlertCircle, BarChart3, Settings, Users, HelpCircle, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { label: 'Dashboard', href: '/dashboard', icon: Cloud },
    { label: 'Alerts', href: '/alerts', icon: AlertCircle },
    { label: 'Analytics', href: '/analytics', icon: BarChart3 },
    { label: 'Settings', href: '/settings', icon: Settings },
    { label: 'Admin', href: '/admin', icon: Users },
  ];

  const bottomItems = [
    { label: 'Support', href: '#', icon: HelpCircle },
    { label: 'Documentation', href: '#', icon: BookOpen },
  ];

  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      className="w-80 h-screen bg-gradient-to-b from-gray-50 to-white dark:from-dark-950 dark:to-dark-900 border-r border-gray-200 dark:border-dark-700/50 sticky top-0 z-40 flex flex-col"
    >
      {/* Logo Section */}
      <div className="p-8 border-b border-gray-200 dark:border-dark-700/50">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center dark:from-blue-400 dark:to-blue-600">
            <Cloud className="text-white" size={24} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">AIR BUDDY</h2>
            <p className="text-xs text-gray-500 dark:text-gray-500">Air Quality Network</p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-4 py-8 space-y-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;

          return (
            <Link key={item.href} to={item.href}>
              <motion.div
                whileHover={{ x: 4 }}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-glow dark:from-blue-600 dark:to-blue-500'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-dark-800/50'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 dark:border-dark-700/50 p-4 space-y-4">
        <div className="space-y-2 px-2">
          {bottomItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} to={item.href}>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 py-2 transition-colors">
                  <Icon size={18} />
                  <span className="text-sm">{item.label}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
