import React from 'react';

const Card = ({ title, children, className = "", icon: Icon }) => {
    return (
        <div className={`bg-white/80 backdrop-blur-sm border border-[var(--celadon)] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 ${className}`}>
            {title && (
                <div className="flex items-center gap-3 mb-4">
                    {Icon && <div className="p-2 bg-[var(--celadon)] rounded-lg text-[var(--pine-teal)]"><Icon size={24} /></div>}
                    <h3 className="text-xl font-bold text-[var(--pine-teal)]">{title}</h3>
                </div>
            )}
            <div className="text-[var(--evergreen)]">
                {children}
            </div>
        </div>
    );
};

export default Card;
