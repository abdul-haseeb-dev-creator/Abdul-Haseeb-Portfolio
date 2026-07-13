import { personalInfo } from '../data';
import { Linkedin, Github, Mail, Phone, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id: string) => {
    onNavigate(id);
  };

  return (
    <footer id="footer" className="border-t border-gray-900 bg-[#030712] py-12 px-4 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left column: Brand */}
        <div className="text-center md:text-left">
          <h3 className="font-display font-bold text-lg text-white">
            {personalInfo.name}
          </h3>
          <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mt-1">
            Full-Stack JavaScript & React Native Developer
          </p>
        </div>

        {/* Center column: navigation list */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {['home', 'about', 'skills', 'experience', 'projects', 'services', 'contact'].map((sect) => (
            <button
              key={sect}
              onClick={() => handleLinkClick(sect)}
              className="text-xs font-mono font-medium text-gray-400 hover:text-white uppercase tracking-wider transition-colors"
            >
              {sect}
            </button>
          ))}
        </div>

        {/* Right column: Socials */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2.5 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

      </div>

      {/* Copyright row */}
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-950/40 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-[10px] sm:text-xs text-gray-600 text-center font-mono">
          &copy; {currentYear} Abdul Haseeb. All rights reserved. Made in Karachi, Sindh, Pakistan.
        </p>
        <p className="text-[10px] text-gray-600 font-mono">
          Strictly verified against original resume credentials.
        </p>
      </div>
    </footer>
  );
}
