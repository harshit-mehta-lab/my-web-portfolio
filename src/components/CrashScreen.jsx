import React, { useState, useEffect, useRef, useCallback } from 'react';
import { WifiOff, Cpu, Play, RotateCcw } from 'lucide-react';

/* --- MINIGAME: PACKET RUN (OFFLINE GAME) --- */
const PacketRunGame = () => {
    const [gameState, setGameState] = useState('idle'); // idle, playing, gameover
    const [score, setScore] = useState(0);
    const [packetY, setPacketY] = useState(0);
    const [obstacles, setObstacles] = useState([]);
    const requestRef = useRef();
    const lastTimeRef = useRef();
    const speedRef = useRef(5);

    // Game Loop
    const gameLoop = useCallback((time) => {
        if (gameState !== 'playing') return;
        if (lastTimeRef.current !== undefined) {
            // Update logic
            setScore(s => s + 1);

            // Spawn Obstacles
            if (Math.random() < 0.02) {
                setObstacles(obs => [...obs, { x: 100, type: Math.random() > 0.5 ? 'firewall' : 'bug' }]);
            }

            // Move Obstacles
            setObstacles(obs =>
                obs.map(o => ({ ...o, x: o.x - 1.5 }))
                    .filter(o => o.x > -10)
            );

            // Gravity
            if (packetY > 0) {
                setPacketY(y => Math.max(0, y - 5)); // simple gravity fall
            }
        }
        lastTimeRef.current = time;
        requestRef.current = requestAnimationFrame(gameLoop);
    }, [gameState, packetY]);

    // Collision Detection (Simplified for this demo)
    useEffect(() => {
        if (gameState !== 'playing') return;
        const packetBox = { x: 10, width: 10, y: packetY, height: 10 }; // Roughly 10% width/height

        obstacles.forEach(obs => {
            if (obs.x < 20 && obs.x > 5 && packetY < 10) {
                // Simple collision check: if obstacle is near player and player isn't jumping high enough
                setGameState('gameover');
                cancelAnimationFrame(requestRef.current);
            }
        });
    }, [obstacles, packetY, gameState]);

    // Start/Jump controls
    useEffect(() => {
        if (gameState === 'playing') {
            requestRef.current = requestAnimationFrame(gameLoop);
        }
        return () => cancelAnimationFrame(requestRef.current);
    }, [gameState, gameLoop]);

    const handleJump = () => {
        if (gameState === 'idle' || gameState === 'gameover') {
            setGameState('playing');
            setScore(0);
            setObstacles([]);
            setPacketY(0);
        } else if (packetY === 0) {
            // Jump animation simulation
            let jumpHeight = 0;
            const jumpInterval = setInterval(() => {
                jumpHeight += 5;
                setPacketY(jumpHeight);
                if (jumpHeight > 30) {
                    clearInterval(jumpInterval);
                    // Gravity is handled in main loop
                }
            }, 20);
        }
    };

    return (
        <div className="w-full max-w-md h-64 border-2 border-red-500/50 bg-black/80 relative overflow-hidden rounded-lg mb-8" onClick={handleJump}>
            {/* Score */}
            <div className="absolute top-2 right-4 font-mono text-red-500 z-20">PACKETS: {score}</div>

            {/* Player (Packet) */}
            <div
                className="absolute left-10 w-8 h-8 bg-cyan-400 rounded shadow-[0_0_15px_rgba(34,211,238,0.8)] z-10 flex items-center justify-center"
                style={{ bottom: `${packetY + 10}%`, transition: 'bottom 0.1s' }}
            >
                <Cpu size={16} className="text-black" />
            </div>

            {/* Obstacles */}
            {obstacles.map((obs, i) => (
                <div
                    key={i}
                    className="absolute bottom-10 w-6 h-12 bg-red-600 border border-red-400"
                    style={{ left: `${obs.x}%` }}
                >
                    <div className="w-full h-1 bg-red-300 animate-pulse mt-1" />
                </div>
            ))}

            {/* Ground */}
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-slate-800 border-t border-slate-600">
                <div className="w-full h-full opacity-20"
                    style={{ backgroundImage: 'linear-gradient(90deg, transparent 50%, rgba(255,255,255,0.1) 50%)', backgroundSize: '20px 20px' }}
                />
            </div>

            {/* UI Overlays */}
            {gameState === 'idle' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-30">
                    <div className="text-center animate-pulse">
                        <Play size={48} className="text-cyan-400 mx-auto mb-2" />
                        <p className="text-cyan-400 font-mono font-bold">CLICK TO START PACKET RUN</p>
                    </div>
                </div>
            )}

            {gameState === 'gameover' && (
                <div className="absolute inset-0 flex items-center justify-center bg-red-900/80 z-30">
                    <div className="text-center">
                        <h3 className="text-white font-bold text-2xl mb-2">CONNECTION LOST</h3>
                        <p className="text-red-200 font-mono mb-4">PACKETS DROPPED: {score}</p>
                        <button className="bg-red-600 text-white px-4 py-2 rounded font-bold hover:bg-red-500 flex items-center gap-2 mx-auto">
                            <RotateCcw size={16} /> RETRY
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

const CrashScreen = () => {
    return (
        <div className="fixed inset-0 z-[200] bg-slate-950 text-red-500 font-mono flex flex-col items-center justify-center p-8 overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                {Array.from({ length: 20 }).map((_, i) => (<div key={i} className="absolute h-[1px] bg-red-500 w-full animate-pulse" style={{ top: `${Math.random() * 100}%`, left: 0, opacity: Math.random() }} />))}
            </div>
            <WifiOff size={64} className="mb-6 animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter glitch-text">SYSTEM FAILURE</h1>
            <p className="text-red-400 mb-8 text-center max-w-lg">CRITICAL ERROR: NETWORK UPLINK SEVERED.<br />UNABLE TO REACH CLOUD INFRASTRUCTURE.</p>
            <PacketRunGame />
            <div className="text-xs text-red-700 animate-pulse mt-auto">WAITING FOR RECONNECTION...</div>
        </div>
    );
};

export default CrashScreen;
