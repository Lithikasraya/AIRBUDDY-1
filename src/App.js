import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import ProtectedRoute from './components/ProtectedRoute';

// Dashboard Pages
import Login from './dashboard/Login';
import Dashboard from './dashboard/Dashboard';
import Alerts from './dashboard/Alerts';
import Analytics from './dashboard/Analytics';
import Settings from './dashboard/Settings';
import Admin from './dashboard/Admin';

// PWA Pages
import PWALogin from './pwa/Login';
import PWADashboard from './pwa/Dashboard';
import PWAAlerts from './pwa/Alerts';
import PWAAnalytics from './pwa/Analytics';
import PWASettings from './pwa/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ============ DASHBOARD ROUTES ============ */}
        
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/alerts"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Alerts />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Analytics />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Settings />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Admin />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* ============ PWA ROUTES ============ */}
        
        {/* PWA Login */}
        <Route path="/pwa/login" element={<PWALogin />} />

        {/* PWA Protected Routes */}
        <Route
          path="/pwa/dashboard"
          element={
            <ProtectedRoute>
              <PWADashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pwa/alerts"
          element={
            <ProtectedRoute>
              <PWAAlerts />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pwa/analytics"
          element={
            <ProtectedRoute>
              <PWAAnalytics />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pwa/settings"
          element={
            <ProtectedRoute>
              <PWASettings />
            </ProtectedRoute>
          }
        />

        {/* Default Route */}
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
