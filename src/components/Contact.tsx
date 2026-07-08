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
          <p className="font-mono text-[10px] text-gray-500 uppercase tracking-wider mb-4">Quick Chat & Networks:</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=923158494192&text=Hi%20Abdul%20Haseeb!%20%F0%9F%91%8B%0A%0AI%20came%20across%20your%20portfolio%20and%20was%20impressed%20by%20your%20work.%20I'm%20looking%20for%20a%20Full%20Stack%20Developer%20for%20a%20project%20and%20would%20love%20to%20discuss%20it%20with%20you.%20If%20you're%20available,%20please%20let%20me%20know.%0A%0ALooking%20forward%20to%20connecting!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-gray-900/60 border border-gray-800 hover:border-emerald-500/30 text-gray-400 hover:text-white transition-all shadow-md font-mono text-xs font-semibold uppercase tracking-wider hover:bg-emerald-950/20 w-full sm:w-auto justify-center"
            >
              <svg className="h-4 w-4 fill-emerald-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.739-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.384 9.861-9.73.001-2.592-1.01-5.029-2.847-6.868C16.65 2.167 14.218 1.16 11.63 1.16c-5.442 0-9.863 4.384-9.866 9.73-.001 1.764.484 3.487 1.404 5.013l-.924 3.376 3.463-.923zm11.238-6.163c-.301-.151-1.784-.882-2.057-.981-.273-.099-.471-.148-.669.151-.197.299-.765.981-.938 1.18-.173.197-.347.222-.648.072-.3-.151-1.267-.467-2.414-1.493-.893-.797-1.496-1.782-1.671-2.083-.174-.3-.019-.462.13-.611.135-.134.3-.349.45-.523.15-.174.2-.299.3-.499.1-.2.05-.375-.025-.524-.075-.15-.669-1.613-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.197 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.784-.73 2.037-1.437.254-.707.254-1.313.178-1.437-.076-.124-.272-.198-.57-.349z" />
              </svg>
              Chat on WhatsApp
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-gray-900/60 border border-gray-800 hover:border-violet-500/30 text-gray-400 hover:text-white transition-all shadow-md font-mono text-xs font-semibold uppercase tracking-wider hover:bg-violet-950/20 w-full sm:w-auto justify-center"
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
