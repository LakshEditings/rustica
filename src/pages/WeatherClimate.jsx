import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import { CloudRain, Sun, Leaf, AlertTriangle } from 'lucide-react';

const WeatherClimate = () => {
    return (
        <div className="animate-fade-in">
            <Header
                title="Weather & Climate Intelligence Hub"
                subtitle="Hyperlocal forecasts, alerts, and farming advisories."
            />

            <div className="container mx-auto px-4 py-8 space-y-8">
                {/* Live Weather Widget Mockup */}
                <div className="bg-gradient-to-r from-blue-400 to-blue-200 rounded-3xl p-8 text-white shadow-xl max-w-2xl mx-auto">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-3xl font-bold">Today's Weather</h2>
                            <p className="text-blue-50">Village: Manalmedu</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Sun size={48} className="animate-spin-slow" />
                            <span className="text-4xl font-bold">28°C</span>
                        </div>
                    </div>
                    <div className="mt-6 flex gap-4 text-sm bg-white/20 p-4 rounded-xl backdrop-blur-md">
                        <span>💧 Humidity: 65%</span>
                        <span>💨 Wind: 12 km/h</span>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <Card title="Farming Advisories" icon={Leaf}>
                        <p className="text-sm mb-2">Suitable crop suggestions based on current climate.</p>
                        <div className="bg-green-100 text-green-800 text-xs p-2 rounded">
                            Tip: Good time to sow groundnuts.
                        </div>
                    </Card>
                    <Card title="Extreme Weather Alerts" icon={AlertTriangle}>
                        <p className="text-sm mb-2">Early warning system for floods and droughts.</p>
                        <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">No alerts today</span>
                    </Card>
                    <Card title="Rainfall Forecast" icon={CloudRain}>
                        <p className="text-sm">Next 7 days prediction to plan irrigation.</p>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default WeatherClimate;
