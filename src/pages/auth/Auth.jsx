import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Auth.module.css';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.logo}>Rustica</div>
                <h2 className={styles.title}>{isLogin ? 'Welcome Back' : 'Join Us'}</h2>

                <form onSubmit={handleSubmit} className={styles.form}>
                    {!isLogin && (
                        <div className={styles.inputGroup}>
                            <label>Full Name</label>
                            <input type="text" placeholder="John Doe" required />
                        </div>
                    )}
                    <div className={styles.inputGroup}>
                        <label>Phone Number / Email</label>
                        <input type="text" placeholder="1234567890" required />
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                        {isLogin ? 'Sign In' : 'Register'}
                    </button>
                </form>

                <p className={styles.footer}>
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <button onClick={() => setIsLogin(!isLogin)} className={styles.link}>
                        {isLogin ? 'Register' : 'Sign In'}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Auth;
