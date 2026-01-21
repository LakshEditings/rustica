import React from 'react';
import { Shield, MapPin } from 'lucide-react';
import styles from '../../styles/professional.module.css';

const SafeRoute = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.pageHeader}>
                <Shield size={48} className={styles.pageIcon} />
                <h2 className={styles.pageTitle}>Women Safety Routes</h2>
                <p className={styles.pageSubtitle}>Well-lit and monitored pathways</p>
            </div>

            <div className={styles.card} style={{ padding: '32px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(184, 233, 210, 0.1) 0%, rgba(116, 198, 157, 0.1) 100%)', border: '2px dashed var(--celadon)' }}>
                <MapPin size={64} style={{ margin: '0 auto 16px', color: 'var(--celadon)' }} />
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1f2937', marginBottom: '8px' }}>Interactive Map</h3>
                <p style={{ color: '#6b7280', marginBottom: '24px' }}>Map integration showing safe, well-lit routes across the village with emergency contact points.</p>
                <div style={{ backgroundColor: '#f3f4f6', padding: '80px', borderRadius: '16px', color: '#9ca3af', fontWeight: 500 }}>
                    [Map View Placeholder]
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginTop: '32px' }}>
                <div className={styles.card} style={{ textAlign: 'center', padding: '20px' }}>
                    <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--sea-green)', marginBottom: '8px' }}>12</div>
                    <p style={{ color: '#6b7280', fontSize: '14px', fontWeight: 600 }}>Safe Routes</p>
                </div>
                <div className={styles.card} style={{ textAlign: 'center', padding: '20px' }}>
                    <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--sea-green)', marginBottom: '8px' }}>8</div>
                    <p style={{ color: '#6b7280', fontSize: '14px', fontWeight: 600 }}>Emergency Points</p>
                </div>
                <div className={styles.card} style={{ textAlign: 'center', padding: '20px' }}>
                    <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--sea-green)', marginBottom: '8px' }}>24/7</div>
                    <p style={{ color: '#6b7280', fontSize: '14px', fontWeight: 600 }}>Monitored</p>
                </div>
            </div>
        </div>
    );
};

export default SafeRoute;
