import { useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Shield, ShoppingCart, Truck, Home, Utensils, CheckCircle, Award } from 'lucide-react';
import { personalInfo, achievements } from '../data';

// Helper component for animated counting stats
function Counter({ value, suffix, duration = 2 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-display text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const domains = [
    { title: 'E-commerce', icon: ShoppingCart, description: 'Direct purchase pipelines, cart states, inventory sync, and secure checkouts.', color: 'text-violet-400 border-violet-500/10 hover:border-violet-500/30' },
    { title: 'Logistics & Delivery', icon: Truck, description: 'Live tracking, route optimization, driver applications, and central dispatcher hubs.', color: 'text-cyan-400 border-cyan-500/10 hover:border-cyan-500/30' },
    { title: 'Real Estate', icon: Home, description: 'Dynamic list filtering, interactive map catalogs, content administration and search.', color: 'text-indigo-400 border-indigo-500/10 hover:border-indigo-500/30' },
    { title: 'Food & Grocery', icon: Utensils, description: 'Real-time ordering, push notifications, category management and merchant panels.', color: 'text-fuchsia-400 border-fuchsia-500/10 hover:border-fuchsia-500/30' },
  ];

  return (
    <section id="about" className="py-24 relative px-4 border-t border-gray-900 bg-gradient-to-b from-transparent via-[#080d21]/30 to-transparent">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-violet-400 uppercase tracking-widest mb-3">Professional Bio</p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">About My Career</h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-violet-600 to-cyan-400 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Biography Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
              Building high-fidelity cross-platform applications & enterprise backends
            </h3>
            
            <p className="text-gray-400 leading-relaxed font-light">
              I am a results-driven Full-Stack Developer with <strong>5+ years of hands-on experience</strong> in React Native and React.js. Over my career, I have successfully shipped <strong>10+ production-ready</strong> mobile and web applications across multiple complex industries.
            </p>
            
            <p className="text-gray-400 leading-relaxed font-light">
              My strength lies in owning complete application lifecycles — ranging from robust frontend UI design to efficient state-management, API construction, and continuous testing to deployment workflows. I am highly proficient at collaborating with remote development and QA squads using Agile frameworks, and possess a track-record of improving app velocity and reducing code bug ratios.
            </p>

            {/* Industrial Domain Badges */}
            <div className="pt-6">
              <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-4">Core Domain Expertise:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {domains.map((dom, i) => {
                  const IconComp = dom.icon;
                  return (
                    <div key={i} className={`p-4 rounded-xl bg-gray-900/40 border transition-all ${dom.color}`}>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-gray-900">
                          <IconComp className="h-5 w-5" />
                        </div>
                        <h5 className="font-display font-bold text-sm text-white">{dom.title}</h5>
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed">{dom.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Achievement Counters Column */}
          <div className="lg:col-span-5 space-y-6 lg:pl-6">
            <div className="glass-panel rounded-3xl p-6 md:p-8 border border-gray-800 relative overflow-hidden">
              {/* Decorative radial gradients */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-violet-600/5 blur-xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-cyan-500/5 blur-xl pointer-events-none" />

              <h4 className="font-display text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Award className="h-5 w-5 text-violet-400" />
                Key Stats & Achievements
              </h4>

              <div className="space-y-6">
                {achievements.map((ach, idx) => (
                  <div key={idx} className="flex gap-4 items-start pb-4 border-b border-gray-800/60 last:border-none last:pb-0">
                    <div className="flex-shrink-0 w-20 text-left">
                      <Counter value={ach.value} suffix={ach.suffix} />
                    </div>
                    <div>
                      <h5 className="font-display font-bold text-sm text-white">{ach.label}</h5>
                      <p className="text-xs text-gray-400 leading-relaxed mt-1">{ach.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
