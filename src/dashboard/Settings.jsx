import React, { useState } from 'react';
import { Edit2, Copy, Lock, Bell, Wifi, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';
import Input from '../components/Input';
import { useAuth } from '../contexts/AuthContext';

const Settings = () => {
  const { user } = useAuth();
  const [fullName, setFullName] = useState(user?.name || 'lithika');
  const [email, setEmail] = useState(user?.email || 'alex@example.com');
  const [bio, setBio] = useState('Air Quality Enthusiast');
  const [avatar, setAvatar] = useState(user?.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex');
  const [showApiKey, setShowApiKey] = useState(false);
  const [apiKey] = useState('sk_live_51234567890abcdefghij');
  const [criticalAlerts, setCriticalAlerts] = useState(true);
  const [weeklyReports, setWeeklyReports] = useState(false);
  const [deviceOfflineAlerts, setDeviceOfflineAlerts] = useState(true);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleCopyApiKey = () => {
    navigator.clipboard.writeText(apiKey);
    alert('API Key copied to clipboard!');
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setAvatar(event.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8 max-w-4xl"
    >
      {/* Header */}
      <motion.div initial={{ y: -20 }} animate={{ y: 0 }}>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Account Settings</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Configure your device parameters and security preferences
        </p>
      </motion.div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <GlassCard className="p-8">
          <div className="flex items-center gap-6 mb-8">
            <div className="relative">
              <img
                src={avatar}
                alt={fullName}
                className="w-20 h-20 rounded-full border-2 border-blue-500"
              />
              <label htmlFor="avatar-upload">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="absolute bottom-0 right-0 p-2 bg-blue-600 dark:bg-blue-600 rounded-full text-white hover:bg-blue-700 dark:hover:bg-blue-700 cursor-pointer"
                  type="button"
                  onClick={() => document.getElementById('avatar-upload')?.click()}
                >
                  <Edit2 size={16} />
                </motion.button>
              </label>
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{fullName}</h2>
              <p className="text-gray-600 dark:text-gray-400">{user?.role || 'User'}</p>
            </div>
          </div>

          {saveSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-3 bg-green-500/20 border border-green-500/50 rounded-xl text-green-600 dark:text-green-400 text-sm"
            >
              ✓ Profile updated successfully!
            </motion.div>
          )}

          <div className="space-y-4">
            <Input
              label="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
            />
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <Input
              label="Bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Add a bio about yourself"
            />
          </div>
        </GlassCard>
      </motion.div>

      {/* Device Configuration */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <GlassCard className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Device Configuration</h3>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="px-4 py-1 rounded-full bg-green-500/20 border border-green-500/50 text-green-400 text-sm font-medium flex items-center gap-2"
            >
              <Wifi size={14} />
              ONLINE
            </motion.div>
          </div>

          <div className="space-y-4">
            <Input label="Device ID" value="IOT-2024-001289" disabled placeholder="Device ID" />
            <Input label="Friendly Name" value="Living Room Air Quality Monitor" placeholder="Enter device name" />
            <Input label="Installation Location" value="Living Room" placeholder="Enter location" />
          </div>
        </GlassCard>
      </motion.div>

      {/* API & Security */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <GlassCard className="p-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">API & Security</h3>

          <div className="space-y-4">
            {/* API Key */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                API Key
              </label>
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <input
                    type={showApiKey ? 'text' : 'password'}
                    value={apiKey}
                    readOnly
                    className="w-full bg-white dark:bg-dark-700/50 border border-gray-300 dark:border-dark-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                  <button
                    onClick={() => setShowApiKey(!showApiKey)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-400"
                  >
                    {showApiKey ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <Button variant="secondary" size="md" onClick={handleCopyApiKey}>
                  <Copy size={18} />
                </Button>
              </div>
            </div>

            {/* Warning */}
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-sm flex gap-3">
              <Lock size={18} className="flex-shrink-0 mt-0.5" />
              <p>
                <strong>Keep this API key secret!</strong> Anyone with access to it can
                make API calls on your behalf.
              </p>
            </div>

            {/* 2FA Button */}
            <Button variant="secondary" className="w-full justify-center">
              <Lock size={18} />
              Enable Two-Factor Authentication
            </Button>
          </div>
        </GlassCard>
      </motion.div>

      {/* Notification Preferences */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <GlassCard className="p-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Bell size={24} />
            Notification Preferences
          </h3>

          <div className="space-y-4">
            {/* Critical Alerts */}
            <div className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-dark-700/50 transition-colors">
              <div>
                <p className="text-gray-900 dark:text-white font-medium">Critical Alerts</p>
                <p className="text-gray-600 dark:text-gray-500 text-sm">Get notified of critical errors</p>
              </div>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={criticalAlerts}
                  onChange={(e) => setCriticalAlerts(e.target.checked)}
                  className="w-5 h-5 rounded accent-blue-500"
                />
              </label>
            </div>

            {/* Weekly Reports */}
            <div className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-dark-700/50 transition-colors">
              <div>
                <p className="text-gray-900 dark:text-white font-medium">Weekly Reports</p>
                <p className="text-gray-600 dark:text-gray-500 text-sm">Receive weekly summary reports</p>
              </div>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={weeklyReports}
                  onChange={(e) => setWeeklyReports(e.target.checked)}
                  className="w-5 h-5 rounded accent-blue-500"
                />
              </label>
            </div>

            {/* Device Offline */}
            <div className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-dark-700/50 transition-colors">
              <div>
                <p className="text-gray-900 dark:text-white font-medium">Device Offline Alerts</p>
                <p className="text-gray-600 dark:text-gray-500 text-sm">Alert when a device goes offline</p>
              </div>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={deviceOfflineAlerts}
                  onChange={(e) => setDeviceOfflineAlerts(e.target.checked)}
                  className="w-5 h-5 rounded accent-blue-500"
                />
              </label>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Footer Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex items-center justify-between pt-6 border-t border-gray-300 dark:border-dark-700/50"
      >
        <p className="text-gray-600 dark:text-gray-500 text-sm">Last synced: Just now</p>
        <div className="flex gap-3">
          <Button variant="outline">Discard Changes</Button>
          <Button variant="primary" onClick={handleSave}>Save Changes</Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Settings;
