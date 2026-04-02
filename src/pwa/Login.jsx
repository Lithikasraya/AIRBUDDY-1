import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import QrScanner from 'react-qr-scanner';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [showQRScanner, setShowQRScanner] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      login({ email: username, password: 'pwa-login' });
      toast.success('Welcome back!');
      navigate('/pwa/dashboard');
    } else {
      toast.error('Please enter your username');
    }
  };

  const handleQRScan = (data) => {
    if (data) {
      // Simulate successful QR scan
      setShowQRScanner(false);
      const qrUsername = 'User_' + Math.random().toString(36).substr(2, 9);
      login({ email: qrUsername, password: 'pwa-login' });
      toast.success('QR Code scanned successfully!');
      navigate('/pwa/dashboard');
    }
  };

  const handleError = (error) => {
    console.error('QR Scanner Error:', error);
    toast.error('Camera access denied or error occurred');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="glass dark:bg-gray-800/20 dark:border-gray-700/20 rounded-3xl p-8 shadow-2xl">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="text-6xl mb-4"
            >
              🌬️
            </motion.div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
              Air Quality Monitor
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Monitor your air quality in real-time
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="input-glass w-full"
                required
              />
            </div>

            <div className="space-y-4">
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Sign In
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-transparent text-gray-500 dark:text-gray-400">
                    Or
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowQRScanner(true)}
                className="btn-secondary w-full flex items-center justify-center space-x-2"
              >
                <span>📷</span>
                <span>Scan QR Code</span>
              </button>
            </div>
          </form>

          {/* Sign Up Link */}
          <div className="text-center mt-6">
            <p className="text-gray-600 dark:text-gray-400">
              Don't have an account?{' '}
              <button
                onClick={() => toast('Sign up feature coming soon!')}
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>

        {/* QR Scanner Modal */}
        {showQRScanner && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setShowQRScanner(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="glass dark:bg-gray-800/20 dark:border-gray-700/20 rounded-3xl p-6 w-full max-w-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                  Scan QR Code
                </h3>
                <button
                  onClick={() => setShowQRScanner(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  ✕
                </button>
              </div>

              <div className="rounded-2xl overflow-hidden mb-4">
                <QrScanner
                  onScan={handleQRScan}
                  onError={handleError}
                  style={{ width: '100%' }}
                />
              </div>

              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                Position the QR code within the frame
              </p>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Login;
