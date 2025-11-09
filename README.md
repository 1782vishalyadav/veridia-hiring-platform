# Veridia Hiring Platform

A modern hiring platform built with React, Vite, and Tailwind CSS that streamlines the recruitment process. Features an interactive 3D hero section and smooth animations.

Live Link: https://1782vishalyadav.github.io/veridia-hiring-platform/

## 🚀 Features

- Dual Authentication System (Candidates & Admin)
- Interactive Job Listings with Real-time Updates
- Streamlined Application Process
- Interactive 3D Hero Section (using Spline)
- Animated UI Elements (using Framer Motion)
- Responsive Design with Mobile-first Approach
- Protected Route System
- Admin Dashboard for Application Management
- Toast Notifications System
- Modern Card-based UI Design

## 🛠️ Tech Stack

- React 18
- Vite 4
- Tailwind CSS 3
- React Router v6
- Framer Motion
- @splinetool/react-spline
- Lucide Icons
- Custom Fonts (Geist, IBM Plex Sans, Manrope)

## 🎯 Core Components

```
src/
├── components/
│   ├── Footer.jsx       # Site footer with minimal design
│   ├── Loader.jsx       # Loading spinner component
│   ├── Navbar.jsx       # Responsive navigation bar
│   └── Toaster.jsx      # Toast notification system
├── pages/
│   ├── AdminDashboard.jsx   # Admin control panel
│   ├── AdminLogin.jsx       # Admin authentication
│   ├── Apply.jsx           # Job application form
│   ├── CandidateDashboard.jsx # User dashboard
│   ├── Landing.jsx         # Homepage with 3D hero
│   ├── Login.jsx          # User authentication
│   └── Register.jsx       # User registration
├── data/
│   └── jobs.js           # Job listings data
├── utils/
│   └── storage.js        # Local storage utilities
└── App.jsx               # Main application router
```

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/veridia-hiring-platform.git

# Navigate to project directory
cd veridia-hiring-platform

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🔧 Development Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## 💻 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎨 Design Features

- Custom animation system using Framer Motion
- Responsive card-based UI
- Interactive 3D elements
- Toast notification system
- Custom font implementation
- Gradient and blur effects

## 🔐 Authentication

The platform supports two types of users:
- Candidates: Can view jobs and submit applications
- Admins: Can manage applications and job listings

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details

## 🙏 Acknowledgments

- Spline for 3D elements
- Lucide for icons
- Tailwind CSS team
- Framer Motion team