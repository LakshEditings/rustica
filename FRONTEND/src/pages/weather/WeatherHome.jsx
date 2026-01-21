import React from 'react';
import { CloudRain, Sprout, AlertTriangle } from 'lucide-react';
import HubHome from '../../components/HubHome';

const WeatherHome = () => {
    const cards = [
        {
            title: 'Weather Updates',
            icon: <CloudRain size={32} />
        },
        {
            title: 'Farming Advisories',
            icon: <Sprout size={32} />
        },
        {
            title: 'Reports',
            icon: <AlertTriangle size={32} />,
            element: <button className="mt-2 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded hover:bg-blue-200">Report Issue +</button>,
            path: '/weather/reports'
        }
    ];

    return <HubHome title="Weather & Climate" subtitle="Forecasts and local reporting." cards={cards} color="var(--blue-header)" />;
};

export default WeatherHome;
