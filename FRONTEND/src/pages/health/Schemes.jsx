import React from 'react';
import { Heart, Calendar, MapPin } from 'lucide-react';
import styles from '../../styles/professional.module.css';

const HealthSchemes = () => {
    const camps = [
        { title: 'Free Eye Camp', date: 'Jan 28, 2024', location: 'Primary Health Center', desc: 'Free eye checkup and glasses distribution' },
        { title: 'Vaccination Drive', date: 'Feb 05, 2024', location: 'Village Square', desc: 'Immunization for children under 5 years' },
        { title: 'Diabetes Screening', date: 'Feb 12, 2024', location: 'Community Hall', desc: 'Free blood sugar testing and consultation' },
        { title: 'Dental Checkup Camp', date: 'Feb 18, 2024', location: 'School Grounds', desc: 'Free dental examination for students' },
        { title: 'General Health Camp', date: 'Feb 25, 2024', location: 'Town Hall', desc: 'Complete health checkup and medicine distribution' },
    ];

    return (
        <div className={styles.pageContainer}>
            <div className={styles.pageHeader}>
                <Heart size={48} className={styles.pageIcon} />
                <h2 className={styles.pageTitle}>Health Camps & Schemes</h2>
                <p className={styles.pageSubtitle}>Free medical camps and government health initiatives</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {camps.map((camp, idx) => (
                    <div key={idx} className={styles.card} style={{ borderLeft: '4px solid var(--sea-green)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
                            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1f2937' }}>{camp.title}</h3>
                            <span style={{ backgroundColor: 'rgba(116, 198, 157, 0.1)', color: 'var(--dark-emerald)', padding: '4px 12px', borderRadius: '9999px', fontSize: '12px', fontWeight: 700 }}>Upcoming</span>
                        </div>
                        <p style={{ color: '#6b7280', marginBottom: '12px' }}>{camp.desc}</p>
                        <div style={{ display: 'flex', gap: '16px', fontSize: '14px', color: '#9ca3af' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <Calendar size={14} /> {camp.date}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <MapPin size={14} /> {camp.location}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HealthSchemes;
