import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { whatsappUrl } from '../lib/links';
import { WhatsAppGlyph } from './ui';
import avatarImg from '../assets/images/abdulhaseeb.jpeg';

const links = [
  { label: 'Work', id: 'work' },
  { label: 'Experience', id: 'experience' },
  { label: 'Services', id: 'services' },
  { label: 'Contact', id: 'contact' },
];

export default function TopBar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // The section crossing the upper third of the screen is the one you are reading.
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: '-30% 0px -65% 0px' },
    );
    const watched = ['home', ...links.map((l) => l.id)];
    watched.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener('scroll', onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header {...(scrolled ? { 'data-scrolled': '' } : {})} className="topbar sticky top-0 z-40 bg-sheet/95 border-b border-line">
      <div className="mx-auto flex h-14 max-w-[1080px] items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#home" className="flex items-center gap-2.5 min-w-0">
          <img src={avatarImg} alt="" className="h-8 w-8 rounded-[9px] object-cover object-top" />
          <span className="font-display text-[17px] font-semibold tracking-[-0.01em] truncate">{personalInfo.name}</span>
        </a>
        <nav aria-label="Sections" className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const on = active === l.id;
            return (
              <a
                key={l.id}
                href={`#${l.id}`}
                aria-current={on ? 'true' : undefined}
                className={`press relative isolate rounded-full px-3 py-1.5 text-[14px] ${on ? 'text-ink' : 'text-ink-2 hover:text-ink'}`}
              >
                {on && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-ground"
                    transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
                  />
                )}
                {l.label}
              </a>
            );
          })}
        </nav>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="press inline-flex h-8 items-center gap-1.5 rounded-full bg-action px-3.5 text-[13px] font-semibold text-white hover:bg-action-press"
        >
          <WhatsAppGlyph className="h-3.5 w-3.5" />
          WhatsApp
        </a>
      </div>
    </header>
  );
}
