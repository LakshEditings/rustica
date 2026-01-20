import React, { useState } from 'react';
import { Map, ShoppingBag, Calendar, Video, Camera } from 'lucide-react';
import HubHome from '../../components/HubHome';
import { useNavigate } from 'react-router-dom';

const CultureHome = () => {
    const navigate = useNavigate();
    const [showCalendar, setShowCalendar] = useState(false);

    const cards = [
        {
            title: 'Tourism',
            icon: <Map size={32} />,
            path: '/culture/tourism'
        },
        {
            title: 'Purchase',
            icon: <ShoppingBag size={32} />,
            path: '/culture/purchase'
        },
        {
            title: 'Festival',
            icon: <Calendar size={32} />,
            element: showCalendar ? (
                <div className="bg-orange-50 p-2 rounded text-sm text-center">
                    <div className="font-bold text-orange-600">Jan 2026</div>
                    <div className="grid grid-cols-7 gap-1 mt-2 text-xs">
                        {Array.from({ length: 31 }, (_, i) => (
                            <span key={i} className={`p-1 ${i === 14 ? 'bg-orange-500 text-white rounded-full' : ''}`}>{i + 1}</span>
                        ))}
                    </div>
                    <div className="mt-2 text-xs font-bold text-orange-700">Jan 15: Pongal</div>
                </div>
            ) : <button onClick={(e) => { e.stopPropagation(); setShowCalendar(true); }} className="text-sm text-orange-500 underline">View Calendar</button>
        },
        {
            title: 'Digital Archives',
            icon: <Video size={32} />,
            path: '/culture/archives'
        }
    ];

    return <HubHome title="Cultural Heritage Hub" subtitle="Preserving traditions, stories, and arts." cards={cards} color="var(--orange-header)" />;
};

export default CultureHome;
