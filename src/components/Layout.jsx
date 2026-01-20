import React from 'react';
import { Home, Globe, Siren } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const isDashboard = location.pathname === '/dashboard';

    // Determine header color based on route
    const getHeaderColor = () => {
        if (location.pathname.startsWith('/culture')) return 'var(--orange-header)'; // Orange
        if (location.pathname.startsWith('/government')) return 'var(--yellow-header)'; // Yellow
        if (location.pathname.startsWith('/weather')) return 'var(--blue-header)'; // Blue
        if (location.pathname.startsWith('/academic')) return 'var(--purple-header)'; // Purple
        if (location.pathname.startsWith('/health')) return 'var(--red-header)'; // Red
        if (location.pathname.startsWith('/economy')) return 'var(--green-header)'; // Green
        return 'var(--pine-teal)'; // Default
    };

    return (
        <div className={styles.container}>
            <header className={styles.header} style={{ backgroundColor: getHeaderColor() }}>
                <div className={styles.left}>
                    {!isDashboard && (
                        <button onClick={() => navigate('/dashboard')} className={styles.iconBtn}>
                            <Home size={28} />
                        </button>
                    )}
                    <h1 className={styles.title}>Rustica</h1>
                </div>

                <div className={styles.right}>
                    <button className={styles.iconBtn} title="Translate">
                        <Globe size={28} />
                    </button>
                    <div className={styles.sosContainer}>
                        <Siren size={32} className={styles.sosIcon} />
                        <span className={styles.sosText}>SOS</span>
                    </div>
                </div>
            </header>

            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
};

export default Layout;
