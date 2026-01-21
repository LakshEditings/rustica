import React from 'react';
import { FileText } from 'lucide-react';
import styles from '../../styles/professional.module.css';

const WageSlip = () => {
    return (
        <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
            <h2 className={styles.pageTitle}>My Wage History</h2>
            <div className={styles.card} style={{ padding: '64px 32px', background: 'linear-gradient(135deg, rgba(184, 233, 210, 0.1) 0%, rgba(116, 198, 157, 0.1) 100%)', border: '2px dashed var(--celadon)' }}>
                <FileText size={64} style={{ margin: '0 auto 16px', color: 'var(--celadon)' }} />
                <p style={{ color: '#6b7280', marginBottom: '16px' }}>No jobs completed yet.</p>
                <button className={`${styles.button} ${styles.buttonPrimary}`} style={{ marginTop: '8px' }}>
                    Find Work
                </button>
            </div>
        </div>
    );
};

export default WageSlip;
