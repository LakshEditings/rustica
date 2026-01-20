import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CulturalHeritage from './pages/CulturalHeritage';
import GovernmentSocial from './pages/GovernmentSocial';
import WeatherClimate from './pages/WeatherClimate';
import AcademicSkills from './pages/AcademicSkills';
import RuralHealth from './pages/RuralHealth';
import EconomicLivelihood from './pages/EconomicLivelihood';

function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col bg-[var(--frosted-mint)] text-[var(--evergreen)] font-sans">
                <NavBar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/culture" element={<CulturalHeritage />} />
                        <Route path="/government" element={<GovernmentSocial />} />
                        <Route path="/weather" element={<WeatherClimate />} />
                        <Route path="/education" element={<AcademicSkills />} />
                        <Route path="/health" element={<RuralHealth />} />
                        <Route path="/economy" element={<EconomicLivelihood />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
