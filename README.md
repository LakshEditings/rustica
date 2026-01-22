# Rustica - Smart Rural Ecosystem 🌾

Rustica is a **unified digital ecosystem** designed to bridge the rural-urban digital divide. It provides a single platform for culture, health, education, jobs, weather, and government support, tailored for rural communities with offline capabilities and easy-to-understand interfaces.

---

## 🚀 Vision
To make rural life **smarter, simpler, and more accessible** by integrating essential services into one easy-to-use app.

---

## 🌟 Key Features

### 1. 🎨 Cultural Heritage Hub
**Theme Color:** Orange Gradient (`#FF8800` → `#FF6B6B`)

- **Tourism** - Explore village tourist spots with interactive maps
- **Purchase** - Marketplace for authentic local crafts and products
- **Digital Archives** - Preserve folk songs, oral histories, and traditions
- **Festival Calendar** - Track upcoming cultural events and celebrations

### 2. 🏛️ Government & Social Connect Hub
**Theme Color:** Yellow-Orange Gradient (`#FFB300` → `#FF8800`)

- **Government Schemes** - AI-driven eligibility checker and application tracking
- **Complaints Portal** - Community complaint reporting with status tracking
- **Safe Route** - Safe navigation with incident reporting
- **Digital Services** - Access to land records and public services

### 3. ☁️ Weather & Climate Intelligence Hub
**Theme Color:** Blue Gradient (`#42A5F5` → `#26C6DA`)

- **Weather Reports** - Hyperlocal weather forecasts
- **Farming Advisories** - Climate-based agricultural guidance
- **Extreme Alerts** - Real-time weather warnings
- **Historical Data** - Weather trends and patterns

### 4. 🎓 Academic & Skills Growth Hub
**Theme Color:** Purple Gradient (`#7E57C2` → `#5C6BC0`)

- **Online Classes** - Video-based learning platform
- **Skill Development** - Workshops and training programs
- **Expert Mentorship** - Connect with industry professionals
- **Certificates** - Track progress and earn certifications

### 5. ❤️ Health & Medicine Hub
**Theme Color:** Red Gradient (`#EF5350` → `#EC407A`)

- **Telemedicine** - Remote doctor consultations
- **Emergency SOS** - Quick access to ambulance (108) and police
- **Medicine Availability** - Check pharmacy stock and locations
- **Health Schemes** - Government health programs and benefits

### 6. 💰 Economic & Livelihood Hub
**Theme Color:** Green Gradient (`#66BB6A` → `#43A047`)

- **Job Board** - Rural job listings and applications
- **Price Checker** - Real-time commodity and market prices
- **Wage Slips** - Digital wage record management
- **Business Support** - Direct-to-consumer selling platform

---

## 🎨 Design System & Themes

### Color Palette

#### Base Green Foundation (App-Wide)
```css
--frosted-mint: #d8f3dc
--celadon: #b7e4c7
--mint-leaf: #74c69d
--sea-green: #40916c
--dark-emerald: #2d6a4f
--pine-teal: #1b4332
--evergreen: #081c15
```

#### Hub-Specific Gradients
Each hub features unique vibrant gradients with glassmorphic effects:

| Hub | Primary Gradient | Background | Border |
|-----|-----------------|------------|--------|
| **Culture** | `#FF8800 → #FF6B6B` | `#FFF3E0` | `#FFCC80` |
| **Government** | `#FFB300 → #FF8800` | `#FFF8E1` | `#FFE082` |
| **Weather** | `#42A5F5 → #26C6DA` | `#E3F2FD` | `#90CAF9` |
| **Academic** | `#7E57C2 → #5C6BC0` | `#EDE7F6` | `#D1C4E9` |
| **Health** | `#EF5350 → #EC407A` | `#FFEBEE` | `#EF9A9A` |
| **Economy** | `#66BB6A → #43A047` | `#E8F5E9` | `#A5D6A7` |

### Design Features

