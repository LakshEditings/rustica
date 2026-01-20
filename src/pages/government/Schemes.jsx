import React from 'react';
import { Send, FileText } from 'lucide-react';

const Schemes = () => {
    return (
        <div className="container mx-auto p-4 animate-fade-in max-w-2xl">
            <div className="text-center mb-8">
                <FileText size={48} className="mx-auto text-yellow-500 mb-2" />
                <h2 className="text-3xl font-bold text-gray-800">Apply for Schemes</h2>
                <p className="text-gray-500">Unified application form</p>
            </div>

            <form className="bg-white p-6 rounded-2xl shadow-xl space-y-6 border-t-8 border-yellow-400" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">Full Name</label>
                        <input type="text" className="w-full p-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none" placeholder="Name as per Aadhaar" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">Date of Birth</label>
                        <input type="date" className="w-full p-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Address</label>
                    <textarea className="w-full p-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none h-24" placeholder="Village, Taluk, District"></textarea>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">Aadhaar Number</label>
                        <input type="text" className="w-full p-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none" placeholder="12 Digit Number" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">Income Certificate No.</label>
                        <input type="text" className="w-full p-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none" placeholder="Certificate ID" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Disability Status</label>
                    <div className="flex gap-4">
                        <label className="flex items-center gap-2 p-3 border rounded-xl w-full cursor-pointer hover:bg-yellow-50">
                            <input type="radio" name="disability" value="no" defaultChecked className="accent-yellow-500" /> No
                        </label>
                        <label className="flex items-center gap-2 p-3 border rounded-xl w-full cursor-pointer hover:bg-yellow-50">
                            <input type="radio" name="disability" value="yes" className="accent-yellow-500" /> Yes
                        </label>
                    </div>
                </div>

                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 transition transform hover:scale-[1.02]">
                    <Send size={24} /> Submit Application
                </button>
            </form>
        </div>
    );
};

export default Schemes;
