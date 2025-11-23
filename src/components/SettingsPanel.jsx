import React from 'react';
import { motion } from 'framer-motion';
import { Settings, X, Sun, Moon, Check } from 'lucide-react';
import { THEME_PRESETS } from '../data';

const SettingsPanel = ({ isOpen, onClose, currentTheme, setTheme, currentMode, setMode }) => {
    if (!isOpen) return null;
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
            className="absolute bottom-20 left-4 md:left-20 z-50 p-6 rounded-xl border shadow-2xl w-72 backdrop-blur-xl"
            style={{ backgroundColor: 'var(--bg-nav)', borderColor: 'var(--border)' }}
        >
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold flex items-center gap-2" style={{ color: 'var(--text-main)' }}>
                    <Settings size={18} /> System Settings
                </h3>
                <button onClick={onClose} style={{ color: 'var(--text-muted)' }}><X size={18} /></button>
            </div>

            <div className="mb-6">
                <label className="text-xs font-mono mb-3 block" style={{ color: 'var(--text-muted)' }}>SYSTEM PRESET</label>
                <div className="space-y-2">
                    {Object.entries(THEME_PRESETS).map(([key, preset]) => {
                        const Icon = preset.icon;
                        return (
                            <button
                                key={key}
                                onClick={() => setTheme(key)}
                                className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all ${currentTheme === key ? 'border-[var(--primary)] bg-[var(--bg-card)]' : 'border-transparent hover:bg-[var(--bg-card)]'}`}
                            >
                                <div className="p-2 rounded bg-[var(--bg-main)] border" style={{ borderColor: preset.primary }}>
                                    <Icon size={16} style={{ color: preset.primary }} />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs font-bold" style={{ color: 'var(--text-main)' }}>{preset.name}</p>
                                    <p className="text-[10px]" style={{ color: 'var(--text-muted)' }}>{preset.desc}</p>
                                </div>
                                {currentTheme === key && <Check size={14} style={{ color: 'var(--primary)', marginLeft: 'auto' }} />}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div>
                <label className="text-xs font-mono mb-3 block" style={{ color: 'var(--text-muted)' }}>DISPLAY MODE</label>
                <div className="flex bg-black/20 rounded-lg p-1 border" style={{ borderColor: 'var(--border)' }}>
                    <button
                        onClick={() => setMode('light')}
                        className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-xs font-bold transition-all ${currentMode === 'light' ? 'bg-white text-black shadow' : 'text-slate-400'}`}
                    >
                        <Sun size={14} /> Light
                    </button>
                    <button
                        onClick={() => setMode('dark')}
                        className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-xs font-bold transition-all ${currentMode === 'dark' ? 'bg-slate-800 text-white shadow' : 'text-slate-400'}`}
                    >
                        <Moon size={14} /> Dark
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default SettingsPanel;
