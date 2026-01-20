import React, { useState } from 'react';
import { Plus, X, MessageSquare, MapPin } from 'lucide-react';

const Complaints = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="container mx-auto p-4 animate-fade-in relative min-h-screen">
            <h2 className="text-3xl font-bold text-yellow-600 mb-6">Community Complaints</h2>

            <div className="space-y-4 mb-20">
                {[1, 2].map(i => (
                    <div key={i} className="bg-white p-4 rounded-xl shadow border-l-4 border-yellow-400">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-bold text-gray-800">Broken Street Light</h3>
                            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Pending</span>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">Street light near the temple has been off for 3 days.</p>
                        <div className="flex items-center gap-4 text-xs text-gray-400">
                            <span className="flex items-center gap-1"><MapPin size={12} /> Main Road, Village</span>
                            <span>To: PWD</span>
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={() => setShowModal(true)}
                className="fixed bottom-8 right-8 bg-yellow-500 text-white p-4 rounded-full shadow-lg hover:bg-yellow-600 transition z-40"
            >
                <Plus size={32} />
            </button>

            {/* Add Complaint Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl w-full max-w-lg p-6 relative animate-slide-up">
                        <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                            <X size={24} />
                        </button>
                        <h3 className="text-2xl font-bold mb-6 text-yellow-600 flex items-center gap-2"><MessageSquare /> File Complaint</h3>

                        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowModal(false); }}>
                            <input type="text" placeholder="Location of Issue" className="w-full p-3 border rounded-lg focus:outline-yellow-500" required />

                            <textarea placeholder="Describe the problem..." className="w-full p-3 border rounded-lg h-32 focus:outline-yellow-500" required></textarea>

                            <div>
                                <label className="block text-sm font-semibold mb-2 text-gray-700">Forward To</label>
                                <select className="w-full p-3 border rounded-lg bg-white focus:outline-yellow-500">
                                    <option>PWD (Public Works)</option>
                                    <option>Police</option>
                                    <option>Village Panchayat</option>
                                </select>
                            </div>

                            <button type="submit" className="w-full bg-yellow-500 text-white font-bold py-3 rounded-xl hover:bg-yellow-600">
                                Submit Complaint
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Complaints;
