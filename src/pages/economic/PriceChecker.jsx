import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const PriceChecker = () => {
    return (
        <div className="container mx-auto p-4 animate-fade-in max-w-3xl">
            <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Mandi Market Rates</h2>

            <div className="bg-white rounded-xl shadow-lg border-2 border-green-500 overflow-hidden">
                <div className="bg-green-500 text-white p-4 grid grid-cols-3 font-bold text-center">
                    <div>Product</div>
                    <div>Fair Price</div>
                    <div>Trend</div>
                </div>

                <div className="divide-y divide-gray-100">
                    {[
                        { name: 'Rice (Ponni)', price: '₹55/kg', trend: 'up' },
                        { name: 'Tomato', price: '₹40/kg', trend: 'down' },
                        { name: 'Onion', price: '₹35/kg', trend: 'stable' },
                        { name: 'Cotton', price: '₹6,200/qtl', trend: 'up' },
                    ].map((item, i) => (
                        <div key={i} className="p-4 grid grid-cols-3 text-center items-center hover:bg-green-50 transition">
                            <div className="font-bold text-gray-800">{item.name}</div>
                            <div className="text-gray-600">{item.price}</div>
                            <div className={`flex justify-center items-center gap-1 text-sm font-bold ${item.trend === 'up' ? 'text-green-600' : item.trend === 'down' ? 'text-red-500' : 'text-gray-400'}`}>
                                {item.trend === 'up' && <><TrendingUp size={16} /> Rising</>}
                                {item.trend === 'down' && <><TrendingDown size={16} /> Falling</>}
                                {item.trend === 'stable' && <span>Stable</span>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <p className="text-center text-xs text-gray-400 mt-4">Updated 10 mins ago via APMC Data</p>
        </div>
    );
};

export default PriceChecker;
