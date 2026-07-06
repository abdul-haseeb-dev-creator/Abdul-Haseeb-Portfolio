import { motion } from 'motion/react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { education } from '../data';

export default function Education() {
  return (
    <section id="education" className="py-24 relative px-4 bg-gradient-to-b from-transparent via-[#030712] to-transparent">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3">Academic Foundation</p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Education</h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-cyan-400 to-violet-600 mx-auto mt-4" />
        </div>

        {/* Education Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-panel rounded-2xl p-6 md:p-8 border border-gray-800 hover:border-violet-500/20 hover:shadow-xl transition-all duration-300 relative group"
            >
              {/* Highlight background radial */}
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-violet-600/5 blur-lg pointer-events-none transition-opacity duration-300 group-hover:opacity-100" />

              {/* Icon */}
              <div className="p-3 rounded-xl bg-gray-900 border border-gray-800 text-violet-400 w-fit mb-6 group-hover:bg-violet-950/20 group-hover:border-violet-500/30 transition-all">
                <GraduationCap className="h-5 w-5" />
              </div>

              {/* Period Badge */}
              <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-mono mb-3">
                <Calendar className="h-3.5 w-3.5 text-cyan-400/60" />
                <span>{edu.duration}</span>
              </div>

              {/* Details */}
              <h3 className="font-display font-extrabold text-lg text-white group-hover:text-violet-400 transition-colors mb-2">
                {edu.degree}
              </h3>
              
              <h4 className="font-display text-sm font-semibold text-gray-300 mb-4">
                {edu.field}
              </h4>

              <div className="space-y-1 pt-4 border-t border-gray-800/60 font-light text-xs sm:text-sm text-gray-400">
                <p className="font-bold text-gray-300">{edu.school}</p>
                <div className="flex items-center gap-1 text-gray-500">
                  <MapPin className="h-3.5 w-3.5 text-gray-600" />
                  <span>{edu.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
