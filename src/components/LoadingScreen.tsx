import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setShow(false);
            setTimeout(onComplete, 600); // match fade-out animation duration
          }, 300);
          return 100;
        }
        // Increment speed variation for a natural feel
        const diff = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + diff, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          id="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712]"
        >
          {/* Animated Background Gradients */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] rounded-full bg-violet-600/10 blur-[80px] animate-pulse-glow" />
            <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] rounded-full bg-cyan-600/10 blur-[80px] animate-pulse-glow" />
          </div>

          <div className="relative flex flex-col items-center z-10 px-4 text-center">
            {/* Logo Mark */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mb-8 flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-tr from-violet-600 to-cyan-500 p-[1.5px] shadow-lg shadow-violet-500/10"
            >
              <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[#030712]">
                <span className="font-display text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                  AH
                </span>
              </div>
            </motion.div>

            {/* Title / Name */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2"
            >
              ABDUL HASEEB
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="font-mono text-xs md:text-sm text-gray-400 tracking-widest mb-10 uppercase"
            >
              Full-Stack Developer & Mobile Engineer
            </motion.p>

            {/* Loading Bar */}
            <div className="w-64 h-[2px] bg-gray-800 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: 'easeOut' }}
              />
            </div>

            {/* Percentage Text */}
            <motion.span
              key={progress}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.5, scale: 1 }}
              className="font-mono text-xs text-gray-400 mt-3"
            >
              {progress}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
