import React from 'react';
import { motion } from 'framer-motion';
import { Award, Cloud, Globe } from 'lucide-react';
import { CERTIFICATIONS } from '../data';

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

const CertCard = ({ cert, index }) => {
    const getIcon = (type) => {
        switch (type) {
            case 'cloud': return <Cloud style={{ color: 'var(--primary)' }} />;
            case 'aws': return <Cloud className="text-yellow-400" />;
            case 'network': return <Globe className="text-blue-400" />;
            case 'google': return <Award className="text-red-400" />;
            default: return <Award className="text-purple-400" />;
        }
    };
    return (
        <motion.div variants={itemVariants} whileHover={{ scale: 1.03, rotateX: 5, rotateY: 5 }} className="p-5 rounded-lg border group transition-all duration-300 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(135deg, rgba(var(--primary-rgb), 0.1), transparent)' }} />
            <div className="flex items-start justify-between mb-3 relative z-10">
                <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--bg-main)' }}>{getIcon(cert.icon)}</div>
                <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{cert.date}</span>
            </div>
            <h3 className="font-semibold text-sm md:text-base mb-1 relative z-10 transition-colors" style={{ color: 'var(--text-main)' }}>{cert.title}</h3>
            <p className="text-xs mb-2 relative z-10" style={{ color: 'var(--text-muted)' }}>{cert.issuer}</p>
            {cert.id && <p className="text-xs font-mono truncate relative z-10" style={{ color: 'var(--text-muted)' }}>ID: {cert.id}</p>}
        </motion.div>
    );
};

const CertificationsSection = () => (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="hidden" className="h-full p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
            <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 flex items-center gap-3" style={{ color: 'var(--text-main)' }}>
                <Award className="text-yellow-400" /> Credentials & Certifications
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
                {CERTIFICATIONS.map((cert, index) => (<CertCard key={index} cert={cert} index={index} />))}
            </div>
        </div>
    </motion.div>
);

export default CertificationsSection;
