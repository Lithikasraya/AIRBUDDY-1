import React, { useState } from 'react';
import { Trash2, Edit, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';
import Input from '../components/Input';

const Admin = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const [users] = useState([
    {
      id: '1',
      name: 'Alex Rivera',
      email: 'alex.rivera@organization.com',
      role: 'Admin',
      status: 'active',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    },
    {
      id: '2',
      name: 'Jordan Smith',
      email: 'jordan.smith@organization.com',
      role: 'User',
      status: 'active',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan',
    },
    {
      id: '3',
      name: 'Sam Johnson',
      email: 'sam.johnson@organization.com',
      role: 'User',
      status: 'inactive',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sam',
    },
    {
      id: '4',
      name: 'Taylor Brown',
      email: 'taylor.brown@organization.com',
      role: 'Manager',
      status: 'active',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Taylor',
    },
  ]);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      {/* Header */}
      <motion.div initial={{ y: -20 }} animate={{ y: 0 }}>
        <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
        <p className="text-gray-400">Manage users and system settings</p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        {[
          { label: 'Total Users', value: users.length, color: 'from-blue-500 to-blue-700' },
          {
            label: 'Active Users',
            value: users.filter((u) => u.status === 'active').length,
            color: 'from-green-500 to-green-700',
          },
          {
            label: 'Inactive Users',
            value: users.filter((u) => u.status === 'inactive').length,
            color: 'from-yellow-500 to-yellow-700',
          },
          {
            label: 'Admins',
            value: users.filter((u) => u.role === 'Admin').length,
            color: 'from-purple-500 to-purple-700',
          },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.05 }}
            className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 text-white`}
          >
            <p className="text-sm opacity-90 mb-2">{stat.label}</p>
            <p className="text-3xl font-bold">{stat.value}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Users Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <GlassCard className="p-8">
          {/* Search */}
          <div className="mb-6">
            <Input
              icon={Search}
              placeholder="Search users by name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-dark-700/50">
                  <th className="text-left py-4 px-4 text-gray-400 font-semibold text-sm">
                    User
                  </th>
                  <th className="text-left py-4 px-4 text-gray-400 font-semibold text-sm">
                    Email
                  </th>
                  <th className="text-left py-4 px-4 text-gray-400 font-semibold text-sm">
                    Role
                  </th>
                  <th className="text-left py-4 px-4 text-gray-400 font-semibold text-sm">
                    Status
                  </th>
                  <th className="text-left py-4 px-4 text-gray-400 font-semibold text-sm">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, index) => (
                  <motion.tr
                    key={user.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    className="border-b border-dark-700/50 hover:bg-dark-700/30 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <span className="text-white font-medium">{user.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-gray-400">{user.email}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400">
                        {user.role}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          user.status === 'active'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-gray-500/20 text-gray-400'
                        }`}
                      >
                        {user.status === 'active' ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 rounded-lg hover:bg-dark-700/50 transition-colors text-gray-400 hover:text-blue-400"
                        >
                          <Edit size={18} />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 rounded-lg hover:bg-dark-700/50 transition-colors text-gray-400 hover:text-red-400"
                        >
                          <Trash2 size={18} />
                        </motion.button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>

            {filteredUsers.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-400">No users found</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6 pt-6 border-t border-dark-700/50">
            <p className="text-gray-400 text-sm">
              Showing {filteredUsers.length} of {users.length} users
            </p>
            <div className="flex gap-2">
              <Button variant="secondary" size="sm">
                Previous
              </Button>
              <Button variant="primary" size="sm">
                Next
              </Button>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
};

export default Admin;
