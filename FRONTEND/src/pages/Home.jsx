import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Card from '../components/Card';
import { Palette, Building2, CloudSun, GraduationCap, HeartPulse, Wallet } from 'lucide-react';

const Home = () => {
    const hubs = [
        {
            id: 1,
            title: 'Cultural Heritage Hub',
            desc: 'Preserves village traditions, stories, arts, and culture.',
            icon: Palette,
            path: '/culture',
            color: 'bg-orange-100 text-orange-600'
        },
        {
            id: 2,
            title: 'Government & Social Connect',
            desc: 'Helps people understand schemes, benefits, and public services easily.',
            icon: Building2,
            path: '/government',
            color: 'bg-blue-100 text-blue-600'
        },
        {
            id: 3,
            title: 'Weather & Climate Intelligence',
            desc: 'Hyperlocal forecasts, alerts, and farming advisories.',
            icon: CloudSun,
            path: '/weather',
            color: 'bg-sky-100 text-sky-600'
        },
        {
            id: 4,
            title: 'Academic & Skills Growth',
            desc: 'Supports learning, skill-building, and practical education.',
            icon: GraduationCap,
            path: '/education',
            color: 'bg-yellow-100 text-yellow-600'
        },
        {
            id: 5,
            title: 'Rural Health & Medicine',
            desc: 'Basic health support, guidance, and emergency help.',
            icon: HeartPulse,
            path: '/health',
            color: 'bg-red-100 text-red-600'
        },
        {
            id: 6,
            title: 'Economic & Livelihood',
            desc: 'Improves income opportunities through jobs, markets, and business support.',
            icon: Wallet,
            path: '/economy',
            color: 'bg-emerald-100 text-emerald-600'
        }
    ];

    return (
        <div className="animate-fade-in">
            <Header
                title="Welcome to Rustica"
                subtitle="A unified digital ecosystem making rural life smarter, simpler, and more accessible."
            />

            <div className="container mx-auto px-4 mb-12">
                <h2 className="text-3xl font-bold text-center text-[var(--pine-teal)] mb-8">
                    Explore Our Hubs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {hubs.map((hub) => (
                        <Link key={hub.id} to={hub.path} className="group">
                            <Card className="h-full hover:-translate-y-2 hover:border-[var(--dark-emerald)]">
                                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${hub.color}`}>
                                    <hub.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-[var(--pine-teal)] mb-2 group-hover:text-[var(--dark-emerald)] transition">
                                    {hub.title}
                                </h3>
                                <p className="text-[var(--evergreen)] opacity-80 leading-relaxed">
                                    {hub.desc}
                                </p>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="bg-[var(--celadon)]/30 py-12">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-[var(--pine-teal)] mb-4">Why Rustica?</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-4">
                            <h3 className="font-bold mb-2">Unified System</h3>
                            <p className="text-sm">Culture, health, education, and more in one place.</p>
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold mb-2">Offline Ready</h3>
                            <p className="text-sm">Works smoothly even with poor connectivity.</p>
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold mb-2">Village Friendly</h3>
                            <p className="text-sm">Easy language and voice support.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
