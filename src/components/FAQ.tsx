import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Calendar, MessageSquare, ShieldCheck, HeartHandshake } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
  icon: React.ReactNode;
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      category: "Timelines & Delivery",
      question: "What is your typical project timeline for an MVP or Full Stack app?",
      answer: "Typical timelines range from 2 to 4 weeks for a Minimum Viable Product (MVP), and 6 to 12 weeks for a comprehensive, full-scale SaaS application or custom web/mobile platform. I follow Agile methodologies, providing working milestones and demo-ready builds every 1–2 weeks so you are always fully in the loop.",
      icon: <Calendar className="h-5 w-5 text-violet-400" />
    },
    {
      category: "Collaboration",
      question: "How do we collaborate and communicate during the development process?",
      answer: "Transparency is my top priority. We'll utilize Slack, Discord, or Microsoft Teams for daily asynchronous messaging, alongside Jira, Trello, or ClickUp for real-time task and progress tracking. We can set up weekly check-in sync calls on Zoom/Google Meet, and all source code is synchronized on a private GitHub repository for absolute visibility.",
      icon: <MessageSquare className="h-5 w-5 text-cyan-400" />
    },
    {
      category: "Support & Policies",
      question: "Do you offer post-launch maintenance, updates, and support?",
      answer: "Yes, absolutely! Every contract includes a complimentary 30-day post-launch support and bug-fixing window to ensure absolute stability. Beyond that, I offer highly flexible monthly retainer arrangements and ongoing SLA maintenance packages for version upgrades, performance tuning, and scaling as your business grows.",
      icon: <ShieldCheck className="h-5 w-5 text-emerald-400" />
    },
    {
      category: "Technology Stack",
      question: "Can you help migrate our legacy application to Next.js or React Native?",
      answer: "Definitely. I specialize in modernization pipelines—migrating outdated legacy codebases or monolithic setups over to highly decoupled, lightning-fast React, Next.js, and modern Node.js/Laravel server architectures. This includes refactoring databases, cleaning up state management layers, and optimizing APIs for up to a 40% speed boost.",
      icon: <HeartHandshake className="h-5 w-5 text-fuchsia-400" />
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden px-4 border-t border-gray-900/60 bg-gray-950/20">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-950/30 border border-violet-500/20 text-violet-400 font-mono text-[10px] uppercase tracking-widest mb-4">
            <HelpCircle className="h-3 w-3" /> Got Questions?
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">
              Questions
            </span>
          </h2>
          <p className="text-gray-400 font-light text-sm sm:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Everything you need to know about partnering up, production timelines, tech stack decisions, and ongoing support parameters.
          </p>
        </div>

        {/* FAQs Accordion Grid */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`glass-panel rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'border-violet-500/30 bg-violet-950/5 shadow-lg shadow-violet-950/10' 
                    : 'border-gray-800/80 hover:border-gray-700 hover:bg-gray-900/20'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-6 px-6 sm:px-8 flex items-center justify-between text-left gap-4 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    {/* Styled Floating Icon */}
                    <div className={`p-2.5 rounded-xl border transition-colors ${
                      isOpen 
                        ? 'bg-violet-950/50 border-violet-500/30 text-violet-400' 
                        : 'bg-gray-900 border-gray-800 text-gray-400'
                    }`}>
                      {faq.icon}
                    </div>
                    <div>
                      <span className="block font-mono text-[9px] uppercase tracking-widest text-gray-500 mb-1">
                        {faq.category}
                      </span>
                      <h3 className="font-display text-sm sm:text-base font-bold text-white leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Rotating Chevron Icon */}
                  <div className={`p-1.5 rounded-lg border border-gray-800 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 border-violet-500/20 text-violet-400' : ''}`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {/* Animated Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 sm:px-8 pb-6 pt-1 border-t border-gray-900/60">
                        <p className="text-gray-400 text-sm font-light leading-relaxed pl-14">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
