import { motion } from 'motion/react';
import { Code, Smartphone, Database, Terminal, Cpu, Globe } from 'lucide-react';

export default function AestheticBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Dynamic Background Blurs */}
      <div className="absolute top-[5%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-violet-600/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute top-[35%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-cyan-500/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-[20%] left-[5%] w-[38vw] h-[38vw] rounded-full bg-indigo-600/5 blur-[130px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[-5%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-purple-600/8 blur-[110px] animate-pulse-glow" style={{ animationDelay: '6s' }} />

      {/* Floating Interactive Tech Icons */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[18%] left-[10%] hidden md:flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900/60 border border-gray-800/80 text-violet-400 shadow-xl"
      >
        <Smartphone className="h-6 w-6" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 18, 0],
          rotate: [0, -6, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[12%] right-[15%] hidden md:flex h-14 w-14 items-center justify-center rounded-xl bg-gray-900/60 border border-gray-800/80 text-cyan-400 shadow-xl"
      >
        <Code className="h-6 w-6" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[48%] left-[6%] hidden lg:flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900/60 border border-gray-800/80 text-gray-500 shadow-xl"
      >
        <Database className="h-5 w-5" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 14, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[65%] right-[8%] hidden lg:flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900/60 border border-gray-800/80 text-indigo-400 shadow-xl"
      >
        <Cpu className="h-5 w-5" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [0, 4, 0],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-[15%] left-[12%] hidden md:flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900/60 border border-gray-800/80 text-cyan-400 shadow-xl"
      >
        <Globe className="h-5 w-5" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 16, 0],
          rotate: [0, -7, 0],
        }}
        transition={{
          duration: 7.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-[30%] right-[18%] hidden md:flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900/60 border border-gray-800/80 text-violet-400 shadow-xl"
      >
        <Terminal className="h-5 w-5" />
      </motion.div>

      {/* Grid Pattern overlay for tech aesthetics */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.007)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.007)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 mask-gradient" />
    </div>
  );
}
