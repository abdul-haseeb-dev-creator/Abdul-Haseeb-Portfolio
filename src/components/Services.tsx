import { motion } from 'motion/react';
import { 
  Smartphone, 
  Globe, 
  Layers, 
  Boxes, 
  Bot, 
  Workflow, 
  Rocket, 
  Wrench 
} from 'lucide-react';
import { services } from '../data';

export default function Services() {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="h-6 w-6 text-violet-400" />;
      case 'Boxes':
        return <Boxes className="h-6 w-6 text-fuchsia-400" />;
      case 'Globe':
        return <Globe className="h-6 w-6 text-cyan-400" />;
      case 'Smartphone':
        return <Smartphone className="h-6 w-6 text-emerald-400" />;
      case 'Bot':
        return <Bot className="h-6 w-6 text-indigo-400" />;
      case 'Workflow':
        return <Workflow className="h-6 w-6 text-sky-400" />;
      case 'Rocket':
        return <Rocket className="h-6 w-6 text-rose-400" />;
      case 'Wrench':
        return <Wrench className="h-6 w-6 text-amber-400" />;
      default:
        return <Globe className="h-6 w-6 text-gray-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative px-4 border-t border-gray-900 bg-gradient-to-b from-transparent via-[#030712] to-transparent">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-violet-400 uppercase tracking-widest mb-3">Professional Services</p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">What I Deliver</h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-violet-600 to-cyan-400 mx-auto mt-4" />
          <p className="text-sm text-gray-400 font-light mt-4 max-w-md mx-auto">
            Professional high-impact services modeled directly after my years of commercial delivery.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="glass-panel rounded-2xl p-6 md:p-8 border border-gray-800 hover:border-violet-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-violet-950/5 group"
            >
              {/* Icon Frame */}
              <div className="p-3.5 rounded-xl bg-gray-950/80 border border-gray-800/80 w-fit mb-6 group-hover:bg-violet-950/20 group-hover:border-violet-500/30 transition-all">
                {getServiceIcon(srv.icon)}
              </div>

              {/* Title & Body */}
              <h3 className="font-display font-extrabold text-lg text-white mb-3 group-hover:text-violet-400 transition-colors">
                {srv.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                {srv.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
