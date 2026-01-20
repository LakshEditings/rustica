import React from 'react';
import { Laptop, BookOpen, Bell, TrendingUp } from 'lucide-react';
import HubHome from '../../components/HubHome';

const AcademicHome = () => {
    const cards = [
        { title: 'Create Study Room', icon: <Laptop size={32} /> },
        { title: 'Learning Content', icon: <BookOpen size={32} /> },
        { title: 'Event Alert', icon: <Bell size={32} /> },
        { title: 'Progress & Goals', icon: <TrendingUp size={32} /> }
    ];

    return <HubHome title="Academic Hub" subtitle="Education and skill growth." cards={cards} color="var(--purple-header)" />;
};

export default AcademicHome;
