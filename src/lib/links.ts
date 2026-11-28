import { personalInfo, projects } from '../data';
import type { Project } from '../types';

export const whatsappUrl =
  "https://api.whatsapp.com/send?phone=923158494192&text=Hi%20Abdul%20Haseeb!%20%F0%9F%91%8B%0A%0AI%20came%20across%20your%20portfolio%20and%20was%20impressed%20by%20your%20work.%20I'm%20looking%20for%20a%20Full%20Stack%20Developer%20for%20a%20project%20and%20would%20love%20to%20discuss%20it%20with%20you.%20If%20you're%20available,%20please%20let%20me%20know.%0A%0ALooking%20forward%20to%20connecting!";
export const cvUrl = 'https://drive.google.com/file/d/1D1C8TV64u92BUL7WQBf4hKQjUjUu_sHY/view?usp=sharing';
export const bookingUrl = 'https://calendly.com/abdulhaseeb158441';
export const emailUrl = `mailto:${personalInfo.email}`;
export const phoneUrl = `tel:${personalInfo.phone}`;

/** "Rizq Mart Grocery Platform" stays; "Motboy Admin Panel" stays; "Four Apple – Real Estate…" -> "Four Apple" */
export function shortName(title: string) {
  return title.split(/\s+[–—-]\s+/)[0].trim();
}

export function subtitle(p: Project) {
  const rest = p.title.split(/\s+[–—-]\s+/)[1];
  return rest ? rest.trim() : p.category;
}

const ICON_COLORS = ['#d9542b', '#2a79a8', '#e09a2d', '#2f8a57', '#6f4bb5', '#c9405f', '#203a5c', '#118f8c'];

/** Step through the palette by project order (3 is coprime with 8), so neighbours never share a colour. */
export function iconColor(title: string) {
  const i = Math.max(0, projects.findIndex((p) => p.title === title));
  return ICON_COLORS[(i * 3) % ICON_COLORS.length];
}

export function monogram(title: string) {
  const name = shortName(title).replace(/\.(nl|com)$/i, '');
  const words = name.split(/[\s.]+/).filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 2);
  return (words[0][0] + words[1][0]).toUpperCase();
}

const isMobile = (p: Project) => !!p.platforms?.some((x) => x === 'iOS' || x === 'Android');
const inStores = (p: Project) => !!(p.appStoreUrl || p.playStoreUrl || p.apkUrl);

export const shelves = [
  {
    id: 'live',
    title: 'Live in the stores',
    note: 'Apps you can install today.',
    items: projects.filter(inStores),
  },
  {
    id: 'mobile',
    title: 'Mobile apps and their back offices',
    note: 'React Native and Flutter apps, usually with a Laravel CMS or admin panel behind them.',
    items: projects.filter((p) => !inStores(p) && isMobile(p)),
  },
  {
    id: 'web',
    title: 'Websites and admin panels',
    note: 'Company sites, stores and dashboards, mostly for clients in the UAE and Europe.',
    items: projects.filter((p) => !inStores(p) && !isMobile(p)),
  },
];
