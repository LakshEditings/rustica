import React, { useState } from 'react';
import { Search, Star, Phone, Plus, X } from 'lucide-react';

const JobBoard = () => {
    const [showModal, setShowModal] = useState(false);

    // Mock Workers
    const workers = [
        { id: 1, name: 'S. Kumar', role: 'Plumber', rating: 4.8, location: 'Manalmedu', phone: '9876543210' },
        { id: 2, name: 'R. Velu', role: 'Electrician', rating: 4.5, location: 'Village North', phone: '9123456780' },
        { id: 3, name: 'M. Devi', role: 'Tailor', rating: 4.9, location: 'East Street', phone: '9988776655' },
    ];

    return (
        <div className="container mx-auto p-4 animate-fade-in">
            <div className="bg-green-600 p-8 rounded-2xl mb-8 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Find Local Professionals</h2>
                <div className="relative max-w-xl mx-auto">
                    <input
                        type="text"
                        placeholder="Search for Plumber, Carpenter, etc."
                        className="w-full p-4 pl-12 rounded-full text-gray-800 outline-none shadow-lg"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {workers.map(worker => (
                    <div key={worker.id} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition border border-green-50">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="font-bold text-lg text-gray-800">{worker.name}</h3>
                                <p className="text-green-600 font-medium bg-green-50 px-2 py-1 rounded inline-block text-sm">{worker.role}</p>
                            </div>
                            <div className="flex items-center gap-1 bg-yellow-400 text-white px-2 py-1 rounded font-bold text-xs">
                                {worker.rating} <Star size={12} fill="currentColor" />
                            </div>
                        </div>
                        <p className="text-gray-500 text-sm mb-4">{worker.location}</p>
                        <button className="w-full bg-green-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700">
                            <Phone size={18} /> Call Now
                        </button>
                    </div>
                ))}
            </div>

            <button
                onClick={() => setShowModal(true)}
                className="fixed bottom-8 right-8 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition z-40"
            >
                <Plus size={32} />
            </button>

            {/* Add Job Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl w-full max-w-lg p-6 relative animate-slide-up">
                        <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                            <X size={24} />
                        </button>
                        <h3 className="text-2xl font-bold mb-6 text-green-600">Post a Job Requirement</h3>

                        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowModal(false); }}>
                            <input type="text" placeholder="Job Role (e.g. Painter)" className="w-full p-3 border rounded-lg focus:outline-green-600" required />
                            <textarea placeholder="Job Description & Location" className="w-full p-3 border rounded-lg h-24 focus:outline-green-600" required></textarea>
                            <input type="text" placeholder="Daily Wage Offer (₹)" className="w-full p-3 border rounded-lg focus:outline-green-600" required />

                            <button type="submit" className="w-full bg-green-600 text-white font-bold py-3 rounded-xl hover:bg-green-700">
                                Post Job
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JobBoard;
