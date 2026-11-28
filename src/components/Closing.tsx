import { useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Plus, Copy, Check, Mail, Phone, CalendarDays, Download, Linkedin, Github } from 'lucide-react';
import { services, testimonials, faqs, personalInfo } from '../data';
import { whatsappUrl, cvUrl, bookingUrl, emailUrl, phoneUrl } from '../lib/links';
import { SectionHead, WhatsAppGlyph, stagger, useReveal } from './ui';

export function Services() {
  const ref = useReveal<HTMLUListElement>();
  return (
    <section id="services" aria-labelledby="services-h" className="mx-auto max-w-[1080px] px-4 sm:px-6 pb-10">
      <SectionHead id="services-h" title="What I can build for you" note="Hire me for one of these, or for the whole thing." />
      <div className="overflow-hidden rounded-2xl bg-sheet border border-line px-5 sm:px-7">
      <ul ref={ref} data-reveal className="-mt-px grid grid-cols-1 md:grid-cols-2 gap-x-10">
        {services.map((s, i) => (
          <li key={s.title} style={stagger(i)} className="r border-t border-line py-4">
            <h3 className="text-[16px] font-semibold">{s.title}</h3>
            <p className="mt-1 text-[14px] leading-relaxed text-ink-2">{s.description}</p>
          </li>
        ))}
      </ul>
      </div>
    </section>
  );
}

export function Reviews() {
  const ref = useReveal<HTMLUListElement>();
  return (
    <section id="testimonials" aria-labelledby="reviews-h" className="mx-auto max-w-[1080px] px-4 sm:px-6 pb-10">
      <SectionHead id="reviews-h" title="What people said" />
      <ul ref={ref} data-reveal className="shelf -mx-4 sm:mx-0 px-4 sm:px-0 py-1 flex md:grid md:grid-cols-3 gap-3 overflow-x-auto md:overflow-visible">
        {testimonials.map((t, i) => (
          <li
            key={t.name}
            style={stagger(i * 2)}
            className="r card-lift min-w-[84%] sm:min-w-[60%] md:min-w-0 rounded-2xl bg-sheet border border-line p-5 flex flex-col justify-between gap-5"
          >
            <blockquote className="text-[15px] leading-relaxed text-ink">{t.content}</blockquote>
            <footer>
              <p className="text-[14px] font-semibold">{t.name}</p>
              <p className="text-[13px] text-ink-3">{t.role}</p>
            </footer>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Questions() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useReveal<HTMLUListElement>();
  return (
    <section id="faq" aria-labelledby="faq-h" className="mx-auto max-w-[1080px] px-4 sm:px-6 pb-10">
      <SectionHead id="faq-h" title="Questions people ask" />
      <ul ref={ref} data-reveal className="rounded-2xl bg-sheet border border-line px-5 sm:px-7">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <li key={f.question} style={stagger(i)} className="r border-b border-line last:border-b-0">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 py-4 text-left text-[16px] font-medium"
              >
                {f.question}
                <Plus
                  aria-hidden="true"
                  className={`h-4 w-4 shrink-0 text-ink-3 transition-transform duration-200 ease-out ${isOpen ? 'rotate-45' : ''}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="a"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-[68ch] pb-5 text-[15px] leading-relaxed text-ink-2">{f.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function CopyRow({ label, value, href, icon }: { label: string; value: string; href: string; icon: ReactNode }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="flex items-center gap-3 border-b border-line py-3.5">
      <span className="text-ink-3">{icon}</span>
      <div className="min-w-0 flex-1">
        <p className="text-[12px] text-ink-3">{label}</p>
        <a href={href} className="block truncate text-[15px] font-medium text-ink hover:text-link">
          {value}
        </a>
      </div>
      <button
        type="button"
        onClick={() => {
          navigator.clipboard?.writeText(value);
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        }}
        className="press inline-flex h-8 items-center gap-1 rounded-full bg-ground px-3 text-[13px] font-medium text-ink-2 hover:bg-line"
        aria-label={`Copy ${label.toLowerCase()}`}
      >
        <span key={copied ? 'y' : 'n'} className="pop-in inline-flex">
          {copied ? <Check className="h-3.5 w-3.5 text-action" /> : <Copy className="h-3.5 w-3.5" />}
        </span>
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  );
}

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="contact" aria-labelledby="contact-h" className="mt-6 bg-forest text-white">
      <div ref={ref} data-reveal className="mx-auto grid grid-cols-1 max-w-[1080px] items-center gap-10 px-4 sm:px-6 py-16 sm:py-24 md:grid-cols-[1.15fr_1fr]">
        <div>
          <h2 id="contact-h" className="wipe font-display text-[44px] sm:text-[68px] font-bold leading-[0.95] tracking-[-0.04em]">
            Got an app or a site to build?
          </h2>
          <p style={stagger(2)} className="r mt-5 max-w-[46ch] text-[17px] leading-relaxed text-white/80">
            Send me a WhatsApp with what you have in mind, even if it is only a rough idea. I will tell you honestly
            what it takes, how long, and whether I am the right person for it.
          </p>
          <div style={stagger(3)} className="r mt-6 flex flex-wrap gap-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="press inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-[15px] font-semibold text-forest hover:bg-mint"
            >
              <WhatsAppGlyph className="h-[18px] w-[18px] text-action" />
              Message on WhatsApp
            </a>
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="press inline-flex h-12 items-center gap-2 rounded-full border border-white/25 px-5 text-[15px] font-semibold hover:border-mint hover:text-mint">
              <CalendarDays className="h-4 w-4" /> Book a call
            </a>
            <a href={cvUrl} target="_blank" rel="noopener noreferrer" className="press inline-flex h-12 items-center gap-2 rounded-full border border-white/25 px-5 text-[15px] font-semibold hover:border-mint hover:text-mint">
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>
        </div>
        <div style={stagger(4)} className="r rounded-[28px] bg-sheet p-6 sm:p-7 text-ink shadow-[0_30px_60px_-30px_rgb(0_0_0/0.5)]">
          <CopyRow label="Email" value={personalInfo.email} href={emailUrl} icon={<Mail className="h-4 w-4" />} />
          <CopyRow label="Phone" value={personalInfo.phone} href={phoneUrl} icon={<Phone className="h-4 w-4" />} />
          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4 text-[15px]">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-link hover:underline underline-offset-2">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-link hover:underline underline-offset-2">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <span className="text-ink-3">{personalInfo.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-forest-2 text-white/60">
      <div className="mx-auto flex max-w-[1080px] flex-wrap items-center justify-between gap-2 px-4 sm:px-6 py-6 text-[13px]">
        <p>© {new Date().getFullYear()} Abdul Haseeb. Designed and built in Karachi.</p>
        <a href="#home" className="hover:text-white">Back to top</a>
      </div>
    </footer>
  );
}
