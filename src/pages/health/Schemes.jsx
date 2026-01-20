import React from 'react';
import { HeartHandshake, Calendar } from 'lucide-react';

const HealthSchemes = () => {
    return (
        <div className="container mx-auto p-4 animate-fade-in">
            <h2 className="text-3xl font-bold text-red-600 mb-6">Upcoming Health Camps</h2>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg border-t-8 border-red-400">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-gray-800">Free Eye Checkup Camp</h3>
                        <span className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full">Coming Soon</span>
                    </div>
                    <div className="space-y-2 text-gray-600 text-sm mb-4">
                        <p className="flex items-center gap-2"><Calendar size={16} /> Jan 25, 2026 (Sunday)</p>
                        <p>📍 Community Hall, South Village</p>
                    </div>
                    <p className="text-gray-500 text-sm bg-gray-50 p-3 rounded-lg">Free spectacles distribution for seniors.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg border-t-8 border-blue-400">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-gray-800">Polio Vaccination Drive</h3>
                        <span className="bg-blue-100 text-blue-600 text-xs font-bold px-3 py-1 rounded-full">Government</span>
                    </div>
                    <div className="space-y-2 text-gray-600 text-sm mb-4">
                        <p className="flex items-center gap-2"><Calendar size={16} /> Jan 28, 2026</p>
                        <p>📍 Primary Health Center</p>
                    </div>
                    <p className="text-gray-500 text-sm bg-gray-50 p-3 rounded-lg">For children under 5 years.</p>
                </div>
            </div>
        </div>
    );
};

export default HealthSchemes;
