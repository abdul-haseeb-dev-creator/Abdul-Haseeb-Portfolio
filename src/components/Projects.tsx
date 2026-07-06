import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Smartphone, Globe, Layers, ArrowUpRight, Check } from 'lucide-react';
import { projects } from '../data';

export default function Projects() {
  const [filter, setFilter] = useState<'All' | 'Mobile' | 'Web' | 'E-commerce'>('All');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Set up mock rich image cards
  const projectImages: Record<string, string> = {
    'Adil Store': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
    'DishDish': 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=600',
    'Ethan Allen': 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=600',
    'Motoboy': 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=600',
    'Rizq Mart': 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600'
  };

  const filteredProjects = projects.filter((proj) => {
    if (filter === 'All') return true;
    if (filter === 'Mobile') return proj.platforms?.includes('iOS') || proj.platforms?.includes('Android');
    if (filter === 'Web') return proj.platforms?.includes('Web');
    if (filter === 'E-commerce') return proj.category.toLowerCase().includes('e-commerce') || proj.category.toLowerCase().includes('grocery');
    return true;
  });

  return (
    <section id="projects" className="py-24 relative px-4">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3">Portfolio Catalog</p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Featured Projects</h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-cyan-400 to-violet-600 mx-auto mt-4" />
          <p className="text-sm text-gray-400 font-light mt-4 max-w-md mx-auto">
            Actual live commercial applications designed, coded, and shipped to App stores.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {(['All', 'Mobile', 'Web', 'E-commerce'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setExpandedIndex(null);
              }}
              className={`px-5 py-2 rounded-full font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                filter === cat
                  ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-600/15'
                  : 'bg-gray-900/60 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj, idx) => {
              const bgImage = projectImages[proj.title] || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600';
              const isExpanded = expandedIndex === idx;

              return (
                <motion.div
                  key={proj.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="glass-panel rounded-2xl border border-gray-800 hover:border-violet-500/30 overflow-hidden group flex flex-col justify-between h-full hover:shadow-2xl hover:shadow-violet-950/5 transition-all"
                >
                  
                  {/* Thumbnail Cover */}
                  <div className="h-48 relative overflow-hidden bg-gray-950">
                    <img
                      src={bgImage}
                      alt={proj.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Platforms tag */}
                    <div className="absolute top-4 right-4 flex items-center gap-1">
                      {proj.platforms?.map((plat) => (
                        <span
                          key={plat}
                          className="p-1.5 rounded-lg bg-gray-900/90 border border-white/5 text-gray-300 text-xs"
                          title={plat}
                        >
                          {plat === 'Web' ? <Globe className="h-3.5 w-3.5 text-cyan-400" /> : <Smartphone className="h-3.5 w-3.5 text-violet-400" />}
                        </span>
                      ))}
                    </div>

                    {/* Gradient Overlay bottom of image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent opacity-90" />
                  </div>

                  {/* Body Info */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      {/* Category */}
                      <span className="font-mono text-[10px] text-violet-400 font-bold tracking-widest uppercase mb-1.5 block">
                        {proj.category}
                      </span>
                      {/* Project Title */}
                      <h3 className="font-display font-extrabold text-xl text-white mb-3">
                        {proj.title}
                      </h3>
                      {/* Description */}
                      <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed mb-6">
                        {proj.description}
                      </p>
                    </div>

                    {/* Expand Features Toggle */}
                    <div className="mb-6">
                      <button
                        onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                        className="font-mono text-xs text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
                      >
                        {isExpanded ? 'Hide Details' : 'Show Complete Features'}
                        <ArrowUpRight className={`h-3 w-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Accordion List */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="mt-4 space-y-2.5 overflow-hidden border-t border-gray-800/80 pt-4"
                          >
                            {proj.features.map((feat, featIdx) => (
                              <li key={featIdx} className="flex gap-2 items-start text-xs text-gray-400 leading-relaxed font-light">
                                <span className="text-violet-400 mt-0.5"><Check className="h-3.5 w-3.5" /></span>
                                <span>{feat}</span>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Technologies Tag List */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-800/40">
                      {proj.technologies.map((t) => (
                        <span key={t} className="px-2 py-1 rounded bg-gray-950/80 border border-gray-800 text-[10px] font-mono text-gray-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="px-6 pb-6 pt-2 flex items-center gap-3">
                    {proj.webUrl && (
                      <a
                        href={proj.webUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-grow py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-mono text-xs font-semibold tracking-wider uppercase text-center flex items-center justify-center gap-1.5 transition-all shadow-md"
                      >
                        <Globe className="h-3.5 w-3.5" />
                        Live Demo
                      </a>
                    )}
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl border border-gray-800 hover:border-gray-700 text-gray-400 hover:text-white hover:bg-gray-900/50 transition-all"
                      title="View GitHub"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
