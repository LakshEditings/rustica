import React, { useState } from 'react';
import { Search, Star, Phone, Plus, X, MapPin, Briefcase } from 'lucide-react';
import styles from '../../styles/professional.module.css';

const JobBoard = () => {
    const [showModal, setShowModal] = useState(false);

    const workers = [
        { id: 1, name: 'S. Kumar', role: 'Plumber', rating: 4.8, location: 'Manalmedu', phone: '9876543210' },
        { id: 2, name: 'R. Velu', role: 'Electrician', rating: 4.5, location: 'Village North', phone: '9123456780' },
        { id: 3, name: 'M. Devi', role: 'Tailor', rating: 4.9, location: 'East Street', phone: '9988776655' },
        { id: 4, name: 'K. Ravi', role: 'Carpenter', rating: 4.7, location: 'South Village', phone: '9845123456' },
        { id: 5, name: 'P. Lakshmi', role: 'House Maid', rating: 4.6, location: 'West End', phone: '9734567890' },
        { id: 6, name: 'N. Murthy', role: 'Mason', rating: 4.8, location: 'Temple Street', phone: '9667788990' },
        { id: 7, name: 'A. Selvi', role: 'Cook', rating: 4.9, location: 'Market Area', phone: '9123445566' },
        { id: 8, name: 'T. Raj', role: 'Mechanic', rating: 4.4, location: 'Main Road', phone: '9898787878' },
        { id: 9, name: 'B. Meena', role: 'Beautician', rating: 4.7, location: 'Center Point', phone: '9556677889' },
    ];

    return (
        <div className={styles.pageContainer}>
            <div className={styles.hero}>
                <h2 className={styles.heroTitle}>Find Local Professionals</h2>
                <div className={styles.searchWrapper}>
                    <input
                        type="text"
                        placeholder="Search for Plumber, Carpenter, etc."
                        className={styles.searchInput}
                        style={{ color: '#1f2937' }}
                    />
                    <Search className={styles.searchIcon} />
                </div>
            </div>

            <div className={styles.gridCardsThree}>
                {workers.map(worker => (
                    <div key={worker.id} className={styles.card}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
                            <div>
                                <h3 style={{ fontWeight: 700, fontSize: '18px', color: '#1f2937', marginBottom: '4px' }}>{worker.name}</h3>
                                <p style={{ color: 'var(--sea-green)', fontWeight: 600, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <Briefcase size={14} /> {worker.role}
                                </p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: 'rgba(251, 191, 36, 0.1)', color: '#f59e0b', padding: '4px 8px', borderRadius: '8px', fontSize: '13px', fontWeight: 700 }}>
                                <Star size={14} /> {worker.rating}
                            </div>
                        </div>
                        <p style={{ color: '#6b7280', fontSize: '13px', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <MapPin size={14} /> {worker.location}
                        </p>
                        <button className={`${styles.button} ${styles.buttonSecondary} ${styles.buttonFull}`} style={{ fontSize: '14px', padding: '10px' }}>
                            <Phone size={16} /> {worker.phone}
                        </button>
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
                        <h3 className={styles.modalTitle}>Register As Worker</h3>

                        <form className={styles.form} onSubmit={(e) => { e.preventDefault(); setShowModal(false); }}>
                            <input type="text" placeholder="Full Name" className={styles.input} required />
                            <input type="text" placeholder="Profession (e.g. Plumber)" className={styles.input} required />
                            <input type="tel" placeholder="Phone Number" className={styles.input} required />
                            <input type="text" placeholder="Location / Village" className={styles.input} required />
                            <button type="submit" className={`${styles.button} ${styles.buttonPrimary} ${styles.buttonFull}`}>
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JobBoard;
