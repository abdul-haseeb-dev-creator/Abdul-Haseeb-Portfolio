import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Linkedin, Mail, Phone, ArrowUpRight, ArrowRight, Download, FileText, Smartphone, Code, Cpu, Calendar } from 'lucide-react';
import { personalInfo } from '../data';
import avatarImg from '../assets/images/abdul_haseeb_avatar_1783331580357.jpg';

interface HeroProps {
  onContactClick: () => void;
  onProjectsClick: () => void;
}

export default function Hero({ onContactClick, onProjectsClick }: HeroProps) {
  const roles = [
    'Full Stack Developer',
    'React & Next.js Developer',
    'React Native Developer',
    'Laravel & Node.js Developer',
    'SaaS Developer',
    'AI Automation Engineer',
    'API Integration Specialist',
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
            className="text-base sm:text-lg text-gray-400 font-light leading-relaxed max-w-xl mb-6"
          >
            {personalInfo.summary}
          </motion.p>

          {/* Core Tech Quick Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap items-center gap-2 mb-10"
          >
            <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mr-2">Expertise:</span>
            {['React', 'Next.js', 'Node.js', 'React Native', 'Laravel'].map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-lg bg-gray-950 border border-gray-800/80 text-gray-300 font-mono text-[11px] hover:border-violet-500/30 transition-all duration-300">
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Call to Actions & CV Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <button
              onClick={onContactClick}
              className="group px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-display text-sm font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-violet-500/15 hover:shadow-violet-500/25 hover:scale-102 cursor-pointer"
            >
              <Mail className="h-4 w-4" />
              Hire Me
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="https://calendly.com/abdulhaseeb158441"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl border border-gray-800 hover:border-violet-500/40 hover:bg-violet-950/10 text-gray-300 hover:text-white font-display text-sm font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Calendar className="h-4 w-4 text-violet-400" />
              Book a Call
            </a>
            <a
              href="https://drive.google.com/file/d/1D1C8TV64u92BUL7WQBf4hKQjUjUu_sHY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-gray-900 border border-gray-800 hover:border-gray-700 text-gray-300 hover:text-white font-display text-sm font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=923158494192&text=Hi%20Abdul%20Haseeb!%20%F0%9F%91%8B%0A%0AI%20came%20across%20your%20portfolio%20and%20was%20impressed%20by%20your%20work.%20I'm%20looking%20for%20a%20Full%20Stack%20Developer%20for%20a%20project%20and%20would%20love%20to%20discuss%20it%20with%20you.%20If%20you're%20available,%20please%20let%20me%20know.%0A%0ALooking%20forward%20to%20connecting!"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600/10 border border-emerald-500/20 hover:border-emerald-500/40 hover:bg-emerald-600/20 text-emerald-400 hover:text-emerald-300 font-display text-sm font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.739-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.384 9.861-9.73.001-2.592-1.01-5.029-2.847-6.868C16.65 2.167 14.218 1.16 11.63 1.16c-5.442 0-9.863 4.384-9.866 9.73-.001 1.764.484 3.487 1.404 5.013l-.924 3.376 3.463-.923zm11.238-6.163c-.301-.151-1.784-.882-2.057-.981-.273-.099-.471-.148-.669.151-.197.299-.765.981-.938 1.18-.173.197-.347.222-.648.072-.3-.151-1.267-.467-2.414-1.493-.893-.797-1.496-1.782-1.671-2.083-.174-.3-.019-.462.13-.611.135-.134.3-.349.45-.523.15-.174.2-.299.3-.499.1-.2.05-.375-.025-.524-.075-.15-.669-1.613-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.197 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.784-.73 2.037-1.437.254-.707.254-1.313.178-1.437-.076-.124-.272-.198-.57-.349z" />
              </svg>
              WhatsApp
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
                href="https://api.whatsapp.com/send?phone=923158494192&text=Hi%20Abdul%20Haseeb!%20%F0%9F%91%8B%0A%0AI%20came%20across%20your%20portfolio%20and%20was%20impressed%20by%20your%20work.%20I'm%20looking%20for%20a%20Full%20Stack%20Developer%20for%20a%20project%20and%20would%20love%20to%20discuss%20it%20with%20you.%20If%20you're%20available,%20please%20let%20me%20know.%0A%0ALooking%20forward%20to%20connecting!"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-900 border border-gray-800 hover:border-emerald-500/30 text-gray-400 hover:text-emerald-400 transition-all hover:scale-105"
                aria-label="WhatsApp Chat"
                title="Chat on WhatsApp"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.739-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.384 9.861-9.73.001-2.592-1.01-5.029-2.847-6.868C16.65 2.167 14.218 1.16 11.63 1.16c-5.442 0-9.863 4.384-9.866 9.73-.001 1.764.484 3.487 1.404 5.013l-.924 3.376 3.463-.923zm11.238-6.163c-.301-.151-1.784-.882-2.057-.981-.273-.099-.471-.148-.669.151-.197.299-.765.981-.938 1.18-.173.197-.347.222-.648.072-.3-.151-1.267-.467-2.414-1.493-.893-.797-1.496-1.782-1.671-2.083-.174-.3-.019-.462.13-.611.135-.134.3-.349.45-.523.15-.174.2-.299.3-.499.1-.2.05-.375-.025-.524-.075-.15-.669-1.613-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.197 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.784-.73 2.037-1.437.254-.707.254-1.313.178-1.437-.076-.124-.272-.198-.57-.349z" />
                </svg>
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
              className="absolute -top-4 -right-4 glass-panel rounded-2xl p-3 border border-cyan-500/30 flex items-center gap-2 shadow-lg z-20"
            >
              <Smartphone className="h-4 w-4 text-cyan-400" />
              <span className="font-mono text-[10px] text-white font-medium">10+ Shipped Apps</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-2 -left-4 glass-panel rounded-2xl p-3 border border-violet-500/30 flex items-center gap-2 shadow-lg z-20"
            >
              <Code className="h-4 w-4 text-violet-400" />
              <span className="font-mono text-[10px] text-white font-medium">React Native</span>
            </motion.div>

            {/* Core Tech Floating Badges */}
            {/* React Badge */}
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, -1, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-12 left-4 glass-panel rounded-2xl px-3 py-2 border border-cyan-400/40 flex items-center gap-2 shadow-lg shadow-cyan-950/20 z-20"
            >
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping absolute" />
              <span className="h-2 w-2 rounded-full bg-cyan-400 relative" />
              <span className="font-mono text-[10px] text-cyan-300 font-bold tracking-wide">React</span>
            </motion.div>

            {/* Next.js Badge */}
            <motion.div
              animate={{ x: [0, 8, 0], y: [0, -4, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-1/3 -right-12 glass-panel rounded-2xl px-3 py-2 border border-white/20 flex items-center gap-2 shadow-lg shadow-black/40 z-20"
            >
              <span className="flex h-2 w-2 rounded-full bg-white animate-ping absolute" />
              <span className="h-2 w-2 rounded-full bg-white relative" />
              <span className="font-mono text-[10px] text-white font-bold tracking-wide">Next.js</span>
            </motion.div>

            {/* Node.js Badge */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              className="absolute -bottom-8 -right-4 glass-panel rounded-2xl px-3 py-2 border border-emerald-500/40 flex items-center gap-2 shadow-lg shadow-emerald-950/20 z-20"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping absolute" />
              <span className="h-2 w-2 rounded-full bg-emerald-400 relative" />
              <span className="font-mono text-[10px] text-emerald-400 font-bold tracking-wide">Node.js</span>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
