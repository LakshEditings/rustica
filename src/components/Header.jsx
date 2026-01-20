import React from 'react';

const Header = ({ title, subtitle, bgImage }) => {
    return (
        <header
            className="relative bg-[var(--pine-teal)] text-[var(--frosted-mint)] py-12 px-6 rounded-b-[2rem] shadow-lg mb-8 overflow-hidden"
        >
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
            <div className="relative container mx-auto text-center z-10">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-sm">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-lg md:text-xl font-light opacity-90 max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                )}
            </div>
        </header>
    );
};

export default Header;
