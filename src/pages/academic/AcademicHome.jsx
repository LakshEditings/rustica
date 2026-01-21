import React, { useState } from 'react';
import { Laptop, BookOpen, Calendar, X, Clock, Users, Video, FileText, Search, ToggleLeft, ToggleRight, Mic, MicOff, PhoneOff } from 'lucide-react';
import styles from './AcademicHome.module.css';

const AcademicHome = () => {
    const [activeTab, setActiveTab] = useState('studyRoom');
    const [showQuote, setShowQuote] = useState(true);
    const [studyMode, setStudyMode] = useState(false);

    const quotes = [
        "Education is the most powerful weapon which you can use to change the world.",
        "The beautiful thing about learning is that no one can take it away from you.",
        "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    ];
    const [randomQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);

    const sidebarItems = [
        { id: 'studyRoom', label: 'Create Study Room', icon: Laptop },
        { id: 'events', label: 'Events / Sessions', icon: Calendar },
        { id: 'material', label: 'Study Material', icon: BookOpen },
    ];

    return (
        <div className={styles.academicContainer} style={{ display: 'flex', gap: '24px', maxWidth: '1400px', margin: '0 auto', padding: '32px' }}>

            {/* Quote Modal */}
            {showQuote && (
                <div className={styles.quoteModal}>
                    <div className={styles.quoteContent}>
                        <button onClick={() => setShowQuote(false)} className={styles.closeButton}>
                            <X size={20} />
                        </button>
                        <h3 className={styles.quoteTitle}>Daily Motivation</h3>
                        <p className={styles.quoteText}>"{randomQuote}"</p>
                        <button onClick={() => setShowQuote(false)} className={styles.startButton}>
                            Start Learning
                        </button>
                    </div>
                </div>
            )}

            {/* Sidebar */}
            <div className={styles.sidebar}>
                <h2 className={styles.sidebarTitle}>Academic Hub</h2>
                <nav className={styles.sidebarNav}>
                    {sidebarItems.map(item => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`${styles.navButton} ${activeTab === item.id ? styles.navButtonActive : ''}`}
                        >
                            <item.icon size={22} />
                            {item.label}
                        </button>
                    ))}
                </nav>
                <div className={styles.quickInfo}>
                    <p className={styles.quickInfoText}>🎓 "Consistency is key to mastery."</p>
                </div>
            </div>

            {/* Main Content */}
            <div className={styles.mainContent}>
                <div className={styles.contentHeader}>
                    <h2 className={styles.contentTitle}>
                        {sidebarItems.find(i => i.id === activeTab)?.label}
                    </h2>
                    <div className={styles.studyModeToggle}>
                        <span className={`${styles.toggleLabel} ${!studyMode ? styles.toggleLabelActive : styles.toggleLabelInactive}`}>Normal</span>
                        <button onClick={() => setStudyMode(!studyMode)} className={styles.toggleButton}>
                            {studyMode ? <ToggleRight size={40} color="var(--sea-green)" /> : <ToggleLeft size={40} color="#d1d5db" />}
                        </button>
                        <span className={`${styles.toggleLabel} ${studyMode ? styles.toggleLabelActive : styles.toggleLabelInactive}`}>Study Mode</span>
                    </div>
                </div>

                <div>
                    {activeTab === 'studyRoom' && <StudyRoomView />}
                    {activeTab === 'events' && <EventsView />}
                    {activeTab === 'material' && <MaterialView />}
                </div>
            </div>
        </div>
    );
};

