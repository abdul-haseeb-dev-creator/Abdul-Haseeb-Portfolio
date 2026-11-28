import type { ReactNode } from 'react';
import { iconColor, monogram } from '../lib/links';

export function AppIcon({ title, size = 64 }: { title: string; size?: number }) {
  const text = monogram(title);
  return (
    <span
      aria-hidden="true"
      className="app-icon inline-flex shrink-0 items-center justify-center font-display font-bold text-white select-none"
      style={{
        width: size,
        height: size,
        backgroundColor: iconColor(title),
        fontSize: size * (text.length > 1 ? 0.36 : 0.46),
        letterSpacing: '-0.02em',
      }}
    >
      {text}
    </span>
  );
}

type PillProps = {
  href: string;
  children: ReactNode;
  tone?: 'action' | 'quiet' | 'outline';
  external?: boolean;
  icon?: ReactNode;
  size?: 'sm' | 'md';
  key?: string;
};

export function Pill({ href, children, tone = 'quiet', external = true, icon, size = 'sm' }: PillProps) {
  const tones = {
    action: 'bg-action text-white hover:bg-action-press',
    quiet: 'bg-ground text-link hover:bg-line',
    outline: 'bg-sheet text-ink border border-line hover:border-ink-3',
  };
  const sizes = {
    sm: 'h-8 px-3.5 text-[13px]',
    md: 'h-11 px-5 text-[15px]',
  };
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`press inline-flex items-center justify-center gap-1.5 rounded-full font-semibold whitespace-nowrap ${tones[tone]} ${sizes[size]}`}
    >
      {icon}
      {children}
    </a>
  );
}

export function SectionHead({ id, title, note, action }: { id?: string; title: string; note?: string; action?: ReactNode }) {
  return (
    <div className="flex items-end justify-between gap-4 border-t border-line pt-6 mb-5">
      <div>
        <h2 id={id} className="font-display text-[26px] sm:text-[30px] font-bold tracking-[-0.02em] leading-tight">
          {title}
        </h2>
        {note && <p className="mt-1 text-[15px] text-ink-2">{note}</p>}
      </div>
      {action}
    </div>
  );
}

export function WhatsAppGlyph({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={`${className} fill-current`} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.739-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.384 9.861-9.73.001-2.592-1.01-5.029-2.847-6.868C16.65 2.167 14.218 1.16 11.63 1.16c-5.442 0-9.863 4.384-9.866 9.73-.001 1.764.484 3.487 1.404 5.013l-.924 3.376 3.463-.923zm11.238-6.163c-.301-.151-1.784-.882-2.057-.981-.273-.099-.471-.148-.669.151-.197.299-.765.981-.938 1.18-.173.197-.347.222-.648.072-.3-.151-1.267-.467-2.414-1.493-.893-.797-1.496-1.782-1.671-2.083-.174-.3-.019-.462.13-.611.135-.134.3-.349.45-.523.15-.174.2-.299.3-.499.1-.2.05-.375-.025-.524-.075-.15-.669-1.613-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.197 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.784-.73 2.037-1.437.254-.707.254-1.313.178-1.437-.076-.124-.272-.198-.57-.349z" />
    </svg>
  );
}
