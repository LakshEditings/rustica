import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';

// Reusable component for Hub Landing pages
const HubHome = ({ title, subtitle, cards, color }) => {
    const navigate = useNavigate();

    return (
        <div className="animate-fade-in p-6 max-w-7xl mx-auto">
            <div className="text-center mb-12 mt-4">
                <h2 className="text-4xl font-extrabold mb-3 tracking-tight" style={{ color: color }}>{title}</h2>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto">{subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        icon={card.icon}
                        accentColor={color}
                        onClick={() => card.path && navigate(card.path)}
                        className="h-full"
                    >
                        {card.element}
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default HubHome;
