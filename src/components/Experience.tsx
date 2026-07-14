import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { experiences } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative px-4 bg-gradient-to-b from-transparent via-[#030712] to-transparent">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-violet-400 uppercase tracking-widest mb-3">Professional Track</p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Work History</h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-violet-600 to-cyan-400 mx-auto mt-4" />
        </div>

        {/* Timeline Path Container */}
        <div className="relative border-l-2 border-gray-800 ml-4 md:ml-36 lg:ml-40 space-y-12">
          
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative pl-8 sm:pl-12"
            >
              
              {/* Timeline Indicator Dot */}
              <span className="absolute -left-[11px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-tr from-violet-600 to-cyan-500 ring-4 ring-[#030712] shadow-md shadow-violet-500/20">
                <Briefcase className="h-2.5 w-2.5 text-white" />
              </span>
              
              {/* Float Duration Column on Desktop */}
              <div className="hidden md:block absolute right-[100%] mr-6 lg:mr-10 top-1.5 text-right w-28">
                <span className="font-mono text-xs text-violet-400 font-semibold">{exp.duration}</span>
                <p className="font-mono text-[9px] text-gray-500 uppercase tracking-wider mt-1">{exp.location}</p>
              </div>

              {/* Experience Card */}
              <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-gray-800 hover:border-violet-500/20 hover:shadow-lg hover:shadow-violet-950/5 transition-all duration-300">
                
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-display font-extrabold text-lg text-white group-hover:text-violet-400 transition-colors">
                      {exp.position}
                    </h3>
                    <p className="font-display font-bold text-sm text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                      {exp.company}
                    </p>
                  </div>
                  {/* Mobile-only duration tag */}
                  <div className="flex md:hidden items-center gap-2 text-gray-500 font-mono text-xs mt-1">
                    <Calendar className="h-3.5 w-3.5 text-violet-500/60" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 mb-6">
                  {exp.responsibilities.map((resp, respIdx) => (
                    <li key={respIdx} className="flex gap-3 items-start text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                      <span className="mt-1 flex-shrink-0 text-cyan-400">
                        <CheckCircle className="h-3.5 w-3.5 text-cyan-400/80" />
                      </span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies List */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-800/60">
                  {exp.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-2 py-1 rounded-md bg-gray-950/60 border border-gray-800 text-[10px] font-mono text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
