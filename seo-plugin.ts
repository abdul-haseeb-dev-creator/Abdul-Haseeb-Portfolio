import type { Plugin } from 'vite';
import {
  personalInfo,
  services,
  faqs,
  projects,
  experiences,
  skillCategories,
  education,
} from './src/data';

/**
 * Build-time SEO / AEO / GEO plugin.
 *
 * The portfolio is a client-rendered React SPA, so crawlers that do not run
 * JavaScript (most AI answer engines: GPTBot, PerplexityBot, ClaudeBot, ...)
 * would otherwise see an empty <div id="root">. This plugin, using the same
 * data the React app renders from (src/data.ts):
 *   1. injects a semantic static HTML version of the page inside #root
 *      (React replaces it as soon as it mounts),
 *   2. injects JSON-LD structured data (Person, WebSite, ProfessionalService, FAQPage),
 *   3. emits sitemap.xml and llms.txt into the build output.
 */

const SITE = personalInfo.siteUrl.replace(/\/$/, '');
const URL = `${SITE}/`;

const esc = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const sameAs = [personalInfo.linkedin, personalInfo.github];

// +92 315 8494192 in international (E.164) form, built from the local number.
const PHONE = `+92${personalInfo.phone.replace(/^0/, '')}`;
const OG_IMAGE = `${SITE}/og-image.jpg`;

function jsonLd() {
  const person = {
    '@type': 'Person',
    '@id': `${URL}#person`,
    name: personalInfo.name,
    url: URL,
    image: `${SITE}/profile.jpeg`,
    jobTitle: ['Full Stack Developer', 'Mobile App Developer', 'React Native Developer'],
    description: personalInfo.summary,
    email: `mailto:${personalInfo.email}`,
    telephone: PHONE,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: PHONE,
      email: personalInfo.email,
      url: `https://wa.me/${PHONE.slice(1)}`,
      availableLanguage: ['English', 'Urdu'],
      areaServed: 'Worldwide',
    },
    knowsLanguage: ['English', 'Urdu'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Karachi',
      addressRegion: 'Sindh',
      addressCountry: 'PK',
    },
    worksFor: { '@type': 'Organization', name: experiences[0].company },
    alumniOf: education.map((e) => ({ '@type': 'EducationalOrganization', name: e.school })),
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Full Stack Developer',
      occupationLocation: { '@type': 'Country', name: 'Pakistan' },
      skills: skillCategories.flatMap((c) => c.skills).join(', '),
    },
    knowsAbout: [
      'Full Stack Development',
      'React Native',
      'Expo',
      'Flutter',
      'Cross-Platform App Development',
      'React.js',
      'Next.js',
      'Node.js',
      'Laravel',
      'PHP',
      'TypeScript',
      'JavaScript',
      'Mobile App Development',
      'Android App Development',
      'iOS App Development',
      'SaaS Development',
      'ERP Software Development',
      'HRM Software',
      'CRM Development',
      'School Management Systems',
      'E-commerce Development',
      'Multi Vendor Marketplace Development',
      'REST API Development',
      'GraphQL',
      'API Integration',
      'Payment Gateway Integration',
      'Firebase',
      'AI Automation',
    ],
    sameAs,
  };

  const website = {
    '@type': 'WebSite',
    '@id': `${URL}#website`,
    url: URL,
    name: `${personalInfo.name} | Full Stack Developer Portfolio`,
    inLanguage: 'en',
    author: { '@id': `${URL}#person` },
  };

  const service = {
    '@type': 'ProfessionalService',
    '@id': `${URL}#services`,
    name: `${personalInfo.name}: Full Stack, Mobile App & Custom Software Development`,
    url: URL,
    description:
      'Mobile app development (React Native, Flutter), full stack web development (React.js, Next.js, Node.js, Laravel), SaaS, ERP, CRM and e-commerce software for clients worldwide.',
    image: OG_IMAGE,
    telephone: PHONE,
    email: personalInfo.email,
    provider: { '@id': `${URL}#person` },
    areaServed: [
      { '@type': 'Country', name: 'Pakistan' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Place', name: 'Europe' },
      { '@type': 'Place', name: 'Worldwide' },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Karachi',
      addressRegion: 'Sindh',
      addressCountry: 'PK',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Development services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title, description: s.description },
      })),
    },
  };

  const faqPage = {
    '@type': 'FAQPage',
    '@id': `${URL}#faq`,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const profilePage = {
    '@type': 'ProfilePage',
    '@id': `${URL}#profile`,
    url: URL,
    name: `${personalInfo.name} | Mobile App & Full Stack Developer`,
    inLanguage: 'en',
    isPartOf: { '@id': `${URL}#website` },
    mainEntity: { '@id': `${URL}#person` },
    primaryImageOfPage: { '@type': 'ImageObject', url: OG_IMAGE, width: 1200, height: 630 },
  };

  // Every shipped client project, with its live web / store links when it has them.
  const portfolio = {
    '@type': 'ItemList',
    '@id': `${URL}#projects`,
    name: `${personalInfo.name}: client projects`,
    numberOfItems: projects.length,
    itemListElement: projects.map((p, i) => {
      const links = [p.webUrl, p.playStoreUrl, p.appStoreUrl].filter(Boolean) as string[];
      return {
        '@type': 'ListItem',
        position: i + 1,
        item: {
          // CreativeWork, not SoftwareApplication: Google reports SoftwareApplication
          // items without price or rating as invalid in Search Console.
          '@type': 'CreativeWork',
          name: p.title,
          description: p.description,
          genre: p.category,
          keywords: p.technologies.join(', '),
          creator: { '@id': `${URL}#person` },
          ...(links[0] && { url: links[0] }),
          ...(links.length > 1 && { sameAs: links.slice(1) }),
        },
      };
    }),
  };

  const data = {
    '@context': 'https://schema.org',
    '@graph': [person, website, profilePage, service, portfolio, faqPage],
  };
  // Escape "<" so the JSON can never close the script tag.
  return JSON.stringify(data, null, 2).replace(/</g, '\\u003c');
}