- **Premium Typography**: Outfit & Inter font families
- **Glassmorphism**: Frosted glass effects with backdrop blur
- **Gradient Animations**: Dynamic background shifts on hover
- **Micro-interactions**: Smooth transitions and hover effects
- **Responsive Grid**: Auto-fit layouts for all screen sizes
- **Custom Scrollbar**: Themed scrollbar matching the color palette

---

## 🛠️ Technology Stack

| Category | Technology |
|----------|-----------|
| **Framework** | React 18.3.1 |
| **Build Tool** | Vite 5.3.1 |
| **Routing** | React Router DOM v6.23.0 |
| **Icons** | Lucide React 0.378.0 |
| **Styling** | Vanilla CSS + CSS Modules |
| **Language** | JavaScript (ES6+) |

---

## 📁 Project Structure

```
Rustica-FS/
└── FRONTEND/
    ├── src/
    │   ├── components/          # Reusable components
    │   │   ├── Header.jsx
    │   │   ├── Footer.jsx
    │   │   ├── NavBar.jsx
    │   │   ├── Layout.jsx
    │   │   ├── Card.jsx
    │   │   └── HubHome.jsx
    │   │
    │   ├── pages/
    │   │   ├── auth/            # Authentication
    │   │   │   ├── Auth.jsx
    │   │   │   └── Auth.module.css
    │   │   │
    │   │   ├── dashboard/       # Main Dashboard
    │   │   │   ├── Dashboard.jsx
    │   │   │   └── Dashboard.module.css
    │   │   │
    │   │   ├── culture/         # Cultural Hub
    │   │   │   ├── CultureHome.jsx
    │   │   │   ├── Tourism.jsx
    │   │   │   ├── Purchase.jsx
    │   │   │   └── DigitalArchives.jsx
    │   │   │
    │   │   ├── government/      # Government Hub
    │   │   │   ├── GovernmentHome.jsx
    │   │   │   ├── Schemes.jsx
    │   │   │   ├── Complaints.jsx
    │   │   │   └── SafeRoute.jsx
    │   │   │
    │   │   ├── weather/         # Weather Hub
    │   │   │   ├── WeatherHome.jsx
    │   │   │   └── Reports.jsx
    │   │   │
    │   │   ├── academic/        # Academic Hub
    │   │   │   └── AcademicHome.jsx
    │   │   │
    │   │   ├── health/          # Health Hub
    │   │   │   ├── HealthHome.jsx
    │   │   │   ├── Medicine.jsx
    │   │   │   └── Schemes.jsx
    │   │   │
    │   │   └── economic/        # Economic Hub
    │   │       ├── EconomicHome.jsx
    │   │       ├── JobBoard.jsx
    │   │       ├── PriceChecker.jsx
    │   │       └── WageSlip.jsx
    │   │
    │   ├── App.jsx              # Main app with routing
    │   ├── main.jsx             # Entry point
    │   └── index.css            # Global styles & CSS variables
    │
    ├── package.json
    ├── vite.config.js
    └── index.html
```

---

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/LakshEditings/rustica.git
cd rustica/FRONTEND

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser
# Navigate to http://localhost:5173
```

### Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push
   ```

2. **Import to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Configure:
     - **Framework Preset**: Vite
     - **Root Directory**: `FRONTEND`
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
   - Click "Deploy"

3. **Automatic Deployments**
   - Every push to `main` branch auto-deploys to production
   - Pull requests get preview deployments

---

## 🔮 Future Enhancements

- [ ] Firebase Authentication & Database integration
- [ ] Offline-first Progressive Web App (PWA)
- [ ] Multi-language support (Hindi, Tamil, Telugu, etc.)
- [ ] Voice navigation for accessibility
- [ ] Admin dashboard for data management
- [ ] Real-time notifications
- [ ] Mobile app (React Native)

---

## 📝 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

**Lakshen**  
GitHub: [@LakshEditings](https://github.com/LakshEditings)

---

## 🙏 Acknowledgments

Built with passion for **rural development** and **digital inclusion**.

*Making technology accessible to every village, every home, every person.* ❤️
