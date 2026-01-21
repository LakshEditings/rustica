import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[var(--evergreen)] text-[var(--celadon)] py-8 mt-auto border-t border-[var(--pine-teal)]">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div>
                    <h3 className="text-xl font-bold text-[var(--frosted-mint)] mb-2">Rustica</h3>
                    <p className="text-sm opacity-80">
                        Bridging the rural-urban divide with a unified ecosystem for a smarter, simpler village life.
                    </p>
                </div>
                <div>
                    <h4 className="font-semibold text-[var(--frosted-mint)] mb-2">Quick Links</h4>
                    <ul className="text-sm space-y-1">
                        <li><a href="/government" className="hover:text-white transition">Government Schemes</a></li>
                        <li><a href="/health" className="hover:text-white transition">Telemedicine</a></li>
                        <li><a href="/weather" className="hover:text-white transition">Farming Alerts</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-[var(--frosted-mint)] mb-2">Contact</h4>
                    <p className="text-sm opacity-80">Helpline: 1800-RUSTICA</p>
                    <p className="text-sm opacity-80">Email: support@rustica.in</p>
                </div>
            </div>
            <div className="text-center mt-8 pt-4 border-t border-[var(--pine-teal)] text-xs opacity-60 flex justify-center items-center gap-1">
                Made with <Heart size={12} fill="currentColor" /> for Rural Development
            </div>
        </footer>
    );
};

export default Footer;
