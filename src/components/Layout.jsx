import React from 'react';
import { Home, Palette, Building2, CloudSun, GraduationCap, HeartPulse, Wallet, Search, Bell } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { id: '/dashboard', label: 'Dashboard', icon: Home },
        { id: '/culture', label: 'Culture', icon: Palette },
        { id: '/government', label: 'Government', icon: Building2 },
        { id: '/weather', label: 'Weather', icon: CloudSun },
        { id: '/academic', label: 'Academic', icon: GraduationCap },
        { id: '/health', label: 'Health', icon: HeartPulse },
        { id: '/economy', label: 'Economy', icon: Wallet },
    ];

    const isActive = (path) => location.pathname === path || (path !== '/dashboard' && location.pathname.startsWith(path));

    return (
        <div className={styles.layoutContainer}>
            {/* Left Sidebar */}
            <div className={styles.sidebar}>
                <div className={styles.logoContainer}>
                    <div className={styles.logoIcon}>R</div>
                    <h1 className={styles.logoText}>Rustica<span className={styles.logoDot}>.</span></h1>
                </div>

                <div className={styles.menuSection}>
                    <p className={styles.menuLabel}>Main Menu</p>
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => navigate(item.id)}
                            className={`${styles.menuButton} ${isActive(item.id) ? styles.menuButtonActive : ''}`}
                        >
                            <item.icon size={22} style={{ flexShrink: 0 }} />
                            <span className={styles.menuButtonText}>{item.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Content Area */}
            <div className={styles.mainContent}>
                {/* Search Header */}
                <div className={styles.topBar}>
                    <div className={styles.searchBar}>
                        <Search size={20} />
                        <input
                            type="text"
                            placeholder="Search for schemes, jobs..."
                            className={styles.searchInput}
                        />
                    </div>
                    <div className={styles.userSection}>
                        <div className={styles.iconButton}>
                            <Bell size={20} />
                        </div>
                        <div className={styles.userProfile}>
                            <div className={styles.userAvatar}>V</div>
                            <span className={styles.userName}>V. Lakshen</span>
                        </div>
                    </div>
                </div>

                {/* Page Content */}
                <div className={styles.pageContent}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
