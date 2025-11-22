import {
    Cloud,
    ShieldCheck,
    Cpu,
    Grid,
    Sparkles,
    Activity
} from 'lucide-react';

export const THEME_PRESETS = {
    cyan: {
        id: 'cyan',
        name: 'System Core',
        primary: '#22d3ee',      // cyan-400
        primaryGlow: '#06b6d4',  // cyan-500
        secondary: '#3b82f6',    // blue-500
        bgType: 'grid',
        icon: Grid,
        desc: 'Standard Operations'
    },
    emerald: {
        id: 'emerald',
        name: 'Bio-Link',
        primary: '#34d399',      // emerald-400
        primaryGlow: '#10b981',  // emerald-500
        secondary: '#14b8a6',    // teal-500
        bgType: 'circuit',
        icon: Cpu,
        desc: 'Neural Network'
    },
    violet: {
        id: 'violet',
        name: 'Nebula OS',
        primary: '#a78bfa',      // violet-400
        primaryGlow: '#8b5cf6',  // violet-500
        secondary: '#d946ef',    // fuchsia-500
        bgType: 'nebula',
        icon: Sparkles,
        desc: 'Deep Space Uplink'
    },
    amber: {
        id: 'amber',
        name: 'Firewall',
        primary: '#fbbf24',      // amber-400
        primaryGlow: '#f59e0b',  // amber-500
        secondary: '#ef4444',    // red-500
        bgType: 'grid',
        icon: ShieldCheck,
        desc: 'Security Alert'
    },
    rgb: {
        id: 'rgb',
        name: 'RGB Mode',
        primary: '#ef4444',      // Start color
        primaryGlow: '#ef4444',
        secondary: '#8b5cf6',
        bgType: 'circuit',
        icon: Activity,
        desc: 'Chroma Cycle'
    }
};

export const MODES = {
    dark: {
        bgMain: '#020617',       // slate-950
        bgCard: 'rgba(15, 23, 42, 0.6)', // slate-900/60
        bgNav: 'rgba(15, 23, 42, 0.9)',
        textMain: '#e2e8f0',     // slate-200
        textMuted: '#94a3b8',    // slate-400
        border: '#1e293b',       // slate-800
        shadow: 'rgba(0,0,0,0.5)'
    },
    light: {
        bgMain: '#f8fafc',       // slate-50
        bgCard: 'rgba(255, 255, 255, 0.7)',
        bgNav: 'rgba(255, 255, 255, 0.9)',
        textMain: '#0f172a',     // slate-900
        textMuted: '#475569',    // slate-600
        border: '#cbd5e1',       // slate-300
        shadow: 'rgba(0,0,0,0.1)'
    }
};

export const BIO = {
    heading: "Hi, I'm Harshit Mehta",
    subheading: "Aspiring Cloud Developer & DevOps Engineer",
    intro: "Aspiring Cloud Developer & DevOps Engineer. Currently honing my skills in scalable architecture and intelligent automation, with a passion for building reliable cloud solutions.",
    paragraph1: "Currently pursuing my B.Tech in Computer Science and Engineering, I’ve gained practical exposure to Amazon Web Services (AWS) and developed a solid understanding of how different services interact to form reliable, high-performance architectures. I enjoy designing environments that balance performance, cost-efficiency, and security — while ensuring smooth automation and deployment workflows.",
    paragraph2: "Through my academic journey, I’ve worked on several projects, including a Cloud-Based Learning Management System (LMS) using AWS, where I implemented a secure and scalable infrastructure with both public and private subnets. I also completed a Coursera certification on Packet Switching Networks and Algorithms, which enhanced my understanding of network design and data communication systems.",
    paragraph3: "I’m continuously expanding my knowledge in DevOps, Linux system administration, and cloud security, while exploring how AI-driven services can be integrated into cloud platforms to achieve intelligent automation and optimized resource management.",
    conclusion: "Driven by curiosity and a mindset of continuous learning, my goal is to design and manage smart, reliable, and future-ready cloud infrastructures that empower innovation and efficiency."
};

export const CERTIFICATIONS = [
    { title: "Oracle Cloud Infrastructure 2025 Certified DevOps Professional", issuer: "Oracle", date: "2025", icon: "cloud" },
    { title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate", issuer: "Oracle", date: "2025", icon: "cloud" },
    { title: "AWS Student Community Day Participation", issuer: "AWS", date: "Workshop", icon: "aws" },
    { title: "Packet Switching Networks and Algorithms", issuer: "University of Colorado System", date: "Dec 2024", id: "3XXOLTCW31OK", icon: "network" },
    { title: "Peer-to-Peer Protocols and Local Area Networks", issuer: "University of Colorado System", date: "Oct 2024", id: "72KYJ6W574GC", icon: "network" },
    { title: "Digital Systems: From Logic Gates to Processors", issuer: "Universitat Autònoma de Barcelona", date: "Sep 2024", id: "IR6IXE07K3UP", icon: "cpu" },
    { title: "Fundamentals of Network Communication", issuer: "University of Colorado System", date: "Sep 2024", id: "IUZ7PFL4BWC2", icon: "network" },
    { title: "Introduction to Hardware and Operating Systems", issuer: "IBM", date: "Sep 2024", id: "GYWV28I6A2ZB", icon: "server" },
    { title: "The Bits and Bytes of Computer Networking", issuer: "Google", date: "Sep 2024", id: "817YFL0IK50S", icon: "google" },
    { title: "DevCreate Hackathon 2024", issuer: "GDG Jalandhar", date: "Apr 2024", id: "28507df4...", icon: "code" },
    { title: "Responsive Web Developer", issuer: "freeCodeCamp", date: "Dec 2023", icon: "code" },
    { title: "Computational Theory: Language Principle & Finite Automata", issuer: "Coursera", date: "N/A", icon: "cpu" },
    { title: "Problem Solving (Basic/Advance)", issuer: "HackerRank/Other", date: "N/A", icon: "code" },
];

export const SKILLS = [
    "Cloud Computing", "AWS", "DevOps", "Linux Admin", "Network Security",
    "JavaScript", "HTML5/CSS3", "React", "Python", "Infrastructure as Code"
];

export const PATENT_PROJECT = {
    title: "AI Voice Phishing Detection System",
    status: "Patent Pending",
    description: "I’ve developed a prototype web profile for my patent-pending project. This project focuses on detecting and preventing AI-driven voice phishing using advanced audio analysis algorithms.",
    tech: ["AI/ML", "Voice Analysis", "Cybersecurity", "Web Prototype"],
    link: "https://lnkd.in/gqe3Jb25"
};
