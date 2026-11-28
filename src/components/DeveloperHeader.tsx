import { motion } from 'motion/react';
import { Mail, Download, CalendarDays } from 'lucide-react';
import { personalInfo } from '../data';
import { whatsappUrl, cvUrl, bookingUrl, emailUrl } from '../lib/links';
import { Pill, WhatsAppGlyph } from './ui';
import avatarImg from '../assets/images/abdulhaseeb.jpeg';

const ease = [0.22, 1, 0.36, 1] as const;
const rise = (i: number) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.38, ease, delay: 0.04 * i },
});

export default function DeveloperHeader() {
  return (
    <section id="home" aria-labelledby="name" className="bg-sheet border-b border-line">
      <div className="mx-auto max-w-[1080px] px-4 sm:px-6 pt-8 sm:pt-10 pb-8">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 sm:items-start">
          <motion.img
            {...rise(0)}
            src={avatarImg}
            alt="Abdul Haseeb"
            className="app-icon h-32 w-32 sm:h-44 sm:w-44 shrink-0 object-cover object-top bg-ground"
          />
          <div className="min-w-0 flex-1">
            <motion.h1
              {...rise(1)}
              id="name"
              className="font-display text-[40px] sm:text-[56px] font-bold leading-[1.02] tracking-[-0.03em]"
            >
              {personalInfo.name}
            </motion.h1>
            <motion.p {...rise(2)} className="mt-2 text-[17px] sm:text-[19px] font-medium text-ink-2">
              React Native and full-stack developer
            </motion.p>
            <motion.p {...rise(2)} className="mt-1 text-[14px] text-ink-3">
              Karachi, GMT+5 · building since 2017 · iOS, Android and the web
            </motion.p>
            <motion.p {...rise(3)} className="mt-4 max-w-[60ch] text-[16px] leading-relaxed text-ink">
              I build the mobile app, the Laravel backend behind it, and the admin panel your team logs into every
              morning. Since 2017 that has meant grocery stores, delivery fleets, property managers and online shops
              in Pakistan, the UAE, the Netherlands and the US. Most projects are end to end: I design the screens,
              write the app, build the API and CMS, and ship the release to the App Store and Google Play.
            </motion.p>
            <motion.div {...rise(4)} className="mt-6 flex flex-wrap items-center gap-2.5">
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
            </motion.div>
            <motion.p {...rise(5)} className="mt-4 text-[13px] text-ink-3">
              Open to senior roles and freelance projects.
            </motion.p>
          </div>
        </div>

      </div>
    </section>
  );
}
