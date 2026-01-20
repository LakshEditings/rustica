import React from 'react';
import { useNavigate } from 'react-router-dom';

// Reusable component for Hub Landing pages
const HubHome = ({ title, subtitle, cards, color }) => {
    const navigate = useNavigate();

    return (
        <div className="animate-fade-in p-6">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-2" style={{ color: color }}>{title}</h2>
                <p className="text-gray-500">{subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer border-t-4"
                        style={{ borderColor: color }}
                        onClick={() => card.path && navigate(card.path)}
                    >
                        <div className="mb-4 text-gray-700">{card.icon}</div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800">{card.title}</h3>
                        {card.element && <div className="mt-2">{card.element}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HubHome;
