import React from 'react';
import { Camera, Video, PlayCircle } from 'lucide-react';

const DigitalArchives = () => {
    return (
        <div className="container mx-auto p-4 animate-fade-in pb-24">
            <h2 className="text-3xl font-bold text-orange-600 mb-6">Digital Archives</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-black rounded-xl overflow-hidden relative aspect-video group cursor-pointer">
                    <img src="https://via.placeholder.com/600x400?text=Folk+Dance" className="w-full h-full object-cover opacity-80" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <PlayCircle size={64} className="text-white opacity-80 group-hover:scale-110 transition" />
                    </div>
                    <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/80 to-transparent w-full text-white">
                        <h3 className="font-bold text-lg">Village Folk Dance</h3>
                        <p className="text-sm opacity-80">Recorded Jan 2025</p>
                    </div>
                </div>

                <div className="bg-black rounded-xl overflow-hidden relative aspect-video group cursor-pointer">
                    <img src="https://via.placeholder.com/600x400?text=Storytelling" className="w-full h-full object-cover opacity-80" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <PlayCircle size={64} className="text-white opacity-80 group-hover:scale-110 transition" />
                    </div>
                    <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/80 to-transparent w-full text-white">
                        <h3 className="font-bold text-lg">Elder Stories</h3>
                        <p className="text-sm opacity-80">Oral History</p>
                    </div>
                </div>
            </div>

            {/* Capture Bar */}
            <div className="fixed bottom-0 left-0 w-full bg-white border-t border-orange-100 p-4 shadow-[0_-5px_20px_rgba(0,0,0,0.1)]">
                <div className="container mx-auto flex justify-center items-center gap-6">
                    <button className="flex flex-col items-center gap-1 text-orange-600">
                        <div className="bg-orange-100 p-4 rounded-full hover:bg-orange-200 transition">
                            <Camera size={28} />
                        </div>
                        <span className="text-xs font-bold">Photo</span>
                    </button>

                    <div className="w-16 h-16 rounded-full border-4 border-orange-500 flex items-center justify-center cursor-pointer hover:bg-orange-50">
                        <div className="w-12 h-12 bg-orange-600 rounded-full"></div>
                    </div>

                    <button className="flex flex-col items-center gap-1 text-orange-600">
                        <div className="bg-orange-100 p-4 rounded-full hover:bg-orange-200 transition">
                            <Video size={28} />
                        </div>
                        <span className="text-xs font-bold">Video</span>
                    </button>
                </div>
                <div className="text-center text-xs text-gray-400 mt-2">Capture to Preserve</div>
            </div>
        </div>
    );
};

export default DigitalArchives;
