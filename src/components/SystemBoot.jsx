import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cloud } from 'lucide-react';

const SystemBoot = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [text, setText] = useState('INITIALIZING...');

    useEffect(() => {
        const messages = [
            "TERMINATING SESSION...",
            "FLUSHING MEMORY BUFFERS...",
            "DOWNLOADING LATEST ASSETS...",
            "VERIFYING CLOUD INTEGRITY...",
            "RE-ESTABLISHING UPLINK...",
            "SYSTEM REBOOTING..."
        ];

        let i = 0;
        const interval = setInterval(() => {
            if (i < messages.length) {
                setText(messages[i]);
                i++;
            }
        }, 400);

        const timer = setInterval(() => {
            setProgress(old => {
                if (old >= 100) {
                    clearInterval(timer);
                    clearInterval(interval);
                    setTimeout(onComplete, 500);
                    return 100;
                }
                const diff = Math.random() * 15;
                return Math.min(old + diff, 100);
            });
        }, 200);

        return () => { clearInterval(timer); clearInterval(interval); };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center font-mono text-center p-4"
        >
            <Cloud size={64} className="text-[var(--primary)] animate-pulse mb-8" />
            <div className="w-full max-w-md border border-[var(--primary)] p-1 mb-4 relative overflow-hidden">
                <motion.div
                    className="h-6 bg-[var(--primary)] opacity-50 absolute top-0 left-0 bottom-0"
                    style={{ width: `${progress}%` }}
                />
                <div className="relative z-10 font-bold" style={{ color: 'var(--text-main)' }}>
                    {Math.round(progress)}%
                </div>
            </div>
            <div className="text-sm animate-pulse" style={{ color: 'var(--primary)' }}>
                {`> ${text}`}
            </div>
            <div className="mt-8 text-xs text-slate-500">
                SYSTEM RESTART SEQUENCE INITIATED
            </div>
        </motion.div>
    );
};

export default SystemBoot;
