import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import styles from '../../styles/professional.module.css';

const PriceChecker = () => {
    return (
        <div className={styles.narrowContainer}>
            <h2 className={styles.pageTitle}>Mandi Market Rates</h2>

            <div className={styles.card} style={{ borderTop: '4px solid var(--sea-green)', padding: 0, overflow: 'hidden' }}>
                <div style={{ backgroundColor: 'var(--sea-green)', color: 'white', padding: '16px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', fontWeight: 700, textAlign: 'center' }}>
                    <div>Product</div>
                    <div>Fair Price</div>
                    <div>Trend</div>
                </div>

                <div>
                    {[
                        { name: 'Rice (Ponni)', price: '₹55/kg', trend: 'up' },
                        { name: 'Tomato', price: '₹40/kg', trend: 'down' },
                        { name: 'Onion', price: '₹35/kg', trend: 'stable' },
                        { name: 'Cotton', price: '₹6,200/qtl', trend: 'up' },
                    ].map((item, i) => (
                        <div key={i} style={{ padding: '16px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', textAlign: 'center', alignItems: 'center', borderBottom: i < 3 ? '1px solid #f3f4f6' : 'none', transition: 'background-color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(116, 198, 157, 0.05)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                            <div style={{ fontWeight: 700, color: '#1f2937' }}>{item.name}</div>
                            <div style={{ color: '#6b7280' }}>{item.price}</div>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4px', fontSize: '14px', fontWeight: 700, color: item.trend === 'up' ? 'var(--sea-green)' : item.trend === 'down' ? '#dc2626' : '#9ca3af' }}>
                                {item.trend === 'up' && <><TrendingUp size={16} /> Rising</>}
                                {item.trend === 'down' && <><TrendingDown size={16} /> Falling</>}
                                {item.trend === 'stable' && <span>Stable</span>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <p style={{ textAlign: 'center', fontSize: '12px', color: '#9ca3af', marginTop: '16px' }}>Updated 10 mins ago via APMC Data</p>
        </div>
    );
};

export default PriceChecker;
