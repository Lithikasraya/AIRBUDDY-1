import React, { createContext, useContext, useState, useEffect } from 'react';

const SensorContext = createContext();

const MOCK_METRICS = {
  temperature: 24.5,
  humidity: 65,
  pm25: 35,
  pm10: 52,
  soundLevel: 52,
  co2: 450,
};

export const SensorProvider = ({ children }) => {
  const [metrics, setMetrics] = useState(MOCK_METRICS);
  const [alerts, setAlerts] = useState([
    {
      id: '1',
      type: 'critical',
      title: 'High PM2.5 Level',
      description: 'PM2.5 level exceeded safe limits',
      location: 'Living Room',
      timestamp: new Date(Date.now() - 5 * 60000),
    },
    {
      id: '2',
      type: 'warning',
      title: 'Humidity Alert',
      description: 'Indoor humidity is above recommended level',
      location: 'Bedroom',
      timestamp: new Date(Date.now() - 15 * 60000),
    },
    {
      id: '3',
      type: 'info',
      title: 'System Online',
      description: 'All sensors are operational',
      location: 'System',
      timestamp: new Date(Date.now() - 30 * 60000),
    },
  ]);

  const [chartData, setChartData] = useState(
    Array.from({ length: 24 }, (_, i) => ({
      time: `${i}:00`,
      pm25: Math.floor(Math.random() * 100),
      humidity: Math.floor(Math.random() * 100),
      temperature: Math.floor(Math.random() * 30) + 10,
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        temperature: 24.5 + (Math.random() - 0.5) * 2,
        humidity: 65 + (Math.random() - 0.5) * 10,
        pm25: 35 + (Math.random() - 0.5) * 15,
        pm10: 52 + (Math.random() - 0.5) * 20,
        soundLevel: 52 + (Math.random() - 0.5) * 10,
        co2: 450 + (Math.random() - 0.5) * 50,
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SensorContext.Provider value={{ metrics, alerts, chartData }}>
      {children}
    </SensorContext.Provider>
  );
};

export const useSensor = () => {
  const context = useContext(SensorContext);
  if (!context) {
    throw new Error('useSensor must be used within SensorProvider');
  }
  return context;
};
