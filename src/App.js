import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Alerts from './pages/Alerts';
import Settings from './pages/Settings';
import BottomNav from './components/BottomNav';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-all duration-300">
        <Routes>
          <Route 
            path="/" 
            element={<Login setIsAuthenticated={setIsAuthenticated} />} 
          />
          <Route 
            path="/dashboard" 
            element={
              <>
                <Dashboard />
                {isAuthenticated && <BottomNav />}
              </>
            } 
          />
          <Route 
            path="/analytics" 
            element={
              <>
                <Analytics />
                {isAuthenticated && <BottomNav />}
              </>
            } 
          />
          <Route 
            path="/alerts" 
            element={
              <>
                <Alerts />
                {isAuthenticated && <BottomNav />}
              </>
            } 
          />
          <Route 
            path="/settings" 
            element={
              <>
                <Settings setIsAuthenticated={setIsAuthenticated} />
                {isAuthenticated && <BottomNav />}
              </>
            } 
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
