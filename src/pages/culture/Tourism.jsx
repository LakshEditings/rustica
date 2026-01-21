import React, { useState } from 'react';
import { MapPin, Plus, X } from 'lucide-react';
import styles from '../../styles/professional.module.css';

const Tourism = () => {
    const [locationSelected, setLocationSelected] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);

    const [spots] = useState([
        { id: 1, name: 'Ancient Temple', location: 'Village East', img: 'https://via.placeholder.com/300x200/74c69d/fff?text=Temple' },
        { id: 2, name: 'River Point', location: 'North Bend', img: 'https://via.placeholder.com/300x200/52b788/fff?text=River' },
    ]);

    if (!locationSelected) {
        return (
            <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <MapPin size={48} style={{ margin: '0 auto 16px', color: 'var(--sea-green)' }} />
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: '#1f2937' }}>Select Location</h2>
                    <p style={{ color: '#6b7280', marginBottom: '24px' }}>To find tourist spots near you, we need your location.</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <button onClick={() => setLocationSelected(true)} className={`${styles.button} ${styles.buttonPrimary} ${styles.buttonFull}`}>
                            Use Current Location
                        </button>
                        <button onClick={() => setLocationSelected(true)} className={`${styles.button} ${styles.buttonSecondary} ${styles.buttonFull}`}>
                            Choose Manually
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.pageContainer}>
            <h2 className={styles.pageTitle} style={{ borderBottom: '2px solid var(--celadon)', paddingBottom: '8px', marginBottom: '32px' }}>Tourist Hotspots</h2>

            <div className={styles.gridCardsThree}>
                {spots.map(spot => (
                    <div key={spot.id} className={styles.card} style={{ padding: 0, overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                        <div style={{ height: '192px', overflow: 'hidden', position: 'relative' }}>
                            <img src={spot.img} alt={spot.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ padding: '16px' }}>
                            <h3 style={{ fontWeight: 700, fontSize: '18px', color: '#1f2937', marginBottom: '8px' }}>{spot.name}</h3>
                            <p style={{ color: '#6b7280', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <MapPin size={14} /> {spot.location}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <button onClick={() => setShowAddModal(true)} className={styles.fab}>
                <Plus size={32} />
            </button>

            {showAddModal && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <button onClick={() => setShowAddModal(false)} className={styles.modalClose}>
                            <X size={24} />
                        </button>
                        <h3 className={styles.modalTitle}>Add Tourist Spot</h3>

                        <form className={styles.form} onSubmit={(e) => { e.preventDefault(); setShowAddModal(false); }}>
                            <input type="text" placeholder="Spot Name" className={styles.input} required />
                            <input type="text" placeholder="Location" className={styles.input} required />
                            <textarea placeholder="Description" className={styles.textarea} required />
                            <button type="submit" className={`${styles.button} ${styles.buttonPrimary} ${styles.buttonFull}`}>
                                Add Spot
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Tourism;
