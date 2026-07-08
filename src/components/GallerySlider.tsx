import { useState, useRef, RefObject, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, Maximize2, Globe, Smartphone, ZoomIn, Info } from 'lucide-react';

const webImages = [
  '/images/9d886cf1f655dc7f0a84ba83e13a77a0.png',
  '/images/22b4bf492c48f10eab7fbcab1a336401.png',
  '/images/f38aa54e0f5b5a3063021dc201188513.png',
  '/images/2cbac9a2a4a6ce2cae864e3eeff7f622.png',
  '/images/61d23d29c82a777a9ddf5f865d456fdc.jpg',
  '/images/77245eb1cad957e61dc7d2383b7d89db.jpg',
  '/images/c0ab4bcecb1e031b8fc99e2d56fe6cc3.jpg',
  '/images/9e516c041ee310fc2aeec413281fa8e6.jpg',
  '/images/40f8f0f492ce8ef5149b4fbe07f3bfe4.png',
  '/images/2da7eabb0377beaa139d955c9e4a456d.png',
  '/images/4e4847d001a2131579f984968828d344.jpg',
  '/images/25a2d1ca58d493b2fcb334eeaa18ac62.png',
  '/images/012fd4194884ebf02088c47fbd50da09.png',
  '/images/5ca84dc6cd450e27214052bac04da7dc.png',
  '/images/bb24bfb8caa9f28b872f0faf7267fcb6.jpg',
  '/images/350a3d2420185af38dfc8bab54a5ff88.png',
  '/images/0af390affa42ce1f7d8f5d54f6bf556b.png',
  '/images/70cf02bbf82f67f28ef5444299ba394d.png',
  '/images/eb798e6926898efec07c4725f432040e.png',
  '/images/772eb6972a388ad14dd20b9b5a487942.png',
  '/images/26fe3644dcfce33380fff5abbcdb5125.png',
  '/images/374a34af1e497601f6da307b056ad0ff.png',
];

const appImages = [
  '/images/449cbb583c05af1d2a33e0cd7d534f8d.png',
  '/images/74997213db27bc9b2360a35bfd066180.png',
  '/images/772eb6972a388ad14dd20b9b5a487942.png',
  '/images/524b6614c795659692934d42e282c11d.png',
  '/images/757c6830d63a8fc5f51ce11ddc0ac553.png',
  '/images/a4ad3bfb26334cbcdec9eac0b1b3cc5c.png',
  '/images/1bca0c3e7a13429d584f5cef04744bc8.png',
  '/images/757c6830d63a8fc5f51ce11ddc0ac553.png',
];

