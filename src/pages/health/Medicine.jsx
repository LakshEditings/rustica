import React, { useState } from 'react';
import { Search, MapPin, Pill } from 'lucide-react';

const Medicine = () => {
    const [query, setQuery] = useState('');

    return (
        <div className="container mx-auto p-4 animate-fade-in">
            <div className="bg-red-500 p-8 rounded-2xl mb-8 text-white text-center shadow-lg">
                <h2 className="text-3xl font-bold mb-4">Find Medicines Nearby</h2>
                <div className="relative max-w-xl mx-auto">
                    <input
                        type="text"
                        placeholder="Type medicine name (e.g. Paracetamol)"
                        className="w-full p-4 pl-12 rounded-full text-gray-800 outline-none shadow-lg"
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
            </div>

            {/* Mock Results */}
            {query && (
                <div className="space-y-4">
                    <h3 className="font-bold text-gray-600">Showing shops for "{query}"</h3>
                    {[1, 2].map(i => (
                        <div key={i} className="bg-white p-4 rounded-xl shadow border-l-4 border-green-500 flex justify-between items-center">
                            <div>
                                <h4 className="font-bold text-lg">City Pharmacy</h4>
                                <p className="text-gray-500 text-sm flex items-center gap-1"><MapPin size={14} /> Main Bazaar (0.5 km)</p>
                                <div className="mt-2 text-green-600 text-sm font-bold flex items-center gap-1">
                                    <Pill size={14} /> In Stock
                                </div>
                            </div>
                            <a href="#" className="bg-red-50 rounded-full w-10 h-10 flex items-center justify-center text-red-500 hover:bg-red-100">
                                <MapPin />
                            </a>
                        </div>
                    ))}
                </div>
            )}

            {!query && (
                <div className="text-center text-gray-400 mt-20">Type a medicine name above to search local inventories.</div>
            )}
        </div>
    );
};

export default Medicine;
