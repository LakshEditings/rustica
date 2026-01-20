import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import { BookOpen, Video, Users, Hammer } from 'lucide-react';

const AcademicSkills = () => {
    return (
        <div className="animate-fade-in">
            <Header
                title="Academic & Skills Growth Hub"
                subtitle="Supports learning, skill-building, and practical education."
            />

            <div className="container mx-auto px-4 py-8 space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold text-[var(--pine-teal)] mb-6">Learn & Grow</h2>
                        <div className="space-y-4">
                            <Card title="Online Classes" icon={Video}>
                                <p className="text-sm">Access video lessons in Tamil & English anytime.</p>
                            </Card>
                            <Card title="Skill Workshops" icon={Hammer}>
                                <p className="text-sm">Carpentry, pottery, electronics, and farming techniques.</p>
                            </Card>
                            <Card title="Mentorship" icon={Users}>
                                <p className="text-sm">Connect with experts for career guidance.</p>
                            </Card>
                        </div>
                    </div>
                    <div className="bg-[var(--frosted-mint)] rounded-3xl p-6 flex flex-col justify-center items-center text-center">
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/online-education-2995906-2503693.png" alt="Learning" className="w-64 mix-blend-multiply mb-6" />
                        <h3 className="text-xl font-bold text-[var(--pine-teal)]">Knowledge is Power</h3>
                        <p className="text-[var(--sea-green)] mt-2">Empowering rural youth with modern skills.</p>
                        <button className="mt-6 bg-[var(--pine-teal)] text-white px-6 py-3 rounded-full hover:bg-[var(--dark-emerald)] transition">
                            Start Learning
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AcademicSkills;
