import React from 'react';
import { Briefcase, IndianRupee, FileText } from 'lucide-react';
import HubHome from '../../components/HubHome';

const EconomicHome = () => {
    const cards = [
        { title: 'Job Board', icon: <Briefcase size={32} />, path: '/economy/jobs' },
        { title: 'Price Checker', icon: <IndianRupee size={32} />, path: '/economy/pricing' },
        { title: 'Wage Slip', icon: <FileText size={32} />, path: '/economy/wages' }
    ];

    return <HubHome title="Economic Hub" subtitle="Jobs, markets and finance." cards={cards} color="var(--green-header)" />;
};

export default EconomicHome;
