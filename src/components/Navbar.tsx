import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'glass-navbar py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <div
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-500 p-[1px] transition-transform duration-300 group-hover:scale-105">
              <div className="flex h-full w-full items-center justify-center rounded-xl bg-[#030712]">
                <span className="font-display font-bold text-sm tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                  AH
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-white tracking-tight leading-tight group-hover:text-violet-400 transition-colors">
                {personalInfo.name}
              </span>
              <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest leading-none">
                Full-Stack Dev
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`px-4 py-2 rounded-full font-display text-sm font-medium tracking-wide transition-all duration-300 relative ${
                  activeSection === item.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {activeSection === item.id && (
                  <span className="absolute inset-0 bg-gradient-to-r from-violet-950/40 to-cyan-950/40 border border-violet-500/20 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Social Icons & CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-xl border border-gray-800 text-gray-400 hover:text-white hover:border-violet-500/40 transition-all hover:bg-violet-950/20"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-xl border border-gray-800 text-gray-400 hover:text-white hover:border-violet-500/40 transition-all hover:bg-violet-950/20"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="p-2 rounded-xl border border-gray-800 text-gray-400 hover:text-white hover:border-violet-500/40 transition-all hover:bg-violet-950/20"
            >
              <Mail className="h-4 w-4" />
            </a>
            <button
              onClick={() => handleLinkClick('contact')}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-display text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-lg shadow-violet-500/10 hover:shadow-violet-500/20 hover:scale-102"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => handleLinkClick('contact')}
              className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-display text-[10px] font-bold tracking-wider uppercase"
            >
              Hire Me
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl border border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[72px] left-0 w-full bg-[#030712]/95 backdrop-blur-lg border-b border-gray-800/80 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-xl font-display text-base font-medium transition-all ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-violet-950/30 to-cyan-950/30 text-white border-l-2 border-violet-500'
                  : 'text-gray-400 hover:text-white hover:bg-gray-900/40'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-gray-800/50 flex items-center justify-around">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-900 border border-gray-800 text-gray-400 hover:text-white"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-full bg-gray-900 border border-gray-800 text-gray-400 hover:text-white"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="p-3 rounded-full bg-gray-900 border border-gray-800 text-gray-400 hover:text-white"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
