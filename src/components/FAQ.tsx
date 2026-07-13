import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  HelpCircle, 
  User, 
  Briefcase, 
  Code2, 
  Smartphone, 
  Layout, 
  RefreshCw, 
  Users, 
  ShieldCheck, 
  Clock, 
  Mail 
} from 'lucide-react';

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
      category: "About Me",
      question: "Who are you?",
      answer: "I'm Abdul Haseeb, a React Native and Full-Stack JavaScript Developer with over 5 years of experience building high-performance mobile and web applications. I specialize in creating scalable, user-friendly, and production-ready solutions.",
      icon: <User className="h-5 w-5 text-violet-400" />
    },
    {
      category: "Services",
      question: "What services do you offer?",
      answer: "I provide a wide range of development services, including: React Native App Development, Cross-Platform Mobile Applications (Android & iOS), React.js & Next.js Web Development, Node.js Backend Development, REST API & Firebase Integration, Laravel Backend Development, Bug Fixing & Performance Optimization, App Store & Google Play Store Deployment, and UI Implementation from Figma.",
      icon: <Briefcase className="h-5 w-5 text-cyan-400" />
    },
    {
      category: "Technologies",
      question: "Which technologies do you work with?",
      answer: "My primary tech stack includes: React Native, React.js, Next.js, JavaScript (ES6+), TypeScript, Node.js, Express.js, Laravel, Firebase, MongoDB, MySQL, Prisma ORM, and Git & GitHub.",
      icon: <Code2 className="h-5 w-5 text-emerald-400" />
    },
    {
      category: "Platforms",
      question: "Do you develop both Android and iOS applications?",
      answer: "Yes. I build cross-platform mobile applications using React Native that run smoothly on both Android and iOS from a single codebase.",
      icon: <Smartphone className="h-5 w-5 text-fuchsia-400" />
    },
    {
      category: "Figma to Code",
      question: "Can you convert Figma designs into fully functional apps?",
      answer: "Absolutely. I can transform Figma designs into responsive, pixel-perfect mobile and web applications while maintaining excellent performance and clean code.",
      icon: <Layout className="h-5 w-5 text-amber-400" />
    },
    {
      category: "Collaboration",
      question: "Can you work on existing projects?",
      answer: "Yes. Whether you need new features, bug fixes, UI improvements, API integration, or performance optimization, I can join an existing project and contribute effectively.",
      icon: <RefreshCw className="h-5 w-5 text-pink-400" />
    },
    {
      category: "Clients",
      question: "Do you work with startups and businesses?",
      answer: "Yes. I collaborate with startups, agencies, and businesses of all sizes to build reliable digital products tailored to their goals.",
      icon: <Users className="h-5 w-5 text-teal-400" />
    },
    {
      category: "Quality Assurance",
      question: "How do you ensure code quality?",
      answer: "I follow industry best practices by writing clean, reusable, and maintainable code, using Git for version control, conducting thorough testing, and optimizing application performance.",
      icon: <ShieldCheck className="h-5 w-5 text-indigo-400" />
    },
    {
      category: "Availability",
      question: "Are you available for freelance or full-time opportunities?",
      answer: "Yes. I'm available for freelance projects, contract work, and full-time remote opportunities.",
      icon: <Clock className="h-5 w-5 text-rose-400" />
    },
    {
      category: "Contact",
      question: "How can I contact you?",
      answer: "You can reach me through the Contact section of this portfolio or connect with me via LinkedIn or email. I'm always happy to discuss new projects and collaboration opportunities.",
      icon: <Mail className="h-5 w-5 text-sky-400" />
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
