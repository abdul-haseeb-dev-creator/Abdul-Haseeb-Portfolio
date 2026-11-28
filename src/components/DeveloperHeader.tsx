import { Mail, Download, CalendarDays } from 'lucide-react';
import { personalInfo, projects } from '../data';
import { whatsappUrl, cvUrl, bookingUrl, emailUrl, shortName } from '../lib/links';
import { AppIcon, WhatsAppGlyph, stagger } from './ui';
import avatarImg from '../assets/images/abdulhaseeb.jpeg';

const isLive = (p: (typeof projects)[number]) => Number(!!(p.appStoreUrl || p.playStoreUrl || p.apkUrl));
const liveFirst = [...projects].sort((a, b) => isLive(b) - isLive(a));
const homeScreen = liveFirst.slice(0, 16);
const dock = liveFirst.slice(16, 20);

function Phone() {
  return (
    <div className="phone-wrap relative mx-auto w-[300px] sm:w-[330px]">
      <div className="phone-in">
        <div className="phone-tilt phone">
          <div className="phone-screen relative overflow-hidden px-4 pt-3 pb-4">
            <div className="flex items-center justify-between px-2 text-[12px] font-semibold text-white/90">
              <span>10:24</span>
              <span className="h-[22px] w-[86px] rounded-full bg-black" aria-hidden="true" />
              <span className="tracking-tight">5G</span>
            </div>

            <div className="home-icon mt-4 flex items-center gap-3 rounded-[20px] bg-white/15 p-3 text-white" style={stagger(0)}>
              <img src={avatarImg} alt="" className="h-11 w-11 rounded-[12px] object-cover object-top" />
              <div className="min-w-0">
                <p className="text-[13px] font-semibold leading-tight">Abdul Haseeb</p>
                <p className="text-[11px] leading-tight text-white/75">{projects.length} projects shipped · since 2017</p>
              </div>
            </div>

            <ul className="mt-4 grid grid-cols-4 gap-x-2 gap-y-3" aria-hidden="true">
              {homeScreen.map((p, i) => (
                <li key={p.title} className="home-icon flex min-w-0 flex-col items-center gap-1" style={stagger(i + 1)}>
                  <AppIcon title={p.title} size={52} />
                  <span className="w-full truncate text-center text-[10px] font-medium text-white/90">{shortName(p.title)}</span>
                </li>
              ))}
            </ul>

            <div className="home-icon mt-4 flex justify-around rounded-[26px] bg-white/20 px-2 py-2.5" style={stagger(18)} aria-hidden="true">
              {dock.map((p) => (
                <AppIcon key={p.title} title={p.title} size={50} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DeveloperHeader() {
  return (
    <section id="home" aria-labelledby="name" className="relative overflow-hidden bg-forest text-white">
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]" aria-hidden="true">
        <defs>
          <pattern id="contours" width="240" height="120" patternUnits="userSpaceOnUse">
            <path d="M0 30 Q60 0 120 30 T240 30 M0 90 Q60 60 120 90 T240 90" fill="none" stroke="#b9ebd3" strokeWidth="1.2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#contours)" />
      </svg>

      <div className="relative mx-auto grid grid-cols-1 max-w-[1080px] items-center gap-12 px-4 sm:px-6 pt-10 pb-14 sm:pt-14 sm:pb-20 lg:grid-cols-[1.45fr_1fr] lg:gap-8">
        <div className="min-w-0">
          <div className="rise-in flex items-center gap-3" style={stagger(0)}>
            <img
              src={avatarImg}
              alt="Abdul Haseeb"
              className="portrait-in app-icon h-14 w-14 object-cover object-top ring-2 ring-mint/40"
            />
            <p className="text-[14px] leading-snug text-mint">
              Karachi, GMT+5
              <br />
              <span className="text-white/70">Open to senior roles and freelance work</span>
            </p>
          </div>

          <h1
            id="name"
            aria-label={personalInfo.name}
            className="mt-7 font-display text-[64px] sm:text-[92px] lg:text-[104px] font-bold leading-[0.92] tracking-[-0.045em]"
          >
            {personalInfo.name.split(' ').map((w, i) => (
              <span key={w} aria-hidden="true" className="block">
                <span className="mask-word">
                  <span style={{ '--w': i } as Record<string, number>}>{w}</span>
                </span>
              </span>
            ))}
          </h1>

          <p style={stagger(1)} className="rise-in mt-6 font-display text-[22px] sm:text-[26px] font-semibold tracking-[-0.015em] text-mint">
            I ship the app, the backend and the admin panel.
          </p>
          <p style={stagger(2)} className="rise-in mt-3 max-w-[54ch] text-[16px] leading-relaxed text-white/80">
            React Native and full-stack developer. Since 2017 I have built for grocery stores, delivery fleets, property
            managers and online shops in Pakistan, the UAE, the Netherlands and the US, from the first screen to the App
            Store and Google Play release.
          </p>

          <div style={stagger(3)} className="rise-in mt-8 flex flex-wrap items-center gap-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="press inline-flex h-12 items-center gap-2 rounded-full bg-white px-5 text-[15px] font-semibold text-forest hover:bg-mint"
            >
              <WhatsAppGlyph className="h-[18px] w-[18px] text-action" />
              Message on WhatsApp
            </a>
            {[
              { href: emailUrl, label: 'Email', icon: <Mail className="h-4 w-4" />, ext: false },
              { href: bookingUrl, label: 'Book a call', icon: <CalendarDays className="h-4 w-4" />, ext: true },
              { href: cvUrl, label: 'CV', icon: <Download className="h-4 w-4" />, ext: true },
            ].map((b) => (
              <a
                key={b.label}
                href={b.href}
                {...(b.ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="press inline-flex h-12 items-center gap-2 rounded-full border border-white/25 px-4 text-[15px] font-semibold text-white hover:border-mint hover:text-mint"
              >
                {b.icon}
                {b.label}
              </a>
            ))}
          </div>
        </div>

        <Phone />
      </div>
    </section>
  );
}
