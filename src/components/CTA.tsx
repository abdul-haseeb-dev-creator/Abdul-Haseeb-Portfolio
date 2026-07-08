import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Download, Mail, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

interface CTAProps {
  onContactClick: () => void;
}

export default function CTA({ onContactClick }: CTAProps) {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=923158494192&text=Hi%20Abdul%20Haseeb!%20%F0%9F%91%8B%0A%0AI%20came%20across%20your%20portfolio%20and%20was%20impressed%20by%20your%20work.%20I'm%20looking%20for%20a%20Full%20Stack%20Developer%20for%20a%20project%20and%20would%20love%20to%20discuss%20it%20with%20you.%20If%20you're%20available,%20please%20let%20me%20know.%0A%0ALooking%20forward%20to%20connecting!";
  const cvUrl = "https://drive.google.com/file/d/1D1C8TV64u92BUL7WQBf4hKQjUjUu_sHY/view?usp=sharing";
  const bookingUrl = "https://calendly.com/abdulhaseeb158441"; // Professional Calendly link

  return (
    <section className="py-24 relative overflow-hidden px-4">
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="glass-panel rounded-3xl border border-gray-800/80 p-8 sm:p-12 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-violet-950/10">
          {/* Subtle decorative inner light lines */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-violet-950/40 border border-violet-500/30 text-violet-400 font-mono text-[10px] uppercase tracking-widest mb-6 shadow-sm">
              <Sparkles className="h-3 w-3 animate-pulse" /> Available for New Projects
            </div>

            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-2xl">
              Let's Build Something <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">
                Amazing Together
              </span>
            </h2>

            {/* Pitch Subtitle */}
            <p className="text-gray-400 text-sm sm:text-base font-light mt-6 max-w-xl leading-relaxed">
              Seeking a seasoned Full Stack Developer, Laravel Architect, Next.js Expert, or AI Specialist? Let's discuss your project goals, technical strategy, or schedule a quick virtual consultation.
            </p>

            {/* Buttons Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mt-12">
              
              {/* Button 1: Hire Me (Scrolls to Contact Form) */}
              <button
                onClick={onContactClick}
                className="group px-6 py-4 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-display text-sm font-bold tracking-wider transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg shadow-violet-500/15 hover:shadow-violet-500/25 hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <Mail className="h-4 w-4" />
                Hire Me
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Button 2: Book a Call (Calendly scheduling link) */}
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-2xl bg-gray-900 border border-gray-800 hover:border-violet-500/40 hover:bg-violet-950/10 text-gray-200 hover:text-white font-display text-sm font-bold tracking-wider transition-all duration-300 flex items-center justify-center gap-2.5 hover:scale-[1.02] active:scale-95"
              >
                <Calendar className="h-4 w-4 text-violet-400" />
                Book a Call
              </a>

              {/* Button 3: Download CV */}
              <a
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-2xl bg-gray-900 border border-gray-800 hover:border-gray-700 text-gray-300 hover:text-white font-display text-sm font-bold tracking-wider transition-all duration-300 flex items-center justify-center gap-2.5 hover:scale-[1.02] active:scale-95"
              >
                <Download className="h-4 w-4 text-gray-400" />
                Download CV
              </a>

              {/* Button 4: WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-2xl bg-emerald-600/10 border border-emerald-500/20 hover:border-emerald-500/40 hover:bg-emerald-600/20 text-emerald-400 hover:text-emerald-300 font-display text-sm font-bold tracking-wider transition-all duration-300 flex items-center justify-center gap-2.5 hover:scale-[1.02] active:scale-95"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.739-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.384 9.861-9.73.001-2.592-1.01-5.029-2.847-6.868C16.65 2.167 14.218 1.16 11.63 1.16c-5.442 0-9.863 4.384-9.866 9.73-.001 1.764.484 3.487 1.404 5.013l-.924 3.376 3.463-.923zm11.238-6.163c-.301-.151-1.784-.882-2.057-.981-.273-.099-.471-.148-.669.151-.197.299-.765.981-.938 1.18-.173.197-.347.222-.648.072-.3-.151-1.267-.467-2.414-1.493-.893-.797-1.496-1.782-1.671-2.083-.174-.3-.019-.462.13-.611.135-.134.3-.349.45-.523.15-.174.2-.299.3-.499.1-.2.05-.375-.025-.524-.075-.15-.669-1.613-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.197 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.784-.73 2.037-1.437.254-.707.254-1.313.178-1.437-.076-.124-.272-.198-.57-.349z" />
                </svg>
                WhatsApp
              </a>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
