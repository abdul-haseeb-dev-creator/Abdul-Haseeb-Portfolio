import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Smartphone, Globe, Layers, ArrowUpRight, Check, Apple, Play, Download } from 'lucide-react';
import { projects } from '../data';

export default function Projects() {
  const [filter, setFilter] = useState<'All' | 'Mobile' | 'Web' | 'E-commerce'>('All');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Set up local self-hosted rich image cards mapping to all 14 new projects
  const projectImages: Record<string, string> = {
    'Rizq Mart Grocery Platform': 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600',
    'Motboy Driver Application': 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=600',
    'Motboy Customer Application': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600',
    'Motboy Admin Panel': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
    'Adil Store E-commerce Application & Web': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
    'DishDish Cookbook App & Web Platform': 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=600',
    'Tyloz Cleaning Service – Cleaner & Customer Applications': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=600',
    'Four Apple – Real Estate Agent Application & CRM Tool': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600',
    'First Souq – E-commerce Application & Web Platform': '/images/484076585_618921344346965_8387813750205689905_n.jpg',
    'Azaro – Multi-Vendor E-commerce Application & Web Platform': 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=600',
    'Future Fit – Mobile Application & Admin Panel': 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600',
    'Ethan Allen – E-commerce Web Platform': 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=600',
    'Aquakingdom – E-commerce Mobile Application': 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=600',
    'Jamoka Properties – CRM & Lead Management Tool': 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600',
    'Grubsy – Delivery Platform': '/images/original-d83e2ea78b727af7e38ccd8b0730b2e9.webp',
    'REFIX Facility Services – Corporate Website': 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600',
    'EMX Motors': 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=600',
    'SurRon ME': 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&q=80&w=600',
    'Casa Vista Development': 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=600',
    'Jamoka Properties': 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=600',
    'Big Brands UAE': 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600',
    'Local Storage UAE': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600',
    'ADCG': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600'
  };

  const filteredProjects = projects.filter((proj) => {
    if (filter === 'All') return true;
    if (filter === 'Mobile') return proj.platforms?.includes('iOS') || proj.platforms?.includes('Android');
    if (filter === 'Web') return proj.platforms?.includes('Web');
    if (filter === 'E-commerce') {
      const catLower = proj.category.toLowerCase();
      return catLower.includes('e-commerce') || catLower.includes('marketplace') || catLower.includes('delivery');
    }
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

                    {/* Project Links Section - High Visibility */}
                    {(proj.webUrl || proj.appStoreUrl || proj.playStoreUrl || proj.apkUrl || proj.demoUrl) && (
                      <div className="mb-6 p-4 rounded-xl bg-gray-900/60 border border-gray-800/80 shadow-inner">
                        <div className="flex items-center gap-1.5 mb-2.5">
                          <span className="flex h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
                          <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Launch & View Platform:</span>
                        </div>
                        <div className="flex flex-wrap gap-2.5">
                          {proj.webUrl && (
                            <a
                              href={proj.webUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:text-white hover:bg-cyan-500/20 hover:border-cyan-400 hover:scale-[1.03] active:scale-[0.98] text-xs font-mono font-medium transition-all duration-300 shadow-[0_0_12px_rgba(6,182,212,0.06)] hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]"
                            >
                              <Globe className="h-3.5 w-3.5 text-cyan-400" />
                              Live Web
                              <ArrowUpRight className="h-3 w-3 text-cyan-400/70" />
                            </a>
                          )}
                          {proj.appStoreUrl && (
                            <a
                              href={proj.appStoreUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-300 hover:text-white hover:bg-violet-500/20 hover:border-violet-400 hover:scale-[1.03] active:scale-[0.98] text-xs font-mono font-medium transition-all duration-300 shadow-[0_0_12px_rgba(139,92,246,0.06)] hover:shadow-[0_0_20px_rgba(139,92,246,0.25)]"
                            >
                              <Apple className="h-3.5 w-3.5 text-violet-400" />
                              App Store
                              <ArrowUpRight className="h-3 w-3 text-violet-400/70" />
                            </a>
                          )}
                          {proj.playStoreUrl && (
                            <a
                              href={proj.playStoreUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 hover:text-white hover:bg-emerald-500/20 hover:border-emerald-400 hover:scale-[1.03] active:scale-[0.98] text-xs font-mono font-medium transition-all duration-300 shadow-[0_0_12px_rgba(16,185,129,0.06)] hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]"
                            >
                              <Play className="h-3.5 w-3.5 text-emerald-400 fill-emerald-400/10" />
                              Google Play
                              <ArrowUpRight className="h-3 w-3 text-emerald-400/70" />
                            </a>
                          )}
                          {proj.apkUrl && (
                            <a
                              href={proj.apkUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:text-white hover:bg-amber-500/20 hover:border-amber-400 hover:scale-[1.03] active:scale-[0.98] text-xs font-mono font-medium transition-all duration-300 shadow-[0_0_12px_rgba(245,158,11,0.06)] hover:shadow-[0_0_20px_rgba(245,158,11,0.25)]"
                            >
                              <Download className="h-3.5 w-3.5 text-amber-400 animate-bounce" />
                              Download APK
                            </a>
                          )}
                          {proj.demoUrl && (
                            <a
                              href={proj.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gray-800/80 border border-gray-700 text-gray-200 hover:text-white hover:bg-gray-700 hover:scale-[1.03] active:scale-[0.98] text-xs font-mono font-medium transition-all duration-300"
                            >
                              <ExternalLink className="h-3.5 w-3.5 text-gray-300" />
                              View Demo
                            </a>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Technologies Tag List */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-800/40">
                      {proj.technologies.map((t) => (
                        <span key={t} className="px-2 py-1 rounded bg-gray-950/80 border border-gray-800 text-[10px] font-mono text-gray-400">
                          {t}
                        </span>
                      ))}
                    </div>
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
