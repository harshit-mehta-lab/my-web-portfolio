import React, { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };
        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 border-2 rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                borderColor: 'var(--primary)'
            }}
        >
            <div className="w-2 h-2 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
                style={{ backgroundColor: 'var(--primary)' }} />
        </motion.div>
    );
};

export default CustomCursor;
