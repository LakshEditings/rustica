import React from 'react';
import { Camera, Video, PlayCircle } from 'lucide-react';
import styles from '../../styles/professional.module.css';

const DigitalArchives = () => {
    return (
        <div className={styles.pageContainer} style={{ paddingBottom: '120px' }}>
            <h2 className={styles.pageTitle}>Digital Archives</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '32px' }}>
                <div style={{ backgroundColor: '#000', borderRadius: '16px', overflow: 'hidden', position: 'relative', aspectRatio: '16/9', cursor: 'pointer', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                    <img src="https://via.placeholder.com/600x400/1f2937/fff?text=Folk+Dance" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} alt="Folk Dance" />
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <PlayCircle size={64} style={{ color: 'white', opacity: 0.8 }} />
                    </div>
                    <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '16px', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', width: '100%', color: 'white' }}>
                        <h3 style={{ fontWeight: 700, fontSize: '18px', marginBottom: '4px' }}>Village Folk Dance</h3>
                        <p style={{ fontSize: '14px', opacity: 0.8 }}>Recorded Jan 2025</p>
                    </div>
                </div>

                <div style={{ backgroundColor: '#000', borderRadius: '16px', overflow: 'hidden', position: 'relative', aspectRatio: '16/9', cursor: 'pointer', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                    <img src="https://via.placeholder.com/600x400/1f2937/fff?text=Storytelling" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} alt="Elder Stories" />
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <PlayCircle size={64} style={{ color: 'white', opacity: 0.8 }} />
                    </div>
                    <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '16px', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', width: '100%', color: 'white' }}>
                        <h3 style={{ fontWeight: 700, fontSize: '18px', marginBottom: '4px' }}>Elder Stories</h3>
                        <p style={{ fontSize: '14px', opacity: 0.8 }}>Oral History</p>
                    </div>
                </div>
            </div>

            {/* Capture Bar */}
            <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', backgroundColor: 'white', borderTop: '1px solid var(--celadon)', padding: '16px', boxShadow: '0 -5px 20px rgba(0,0,0,0.1)', zIndex: 30 }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '24px' }}>
                    <button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'var(--sea-green)', background: 'none', border: 'none', cursor: 'pointer' }}>
                        <div style={{ backgroundColor: 'rgba(116, 198, 157, 0.1)', padding: '16px', borderRadius: '50%', transition: 'background-color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(116, 198, 157, 0.2)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(116, 198, 157, 0.1)'}>
                            <Camera size={28} />
                        </div>
                        <span style={{ fontSize: '12px', fontWeight: 700 }}>Photo</span>
                    </button>

                    <div style={{ width: '64px', height: '64px', borderRadius: '50%', border: '4px solid var(--sea-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'background-color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(116, 198, 157, 0.05)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                        <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--sea-green)', borderRadius: '50%' }}></div>
                    </div>

                    <button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'var(--sea-green)', background: 'none', border: 'none', cursor: 'pointer' }}>
                        <div style={{ backgroundColor: 'rgba(116, 198, 157, 0.1)', padding: '16px', borderRadius: '50%', transition: 'background-color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(116, 198, 157, 0.2)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(116, 198, 157, 0.1)'}>
                            <Video size={28} />
                        </div>
                        <span style={{ fontSize: '12px', fontWeight: 700 }}>Video</span>
                    </button>
                </div>
                <div style={{ textAlign: 'center', fontSize: '12px', color: '#9ca3af', marginTop: '8px' }}>Capture to Preserve</div>
            </div>
        </div>
    );
};

export default DigitalArchives;
