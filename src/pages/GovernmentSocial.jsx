import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import { Search, FileText, ShieldAlert, BadgeCheck } from 'lucide-react';

const GovernmentSocial = () => {
    return (
        <div className="animate-fade-in">
            <Header
                title="Government & Social Connect Hub"
                subtitle="Helps people understand schemes, benefits, and public services easily."
            />

            <div className="container mx-auto px-4 py-8 space-y-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <Card title="The Challenge" className="bg-orange-50/50 border-orange-100 mb-4">
                            <p>Low awareness of schemes, poor access to welfare, and safety concerns.</p>
                        </Card>
                        <Card title="Our Solution" className="bg-blue-50/50 border-blue-100">
                            <ul className="list-disc list-inside space-y-2">
                                <li>AI-driven scheme eligibility checker.</li>
                                <li>Digital land records (patta/NOC).</li>
                                <li>Complaint & reporting system.</li>
                                <li>AI Women Safety Guardian.</li>
                            </ul>
                        </Card>
                    </div>
                    <div className="bg-yellow-100 p-6 rounded-2xl text-center">
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/government-building-5674720-4749363.png" alt="Govt Services" className="w-48 mx-auto mb-4 mix-blend-multiply opacity-80" />
                        <p className="font-bold text-[var(--pine-teal)]">Connecting Village to Govt</p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-[var(--pine-teal)] text-center">Services</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card title="Scheme Checker" icon={Search} className="cursor-pointer hover:bg-blue-50">
                        <span className="text-sm">Find eligible schemes instantly.</span>
                    </Card>
                    <Card title="Land Records" icon={FileText} className="cursor-pointer hover:bg-blue-50">
                        <span className="text-sm">Access Patta/Chitta online.</span>
                    </Card>
                    <Card title="Complaints" icon={ShieldAlert} className="cursor-pointer hover:bg-blue-50">
                        <span className="text-sm">Report issues directly.</span>
                    </Card>
                    <Card title="Women Safety" icon={BadgeCheck} className="cursor-pointer hover:bg-blue-50">
                        <span className="text-sm">SOS & Safe Route suggestions.</span>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default GovernmentSocial;
