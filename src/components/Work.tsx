import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import type { Project } from '../types';
import { shelves, shortName, subtitle } from '../lib/links';
import { AppIcon, Pill, SectionHead, stagger, useReveal } from './ui';

function projectLinks(p: Project) {
  const out: { label: string; href: string }[] = [];
  if (p.appStoreUrl) out.push({ label: 'App Store', href: p.appStoreUrl });
  if (p.playStoreUrl) out.push({ label: 'Google Play', href: p.playStoreUrl });
  if (p.apkUrl) out.push({ label: 'Android APK', href: p.apkUrl });
  if (p.webUrl) out.push({ label: 'Visit site', href: p.webUrl });
  if (p.demoUrl) out.push({ label: 'Demo', href: p.demoUrl });
  return out;
}

function Listing({ p, i }: { p: Project; key?: string; i: number }) {
  const [open, setOpen] = useState(false);
  const links = projectLinks(p);
  const id = `p-${shortName(p.title).replace(/\W+/g, '-').toLowerCase()}`;
  const caseStudy = [
    { label: 'The problem', text: p.problem },
    { label: 'What I built', text: p.solution },
    { label: 'Hard part', text: p.challenges },
    { label: 'Result', text: p.results },
  ].filter((x) => x.text);

  return (
    <li className="listing r border-b border-line" style={stagger(i)}>
      <div className="flex items-center gap-4 py-3.5">
        <AppIcon title={p.title} size={60} />
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={id}
          className="group min-w-0 flex-1 text-left"
        >
          <span className="block font-semibold text-[16px] leading-snug line-clamp-2">{shortName(p.title)}</span>
          <span className="block text-[13px] text-ink-2 truncate">{subtitle(p)}</span>
          <span className="mt-0.5 inline-flex items-center gap-0.5 text-[12px] text-ink-3 group-hover:text-ink-2">
            {p.platforms?.join(' · ')}
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </span>
        </button>
        {links[0] && (
          <div className="shrink-0">
            <Pill href={links[0].href}>{links[0].label}</Pill>
          </div>
        )}
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="details"
            id={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
        <div className="pb-5 pl-[76px] pr-1 text-[14px] leading-relaxed text-ink-2">
          <p className="text-ink">{p.description}</p>
          {caseStudy.length > 0 ? (
            <dl className="mt-3 space-y-2">
              {caseStudy.map((c) => (
                <div key={c.label}>
                  <dt className="font-semibold text-ink">{c.label}</dt>
                  <dd>{c.text}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <ul className="mt-3 list-disc space-y-1 pl-4 marker:text-ink-3">
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          )}
          <p className="mt-3 text-[13px] text-ink-3">Built with {p.technologies.join(', ')}.</p>
          {links.length > 1 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {links.slice(1).map((l) => (
                <Pill key={l.label} href={l.href}>
                  {l.label}
                </Pill>
              ))}
            </div>
          )}
        </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

function chunk<T>(arr: T[], n: number) {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n));
  return out;
}

function Shelf({ items }: { items: Project[] }) {
  const phone = useReveal<HTMLDivElement>();
  const wide = useReveal<HTMLUListElement>();
  return (
    <>
      {/* Phones: paged columns of three that scroll sideways, like a store shelf */}
      <div ref={phone} data-reveal className="shelf md:hidden -mx-4 px-4 flex gap-4 overflow-x-auto">
        {chunk(items, 3).map((col, c) => (
          <ul key={c} className="min-w-[86%] max-w-[86%] grid grid-cols-1 items-start">
            {col.map((p, r) => (
              <Listing key={p.title} p={p} i={c * 3 + r} />
            ))}
          </ul>
        ))}
      </div>
      <ul ref={wide} data-reveal className="hidden md:grid md:grid-cols-2 md:gap-x-10 items-start">
        {items.map((p, i) => (
          <Listing key={p.title} p={p} i={i} />
        ))}
      </ul>
    </>
  );
}

export default function Work() {
  return (
    <section id="work" aria-label="Work" className="mx-auto max-w-[1080px] px-4 sm:px-6 pt-10">
      {shelves.map((s) => (
        <div key={s.id} className="mb-10">
          <SectionHead
            title={s.title}
            note={s.note}
            action={<span className="text-[14px] text-ink-3 whitespace-nowrap">{s.items.length} projects</span>}
          />
          {/* Phones: paged columns of three that scroll sideways, like a store shelf */}
          <Shelf items={s.items} />
        </div>
      ))}
    </section>
  );
}
