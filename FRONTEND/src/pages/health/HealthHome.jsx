import React, { useEffect } from 'react';
import { Pill, HeartHandshake, PlayCircle } from 'lucide-react';
import HubHome from '../../components/HubHome';

const HealthHome = () => {
    const cards = [
        { title: 'Medicine Availability', icon: <Pill size={32} />, path: '/health/medicine' },
        { title: 'Health Schemes', icon: <HeartHandshake size={32} />, path: '/health/schemes' },
        {
            title: 'Tutorials', icon: <PlayCircle size={32} />,
            element: <button onClick={() => alert("Daily Medical Fact: Drink 3L of water daily!")} className="text-xs text-red-500 underline">Show Fact</button>
        }
    ];

    return <HubHome title="Rural Health" subtitle="Medicine, schemes and tips." cards={cards} color="var(--red-header)" />;
};

export default HealthHome;