export default function GallerySlider() {
  const [lightbox, setLightbox] = useState<{ isOpen: boolean; type: 'web' | 'app'; index: number }>({
    isOpen: false,
    type: 'web',
    index: 0,
  });

  const webScrollRef = useRef<HTMLDivElement>(null);
  const appScrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right', ref: RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      const scrollAmount = ref.current.clientWidth * 0.75;
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const currentImages = lightbox.type === 'web' ? webImages : appImages;

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const list = currentImages;
    let newIndex = lightbox.index;
    if (direction === 'prev') {
      newIndex = newIndex === 0 ? list.length - 1 : newIndex - 1;
    } else {
      newIndex = newIndex === list.length - 1 ? 0 : newIndex + 1;
    }
    setLightbox((prev) => ({ ...prev, index: newIndex }));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightbox((prev) => ({ ...prev, isOpen: false }));
      }
    };
    if (lightbox.isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightbox.isOpen]);

  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-[#030712]/50">
      {/* Visual background lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-950/30 border border-violet-500/20 text-violet-400 font-mono text-[10px] uppercase tracking-wider mb-4">
            <Info className="h-3.5 w-3.5" /> Visual Portfolio Showcase
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Interactive Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">Gallery</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-light mt-4 leading-relaxed">
            Scroll through high-fidelity interface mockups, live screenshots, and design layouts delivered across professional client web portals and native smartphone applications.
          </p>
        </div>

        {/* ==================== WEB PORTFOLIO GALLERY SLIDER ==================== */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shadow-sm">
                <Globe className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-wide">
                  Web Projects Showcase
                </h3>
                <p className="text-xs text-gray-400 font-light mt-0.5">
                  Responsive dashboards, landing experiences, and e-commerce portals ({webImages.length} screens)
                </p>
              </div>
            </div>

            {/* Scrolling Navigation buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left', webScrollRef)}
                className="p-2 sm:p-2.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-violet-500/30 active:scale-95 transition-all shadow-md"
                aria-label="Scroll web items left"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => scroll('right', webScrollRef)}
                className="p-2 sm:p-2.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-violet-500/30 active:scale-95 transition-all shadow-md"
                aria-label="Scroll web items right"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Web Slider Track */}
          <div
            ref={webScrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto py-2 px-1 scroll-smooth snap-x snap-mandatory no-scrollbar select-none"
            style={{ scrollbarWidth: 'none' }}
          >
            {webImages.map((src, idx) => (
              <div
                key={`web-${idx}`}
                className="flex-shrink-0 w-[280px] sm:w-[380px] md:w-[440px] aspect-[16/10] bg-gray-950 border border-gray-800/80 rounded-2xl overflow-hidden group relative shadow-lg hover:shadow-violet-950/10 hover:border-violet-500/30 transition-all duration-300 snap-start cursor-pointer"
                onClick={() => setLightbox({ isOpen: true, type: 'web', index: idx })}
              >
                <img
                  src={src}
                  alt={`Web Portfolio Screen ${idx + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-[1.03] group-hover:opacity-100 transition-all duration-500"
                  loading="lazy"
                />
                
                {/* Micro-hover badge overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <span className="font-mono text-[10px] text-gray-300 uppercase tracking-widest font-semibold bg-gray-900/90 border border-gray-800 px-2 py-1 rounded-lg">
                    Screen {idx + 1} of {webImages.length}
                  </span>
                  <div className="p-1.5 rounded-lg bg-violet-600 text-white shadow">
                    <Maximize2 className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== MOBILE APP GALLERY SLIDER ==================== */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shadow-sm">
                <Smartphone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-wide">
                  Mobile App Interfaces
                </h3>
                <p className="text-xs text-gray-400 font-light mt-0.5">
                  Native iOS & Android layouts, checkout screens, and flow pipelines ({appImages.length} screens)
                </p>
              </div>
            </div>

            {/* Scrolling Navigation buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left', appScrollRef)}
                className="p-2 sm:p-2.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-cyan-500/30 active:scale-95 transition-all shadow-md"
                aria-label="Scroll app items left"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => scroll('right', appScrollRef)}
                className="p-2 sm:p-2.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-cyan-500/30 active:scale-95 transition-all shadow-md"
                aria-label="Scroll app items right"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* App Slider Track */}
          <div
            ref={appScrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto py-2 px-1 scroll-smooth snap-x snap-mandatory no-scrollbar select-none"
            style={{ scrollbarWidth: 'none' }}
          >
            {appImages.map((src, idx) => (
              <div
                key={`app-${idx}`}
                className="flex-shrink-0 w-[180px] sm:w-[240px] aspect-[9/16] bg-gray-950 border border-gray-800/80 rounded-2xl overflow-hidden group relative shadow-lg hover:shadow-cyan-950/10 hover:border-cyan-500/30 transition-all duration-300 snap-start cursor-pointer"
                onClick={() => setLightbox({ isOpen: true, type: 'app', index: idx })}
              >
                <img
                  src={src}
                  alt={`Mobile Portfolio Screen ${idx + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-[1.03] group-hover:opacity-100 transition-all duration-500"
                  loading="lazy"
                />
                
                {/* Micro-hover badge overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3.5">
                  <span className="font-mono text-[9px] text-gray-300 uppercase tracking-widest font-semibold bg-gray-900/90 border border-gray-800 px-1.5 py-0.5 rounded-md">
                    Screen {idx + 1}
                  </span>
                  <div className="p-1 rounded bg-cyan-600 text-white shadow">
                    <Maximize2 className="h-3 w-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ==================== FULLSCREEN LIGHTBOX OVERLAY ==================== */}
      <AnimatePresence>
        {lightbox.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox((prev) => ({ ...prev, isOpen: false }))}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 cursor-zoom-out"
          >
            {/* Top Bar Actions */}
            <div 
              className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-40 pointer-events-none"
            >
              <span className="font-mono text-xs text-gray-400 bg-gray-900/90 border border-gray-800 px-3.5 py-2 rounded-full flex items-center gap-1.5 pointer-events-auto shadow-xl">
                {lightbox.type === 'web' ? <Globe className="h-3.5 w-3.5 text-violet-400" /> : <Smartphone className="h-3.5 w-3.5 text-cyan-400" />}
                {lightbox.type === 'web' ? 'Web Design' : 'Mobile App Interface'} • Screen {lightbox.index + 1} of {currentImages.length}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox((prev) => ({ ...prev, isOpen: false }));
                }}
                className="p-3 rounded-full bg-gray-900 border border-gray-800 hover:border-violet-500/50 hover:bg-gray-800 text-gray-400 hover:text-white transition-all cursor-pointer pointer-events-auto shadow-2xl hover:scale-110 active:scale-95 flex items-center justify-center"
                aria-label="Close Lightbox"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Left Navigate Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('prev');
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-gray-900/90 border border-gray-800 hover:border-violet-500/50 hover:bg-gray-800 text-gray-400 hover:text-white transition-all hidden md:flex items-center justify-center cursor-pointer z-40 shadow-2xl hover:scale-110"
              aria-label="Previous screen"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Image Container Panel */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className={`max-w-full max-h-[75vh] flex items-center justify-center rounded-2xl overflow-hidden border border-gray-800 shadow-2xl bg-gray-950 cursor-default z-20 ${
                lightbox.type === 'app' ? 'aspect-[9/16] w-[340px] md:w-[380px]' : 'aspect-[16/10] w-[1000px]'
              }`}
            >
              <img
                src={currentImages[lightbox.index]}
                alt="Selected Portfolio Screen Enlarged"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Right Navigate Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('next');
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-gray-900/90 border border-gray-800 hover:border-violet-500/50 hover:bg-gray-800 text-gray-400 hover:text-white transition-all hidden md:flex items-center justify-center cursor-pointer z-40 shadow-2xl hover:scale-110"
              aria-label="Next screen"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Bottom Indicator & Mobile Navigation Helper */}
            <div 
              className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-40 pointer-events-none"
            >
              {/* Swipe/Tap Helper on Mobile */}
              <div className="flex md:hidden items-center gap-4 bg-gray-900/90 border border-gray-800 px-5 py-2.5 rounded-xl text-xs text-gray-400 pointer-events-auto shadow-xl">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateLightbox('prev');
                  }} 
                  className="font-bold text-white px-2 cursor-pointer hover:text-violet-400 active:scale-95"
                >
                  Prev
                </button>
                <span className="text-gray-700">|</span>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateLightbox('next');
                  }} 
                  className="font-bold text-white px-2 cursor-pointer hover:text-violet-400 active:scale-95"
                >
                  Next
                </button>
              </div>

              {/* Dots tracker */}
              <div className="flex items-center gap-1.5 overflow-x-auto max-w-[280px] py-1.5 px-3 rounded-full bg-gray-900/60 border border-gray-800/50 backdrop-blur pointer-events-auto shadow-md no-scrollbar">
                {currentImages.map((_, idx) => (
                  <button
                    key={`dot-${idx}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightbox((prev) => ({ ...prev, index: idx }));
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      lightbox.index === idx ? 'w-5 bg-violet-500' : 'w-1.5 bg-gray-700 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
