import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Server,
  Award,
  Zap,
  MessageSquare,
  Cloud,
  Settings,
  Menu,
  X
} from 'lucide-react';

import { THEME_PRESETS, MODES } from './data';
import { hexToRgb, hslToHex, useNetworkStatus } from './utils';

import CustomCursor from './components/CustomCursor';
import MatrixBackground from './components/MatrixBackground';
import NavItem from './components/NavItem';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CertificationsSection from './components/CertificationsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import CrashScreen from './components/CrashScreen';
import SettingsPanel from './components/SettingsPanel';
import SystemBoot from './components/SystemBoot';

// Helper Icon for generic user
const UserIcon = ({ size, style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
);

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('cyan'); // Default theme (System Core)
  const [mode, setMode] = useState('dark');
  const [showSettings, setShowSettings] = useState(false);
  const [isRebooting, setIsRebooting] = useState(false);

  // --- PERSISTENT IMAGE LOGIC ---
  const profileImage = "./photo/20250313_153037.jpg";

  const isOnline = useNetworkStatus(); // Track online status
  const audioCtxRef = useRef(null);

  const handleReboot = () => {
    setIsRebooting(true);
  };

  const finishReboot = () => {
    window.location.reload();
  };

  // Sound Effect Logic
  const playSystemClick = () => {
    if (!window.AudioContext && !window.webkitAudioContext) return;
    if (!audioCtxRef.current) audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') ctx.resume().catch(err => console.error("Audio resume failed", err));
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    osc.start();
    osc.stop(ctx.currentTime + 0.08);
  };

  useEffect(() => {
    const handleClick = () => playSystemClick();
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  // THEME UPDATE LOGIC (Unified)
  useEffect(() => {
    // Handle standard themes
    const selectedPreset = THEME_PRESETS[theme];
    const root = document.documentElement;

    if (theme === 'rgb') {
      let animationFrameId;
      let hue = 0;

      const animateColors = () => {
        hue = (hue + 1) % 360;
        const primaryHex = hslToHex(hue, 100, 60);
        const secondaryHex = hslToHex((hue + 180) % 360, 100, 60);
        const glowHex = hslToHex(hue, 100, 70);

        const root = document.documentElement;
        root.style.setProperty('--primary', primaryHex);
        root.style.setProperty('--primary-glow', glowHex);
        root.style.setProperty('--secondary', secondaryHex);
        root.style.setProperty('--primary-rgb', hexToRgb(primaryHex));
        root.style.setProperty('--secondary-rgb', hexToRgb(secondaryHex));

        animationFrameId = requestAnimationFrame(animateColors);
      };

      animateColors();
      return () => cancelAnimationFrame(animationFrameId);
    } else {
      // Static themes
      root.style.setProperty('--primary', selectedPreset.primary);
      root.style.setProperty('--primary-glow', selectedPreset.primaryGlow);
      root.style.setProperty('--secondary', selectedPreset.secondary);
      root.style.setProperty('--primary-rgb', hexToRgb(selectedPreset.primary));
      root.style.setProperty('--secondary-rgb', hexToRgb(selectedPreset.secondary));
    }
  }, [theme]);

  const styleVariables = {
    '--bg-main': MODES[mode].bgMain,
    '--bg-card': MODES[mode].bgCard,
    '--bg-nav': MODES[mode].bgNav,
    '--text-main': MODES[mode].textMain,
    '--text-muted': MODES[mode].textMuted,
    '--border': MODES[mode].border,
    '--shadow': MODES[mode].shadow,
  };

  if (!isOnline) {
    return <CrashScreen />;
  }

  return (
    <div
      className="min-h-screen font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-hidden flex flex-col md:flex-row relative transition-colors duration-500"
      style={styleVariables}
    >
      {/* System Reboot Overlay */}
      <AnimatePresence>
        {isRebooting && <SystemBoot onComplete={finishReboot} />}
      </AnimatePresence>

      <CustomCursor />
      {/* Pass the bgType from the current theme preset */}
      <MatrixBackground mode={mode} theme={THEME_PRESETS[theme]} bgType={THEME_PRESETS[theme].bgType} />

      {/* Sidebar Navigation (Desktop) */}
      <nav
        className="hidden md:flex flex-col w-64 h-screen border-r z-20 shadow-2xl backdrop-blur-md transition-colors duration-300"
        style={{ backgroundColor: 'var(--bg-nav)', borderColor: 'var(--border)' }}
      >
        <div className="p-8">
          {/* Logo / Refresh Button */}
          <button
            onClick={handleReboot}
            className="group w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer"
            style={{
              background: `linear-gradient(to top right, var(--primary), var(--secondary))`,
              boxShadow: `0 10px 15px -3px rgba(var(--primary-rgb), 0.3)`
            }}
            title="Reload System"
          >
            <Cloud className="text-white group-hover:animate-pulse" size={24} />
          </button>
          <h1 className="text-xl font-bold tracking-wide transition-colors" style={{ color: 'var(--text-main)' }}>PORTFOLIO</h1>
          <p className="text-xs font-mono mt-1" style={{ color: 'var(--primary)' }}>v2.5.0 [CLD]</p>
        </div>

        <div className="flex-1 py-4 flex flex-col gap-2">
          <NavItem id="home" label="Overview" icon={Server} active={activeTab === 'home'} onClick={setActiveTab} />
          <NavItem id="about" label="Identity" icon={UserIcon} active={activeTab === 'about'} onClick={setActiveTab} />
          <NavItem id="certs" label="Credentials" icon={Award} active={activeTab === 'certs'} onClick={setActiveTab} />
          <NavItem id="projects" label="Innovations" icon={Zap} active={activeTab === 'projects'} onClick={setActiveTab} />
          <NavItem id="contact" label="Uplink" icon={MessageSquare} active={activeTab === 'contact'} onClick={setActiveTab} />
        </div>

        <div className="p-4 border-t space-y-2" style={{ borderColor: 'var(--border)' }}>
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="flex items-center gap-3 w-full p-2 rounded hover:bg-black/10 transition-colors"
            style={{ color: 'var(--text-muted)' }}
          >
            <Settings size={18} /> <span className="text-xs">Customize Interface</span>
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className="flex items-center gap-3 w-full p-2 rounded hover:bg-black/10 transition-colors"
            style={{ color: 'var(--text-muted)' }}
          >
            <MessageSquare size={18} /> <span className="text-xs">Send Feedback</span>
          </button>

          <div className="pt-4 mt-2 border-t border-dashed" style={{ borderColor: 'var(--border)' }}>
            <p className="text-[10px] font-mono text-center opacity-70" style={{ color: 'var(--text-muted)' }}>
              MADE IN CLOUD 2025 • ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </nav>

      {/* Settings Panel Overlay */}
      <AnimatePresence>
        {showSettings && (
          <SettingsPanel
            isOpen={showSettings}
            onClose={() => setShowSettings(false)}
            currentTheme={theme}
            setTheme={setTheme}
            currentMode={mode}
            setMode={setMode}
          />
        )}
      </AnimatePresence>

      {/* Mobile Header */}
      <div
        className="md:hidden flex items-center justify-between p-4 backdrop-blur z-30 border-b transition-colors"
        style={{ backgroundColor: 'var(--bg-nav)', borderColor: 'var(--border)' }}
      >
        <button
          onClick={handleReboot}
          className="font-bold flex items-center gap-2 transition-opacity hover:opacity-80"
          style={{ color: 'var(--text-main)' }}
        >
          <Cloud size={20} style={{ color: 'var(--primary)' }} /> DEV_PORTFOLIO
        </button>
        <div className="flex gap-4">
          <button onClick={() => setShowSettings(!showSettings)} style={{ color: 'var(--text-main)' }}>
            <Settings />
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ color: 'var(--text-main)' }}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 right-0 z-20 border-b md:hidden shadow-xl"
            style={{ backgroundColor: 'var(--bg-nav)', borderColor: 'var(--border)' }}
          >
            <div className="flex flex-col p-4 gap-2">
              {['home', 'about', 'certs', 'projects', 'contact'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => { setActiveTab(tab); setIsMobileMenuOpen(false); }}
                  className="text-left p-3 rounded transition-colors"
                  style={{
                    backgroundColor: activeTab === tab ? 'rgba(var(--primary-rgb), 0.1)' : 'transparent',
                    color: activeTab === tab ? 'var(--primary)' : 'var(--text-muted)'
                  }}
                >
                  {tab.toUpperCase()}
                </button>
              ))}
              <button
                onClick={() => { setActiveTab('contact'); setIsMobileMenuOpen(false); }}
                className="text-left p-3 rounded transition-colors"
                style={{ color: 'var(--text-muted)' }}
              >
                SEND FEEDBACK
              </button>
              <div className="p-3 text-xs font-mono opacity-50 text-center" style={{ color: 'var(--text-muted)' }}>
                MADE IN CLOUD 2025 • ALL RIGHTS RESERVED
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-1 relative h-[calc(100vh-64px)] md:h-screen overflow-hidden z-10">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div key="home" className="h-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <HeroSection
                setTab={setActiveTab}
                setShowFeedback={() => setActiveTab('contact')}
                profileImage={profileImage}
              />
            </motion.div>
          )}
          {activeTab === 'about' && (
            <motion.div key="about" className="h-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <AboutSection />
            </motion.div>
          )}
          {activeTab === 'certs' && (
            <motion.div key="certs" className="h-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <CertificationsSection />
            </motion.div>
          )}
          {activeTab === 'projects' && (
            <motion.div key="projects" className="h-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <ProjectsSection />
            </motion.div>
          )}
          {activeTab === 'contact' && (
            <motion.div key="contact" className="h-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <ContactSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;