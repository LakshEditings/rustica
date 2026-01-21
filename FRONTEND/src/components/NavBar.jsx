import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Palette, Building2, CloudSun, GraduationCap, HeartPulse, Wallet, Menu, X } from 'lucide-react';

const NavBar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const location = useLocation();

    const links = [
        { name: 'Home', path: '/', icon: <Home size={18} /> },
        { name: 'Culture', path: '/culture', icon: <Palette size={18} /> },
        { name: 'Government', path: '/government', icon: <Building2 size={18} /> },
        { name: 'Weather', path: '/weather', icon: <CloudSun size={18} /> },
        { name: 'Education', path: '/education', icon: <GraduationCap size={18} /> },
        { name: 'Health', path: '/health', icon: <HeartPulse size={18} /> },
        { name: 'Economy', path: '/economy', icon: <Wallet size={18} /> },
    ];

    const isActive = (path) => {
        if (path === '/' && location.pathname !== '/') return false;
        return location.pathname.startsWith(path);
    };

    return (
        <nav className="bg-[var(--pine-teal)] text-white sticky top-0 z-50 shadow-lg border-b border-[var(--sea-green)]">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold flex items-center gap-2 text-[var(--frosted-mint)]">
                    Rustica
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex gap-6 items-center">
                    {links.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-[var(--dark-emerald)] ${isActive(link.path) ? 'bg-[var(--dark-emerald)] text-[var(--frosted-mint)] shadow-md' : 'text-gray-200'
                                }`}
                        >
                            {link.icon}
                            <span className="font-medium text-sm">{link.name}</span>
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-[var(--pine-teal)] border-t border-[var(--sea-green)] py-4 px-4 flex flex-col gap-2 shadow-xl animate-fade-in-down">
                    {links.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive(link.path) ? 'bg-[var(--dark-emerald)] text-[var(--frosted-mint)]' : 'hover:bg-[var(--dark-emerald)]'
                                }`}
                        >
                            {link.icon}
                            <span className="font-medium">{link.name}</span>
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default NavBar;
