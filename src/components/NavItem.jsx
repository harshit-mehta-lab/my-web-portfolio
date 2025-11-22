import React from 'react';

const NavItem = ({ id, label, icon: Icon, active, onClick }) => (
    <button
        onClick={() => onClick(id)}
        className={`group relative flex items-center gap-3 px-6 py-4 w-full transition-all duration-300 overflow-hidden
      ${active ? 'border-r-4' : 'hover:bg-[var(--bg-card)]'}`}
        style={{
            backgroundColor: active ? 'rgba(var(--primary-rgb), 0.1)' : 'transparent',
            borderColor: 'var(--primary)',
            color: active ? 'var(--primary)' : 'var(--text-muted)'
        }}
    >
        <div
            className={`absolute inset-0 transform transition-transform duration-300 ${active ? 'translate-x-0' : '-translate-x-full group-hover:translate-x-0'}`}
            style={{ background: 'linear-gradient(90deg, rgba(var(--primary-rgb), 0.1), transparent)' }}
        />
        <Icon size={20} className={active ? 'animate-pulse' : 'group-hover:text-[var(--primary)]'} style={{ color: active ? 'var(--primary)' : undefined }} />
        <span className="font-mono tracking-wider relative z-10">{label}</span>
    </button>
);

export default NavItem;
