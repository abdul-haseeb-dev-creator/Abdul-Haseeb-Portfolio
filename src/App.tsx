import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, Sparkles, Moon, Sun } from 'lucide-react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import AestheticBackground from './components/AestheticBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import GallerySlider from './components/GallerySlider';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Education from './components/Education';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { useMousePosition } from './hooks/useMousePosition';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [particlesEnabled, setParticlesEnabled] = useState(true);
  
  const mousePos = useMousePosition();

  // Security restrictions: disable right-click and inspect element shortcuts
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // 1. Disable F12 key
      if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      // 2. Disable shortcut combinations
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      const isControlOrCmd = isMac ? e.metaKey : e.ctrlKey;
      const isShiftOrOpt = isMac ? e.altKey : e.shiftKey;

      if (isControlOrCmd) {
        const key = e.key ? e.key.toLowerCase() : '';
        const code = e.keyCode;

        // Ctrl+U (View Source Code)
        if (key === 'u' || code === 85) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }

        // Ctrl+Shift+I or Cmd+Opt+I (Inspect Element / Developer Tools)
        if (isShiftOrOpt && (key === 'i' || code === 73)) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }

        // Ctrl+Shift+J or Cmd+Opt+J (Developer Console)
        if (isShiftOrOpt && (key === 'j' || code === 74)) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }

        // Ctrl+Shift+C or Cmd+Opt+C (Element Selector tool)
        if (isShiftOrOpt && (key === 'c' || code === 67)) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Scroll Listeners
  useEffect(() => {
    const handleScroll = () => {
      // 1. Calculate scroll progress bar
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // 2. Show or hide back-to-top button
      setShowScrollTop(window.scrollY > 400);

      // 3. Dynamic active section highlights
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'gallery', 'services', 'contact'];
      let currentSection = 'home';

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the element's top is near or past middle viewport
          if (rect.top <= window.innerHeight * 0.4) {
            currentSection = sectionId;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-white selection:bg-violet-600/30 selection:text-violet-200">
      
      {/* 1. Preloading Screen */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <div className="relative">
          
          {/* 2. Scroll Progress Bar */}
          <div className="fixed top-0 left-0 w-full h-[3px] bg-gray-900/40 z-50">
            <div
              className="h-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          {/* 3. Hardware-Accelerated Interactive Cursor Glow Spotlight */}
          <div
            className="pointer-events-none fixed inset-0 z-30 opacity-40 mix-blend-screen hidden sm:block"
            style={{
              background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(124, 58, 237, 0.12), transparent 80%)`,
            }}
          />

          {/* 4. Sticky Glassmorphic Navigation Bar */}
          <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

          {/* 5. Ambient Floating Aesthetic Background */}
          {particlesEnabled && <AestheticBackground />}

          {/* 6. Page Content Sections */}
          <main className="relative z-10">
            
            {/* Hero Section */}
            <Hero
              onContactClick={() => scrollToSection('contact')}
              onProjectsClick={() => scrollToSection('projects')}
            />

            {/* About Me & Achievements */}
            <About />

            {/* Skills Grids */}
            <Skills />

            {/* Experience timeline */}
            <Experience />

            {/* Projects gallery */}
            <Projects />

            {/* Visual Portfolio Gallery Slider */}
            <GallerySlider />

            {/* Services catalog */}
            <Services />

            {/* Client Testimonials slider */}
            <Testimonials />

            {/* Frequently Asked Questions */}
            <FAQ />

            {/* Premium CTA Section */}
            <CTA onContactClick={() => scrollToSection('contact')} />

            {/* Validated Contact form */}
            <Contact />

          </main>

          {/* 7. Site Footer with brand indicators */}
          <Footer onNavigate={scrollToSection} />

          {/* 9. Back to Top Button */}
          <WhatsAppButton />
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl bg-gray-900 border border-gray-800 hover:border-violet-500/40 text-gray-400 hover:text-white transition-all shadow-xl shadow-violet-950/15"
                title="Scroll to Top"
              >
                <ArrowUp className="h-4 w-4" />
              </motion.button>
            )}
          </AnimatePresence>

        </div>
      )}

    </div>
  );
}