// Study Room Component
const StudyRoomView = () => {
    const [status, setStatus] = useState('input');
    const [students, setStudents] = useState('');
    const [duration, setDuration] = useState('');

    if (status === 'input') {
        return (
            <div className={styles.studyRoomInput}>
                <div className={styles.studyRoomCard}>
                    <Laptop size={48} className={styles.studyRoomIcon} />
                    <h3 className={styles.studyRoomTitle}>Create New Session</h3>
                    <p className={styles.studyRoomDesc}>Setup your virtual classroom environment.</p>
                    <div className={styles.formGroup}>
                        <input
                            type="number"
                            placeholder="Number of Students"
                            className={styles.input}
                            value={students}
                            onChange={(e) => setStudents(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Duration (e.g. 45 mins)"
                            className={styles.input}
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                        />
                        <button onClick={() => setStatus('active')} className={styles.createButton}>
                            Create Room
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', backgroundColor: '#f3f4f6', borderRadius: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'white', padding: '8px 16px', borderRadius: '12px', fontWeight: 700, color: 'var(--pine-teal)' }}>
                    <Clock size={20} /> 00:{duration || '45'}:00
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6b7280', fontWeight: 500 }}>
                    <Users size={20} /> {students || '4'} Active
                </div>
                <button onClick={() => setStatus('input')} style={{ backgroundColor: '#fee2e2', color: '#dc2626', padding: '8px 16px', borderRadius: '12px', fontWeight: 700, border: 'none', cursor: 'pointer' }}>
                    End Session
                </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', minHeight: '400px' }}>
                {[1, 2, 3, 4].map(i => (
                    <div key={i} style={{ backgroundColor: '#1f2937', borderRadius: '16px', position: 'relative', overflow: 'hidden' }}>
                        <img src={`https://via.placeholder.com/400x300/1f2937/fff?text=Student+${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} alt={`Student ${i}`} />
                        <div style={{ position: 'absolute', bottom: '16px', left: '16px', color: 'white', fontSize: '14px', fontWeight: 500, backgroundColor: 'rgba(0,0,0,0.4)', padding: '6px 12px', borderRadius: '8px' }}>Student {i}</div>
                        <div style={{ position: 'absolute', top: '16px', right: '16px' }}>
                            <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '8px', borderRadius: '50%' }}><Mic size={16} color="white" /></div>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
                <button style={{ padding: '16px', backgroundColor: '#e5e7eb', borderRadius: '50%', border: 'none', cursor: 'pointer', color: '#6b7280' }}><MicOff size={24} /></button>
                <button style={{ padding: '16px', backgroundColor: '#e5e7eb', borderRadius: '50%', border: 'none', cursor: 'pointer', color: '#6b7280' }}><Video size={24} /></button>
                <button onClick={() => setStatus('input')} style={{ padding: '16px', backgroundColor: '#dc2626', borderRadius: '50%', border: 'none', cursor: 'pointer', color: 'white', boxShadow: '0 4px 12px rgba(220, 38, 38, 0.3)' }}><PhoneOff size={24} /></button>
            </div>
        </div>
    );
};

// Events Component
const EventsView = () => {
    const events = [
        { title: 'Live Career Guidance', type: 'Webinar', date: 'Tomorrow, 10 AM', gradient: 'linear-gradient(135deg, #74c69d 0%, #52b788 100%)' },
        { title: 'Intro to Python', type: 'Course', date: 'Starts Jan 25', gradient: 'linear-gradient(135deg, #52b788 0%, #40916c 100%)' },
        { title: 'Rural Tech Hackathon', type: 'Competition', date: 'Feb 05, Trichy', gradient: 'linear-gradient(135deg, #40916c 0%, #2d6a4f 100%)' },
        { title: 'Medical Entrance Tips', type: 'Session', date: 'Jan 28, 5 PM', gradient: 'linear-gradient(135deg, #2d6a4f 0%, #1b4332 100%)' },
    ];

    return (
        <div className={styles.eventsGrid}>
            {events.map((evt, idx) => (
                <div key={idx} className={styles.eventCard} style={{ background: evt.gradient, color: 'white' }}>
                    <div style={{ position: 'relative', zIndex: 10 }}>
                        <span className={styles.eventBadge}>{evt.type}</span>
                        <h3 className={styles.eventTitle}>{evt.title}</h3>
                        <div className={styles.eventDate}>
                            <Calendar size={18} /> {evt.date}
                        </div>
                    </div>
                    <div className={styles.eventDecor}></div>
                </div>
            ))}
        </div>
    );
};

// Material Component
const MaterialView = () => {
    const [searched, setSearched] = useState(false);

    return (
        <div>
            <div className={styles.materialSearch}>
                <div className={styles.searchRow}>
                    <div className={styles.searchField}>
                        <label className={styles.label}>Class / Standard</label>
                        <select className={styles.select}>
                            <option>Class 10</option>
                            <option>Class 12</option>
                            <option>College Year 1</option>
                        </select>
                    </div>
                    <div className={styles.searchField}>
                        <label className={styles.label}>Subject</label>
                        <input type="text" placeholder="e.g. Mathematics" className={styles.input} />
                    </div>
                    <button onClick={() => setSearched(true)} className={styles.searchButton}>
                        <Search size={20} /> Search
                    </button>
                </div>
            </div>

            {searched ? (
                <div className={styles.resultsList}>
                    <h3 style={{ fontWeight: 700, color: '#1f2937', fontSize: '18px', marginBottom: '16px' }}>Search Results (3)</h3>

                    <div className={styles.resultItem}>
                        <div className={styles.resultIcon} style={{ backgroundColor: '#fee2e2', color: '#dc2626' }}>
                            <FileText size={24} />
                        </div>
                        <div className={styles.resultInfo}>
                            <h4 className={styles.resultTitle}>Chapter 5: Calculus Basics.pdf</h4>
                            <p className={styles.resultMeta}>2.4 MB • Updated yesterday</p>
                        </div>
                        <button className={styles.resultAction} style={{ backgroundColor: '#f3f4f6', color: '#374151' }}>Download</button>
                    </div>

                    <div className={styles.resultItem}>
                        <div className={styles.resultIcon} style={{ backgroundColor: '#dbeafe', color: '#2563eb' }}>
                            <Video size={24} />
                        </div>
                        <div className={styles.resultInfo}>
                            <h4 className={styles.resultTitle}>Calculus Explained in 10 Mins</h4>
                            <p className={styles.resultMeta}>Video Lecture • 10:24</p>
                        </div>
                        <button className={styles.resultAction} style={{ backgroundColor: '#dbeafe', color: '#2563eb' }}>Watch</button>
                    </div>

                    <div className={styles.resultItem}>
                        <div className={styles.resultIcon} style={{ backgroundColor: 'rgba(116, 198, 157, 0.2)', color: 'var(--sea-green)' }}>
                            <BookOpen size={24} />
                        </div>
                        <div className={styles.resultInfo}>
                            <h4 className={styles.resultTitle}>Practice Quiz: Set 1</h4>
                            <p className={styles.resultMeta}>20 Questions • 30 Mins</p>
                        </div>
                        <button className={styles.resultAction} style={{ backgroundColor: 'var(--sea-green)', color: 'white', boxShadow: '0 4px 12px rgba(64, 145, 108, 0.2)' }}>Start Quiz</button>
                    </div>
                </div>
            ) : (
                <div className={styles.emptyState}>
                    <BookOpen size={64} className={styles.emptyIcon} />
                    <p className={styles.emptyText}>Select a Class and Subject to find materials</p>
                </div>
            )}
        </div>
    );
};

export default AcademicHome;
