import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cloud, Mail, Lock, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/Button';
import Input from '../components/Input';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (!email || !password) {
        setError('Please fill in all fields');
        return;
      }
      login({ email, password });
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-50 dark:from-dark-950 dark:via-dark-900 dark:to-dark-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 dark:bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 dark:bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="backdrop-blur-xl bg-white/40 dark:bg-dark-800/50 border border-gray-300 dark:border-dark-700/50 rounded-3xl p-8 shadow-glass">
          {/* Header */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center"
            >
              <Cloud className="text-white" size={32} />
            </motion.div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">AIR BUDDY </h1>
            <p className="text-gray-500 text-sm">Air Quality Network</p>
          </motion.div>

          {/* Form Title */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Welcome back</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Enter your credentials to access your dashboard</p>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-sm"
            >
              {error}
            </motion.div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 mb-6">
            <Input
              type="email"
              icon={Mail}
              placeholder="name@organization.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              type="password"
              icon={Lock}
              showPasswordToggle
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Forgot Password */}
            <div className="flex justify-end">
              <a
                href="#"
                className="text-sm text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
              >
                Forgot Password?
              </a>
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-full text-base"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login to Dashboard'}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-dark-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-dark-800 text-gray-600 dark:text-gray-500">OR CONTINUE WITH</span>
            </div>
          </div>

          {/* Social Login */}
          <Button
            variant="secondary"
            className="w-full text-base justify-center"
          >
            <Globe size={20} />
            Continue with Google
          </Button>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-300 dark:border-dark-700/50">
            <p className="text-center text-gray-600 dark:text-gray-400 text-sm mb-4">
              {' '}
              <a href="#" className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
               
              </a>
            </p>

            <div className="flex items-center justify-center gap-4 text-xs text-gray-600 dark:text-gray-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Network Online
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
