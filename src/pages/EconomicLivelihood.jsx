import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import { TrendingUp, ShoppingCart, Briefcase, Coins } from 'lucide-react';

const EconomicLivelihood = () => {
    return (
        <div className="animate-fade-in">
            <Header
                title="Economic & Livelihood Hub"
                subtitle="Improves income opportunities through jobs, markets, and local business support."
            />

            <div className="container mx-auto px-4 py-8 space-y-8">
                <div className="grid lg:grid-cols-2 gap-8">
                    <Card title="Local Market Prices" className="lg:col-span-2">
                        <div className="flex justify-between items-center mb-4 border-b border-[var(--celadon)] pb-2">
                            <h3 className="font-bold text-[var(--pine-teal)]">Commodity</h3>
                            <h3 className="font-bold text-[var(--pine-teal)]">Price (Top Market)</h3>
                            <h3 className="font-bold text-[var(--pine-teal)]">Trend</h3>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex justify-between items-center p-2 hover:bg-[var(--celadon)]/30 rounded">
                                <span>🌾 Paddy (Common)</span>
                                <span>₹2,200/qtl</span>
                                <span className="text-green-600 flex items-center gap-1"><TrendingUp size={14} /> +2%</span>
                            </li>
                            <li className="flex justify-between items-center p-2 hover:bg-[var(--celadon)]/30 rounded">
                                <span>🧶 Cotton</span>
                                <span>₹6,500/qtl</span>
                                <span className="text-red-500 flex items-center gap-1"><TrendingUp size={14} className="rotate-180" /> -1%</span>
                            </li>
                            <li className="flex justify-between items-center p-2 hover:bg-[var(--celadon)]/30 rounded">
                                <span>🥘 Groundnut</span>
                                <span>₹5,800/qtl</span>
                                <span className="text-green-600 flex items-center gap-1"><TrendingUp size={14} /> +0.5%</span>
                            </li>
                        </ul>
                    </Card>

                    <Card title="Job Portal" icon={Briefcase}>
                        <p className="text-sm mb-4">Find local jobs and daily wage work.</p>
                        <div className="space-y-2">
                            <div className="bg-gray-50 p-2 rounded text-xs flex justify-between">
                                <span>Farm Helper needed</span>
                                <span className="text-[var(--sea-green)] font-bold">₹500/day</span>
                            </div>
                            <div className="bg-gray-50 p-2 rounded text-xs flex justify-between">
                                <span>Driver (Tractor)</span>
                                <span className="text-[var(--sea-green)] font-bold">₹800/day</span>
                            </div>
                        </div>
                    </Card>

                    <Card title="Sell Products" icon={ShoppingCart}>
                        <p className="text-sm mb-4">Directly sell your produce or crafts to city markets.</p>
                        <button className="w-full bg-[var(--pine-teal)] text-white py-2 rounded text-sm hover:bg-[var(--dark-emerald)]">List Item</button>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default EconomicLivelihood;
