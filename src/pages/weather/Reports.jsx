import React, { useState } from 'react';
import { AlertCircle, Plus, MapPin, X } from 'lucide-react';

const WeatherReports = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="container mx-auto p-4 animate-fade-in relative">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Community Reports</h2>

            <div className="grid gap-4">
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded shadow">
                    <div className="flex items-center gap-2 font-bold text-red-700 mb-1">
                        <AlertCircle size={20} /> Flood Alert
                    </div>
                    <p className="text-gray-700">River water levels rising in North Village sector. Evacuate low zones.</p>
                    <div className="text-xs text-red-500 mt-2 font-mono">Reported 1 hr ago • Admin Verified</div>
                </div>

                <div className="bg-white border p-4 rounded shadow">
                    <div className="flex items-center gap-2 font-bold text-gray-700 mb-1">
                        <MapPin size={18} className="text-blue-500" /> Farm Road 5 Blocked
                    </div>
                    <p className="text-gray-600">Fallen tree due to high winds blocking the path.</p>
                    <div className="text-xs text-gray-400 mt-2">Reported 20 mins ago</div>
                </div>
            </div>

            <button
                onClick={() => setShowModal(true)}
                className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition z-40"
            >
                <Plus size={32} />
            </button>

            {/* Report Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl w-full max-w-lg p-6 relative animate-slide-up">
                        <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                            <X size={24} />
                        </button>
                        <h3 className="text-2xl font-bold mb-6 text-blue-600">Report Weather Issue</h3>

                        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowModal(false); }}>
                            <input type="text" placeholder="Affected Location" className="w-full p-3 border rounded-lg focus:outline-blue-500" required />
                            <select className="w-full p-3 border rounded-lg bg-white focus:outline-blue-500">
                                <option>Flood / Waterlogging</option>
                                <option>Tree Fall</option>
                                <option>Road Blockage</option>
                                <option>Extreme Heat</option>
                            </select>
                            <textarea placeholder="Describe the situation..." className="w-full p-3 border rounded-lg h-24 focus:outline-blue-500" required></textarea>

                            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700">
                                Submit Report
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WeatherReports;
