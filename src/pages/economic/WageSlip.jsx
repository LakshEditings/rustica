import React from 'react';
import { FileText } from 'lucide-react';

const WageSlip = () => {
    return (
        <div className="container mx-auto p-4 animate-fade-in text-center">
            <h2 className="text-3xl font-bold text-green-700 mb-6">My Wage History</h2>
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-dashed border-green-300">
                <FileText size={48} className="mx-auto text-green-200 mb-4" />
                <p className="text-gray-500">No jobs completed yet.</p>
                <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-full font-bold">Find Work</button>
            </div>
        </div>
    );
};
export default WageSlip;
