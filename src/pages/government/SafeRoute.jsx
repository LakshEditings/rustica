import React from 'react';
import { ShieldCheck } from 'lucide-react';

const SafeRoute = () => {
    return (
        <div className="h-[calc(100vh-80px)] w-full relative">
            {/* Map Mockup Background */}
            <div className="absolute inset-0 bg-blue-50 opacity-50 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/Map_of_Adyar_River.png')] bg-cover bg-center grayscale mix-blend-multiply"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl text-center max-w-md border-4 border-yellow-400">
                    <ShieldCheck size={64} className="mx-auto text-green-600 mb-4" />
                    <h2 className="text-2xl font-bold mb-2 text-gray-800">Safe Route Active</h2>
                    <p className="text-gray-600 mb-6">Highlighting the safest, well-lit roads with police patrol density.</p>
                    <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-bold">
                        🟢 You are in a safe zone
                    </div>
                </div>
            </div>

            {/* Simulated Route Line (CSS) */}
            <svg className="absolute inset-0 pointer-events-none w-full h-full">
                <path d="M100,600 Q400,300 800,400 T1200,200" fill="none" stroke="#22c55e" strokeWidth="8" strokeDasharray="20,10" className="animate-pulse opacity-60" />
            </svg>
        </div>
    );
};

export default SafeRoute;
