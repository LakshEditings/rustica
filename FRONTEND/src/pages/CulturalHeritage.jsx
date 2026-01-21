import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import { Mic, Music, BookOpen, Map, ShoppingBag } from 'lucide-react';

const CulturalHeritage = () => {
    return (
        <div className="animate-fade-in">
            <Header
                title="Cultural Heritage Hub"
                subtitle="Preserving village traditions, stories, arts, and culture."
            />

            <div className="container mx-auto px-4 py-8 space-y-8">
                {/* Problem & Solution Section */}
                <div className="grid md:grid-cols-2 gap-8">
                    <Card title="The Challenge" className="bg-red-50/50 border-red-100">
                        <p>Traditions, folk arts, and oral histories are fading due to modernization.</p>
                    </Card>
                    <Card title="Our Solution" className="bg-green-50/50 border-green-100">
                        <ul className="list-disc list-inside space-y-2">
                            <li>Digital archives for songs, stories, and practices.</li>
                            <li>Festival reminders & tourism maps.</li>
                            <li>Online marketplace for crafts.</li>
                        </ul>
                    </Card>
                </div>

                {/* Core Features */}
                <h2 className="text-2xl font-bold text-[var(--pine-teal)] text-center">Key Features</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <Card title="Digital Archive" icon={BookOpen}>
                        <p className="text-sm mb-4">Store and access songs, stories, and practices digitally.</p>
                        <button className="bg-[var(--mint-leaf)] text-white px-4 py-2 rounded-lg text-sm hover:bg-[var(--sea-green)] w-full">Browse Archive</button>
                    </Card>
                    <Card title="Oral Histories" icon={Mic}>
                        <p className="text-sm mb-4">Record and listen to stories from elders.</p>
                        <div className="flex items-center gap-2 text-xs bg-gray-100 p-2 rounded">
                            <Mic size={14} /> <span>Recording...</span>
                        </div>
                    </Card>
                    <Card title="Craft Marketplace" icon={ShoppingBag}>
                        <p className="text-sm mb-4">Buy and sell authentic local crafts.</p>
                        <button className="bg-[var(--pine-teal)] text-white px-4 py-2 rounded-lg text-sm hover:bg-[var(--dark-emerald)] w-full">Visit Shop</button>
                    </Card>
                </div>

                {/* Impact Section */}
                <div className="bg-[var(--celadon-2)]/20 p-8 rounded-2xl text-center">
                    <h3 className="text-xl font-bold text-[var(--pine-teal)] mb-2">Impact</h3>
                    <p className="max-w-2xl mx-auto">Preserves heritage, engages youth, and promotes tourism, keeping our roots alive.</p>
                </div>
            </div>
        </div>
    );
};

export default CulturalHeritage;
