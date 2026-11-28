import { useState } from 'react';
import { experiences, education, skillCategories } from '../data';
import { SectionHead } from './ui';

function Job({ e }: { e: (typeof experiences)[number]; key?: string }) {
  const [all, setAll] = useState(false);
  const shown = all ? e.responsibilities : e.responsibilities.slice(0, 3);
  return (
    <li className="grid sm:grid-cols-[200px_1fr] gap-x-8 gap-y-1 border-b border-line py-5 last:border-b-0">
      <div>
        <p className="text-[14px] font-medium text-ink">{e.duration.replace('Present', 'now')}</p>
        <p className="text-[13px] text-ink-3">{e.location}</p>
      </div>
      <div>
        <h3 className="font-display text-[20px] font-bold tracking-[-0.01em]">{e.position}</h3>
        <p className="text-[15px] text-ink-2">{e.company}</p>
        <ul className="mt-3 max-w-[68ch] list-disc space-y-1.5 pl-4 text-[15px] leading-relaxed text-ink-2 marker:text-ink-3">
          {shown.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
        {e.responsibilities.length > 3 && (
          <button
            type="button"
            onClick={() => setAll((a) => !a)}
            className="mt-2 text-[15px] font-medium text-link hover:underline underline-offset-2"
          >
            {all ? 'less' : `${e.responsibilities.length - 3} more`}
          </button>
        )}
      </div>
    </li>
  );
}

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-h" className="mx-auto max-w-[1080px] px-4 sm:px-6 pb-10">
      <SectionHead id="experience-h" title="Version history" note="Where I have worked, newest first." />
      <ol className="rounded-2xl bg-sheet px-5 sm:px-7 border border-line">
        {experiences.map((e) => (
          <Job key={e.company} e={e} />
        ))}
      </ol>
    </section>
  );
}

export function Information() {
  return (
    <section id="skills" aria-labelledby="info-h" className="mx-auto max-w-[1080px] px-4 sm:px-6 pb-10">
      <SectionHead id="info-h" title="Information" note="The tools I reach for, and where I studied." />
      <dl className="rounded-2xl bg-sheet border border-line px-5 sm:px-7">
        {skillCategories.map((c) => (
          <div key={c.title} className="grid sm:grid-cols-[200px_1fr] gap-x-8 gap-y-0.5 border-b border-line py-3.5">
            <dt className="text-[14px] text-ink-3">{c.title}</dt>
            <dd className="text-[15px] text-ink leading-relaxed">{c.skills.join(', ')}</dd>
          </div>
        ))}
        {education.map((ed) => (
          <div key={ed.degree} className="grid sm:grid-cols-[200px_1fr] gap-x-8 gap-y-0.5 border-b border-line py-3.5 last:border-b-0">
            <dt className="text-[14px] text-ink-3">Education</dt>
            <dd className="text-[15px] text-ink leading-relaxed">
              {ed.degree}, {ed.school}, {ed.duration.replace('Present', 'now')}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
