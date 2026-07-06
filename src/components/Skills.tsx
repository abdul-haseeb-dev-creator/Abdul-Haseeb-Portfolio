import { motion } from 'motion/react';
import { skillCategories } from '../data';
import { Layers, Terminal, Server, Smartphone, Cpu, Database, CloudLightning, GitBranch, Settings } from 'lucide-react';

export default function Skills() {
  // Icon picker helper based on category index or title
  const getCategoryIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'languages':
        return <Terminal className="h-5 w-5 text-violet-400" />;
      case 'frontend / mobile':
      case 'frontend':
        return <Layers className="h-5 w-5 text-cyan-400" />;
      case 'backend':
        return <Server className="h-5 w-5 text-indigo-400" />;
      case 'databases':
        return <Database className="h-5 w-5 text-emerald-400" />;
      case 'testing & quality':
        return <Cpu className="h-5 w-5 text-fuchsia-400" />;
      case 'tools & workflow':
        return <GitBranch className="h-5 w-5 text-amber-400" />;
      case 'cloud & devops':
        return <CloudLightning className="h-5 w-5 text-sky-400" />;
      default:
        return <Settings className="h-5 w-5 text-slate-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative px-4">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3">Capabilities</p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Technical Skillset</h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-cyan-400 to-violet-600 mx-auto mt-4" />
          <p className="text-sm text-gray-400 font-light mt-4 max-w-md mx-auto">
            Comprehensive set of modern full-stack languages, mobile frameworks, cloud, and test toolchains.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: catIdx * 0.05 }}
              className="glass-panel rounded-2xl p-6 border border-gray-800 hover:border-violet-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-violet-950/10 hover:-translate-y-1 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-gray-900 border border-gray-800/80 group-hover:bg-violet-950/20 group-hover:border-violet-500/30 transition-all">
                  {getCategoryIcon(cat.title)}
                </div>
                <h3 className="font-display font-bold text-sm text-white group-hover:text-violet-400 transition-colors">
                  {cat.title}
                </h3>
              </div>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-2.5 py-1.5 rounded-lg bg-gray-950/60 hover:bg-violet-950/20 hover:text-violet-300 border border-gray-800/80 hover:border-violet-500/30 text-xs text-gray-300 font-mono transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight Banner */}
        <div className="mt-12 text-center">
          <p className="font-mono text-xs text-gray-500">
            * 95%+ mobile codebase reusability between iOS and Android achieved with modern React Native & Expo.
          </p>
        </div>

      </div>
    </section>
  );
}
