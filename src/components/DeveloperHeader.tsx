import { Mail, Download, CalendarDays } from 'lucide-react';
import { personalInfo } from '../data';
import { whatsappUrl, cvUrl, bookingUrl, emailUrl } from '../lib/links';
import { Pill, WhatsAppGlyph, stagger } from './ui';
import avatarImg from '../assets/images/abdulhaseeb.jpeg';

export default function DeveloperHeader() {
  return (
    <section id="home" aria-labelledby="name" className="bg-sheet border-b border-line">
      <div className="mx-auto max-w-[1080px] px-4 sm:px-6 pt-8 sm:pt-10 pb-8">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 sm:items-start">
          <img
            src={avatarImg}
            alt="Abdul Haseeb"
            className="portrait-in app-icon h-32 w-32 sm:h-44 sm:w-44 shrink-0 object-cover object-top bg-ground"
          />
          <div className="min-w-0 flex-1">
            <h1
              id="name"
              aria-label={personalInfo.name}
              className="font-display text-[40px] sm:text-[56px] font-bold leading-[1.02] tracking-[-0.03em]"
            >
              {personalInfo.name.split(' ').map((w, i) => (
                <span key={w} aria-hidden="true">
                  <span className="mask-word">
                    <span style={{ '--w': i } as Record<string, number>}>{w}</span>
                  </span>
                  {i === 0 ? ' ' : ''}
                </span>
              ))}
            </h1>
            <p style={stagger(0)} className="rise-in mt-2 text-[17px] sm:text-[19px] font-medium text-ink-2">
              React Native and full-stack developer
            </p>
            <p style={stagger(0)} className="rise-in mt-1 text-[14px] text-ink-3">
              Karachi, GMT+5 · building since 2017 · iOS, Android and the web
            </p>
            <p style={stagger(1)} className="rise-in mt-4 max-w-[60ch] text-[16px] leading-relaxed text-ink">
              I build the mobile app, the Laravel backend behind it, and the admin panel your team logs into every
              morning. Since 2017 that has meant grocery stores, delivery fleets, property managers and online shops
              in Pakistan, the UAE, the Netherlands and the US. Most projects are end to end: I design the screens,
              write the app, build the API and CMS, and ship the release to the App Store and Google Play.
            </p>
            <div style={stagger(2)} className="rise-in mt-6 flex flex-wrap items-center gap-2.5">
              <Pill href={whatsappUrl} tone="action" size="md" icon={<WhatsAppGlyph />}>
                Message on WhatsApp
              </Pill>
              <Pill href={emailUrl} tone="outline" size="md" external={false} icon={<Mail className="h-4 w-4" />}>
                Email
              </Pill>
              <Pill href={bookingUrl} tone="outline" size="md" icon={<CalendarDays className="h-4 w-4" />}>
                Book a call
              </Pill>
              <Pill href={cvUrl} tone="outline" size="md" icon={<Download className="h-4 w-4" />}>
                CV
              </Pill>
            </div>
            <p style={stagger(3)} className="rise-in mt-4 text-[13px] text-ink-3">
              Open to senior roles and freelance projects.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
