# Air Quality Monitor - React App

A modern, mobile-first Air Quality Monitoring System built with React and Tailwind CSS, featuring a beautiful glassmorphism design and comprehensive functionality.

## 🚀 Features

### 📱 **Mobile-First Design**
- Responsive layout optimized for all devices
- Touch-friendly interface
- Bottom navigation for easy mobile access
- Glassmorphism UI with blur effects

### 🎨 **Beautiful UI/UX**
- Glassmorphism design with soft UI elements
- Light and Dark mode support
- Smooth animations and transitions
- Gradient color schemes (blue, cyan, purple)
- Clean typography with Inter font

### 📊 **Dashboard Features**
- Real-time AQI gauge with color-coded indicators
- Live sensor data cards (Temperature, Humidity, PM2.5, PM10)
- Interactive charts with Recharts
- Weekly trend visualization
- Smart statistics and insights

### 📈 **Analytics**
- Daily AQI trend charts
- Monthly average analysis
- Weekly comparisons
- Best/Worst day tracking
- Statistical summaries

### 🔔 **Smart Alerts**
- Color-coded alert system
- Push notification preferences
- Email and SMS alert options
- Alert history and management
- Real-time notifications

### ⚙️ **Settings & Preferences**
- User profile management
- Location settings
- Theme toggle (Light/Dark)
- Notification preferences
- App information and support

### 🔐 **Authentication**
- Secure login system
- QR code scanning capability
- User session management
- Protected routes

## 🛠️ Technology Stack

- **React 18** - Modern React with hooks
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Recharts** - Data visualization
- **React Hot Toast** - Toast notifications
- **React QR Reader** - QR code scanning
- **Lottie React** - Beautiful animations
- **React Circular Progressbar** - AQI gauge

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AQIGauge.jsx    # Circular AQI gauge component
│   ├── Card.jsx        # Glassmorphism card component
│   ├── BottomNav.jsx   # Bottom navigation bar
│   └── LottieIcon.jsx  # Lottie animation wrapper
├── pages/              # Page components
│   ├── Login.jsx       # Login page with QR scanner
│   ├── Dashboard.jsx   # Main dashboard
│   ├── Analytics.jsx   # Analytics and charts
│   ├── Alerts.jsx      # Alert management
│   └── Settings.jsx   # Settings and preferences
├── contexts/           # React contexts
│   └── ThemeContext.js # Dark/light theme management
├── styles/             # Global styles
│   └── globals.css     # Tailwind and custom styles
└── assets/             # Static assets
    └── animations/     # Lottie animation files
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3b82f6) to Cyan (#06b6d4)
- **Success**: Green (#10b981)
- **Warning**: Yellow (#f59e0b)
- **Danger**: Red (#ef4444)
- **Info**: Purple (#8b5cf6)

### AQI Color Coding
- **Good** (0-50): Green
- **Moderate** (51-100): Yellow
- **Unhealthy for Sensitive** (101-150): Orange
- **Unhealthy** (151-200): Red
- **Very Unhealthy** (201-300): Purple

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Sizes**: Responsive scaling

## 🚀 Getting Started

### 1. Login
- Enter any username to login
- Or use QR code scanner for quick access

### 2. Dashboard
- View real-time AQI gauge
- Monitor sensor readings
- Check weekly trends
- Access quick statistics

### 3. Analytics
- Explore detailed charts
- Compare historical data
- Analyze patterns and trends

### 4. Alerts
- Configure alert preferences
- View alert history
- Manage notifications

### 5. Settings
- Customize your profile
- Set location preferences
- Toggle dark/light theme
- Manage notifications

## 🔧 Customization

### Adding New Sensors
1. Update sensor data in `Dashboard.jsx`
2. Add new Card components
3. Update color schemes in `globals.css`

### Modifying Themes
1. Edit colors in `tailwind.config.js`
2. Update theme context in `ThemeContext.js`
3. Modify CSS variables in `globals.css`

### Adding New Pages
1. Create new page component in `pages/`
2. Add route in `App.js`
3. Update navigation in `BottomNav.jsx`

## 📱 Mobile Features

- **Touch Gestures**: Swipe navigation support
- **Responsive Design**: Optimized for all screen sizes
- **PWA Ready**: Can be installed as a mobile app
- **Offline Support**: Basic offline functionality

## 🎯 Key Features Demonstrated

- **Modern React Patterns**: Hooks, Context API, Router
- **Advanced CSS**: Glassmorphism, animations, gradients
- **Component Architecture**: Reusable, modular components
- **State Management**: Context API for global state
- **Responsive Design**: Mobile-first approach
- **Accessibility**: ARIA labels, semantic HTML
- **Performance**: Optimized renders, lazy loading
- **User Experience**: Smooth transitions, micro-interactions

## 🚀 Production Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

### Deploy to Netlify
```bash
npm run build
# Upload build/ folder to Netlify
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if needed
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for beautiful animations
- Recharts for data visualization
- All contributors and supporters

---

**Built with ❤️ using modern web technologies**
