import React, { useState, useEffect } from 'react';
import { MapPin, Plus, X } from 'lucide-react';
import styles from '../../components/Layout.module.css'; // Reusing generic layout styles

const Tourism = () => {
    const [locationSelected, setLocationSelected] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);

    // Mock Data
    const [spots, setSpots] = useState([
        { id: 1, name: 'Ancient Temple', location: 'Village East', img: 'https://via.placeholder.com/300x200?text=Temple' },
        { id: 2, name: 'River Point', location: 'North Bend', img: 'https://via.placeholder.com/300x200?text=River' },
    ]);

    // Location Prompt
    if (!locationSelected) {
        return (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
                <div className="bg-white p-8 rounded-2xl max-w-md w-full text-center animate-fade-in shadow-2xl">
                    <MapPin size={48} className="mx-auto text-orange-500 mb-4" />
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Select Location</h2>
                    <p className="text-gray-500 mb-6">To find tourist spots near you, we need your location.</p>
                    <div className="space-y-3">
                        <button
                            onClick={() => setLocationSelected(true)}
                            className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition"
                        >
                            Use Current Location
                        </button>
                        <button
                            onClick={() => setLocationSelected(true)}
                            className="w-full bg-orange-100 text-orange-700 py-3 rounded-xl font-bold hover:bg-orange-200 transition"
                        >
                            Choose Manually
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4 animate-fade-in">
            <h2 className="text-3xl font-bold text-orange-600 mb-6 border-b-2 border-orange-100 pb-2">Tourist Hotspots</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {spots.map(spot => (
                    <div key={spot.id} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all">
                        <div className="h-48 overflow-hidden">
                            <img src={spot.img} alt={spot.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-gray-800">{spot.name}</h3>
                            <div className="flex items-center gap-1 text-gray-500 mt-1">
                                <MapPin size={16} />
                                <span className="text-sm">{spot.location}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Floating Action Button */}
            <button
                onClick={() => setShowAddModal(true)}
                className="fixed bottom-8 right-8 bg-orange-600 text-white p-4 rounded-full shadow-lg hover:bg-orange-700 transition transform hover:scale-110 z-40"
            >
                <Plus size={32} />
            </button>

            {/* Add Hotspot Modal */}
            {showAddModal && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl w-full max-w-lg p-6 relative animate-slide-up">
                        <button onClick={() => setShowAddModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                            <X size={24} />
                        </button>
                        <h3 className="text-2xl font-bold mb-6 text-orange-600">Add New Hotspot</h3>
                        <form className="space-y-4" onSubmit={(e) => {
                            e.preventDefault();
                            setSpots([...spots, { id: Date.now(), name: 'New Spot', location: 'Custom Loc', img: 'https://via.placeholder.com/300?text=New' }]);
                            setShowAddModal(false);
                        }}>
                            <div>
                                <label className="block text-sm font-semibold mb-1 text-gray-700">Place Name</label>
                                <input type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" placeholder="e.g. Hilltop View" required />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1 text-gray-700">Location</label>
                                <input type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Village Name" required />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1 text-gray-700">Image URL</label>
                                <input type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" placeholder="https://..." />
                            </div>
                            <button type="submit" className="w-full bg-orange-600 text-white font-bold py-3 rounded-xl hover:bg-orange-700 transition">
                                Add Hotspot
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Tourism;
