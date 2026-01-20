import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Palette, Building2, CloudSun, GraduationCap, HeartPulse, Wallet } from 'lucide-react';
import styles from './Dashboard.module.css';

const Dashboard = () => {
    const navigate = useNavigate();

    const hubs = [
        {
            id: 1,
            title: 'Culture',
            icon: <Palette size={40} />,
            path: '/culture',
            color: 'var(--orange-header)',
            desc: 'Heritage, Art & Tourism'
        },
        {
            id: 2,
            title: 'Government',
            icon: <Building2 size={40} />,
            path: '/government',
            color: 'var(--yellow-header)',
            desc: 'Schemes, Safety & Rights'
        },
        {
            id: 3,
            title: 'Weather',
            icon: <CloudSun size={40} />,
            path: '/weather',
            color: 'var(--blue-header)',
            desc: 'Forecasts & Advisories'
        },
        {
            id: 4,
            title: 'Academic',
            icon: <GraduationCap size={40} />,
            path: '/academic',
            color: 'var(--purple-header)',
            desc: 'Skills & Education'
        },
        {
            id: 5,
            title: 'Health',
            icon: <HeartPulse size={40} />,
            path: '/health',
            color: 'var(--red-header)',
            desc: 'Medicine & Schemes'
        },
        {
            id: 6,
            title: 'Economy',
            icon: <Wallet size={40} />,
            path: '/economy',
            color: 'var(--green-header)',
            desc: 'Jobs, Prices & Income'
        },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <h2>Welcome to Rustica</h2>
                <p>Select a hub to get started</p>
            </div>

            <div className={styles.grid}>
                {hubs.map((hub) => (
                    <div
                        key={hub.id}
                        className={styles.card}
                        onClick={() => navigate(hub.path)}
                        style={{ '--hover-color': hub.color }}
                    >
                        <div className={styles.iconContainer} style={{ color: hub.color }}>
                            {hub.icon}
                        </div>
                        <h3 className={styles.cardTitle}>{hub.title}</h3>
                        <p className={styles.cardDesc}>{hub.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
