import React from 'react';
import { WifiOff } from 'lucide-react';
import RebootingAnimation from './RebootingAnimation';

const CrashScreen = () => {
    return (
        <div className="fixed inset-0 z-[200] bg-slate-950 text-red-500 font-mono flex flex-col items-center justify-center p-8 overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                {Array.from({ length: 20 }).map((_, i) => (<div key={i} className="absolute h-[1px] bg-red-500 w-full animate-pulse" style={{ top: `${Math.random() * 100}%`, left: 0, opacity: Math.random() }} />))}
            </div>
            <WifiOff size={64} className="mb-6 animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter glitch-text">SYSTEM FAILURE</h1>
            <p className="text-red-400 mb-8 text-center max-w-lg">CRITICAL ERROR: NETWORK UPLINK SEVERED.<br />UNABLE TO REACH CLOUD INFRASTRUCTURE.</p>
            <RebootingAnimation />
            <div className="text-xs text-red-700 animate-pulse mt-auto">WAITING FOR RECONNECTION...</div>
        </div>
    );
};

export default CrashScreen;
