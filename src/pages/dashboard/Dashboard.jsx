import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Palette, Building2, CloudSun, GraduationCap, HeartPulse, Wallet, ArrowRight } from 'lucide-react';
import styles from './Dashboard.module.css';

const Dashboard = () => {
    const navigate = useNavigate();

    const hubs = [
        {
            title: 'Culture Hub',
            desc: 'Tourism, Festivals & Heritage',
            icon: Palette,
            path: '/culture',
            gradient: 'linear-gradient(135deg, #74c69d 0%, #52b788 100%)'
        },
        {
            title: 'Government',
            desc: 'Schemes & Safety',
            icon: Building2,
            path: '/government',
            gradient: 'linear-gradient(135deg, #52b788 0%, #40916c 100%)'
        },
        {
            title: 'Weather',
            desc: 'Forecast & Reports',
            icon: CloudSun,
            path: '/weather',
            gradient: 'linear-gradient(135deg, #40916c 0%, #2d6a4f 100%)'
        },
        {
            title: 'Academic',
            desc: 'Education & Skills',
            icon: GraduationCap,
            path: '/academic',
            gradient: 'linear-gradient(135deg, #2d6a4f 0%, #1b4332 100%)'
        },
        {
            title: 'Health',
            desc: 'Medical & Hospitals',
            icon: HeartPulse,
            path: '/health',
            gradient: 'linear-gradient(135deg, #1b4332 0%, #081c15 100%)'
        },
        {
            title: 'Economy',
            desc: 'Jobs, Prices & Wages',
            icon: Wallet,
            path: '/economy',
            gradient: 'linear-gradient(135deg, #52b788 0%, #40916c 100%)'
        },
    ];

    return (
        <div className={styles.dashboardContainer}>
            <div className={styles.header}>
                <h2 className={styles.title}>Dashboard</h2>
                <p className={styles.subtitle}>Explore the services available in your village.</p>
            </div>

            <div className={styles.grid}>
                {hubs.map((hub, idx) => (
                    <div
                        key={idx}
                        onClick={() => navigate(hub.path)}
                        className={styles.card}
                        style={{ background: hub.gradient }}
                    >
                        <div className={styles.cardDecor}></div>

                        <div className={styles.cardContent}>
                            <div className={styles.iconContainer}>
                                <hub.icon size={32} />
                            </div>

                            <div>
                                <h3 className={styles.cardTitle}>{hub.title}</h3>
                                <p className={styles.cardDesc}>{hub.desc}</p>
                            </div>

                            <div className={styles.arrowIcon}>
                                <ArrowRight size={20} color="#333" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick Stats Section */}
            <div className={styles.stats}>
                <div className={styles.statCard}>
                    <p className={styles.statLabel}>Notifications</p>
                    <h4 className={styles.statValue}>3 New</h4>
                </div>
                <div className={styles.statCard}>
                    <p className={styles.statLabel}>Pending Tasks</p>
                    <h4 className={styles.statValue}>12</h4>
                </div>
                <div className={styles.statCard}>
                    <p className={styles.statLabel}>Weather</p>
                    <h4 className={styles.statValue}>28°C</h4>
                </div>
                <div className={styles.statCard}>
                    <p className={styles.statLabel}>Active Plans</p>
                    <h4 className={styles.statValue}>2</h4>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
