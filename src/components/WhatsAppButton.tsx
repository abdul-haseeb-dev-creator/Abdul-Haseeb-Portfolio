import { useEffect, useState } from 'react';
import { whatsappUrl } from '../lib/links';
import { WhatsAppGlyph } from './ui';

/** Phone-only shortcut that appears once the header's own WhatsApp button has scrolled away. */
export default function WhatsAppButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('home');
    if (!hero || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(([entry]) => setShow(!entry.isIntersecting), { threshold: 0 });
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Abdul on WhatsApp"
      tabIndex={show ? 0 : -1}
      aria-hidden={!show}
      className={`press fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-action text-white shadow-[0_2px_4px_rgb(18_20_23/0.12),0_8px_20px_-6px_rgb(11_122_85/0.45)] hover:bg-action-press md:hidden transition-[opacity,transform] duration-200 ease-out ${
        show ? 'opacity-100 scale-100' : 'pointer-events-none opacity-0 scale-90'
      }`}
    >
      <WhatsAppGlyph className="h-5 w-5" />
    </a>
  );
}
