import React, { useState } from 'react';
import { Plus, X, MessageSquare, MapPin } from 'lucide-react';
import styles from '../../styles/professional.module.css';

const Complaints = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className={styles.pageContainer}>
            <h2 className={styles.pageTitle}>Community Complaints</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '80px' }}>
                {[1, 2].map(i => (
                    <div key={i} className={styles.card} style={{ borderLeft: '4px solid var(--sea-green)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
                            <h3 style={{ fontWeight: 700, color: '#1f2937' }}>Broken Street Light</h3>
                            <span style={{ fontSize: '12px', backgroundColor: 'rgba(116, 198, 157, 0.1)', color: 'var(--dark-emerald)', padding: '4px 12px', borderRadius: '9999px', fontWeight: 700 }}>Pending</span>
                        </div>
                        <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '12px' }}>Street light near the temple has been off for 3 days.</p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '13px', color: '#9ca3af' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={14} /> Main Road, Village</span>
                            <span>To: PWD</span>
                        </div>
                    </div>
                ))}
            </div>

            <button onClick={() => setShowModal(true)} className={styles.fab}>
                <Plus size={32} />
            </button>

            {showModal && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <button onClick={() => setShowModal(false)} className={styles.modalClose}>
                            <X size={24} />
                        </button>
                        <h3 className={styles.modalTitle} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <MessageSquare size={28} /> File Complaint
                        </h3>

                        <form className={styles.form} onSubmit={(e) => { e.preventDefault(); setShowModal(false); }}>
                            <input type="text" placeholder="Location of Issue" className={styles.input} required />
                            <textarea placeholder="Describe the problem..." className={styles.textarea} required />
                            <div>
                                <label className={styles.label}>Forward To</label>
                                <select className={styles.select}>
                                    <option>PWD (Public Works)</option>
                                    <option>Police</option>
                                    <option>Village Panchayat</option>
                                </select>
                            </div>
                            <button type="submit" className={`${styles.button} ${styles.buttonPrimary} ${styles.buttonFull}`}>
                                Submit Complaint
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Complaints;
