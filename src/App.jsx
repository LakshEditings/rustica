import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Auth from './pages/auth/Auth';
import Dashboard from './pages/dashboard/Dashboard';

// Hub Homes
import CultureHome from './pages/culture/CultureHome';
import GovernmentHome from './pages/government/GovernmentHome';
import WeatherHome from './pages/weather/WeatherHome';
import AcademicHome from './pages/academic/AcademicHome';
import HealthHome from './pages/health/HealthHome';
import EconomicHome from './pages/economic/EconomicHome';

// Feature Pages
import Tourism from './pages/culture/Tourism';
import Purchase from './pages/culture/Purchase';
import DigitalArchives from './pages/culture/DigitalArchives';
import Schemes from './pages/government/Schemes';
import Complaints from './pages/government/Complaints';
import SafeRoute from './pages/government/SafeRoute';
import WeatherReports from './pages/weather/Reports';
import Medicine from './pages/health/Medicine';
import HealthSchemes from './pages/health/Schemes';
import JobBoard from './pages/economic/JobBoard';
import PriceChecker from './pages/economic/PriceChecker';
import WageSlip from './pages/economic/WageSlip';

// Placeholder reused for simple pages
const Placeholder = ({ title }) => <div className="p-8 text-center text-2xl font-bold text-gray-400">Coming Soon: {title}</div>;

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Auth />} />

                {/* Protected Routes */}
                <Route path="/*" element={
                    <Layout>
                        <Routes>
                            <Route path="dashboard" element={<Dashboard />} />

                            {/* Culture Routes */}
                            <Route path="culture" element={<CultureHome />} />
                            <Route path="culture/tourism" element={<Tourism />} />
                            <Route path="culture/purchase" element={<Purchase />} />
                            <Route path="culture/archives" element={<DigitalArchives />} />

                            {/* Government Routes */}
                            <Route path="government" element={<GovernmentHome />} />
                            <Route path="government/schemes" element={<Schemes />} />
                            <Route path="government/complaints" element={<Complaints />} />
                            <Route path="government/saferoute" element={<SafeRoute />} />

                            {/* Weather Routes */}
                            <Route path="weather" element={<WeatherHome />} />
                            <Route path="weather/reports" element={<WeatherReports />} />

                            {/* Academic Routes */}
                            <Route path="academic" element={<AcademicHome />} />

                            {/* Health Routes */}
                            <Route path="health" element={<HealthHome />} />
                            <Route path="health/medicine" element={<Medicine />} />
                            <Route path="health/schemes" element={<HealthSchemes />} />

                            {/* Economic Routes */}
                            <Route path="economy" element={<EconomicHome />} />
                            <Route path="economy/jobs" element={<JobBoard />} />
                            <Route path="economy/pricing" element={<PriceChecker />} />
                            <Route path="economy/wages" element={<WageSlip />} />
                        </Routes>
                    </Layout>
                } />
            </Routes>
        </Router>
    );
}

export default App;
