import React, { useState } from 'react';
import { ShoppingBag, Plus, X, Search, MapPin } from 'lucide-react';
import styles from '../../styles/professional.module.css';

const Purchase = () => {
    const [locationSelected, setLocationSelected] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);

    const [products] = useState([
        { id: 1, name: 'Handmade Basket', price: '₹450', img: 'https://via.placeholder.com/200/74c69d/fff?text=Basket' },
        { id: 2, name: 'Clay Pot', price: '₹120', img: 'https://via.placeholder.com/200/52b788/fff?text=Pot' },
        { id: 3, name: 'Silk Scarf', price: '₹850', img: 'https://via.placeholder.com/200/40916c/fff?text=Scarf' },
    ]);

    if (!locationSelected) {
        return (
            <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <MapPin size={48} style={{ margin: '0 auto 16px', color: 'var(--sea-green)' }} />
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: '#1f2937' }}>Local Market</h2>
                    <p style={{ color: '#6b7280', marginBottom: '24px' }}>Select your village to see available products.</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <button onClick={() => setLocationSelected(true)} className={`${styles.button} ${styles.buttonPrimary} ${styles.buttonFull}`}>
                            Current Location
                        </button>
                        <button onClick={() => setLocationSelected(true)} className={`${styles.button} ${styles.buttonSecondary} ${styles.buttonFull}`}>
                            Select Manually
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.pageContainer}>
            {/* Search Bar */}
            <div style={{ position: 'relative', marginBottom: '32px' }}>
                <input
                    type="text"
                    placeholder="Search for pottery, fabrics, crafts..."
                    className={styles.input}
                    style={{ paddingLeft: '48px', borderRadius: '9999px', border: '2px solid var(--celadon)' }}
                />
                <Search style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', pointerEvents: 'none' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '24px' }}>
                {products.map(p => (
                    <div key={p.id} className={styles.card} style={{ padding: '16px', cursor: 'pointer' }}>
                        <img src={p.img} alt={p.name} style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '12px', marginBottom: '16px' }} />
                        <h3 style={{ fontWeight: 700, color: '#1f2937', fontSize: '18px', marginBottom: '4px' }}>{p.name}</h3>
                        <p style={{ color: 'var(--sea-green)', fontWeight: 700, fontSize: '20px' }}>{p.price}</p>
                        <button className={`${styles.button} ${styles.buttonPrimary} ${styles.buttonFull}`} style={{ marginTop: '12px', fontSize: '14px', padding: '8px' }}>
                            <ShoppingBag size={16} /> Buy
                        </button>
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
                        <h3 className={styles.modalTitle}>List Your Product</h3>

                        <form className={styles.form} onSubmit={(e) => { e.preventDefault(); setShowAddModal(false); }}>
                            <input type="text" placeholder="Product Name" className={styles.input} required />
                            <input type="text" placeholder="Price (₹)" className={styles.input} required />
                            <textarea placeholder="Description" className={styles.textarea} required />
                            <button type="submit" className={`${styles.button} ${styles.buttonPrimary} ${styles.buttonFull}`}>
                                List Product
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Purchase;
