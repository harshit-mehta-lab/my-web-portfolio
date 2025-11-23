import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Zap } from 'lucide-react';

const RebootingAnimation = () => {
  return (
    <div className="w-full max-w-md h-64 border-2 border-cyan-500/50 bg-black/80 relative overflow-hidden rounded-lg mb-8 flex flex-col items-center justify-center">
      <motion.div
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Cloud size={96} className="text-cyan-400" />
      </motion.div>
      <motion.div
        className="absolute"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.8, 0, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Zap size={48} className="text-yellow-400" />
      </motion.div>
      <p className="text-cyan-400 font-mono font-bold mt-4 animate-pulse">SYSTEM REBOOTING...</p>
    </div>
  );
};

export default RebootingAnimation;
