import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Linkedin, Github, Mail } from 'lucide-react';
import { BIO, SKILLS } from '../data';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 12
        }
    }
};

const AboutSection = () => (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="hidden" className="max-w-5xl mx-auto p-8 overflow-y-auto h-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
                <motion.h2 variants={itemVariants} className="text-4xl font-bold flex items-center gap-3" style={{ color: 'var(--text-main)' }}>
                    <Terminal style={{ color: 'var(--primary)' }} /> About Me
                </motion.h2>
                <motion.div variants={itemVariants} className="p-6 rounded-lg border-l-4 backdrop-blur-sm" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--primary)', boxShadow: '0 4px 20px var(--shadow)' }}>
                    <p className="text-lg mb-4 font-semibold" style={{ color: 'var(--text-main)' }}>{BIO.heading}</p>
                    <p className="leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>{BIO.paragraph1}</p>
                    <p className="leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>{BIO.paragraph2}</p>
                    <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>{BIO.paragraph3}</p>
                </motion.div>
                <motion.p variants={itemVariants} className="italic" style={{ color: 'var(--primary)' }}>"{BIO.conclusion}"</motion.p>
            </div>
            <div className="md:col-span-1 space-y-6">
                <motion.div variants={itemVariants} className="p-6 rounded-xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--text-main)' }}>
                        <Cpu size={18} className="text-purple-400" /> Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {SKILLS.map((skill, i) => (
                            <motion.span key={i} whileHover={{ scale: 1.1, borderColor: 'var(--primary)' }} className="px-3 py-1 text-sm rounded-full border transition-colors cursor-default" style={{ backgroundColor: 'var(--bg-main)', color: 'var(--primary)', borderColor: 'var(--border)' }}>
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
                <motion.div variants={itemVariants} className="p-6 rounded-xl border" style={{ background: 'linear-gradient(135deg, rgba(var(--primary-rgb), 0.1), rgba(var(--secondary-rgb), 0.1))', borderColor: 'rgba(var(--secondary-rgb), 0.3)' }}>
                    <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-main)' }}>Connect</h3>
                    <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>Let's build scalable solutions together.</p>
                    <div className="flex gap-4">
                        <a href="https://www.linkedin.com/in/-harshit-mehta/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg transition-colors bg-slate-800 hover:bg-[var(--primary)] group"><Linkedin size={20} className="text-white" /></a>
                        <a href="https://github.com/harshit-mehta-lab" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg transition-colors bg-slate-800 hover:bg-white group"><Github size={20} className="text-white group-hover:text-black" /></a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=harshitmehta1012@gmail.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg transition-colors bg-slate-800 hover:bg-red-500 group"><Mail size={20} className="text-white" /></a>
                    </div>
                </motion.div>
            </div>
        </div>
    </motion.div>
);

export default AboutSection;
