import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Linkedin, Mail, Phone, ArrowUpRight, ArrowRight, Download, FileText, Smartphone, Code, Cpu } from 'lucide-react';
import { personalInfo } from '../data';
import avatarImg from '../assets/images/abdul_haseeb_avatar_1783331580357.jpg';

interface HeroProps {
  onContactClick: () => void;
  onProjectsClick: () => void;
}

export default function Hero({ onContactClick, onProjectsClick }: HeroProps) {
  const roles = [
    'React Native Developer',
    'Full-Stack JavaScript Engineer',
    'iOS & Android Architect',
    'Laravel & Node.js Developer',
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 30 : 65;

    if (!isDeleting && displayedText === currentFullText) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(
          isDeleting
            ? currentFullText.substring(0, displayedText.length - 1)
            : currentFullText.substring(0, displayedText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Content Column */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
          {/* Welcome Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-violet-950/40 border border-violet-500/20 text-violet-300 font-mono text-xs tracking-wider uppercase mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for Senior Positions
          </motion.div>

          {/* Name Display */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4"
          >
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">{personalInfo.name}</span>
          </motion.h1>

          {/* Animated Role / Typing */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-10 sm:h-12 flex items-center mb-6"
          >
            <p className="font-mono text-lg sm:text-xl md:text-2xl font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
              {displayedText}
              <span className="text-cyan-400 animate-pulse ml-0.5">|</span>
            </p>
          </motion.div>

          {/* Professional Summary */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-gray-400 font-light leading-relaxed max-w-xl mb-10"
          >
            {personalInfo.summary}
          </motion.p>

          {/* Call to Actions & CV Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
          >
            <button
              onClick={onProjectsClick}
              className="group px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-display text-sm font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-violet-500/15 hover:shadow-violet-500/25 hover:scale-102"
            >
              Explore Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={onContactClick}
              className="px-6 py-3.5 rounded-xl border border-gray-800 hover:border-violet-500/40 hover:bg-violet-950/10 text-gray-300 hover:text-white font-display text-sm font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2"
            >
              Contact Me
              <ArrowUpRight className="h-4 w-4 text-gray-500 group-hover:text-white" />
            </button>
            <a
              href="javascript:window.print()"
              className="px-6 py-3.5 rounded-xl bg-gray-900 border border-gray-800 hover:border-gray-700 text-gray-300 hover:text-white font-display text-sm font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </motion.div>

          {/* Social Connections */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-4 pt-4 border-t border-gray-800/60"
          >
            <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">Connect with me:</span>
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-900 border border-gray-800 hover:border-violet-500/30 text-gray-400 hover:text-violet-400 transition-all hover:scale-105"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg bg-gray-900 border border-gray-800 hover:border-violet-500/30 text-gray-400 hover:text-violet-400 transition-all hover:scale-105"
                aria-label="Email Address"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="p-2 rounded-lg bg-gray-900 border border-gray-800 hover:border-violet-500/30 text-gray-400 hover:text-violet-400 transition-all hover:scale-105"
                aria-label="Phone Number"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Portrait Portrait/Illustration Column */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96"
          >
            {/* Ambient Background Glow Halo */}
            <div className="absolute inset-[-10px] rounded-full bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-500 opacity-20 blur-[30px] animate-pulse" />

            {/* Rotating Tech Border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-violet-600 to-cyan-400 p-[1.5px] shadow-2xl">
              <div className="w-full h-full rounded-3xl bg-[#030712] overflow-hidden relative">
                <img
                  src={avatarImg}
                  alt={personalInfo.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    // Fallback to high tech rendering if image fails to load
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400";
                  }}
                />

                {/* Cyber HUD elements overlay */}
                <div className="absolute bottom-4 left-4 right-4 glass-panel rounded-xl p-3 border border-violet-500/20">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-violet-600/20 text-violet-400">
                      <Cpu className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xs text-white">5+ Years Experience</h3>
                      <p className="font-mono text-[9px] text-gray-400">Karachi, Pakistan (Remote Available)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Mini Widgets */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 glass-panel rounded-2xl p-3 border border-cyan-500/30 flex items-center gap-2 shadow-lg"
            >
              <Smartphone className="h-4 w-4 text-cyan-400" />
              <span className="font-mono text-[10px] text-white font-medium">10+ Shipped Apps</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-2 -left-4 glass-panel rounded-2xl p-3 border border-violet-500/30 flex items-center gap-2 shadow-lg"
            >
              <Code className="h-4 w-4 text-violet-400" />
              <span className="font-mono text-[10px] text-white font-medium">React Native</span>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
