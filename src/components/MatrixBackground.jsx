import React from 'react';
import { motion } from 'framer-motion';

const MatrixBackground = ({ mode, theme, bgType = 'grid' }) => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden" style={{ backgroundColor: 'var(--bg-main)' }}>
            {/* Layer 1: Static Pattern */}
            <div className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage:
                        bgType === 'circuit'
                            ? `radial-gradient(var(--primary) 2px, transparent 2px), linear-gradient(var(--bg-main) 4px, transparent 0), linear-gradient(45deg, transparent 74px, transparent 75px, var(--primary) 75px, var(--primary) 76px, transparent 77px, transparent 109px), linear-gradient(-45deg, transparent 75px, transparent 76px, var(--primary) 76px, var(--primary) 77px, transparent 78px, transparent 109px)`
                            : bgType === 'nebula'
                                ? `radial-gradient(var(--primary), rgba(255,255,255,.1) 2px, transparent 4px), radial-gradient(var(--secondary), rgba(255,255,255,.1) 1px, transparent 2px)`
                                : `linear-gradient(rgba(var(--primary-rgb), 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--primary-rgb), 0.1) 1px, transparent 1px)`, // Default Grid
                    backgroundSize:
                        bgType === 'circuit' ? '60px 60px, 4px 4px, 60px 60px, 60px 60px'
                            : bgType === 'nebula' ? '350px 350px, 200px 200px'
                                : '40px 40px',
                    backgroundPosition:
                        bgType === 'nebula' ? '0 0, 40px 60px' : undefined
                }}
            />

            {/* Layer 2: Animation */}
            <motion.div
                animate={{
                    backgroundPosition: bgType === 'nebula' ? ['0% 0%', '50% 50%'] : ['0% 0%', '100% 100%'],
                    scale: bgType === 'nebula' ? [1, 1.1, 1] : 1
                }}
                transition={{ duration: bgType === 'nebula' ? 30 : 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `radial-gradient(circle at center, ${mode === 'dark' ? 'var(--primary)' : '#000'} 0%, transparent 70%)`
                }}
            />
        </div>
    );
};

export default MatrixBackground;
