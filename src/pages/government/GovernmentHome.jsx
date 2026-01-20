import React from 'react';
import { FileText, ShieldAlert, MapPin } from 'lucide-react';
import HubHome from '../../components/HubHome';

const GovernmentHome = () => {
    const cards = [
        {
            title: 'Schemes',
            icon: <FileText size={32} />,
            path: '/government/schemes' // Will implement next
        },
        {
            title: 'Complaints',
            icon: <ShieldAlert size={32} />,
            path: '/government/complaints' // Will implement next
        },
        {
            title: 'Safe Route',
            icon: <MapPin size={32} />,
            element: <div className="text-xs text-yellow-700">View safe travel map for women</div>,
            path: '/government/saferoute' // Will implement next
        }
    ];

    return <HubHome title="Government & Social Connect" subtitle="Schemes, benefits, and safety." cards={cards} color="var(--yellow-header)" />;
};

export default GovernmentHome;