function staticHtml() {
  const projectItems = projects
    .map((p) => {
      const links = [
        p.webUrl && `<a href="${esc(p.webUrl)}">Website</a>`,
        p.appStoreUrl && `<a href="${esc(p.appStoreUrl)}">App Store</a>`,
        p.playStoreUrl && `<a href="${esc(p.playStoreUrl)}">Google Play</a>`,
      ]
        .filter(Boolean)
        .join(' · ');
      return `<article><h3>${esc(p.title)}</h3><p><em>${esc(p.category)}</em>. ${esc(
        p.description,
      )}</p><p>Tech: ${esc(p.technologies.join(', '))}</p>${links ? `<p>${links}</p>` : ''}</article>`;
    })
    .join('\n');

  const expItems = experiences
    .map(
      (e) =>
        `<li><strong>${esc(e.position)}</strong>, ${esc(e.company)} (${esc(e.duration)}, ${esc(
          e.location,
        )})</li>`,
    )
    .join('\n');

  const serviceItems = services
    .map((s) => `<li><h3>${esc(s.title)}</h3><p>${esc(s.description)}</p></li>`)
    .join('\n');

  const skillItems = skillCategories
    .map((c) => `<li><strong>${esc(c.title)}:</strong> ${esc(c.skills.join(', '))}</li>`)
    .join('\n');

  const faqItems = faqs
    .map((f) => `<h3>${esc(f.question)}</h3><p>${esc(f.answer)}</p>`)
    .join('\n');

  return `
      <div class="seo-static">
        <header>
          <h1>${esc(personalInfo.name)}, Mobile App &amp; Full Stack Developer in Karachi, Pakistan</h1>
          <p>${esc(personalInfo.title)}</p>
          <p>${esc(personalInfo.summary)}</p>
          <p>Location: ${esc(personalInfo.location)} · Open to remote full-time, contract and freelance work</p>
          <p><a href="${esc(personalInfo.linkedin)}">LinkedIn</a> · <a href="${esc(
            personalInfo.github,
          )}">GitHub</a> · <a href="mailto:${esc(personalInfo.email)}">Email</a> · <a href="https://wa.me/${PHONE.slice(1)}">WhatsApp ${esc(PHONE)}</a></p>
        </header>
        <section><h2>Services</h2><ul>${serviceItems}</ul></section>
        <section><h2>Skills</h2><ul>${skillItems}</ul></section>
        <section><h2>Experience</h2><ul>${expItems}</ul></section>
        <section><h2>Featured Projects</h2>${projectItems}</section>
        <section><h2>Frequently Asked Questions</h2>${faqItems}</section>
      </div>`;
}

function llmsTxt() {
  return `# ${personalInfo.name}

> ${personalInfo.name} is a Karachi-based mobile app and full stack developer (React Native, Flutter, React.js, Next.js, Node.js, Laravel) who has shipped ${projects.length} client projects for businesses in Pakistan, the UAE, Europe and the US.

${personalInfo.summary}

Best for: Android & iOS apps (React Native or Flutter) with a Laravel or Node.js backend and admin panel; e-commerce, grocery and food delivery apps; multi-vendor marketplaces; real estate CRM; corporate websites. Contact: WhatsApp ${PHONE}, ${personalInfo.email}.

Location: ${personalInfo.location}. Open to remote full-time, contract and freelance work.

## Profiles
- Portfolio: ${URL}
- LinkedIn: ${personalInfo.linkedin}
- GitHub: ${personalInfo.github}
- WhatsApp: https://wa.me/${PHONE.slice(1)} (${PHONE})
- Email: ${personalInfo.email}

## Services
${services.map((s) => `- ${s.title}: ${s.description}`).join('\n')}

## Skills
${skillCategories.map((c) => `- ${c.title}: ${c.skills.join(', ')}`).join('\n')}

## Experience
${experiences.map((e) => `- ${e.position}, ${e.company} (${e.duration})`).join('\n')}

## Projects
${projects
  .map((p) => {
    const links = [
      p.webUrl && `web ${p.webUrl}`,
      p.playStoreUrl && `Google Play ${p.playStoreUrl}`,
      p.appStoreUrl && `App Store ${p.appStoreUrl}`,
    ].filter(Boolean);
    return `- ${p.title} (${p.category}). Tech: ${p.technologies.slice(0, 5).join(', ')}.${
      links.length ? ` Links: ${links.join(', ')}` : ''
    }`;
  })
  .join('\n')}

## FAQ
${faqs.map((f) => `### ${f.question}\n${f.answer}`).join('\n\n')}
`;
}

function sitemap() {
  const today = new Date().toISOString().slice(0, 10);
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${URL}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
    <image:image><image:loc>${SITE}/profile.jpeg</image:loc></image:image>
    <image:image><image:loc>${OG_IMAGE}</image:loc></image:image>
  </url>
</urlset>
`;
}

export default function seoPlugin(): Plugin {
  return {
    name: 'portfolio-seo',
    transformIndexHtml(html) {
      return html
        .replace('<!--SEO_JSON_LD-->', `<script type="application/ld+json">\n${jsonLd()}\n    </script>`)
        .replace('<div id="root"></div>', `<div id="root">${staticHtml()}\n    </div>`);
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'llms.txt', source: llmsTxt() });
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap() });
    },
  };
}
