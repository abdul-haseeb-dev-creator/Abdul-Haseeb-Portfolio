import { personalInfo } from '../data';
import { whatsappUrl } from '../lib/links';
import { WhatsAppGlyph } from './ui';
import avatarImg from '../assets/images/abdulhaseeb.jpeg';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function TopBar() {
  return (
    <header className="sticky top-0 z-40 bg-sheet/95 border-b border-line">
      <div className="mx-auto flex h-14 max-w-[1080px] items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#home" className="flex items-center gap-2.5 min-w-0">
          <img src={avatarImg} alt="" className="h-8 w-8 rounded-[9px] object-cover object-top" />
          <span className="font-display text-[17px] font-semibold tracking-[-0.01em] truncate">{personalInfo.name}</span>
        </a>
        <nav aria-label="Sections" className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="press rounded-full px-3 py-1.5 text-[14px] text-ink-2 hover:text-ink hover:bg-ground">
              {l.label}
            </a>
          ))}
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
