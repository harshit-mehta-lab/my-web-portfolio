import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Lock, ShieldCheck, ExternalLink } from 'lucide-react';
import { PATENT_PROJECT } from '../data';

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

const ProjectsSection = () => (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="hidden" className="h-full p-8 overflow-y-auto flex items-center justify-center">
        <div className="max-w-5xl w-full">
            <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-10 flex items-center gap-3" style={{ color: 'var(--text-main)' }}>
                <Layers className="text-purple-400" /> Key Projects
            </motion.h2>
            <motion.div variants={itemVariants} whileHover={{ scale: 1.01 }} className="relative rounded-2xl border-2 p-1 overflow-hidden" style={{ borderColor: 'rgba(var(--primary-rgb), 0.5)', backgroundColor: 'var(--bg-main)', boxShadow: '0 0 50px rgba(var(--primary-rgb), 0.15)' }}>
                <div className="absolute top-0 right-0 text-black font-bold text-xs px-3 py-1 rounded-bl-lg z-20 flex items-center gap-1" style={{ backgroundColor: 'var(--primary)' }}>
                    <Lock size={12} /> PATENT PENDING
                </div>
                <div className="rounded-xl p-8 relative z-10" style={{ backgroundColor: 'var(--bg-nav)' }}>
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-purple-900/30 rounded-full text-purple-400"><ShieldCheck size={32} /></div>
                                <h3 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--text-main)' }}>{PATENT_PROJECT.title}</h3>
                            </div>
                            <p className="text-lg mb-6 leading-relaxed" style={{ color: 'var(--text-muted)' }}>{PATENT_PROJECT.description}</p>
                            <div className="flex flex-wrap gap-3 mb-8">
                                {PATENT_PROJECT.tech.map((t, i) => (<span key={i} className="px-4 py-2 rounded text-sm font-mono border border-purple-500/20" style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }}>{t}</span>))}
                            </div>
                            <a href={PATENT_PROJECT.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-black font-semibold py-3 px-6 rounded-lg transition-colors" style={{ backgroundColor: 'var(--primary)' }}>
                                View Prototype <ExternalLink size={18} />
                            </a>
                        </div>
                        <div className="w-full md:w-1/3 h-64 rounded-lg border flex items-center justify-center relative overflow-hidden group" style={{ backgroundColor: 'var(--bg-main)', borderColor: 'var(--border)' }}>
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity group-hover:opacity-40 transition-opacity duration-500" />
                            <div className="relative z-10 text-center">
                                <div className="flex justify-center gap-2 mb-2">
                                    {[1, 2, 3, 4, 5].map(i => (<motion.div key={i} animate={{ height: [10, 30, 10] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }} className="w-2 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />))}
                                </div>
                                <span className="text-xs font-mono" style={{ color: 'var(--primary)' }}>VOICE ANALYSIS ACTIVE</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants} className="p-6 rounded-xl border transition-colors" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                    <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-main)' }}>Cloud-Based LMS</h3>
                    <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>Secure infrastructure on AWS using public/private subnets and automated scaling groups.</p>
                    <div className="flex gap-2">
                        <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-muted)' }}>AWS</span>
                        <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-muted)' }}>EC2</span>
                        <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-muted)' }}>VPC</span>
                    </div>
                </motion.div>
                <motion.div variants={itemVariants} className="p-6 rounded-xl border transition-colors" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                    <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-main)' }}>Network Architecture Analysis</h3>
                    <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>Deep dive into packet switching algorithms and data communication optimization.</p>
                    <div className="flex gap-2">
                        <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-muted)' }}>Networks</span>
                        <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-muted)' }}>Algorithms</span>
                    </div>
                </motion.div>
            </div>
        </div>
    </motion.div>
);

export default ProjectsSection;
