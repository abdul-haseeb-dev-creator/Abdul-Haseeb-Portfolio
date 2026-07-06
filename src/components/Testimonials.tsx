import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-24 relative px-4 bg-gradient-to-b from-[#030712] via-[#080d21]/20 to-[#030712]">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3">Feedback</p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Client Testimonials</h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-cyan-400 to-violet-600 mx-auto mt-4" />
        </div>

        {/* Carousel Frame */}
        <div className="relative glass-panel rounded-3xl p-8 md:p-12 border border-gray-800/80 shadow-2xl relative overflow-hidden">
          
          {/* Decorative quote icon */}
          <div className="absolute top-6 left-6 text-violet-500/15">
            <Quote className="h-16 w-16" />
          </div>

          <div className="relative z-10 min-h-[180px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 text-center md:text-left"
              >
                {/* Content */}
                <p className="text-sm sm:text-lg text-gray-300 font-light italic leading-relaxed md:pl-12">
                  "{testimonials[activeIndex].content}"
                </p>

                {/* Profile Meta */}
                <div className="flex flex-col md:flex-row items-center gap-4 md:pl-12">
                  <img
                    src={testimonials[activeIndex].avatar}
                    alt={testimonials[activeIndex].name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border-2 border-violet-500/40"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150';
                    }}
                  />
                  <div>
                    <h4 className="font-display font-bold text-sm sm:text-base text-white">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="font-mono text-[10px] sm:text-xs text-gray-500">
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between md:justify-end gap-4 mt-8 pt-6 border-t border-gray-800/60 md:pl-12">
              {/* Pagination indicators */}
              <div className="flex gap-1.5">
                {testimonials.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setActiveIndex(dotIdx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeIndex === dotIdx ? 'w-6 bg-violet-500' : 'w-1.5 bg-gray-850'
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-xl border border-gray-800 text-gray-400 hover:text-white hover:border-violet-500/20 hover:bg-violet-950/20 transition-all"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-xl border border-gray-800 text-gray-400 hover:text-white hover:border-violet-500/20 hover:bg-violet-950/20 transition-all"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
