import React, { useState } from 'react';
import { Search, MapPin, Pill } from 'lucide-react';
import styles from '../../styles/professional.module.css';

const Medicine = () => {
    const [query, setQuery] = useState('');

    return (
        <div className={styles.pageContainer}>
            <div className={styles.hero} style={{ background: 'linear-gradient(135deg, #1b4332 0%, #081c15 100%)' }}>
                <h2 className={styles.heroTitle}>Find Medicines Nearby</h2>
                <div className={styles.searchWrapper}>
                    <input
                        type="text"
                        placeholder="Type medicine name (e.g. Paracetamol)"
                        className={styles.searchInput}
                        style={{ color: '#1f2937' }}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <Search className={styles.searchIcon} />
                </div>
            </div>

            {query && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <h3 style={{ fontWeight: 700, color: '#6b7280' }}>Showing shops for "{query}"</h3>
                    {[1, 2].map(i => (
                        <div key={i} className={styles.card} style={{ borderLeft: '4px solid var(--sea-green)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <h4 style={{ fontWeight: 700, fontSize: '18px', marginBottom: '6px' }}>City Pharmacy</h4>
                                <p style={{ color: '#6b7280', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
                                    <MapPin size={14} /> Main Bazaar (0.5 km)
                                </p>
                                <div style={{ color: 'var(--sea-green)', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <Pill size={14} /> In Stock
                                </div>
                            </div>
                            <a href="#" style={{ backgroundColor: 'rgba(27, 67, 50, 0.1)', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--pine-teal)', transition: 'background-color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(27, 67, 50, 0.2)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(27, 67, 50, 0.1)'}>
                                <MapPin size={20} />
                            </a>
                        </div>
                    ))}
                </div>
            )}

            {!query && (
                <div className={styles.emptyState}>
                    <Pill size={64} className={styles.emptyIcon} />
                    <p className={styles.emptyText}>Type a medicine name above to search local inventories.</p>
                </div>
            )}
        </div>
    );
};

export default Medicine;
