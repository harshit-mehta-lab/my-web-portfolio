import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Zap, MessageSquare, Upload } from 'lucide-react';
import { BIO } from '../data';

const HeroSection = ({ setTab, profileImage }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="h-full overflow-y-auto p-4 md:p-8 relative scrollbar-hide"
        >
            <div className="min-h-full flex flex-col justify-center py-10 md:py-0">
                <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-16 pb-10">
                    <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left z-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 font-mono mb-4 px-3 py-1 rounded border w-fit"
                            style={{
                                color: 'var(--primary)',
                                backgroundColor: 'rgba(var(--primary-rgb), 0.1)',
                                borderColor: 'rgba(var(--primary-rgb), 0.3)'
                            }}
                        >
                            <div className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: 'var(--primary)' }} />
                            SYSTEM ONLINE
                        </motion.div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: 'var(--text-main)' }}>
                            Hi, I'm <br />
                            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, var(--primary), var(--secondary))' }}>
                                Harshit Mehta
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl max-w-xl mb-8 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                            {BIO.intro}
                        </p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setTab('projects')}
                                className="font-bold py-3 px-8 rounded flex items-center gap-2 transition-transform"
                                style={{ backgroundColor: 'var(--primary)', color: '#000' }}
                            >
                                <Zap size={20} /> View Patents & Projects
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05, borderColor: 'var(--primary)', color: 'var(--primary)' }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setTab('about')}
                                className="border py-3 px-8 rounded font-mono transition-all"
                                style={{
                                    borderColor: 'var(--text-muted)',
                                    color: 'var(--text-muted)'
                                }}
                            >
                                ./initialize_profile
                            </motion.button>
                        </div>
                    </div>
                    <div className="flex-none relative group z-10">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)] to-[var(--secondary)] blur-2xl opacity-30 rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-500" />
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 shadow-2xl bg-slate-900 flex items-center justify-center"
                            style={{ borderColor: 'var(--primary)' }}
                        >
                            <div className="absolute inset-0 bg-[var(--primary)] mix-blend-color opacity-10 group-hover:opacity-0 transition-opacity z-10 duration-500 pointer-events-none" />
                            <img
                                src={profileImage}
                                alt="Harshit Mehta"
                                className="w-full h-full object-cover transition-all duration-500 scale-100 group-hover:scale-110"
                            />
                        </motion.div>
                    </div>
                </div>
                <div className="mt-auto border-t border-dashed pt-6 pb-4 flex flex-col md:flex-row justify-between items-center gap-4 w-full" style={{ borderColor: 'var(--border)' }}>
                    <button
                        onClick={() => setTab('contact')}
                        className="flex items-center gap-2 text-sm transition-colors hover:underline group"
                        style={{ color: 'var(--text-muted)' }}
                    >
                        <MessageSquare size={16} className="group-hover:text-[var(--primary)] transition-colors" />
                        <span className="group-hover:text-[var(--text-main)] transition-colors">Have specific requirements? Send Feedback</span>
                    </button>
                    <p className="text-xs font-mono opacity-60 tracking-widest text-center md:text-right" style={{ color: 'var(--text-muted)' }}>
                        MADE IN CLOUD 2025 • ALL RIGHTS RESERVED
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default HeroSection;
