import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Copy, Check, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data';

export default function Contact() {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedField(type);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-24 relative px-4">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3">Get In Touch</p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Contact Me</h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-cyan-400 to-violet-600 mx-auto mt-4" />
          <p className="text-sm text-gray-400 font-light mt-4 max-w-md mx-auto">
            Ready to build? Reach out directly to discuss senior roles, app architecture, or project delivery.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Email Card */}
          <div className="glass-panel rounded-2xl p-6 border border-gray-800 flex flex-col justify-between group relative overflow-hidden hover:border-violet-500/20 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-violet-600/10 border border-violet-500/10 text-violet-400">
                <Mail className="h-5 w-5" />
              </div>
              <div className="flex-grow">
                <h4 className="font-mono text-[10px] text-gray-500 uppercase tracking-wider mb-1">Direct Email</h4>
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="text-sm text-white font-semibold hover:text-violet-400 transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-950/40 flex items-center justify-between">
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="text-xs font-mono text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-1.5"
              >
                Send Email <ExternalLink className="h-3 w-3" />
              </a>
              <button
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                className="p-1.5 rounded-lg bg-gray-950/80 border border-gray-800 hover:border-gray-700 text-gray-400 hover:text-white transition-colors"
                title="Copy Email"
              >
                {copiedField === 'email' ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            </div>
          </div>

          {/* Phone Card */}
          <div className="glass-panel rounded-2xl p-6 border border-gray-800 flex flex-col justify-between group relative overflow-hidden hover:border-cyan-500/20 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-cyan-600/10 border border-cyan-500/10 text-cyan-400">
                <Phone className="h-5 w-5" />
              </div>
              <div className="flex-grow">
                <h4 className="font-mono text-[10px] text-gray-500 uppercase tracking-wider mb-1">Direct Mobile</h4>
                <a 
                  href={`tel:${personalInfo.phone}`} 
                  className="text-sm text-white font-semibold hover:text-cyan-400 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-950/40 flex items-center justify-between">
              <a 
                href={`tel:${personalInfo.phone}`} 
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
              >
                Call Mobile <ExternalLink className="h-3 w-3" />
              </a>
              <button
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                className="p-1.5 rounded-lg bg-gray-950/80 border border-gray-800 hover:border-gray-700 text-gray-400 hover:text-white transition-colors"
                title="Copy Phone Number"
              >
                {copiedField === 'phone' ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            </div>
          </div>

          {/* Location Card */}
          <div className="glass-panel rounded-2xl p-6 border border-gray-800 flex flex-col justify-between group relative overflow-hidden hover:border-indigo-500/20 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-indigo-600/10 border border-indigo-500/10 text-indigo-400">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="flex-grow">
                <h4 className="font-mono text-[10px] text-gray-500 uppercase tracking-wider mb-1">Location</h4>
                <p className="text-sm text-white font-semibold">
                  {personalInfo.location}
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-950/40 flex items-center justify-end">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                GMT+5 Timezone
              </span>
            </div>
          </div>

        </div>

        {/* Follow / Professional Links */}
        <div className="text-center pt-4">
          <p className="font-mono text-[10px] text-gray-500 uppercase tracking-wider mb-4">Professional Handles:</p>
          <div className="flex items-center justify-center gap-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-gray-900/60 border border-gray-800 hover:border-violet-500/30 text-gray-400 hover:text-white transition-all shadow-md font-mono text-xs font-semibold uppercase tracking-wider hover:bg-violet-950/20"
            >
              <Linkedin className="h-4 w-4 text-violet-400" />
              LinkedIn Profile
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
