import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Zap, Send } from 'lucide-react';

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

const ContactSection = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    const handleSend = (e) => {
        e.preventDefault();
        const subject = `Portfolio Contact from ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`;
        const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=harshitmehta1012@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink, '_blank');
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden" animate="visible" exit="hidden"
            className="h-full p-4 md:p-8 overflow-y-auto flex items-center justify-center"
        >
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                {/* Left: Info */}
                <motion.div variants={itemVariants} className="space-y-8">
                    <div>
                        <h2 className="text-4xl font-bold mb-2" style={{ color: 'var(--text-main)' }}>Initialize Communication</h2>
                        <p className="text-lg" style={{ color: 'var(--text-muted)' }}>Ready to collaborate on scalable cloud architecture? Establish an uplink below.</p>
                        <div className="h-1 w-20 mt-4 rounded bg-gradient-to-r from-[var(--primary)] to-transparent" />
                    </div>

                    <div className="space-y-6 relative z-20 pointer-events-auto">
                        {/* Email */}
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=harshitmehta1012@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            className="group flex items-center gap-4 p-4 rounded-xl border transition-all hover:border-[var(--primary)] bg-[var(--bg-card)] cursor-pointer w-full block relative z-30"
                            style={{ borderColor: 'var(--border)' }}
                        >
                            <div className="p-3 rounded-lg bg-slate-950 text-[var(--primary)] group-hover:scale-110 transition-transform shrink-0 border border-slate-800">
                                <Mail size={24} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-bold text-sm md:text-base text-white truncate">
                                    harshitmehta1012@gmail.com
                                </p>
                            </div>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/-harshit-mehta/"
                            target="_blank"
                            rel="noreferrer"
                            className="group flex items-center gap-4 p-4 rounded-xl border transition-all hover:border-[var(--primary)] bg-[var(--bg-card)] cursor-pointer w-full block relative z-30"
                            style={{ borderColor: 'var(--border)' }}
                        >
                            <div className="p-3 rounded-lg bg-slate-950 text-[var(--primary)] group-hover:scale-110 transition-transform shrink-0 border border-slate-800">
                                <Linkedin size={24} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-bold text-sm md:text-base text-white truncate">
                                    Harshit Mehta
                                </p>
                            </div>
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/harshit-mehta-lab"
                            target="_blank"
                            rel="noreferrer"
                            className="group flex items-center gap-4 p-4 rounded-xl border transition-all hover:border-[var(--primary)] bg-[var(--bg-card)] cursor-pointer w-full block relative z-30"
                            style={{ borderColor: 'var(--border)' }}
                        >
                            <div className="p-3 rounded-lg bg-slate-950 text-[var(--primary)] group-hover:scale-110 transition-transform shrink-0 border border-slate-800">
                                <Github size={24} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-bold text-sm md:text-base text-white truncate">
                                    harshit-mehta-lab
                                </p>
                            </div>
                        </a>
                    </div>
                </motion.div>

                {/* Right: Form */}
                <motion.div variants={itemVariants} className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-2xl blur opacity-20 animate-pulse" />
                    <div className="relative p-8 rounded-xl border shadow-2xl h-full flex flex-col" style={{ backgroundColor: 'var(--bg-nav)', borderColor: 'var(--border)' }}>
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: 'var(--text-main)' }}>
                            <Zap size={20} className="text-[var(--primary)]" /> Transmission Console
                        </h3>

                        <form onSubmit={handleSend} className="space-y-5 flex-1 flex flex-col">
                            <div>
                                <label className="text-xs font-mono mb-2 block" style={{ color: 'var(--text-muted)' }}>IDENTIFIER (NAME)</label>
                                <input
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full p-4 rounded-lg bg-[var(--bg-main)] border outline-none focus:border-[var(--primary)] transition-colors"
                                    style={{ borderColor: 'var(--border)', color: 'var(--text-main)' }}
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-mono mb-2 block" style={{ color: 'var(--text-muted)' }}>RETURN ADDRESS (EMAIL)</label>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full p-4 rounded-lg bg-[var(--bg-main)] border outline-none focus:border-[var(--primary)] transition-colors"
                                    style={{ borderColor: 'var(--border)', color: 'var(--text-main)' }}
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="text-xs font-mono mb-2 block" style={{ color: 'var(--text-muted)' }}>DATA PACKET (MESSAGE)</label>
                                <textarea
                                    required
                                    value={msg}
                                    onChange={(e) => setMsg(e.target.value)}
                                    className="w-full p-4 rounded-lg bg-[var(--bg-main)] border outline-none focus:border-[var(--primary)] transition-colors h-full min-h-[150px] resize-none"
                                    style={{ borderColor: 'var(--border)', color: 'var(--text-main)' }}
                                    placeholder="Type your message coordinates..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 rounded-lg font-bold text-black flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-lg mt-auto"
                                style={{ backgroundColor: 'var(--primary)' }}
                            >
                                <Send size={20} /> INITIALIZE TRANSMISSION
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ContactSection;
