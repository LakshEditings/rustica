import React from 'react';

const Card = ({ title, children, className = "", icon: Icon, onClick, style, accentColor }) => {
    const iconStyle = accentColor ? { color: accentColor, backgroundColor: `${accentColor}15` } : {};
    const titleStyle = accentColor ? { color: accentColor } : {};

    return (
        <div
            className={`
                relative overflow-hidden
                bg-white
                rounded-xl
                p-6
                transition-all duration-300 ease-out
                border border-gray-100
                shadow-sm
                hover:shadow-lg
                hover:-translate-y-1
                cursor-pointer
                group
                ${className}
            `}
            onClick={onClick}
            style={style}
        >
            {(title || Icon) && (
                <div className="flex items-center gap-4 mb-4 relative z-10">
                    {Icon && (
                        <div
                            className="p-3 bg-gray-50 rounded-lg text-[var(--pine-teal)] group-hover:scale-105 transition-transform duration-300"
                            style={iconStyle}
                        >
                            {React.isValidElement(Icon) ? Icon : <Icon size={24} />}
                        </div>
                    )}
                    {title && (
                        <h3
                            className="text-lg font-bold text-[var(--pine-teal)] tracking-tight"
                            style={titleStyle}
                        >
                            {title}
                        </h3>
                    )}
                </div>
            )}
            <div className="text-gray-600 relative z-10 font-medium leading-relaxed">
                {children}
            </div>
        </div>
    );
};

export default Card;
