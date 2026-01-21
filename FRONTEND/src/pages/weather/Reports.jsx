import React, { useState } from 'react';
import { AlertCircle, Plus, MapPin, X } from 'lucide-react';
import styles from './Reports.module.css';

const WeatherReports = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className={styles.reportsContainer}>
            <h2 className={styles.pageTitle}>Community Reports</h2>

            <div className={styles.reportsGrid}>
                <div className={`${styles.reportCard} ${styles.alertCard}`}>
                    <div className={`${styles.reportHeader} ${styles.alertHeader}`}>
                        <AlertCircle size={20} /> Flood Alert
                    </div>
                    <p className={styles.reportContent}>
                        River water levels rising in North Village sector. Evacuate low zones.
                    </p>
                    <div className={`${styles.reportMeta} ${styles.alertMeta}`}>
                        Reported 1 hr ago • Admin Verified
                    </div>
                </div>

                <div className={styles.reportCard}>
                    <div className={`${styles.reportHeader} ${styles.normalHeader}`}>
                        <MapPin size={18} style={{ color: 'var(--sea-green)' }} /> Farm Road 5 Blocked
                    </div>
                    <p className={styles.reportContent}>
                        Fallen tree due to high winds blocking the path.
                    </p>
                    <div className={styles.reportMeta}>
                        Reported 20 mins ago
                    </div>
                </div>
            </div>

            <button onClick={() => setShowModal(true)} className={styles.fabButton}>
                <Plus size={32} />
            </button>

            {showModal && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <button onClick={() => setShowModal(false)} className={styles.closeButton}>
                            <X size={24} />
                        </button>
                        <h3 className={styles.modalTitle}>Report Weather Issue</h3>

                        <form
                            className={styles.form}
                            onSubmit={(e) => {
                                e.preventDefault();
                                setShowModal(false);
                            }}
                        >
                            <input
                                type="text"
                                placeholder="Affected Location"
                                className={styles.input}
                                required
                            />
                            <select className={styles.select}>
                                <option>Flood / Waterlogging</option>
                                <option>Tree Fall</option>
                                <option>Road Blockage</option>
                                <option>Extreme Heat</option>
                            </select>
                            <textarea
                                placeholder="Describe the situation..."
                                className={styles.textarea}
                                required
                            />

                            <button type="submit" className={styles.submitButton}>
                                Submit Report
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WeatherReports;
