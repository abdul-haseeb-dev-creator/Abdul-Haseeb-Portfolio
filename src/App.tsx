import { useEffect } from 'react';
import { MotionConfig } from 'motion/react';
import TopBar from './components/TopBar';
import DeveloperHeader from './components/DeveloperHeader';
import Work from './components/Work';
import { Experience, Information } from './components/History';
import { Services, Reviews, Questions, Contact, Footer } from './components/Closing';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {

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

  return (
    <MotionConfig reducedMotion="user">
      <a href="#work" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-full focus:bg-sheet focus:px-4 focus:py-2">
        Skip to work
      </a>
      <TopBar />
      <main>
        <DeveloperHeader />
        <Work />
        <Experience />
        <Information />
        <Services />
        <Reviews />
        <Questions />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </MotionConfig>
  );
}
