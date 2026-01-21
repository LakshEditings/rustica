import React from 'react';
import { Send, FileText } from 'lucide-react';
import styles from '../../styles/professional.module.css';

const Schemes = () => {
    return (
        <div className={styles.narrowContainer}>
            <div className={styles.pageHeader}>
                <FileText size={48} className={styles.pageIcon} />
                <h2 className={styles.pageTitle}>Apply for Schemes</h2>
                <p className={styles.pageSubtitle}>Unified application form</p>
            </div>

            <div className={`${styles.card} ${styles.cardWithTopBorder}`}>
                <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                    <div className={styles.formRowTwo}>
                        <div>
                            <label className={styles.label}>Full Name</label>
                            <input type="text" className={styles.input} placeholder="Name as per Aadhaar" />
                        </div>
                        <div>
                            <label className={styles.label}>Date of Birth</label>
                            <input type="date" className={styles.input} />
                        </div>
                    </div>

                    <div>
                        <label className={styles.label}>Address</label>
                        <textarea className={styles.textarea} placeholder="Village, Taluk, District" style={{ minHeight: '100px' }} />
                    </div>

                    <div className={styles.formRowTwo}>
                        <div>
                            <label className={styles.label}>Aadhaar Number</label>
                            <input type="text" className={styles.input} placeholder="12 Digit Number" maxLength="12" />
                        </div>
                        <div>
                            <label className={styles.label}>Income Certificate No.</label>
                            <input type="text" className={styles.input} placeholder="Certificate ID" />
                        </div>
                    </div>

                    <div>
                        <label className={styles.label}>Disability Status</label>
                        <div style={{ display: 'flex', gap: '16px', padding: '12px 0' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                                <input type="radio" name="disability" value="no" defaultChecked />
                                <span style={{ fontWeight: 500 }}>No</span>
                            </label>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                                <input type="radio" name="disability" value="yes" />
                                <span style={{ fontWeight: 500 }}>Yes</span>
                            </label>
                        </div>
                    </div>

                    <button type="submit" className={`${styles.button} ${styles.buttonPrimary} ${styles.buttonFull}`}>
                        <Send size={20} /> Submit Application
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Schemes;
