import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import { Phone, Calendar, HeartPulse, Activity } from 'lucide-react';

const RuralHealth = () => {
    return (
        <div className="animate-fade-in">
            <Header
                title="Rural Health & Medicine Hub"
                subtitle="Basic health support, guidance, and emergency help."
            />

            <div className="container mx-auto px-4 py-8 space-y-8">
                {/* Emergency Banner */}
                <div className="bg-red-500 text-white rounded-xl p-6 flex justify-between items-center shadow-lg">
                    <div>
                        <h2 className="text-2xl font-bold flex items-center gap-2"><HeartPulse className="animate-pulse" /> Emergency SOS</h2>
                        <p className="opacity-90">Press for immediate ambulance or police assistance.</p>
                    </div>
                    <button className="bg-white text-red-600 font-bold px-6 py-3 rounded-full shadow hover:bg-red-50">
                        CALL 108
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card title="Telemedicine" icon={Phone}>
                        <p className="text-sm">Consult doctors via video call from your home.</p>
                        <span className="text-xs text-[var(--sea-green)] font-semibold">Available 24/7</span>
                    </Card>
                    <Card title="Appointment Booking" icon={Calendar}>
                        <p className="text-sm">Book slots at the nearest PHC or hospital.</p>
                    </Card>
                    <Card title="Health Monitoring" icon={Activity}>
                        <p className="text-sm">Track vitals and get daily health tips.</p>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default RuralHealth;
